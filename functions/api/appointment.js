const allowedPatientStatuses = new Set(["New patient", "Current patient"]);
const allowedDays = new Set(["Any day", "Monday", "Tuesday", "Wednesday", "Thursday"]);
const allowedTimes = new Set(["Any time", "Morning", "Afternoon"]);
const allowedAppointmentTypes = new Set([
  "Exam or cleaning",
  "Dental concern or discomfort",
  "Cosmetic consultation",
  "Restorative consultation",
  "Child’s dental visit",
  "Other",
]);

const jsonResponse = (body, status = 200, extraHeaders = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });

const cleanText = (value, maxLength) =>
  typeof value === "string" ? value.trim().replace(/\0/g, "").slice(0, maxLength) : "";

const cleanHeaderText = (value, maxLength) => cleanText(value, maxLength).replace(/[\r\n]+/g, " ");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const readSubmission = async (request) => {
  const contentType = request.headers.get("Content-Type") ?? "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (contentType.includes("form-data") || contentType.includes("application/x-www-form-urlencoded")) {
    const form = await request.formData();
    const submission = Object.fromEntries(form.entries());
    submission.preferredDays = form.getAll("preferredDays");
    return submission;
  }

  throw new Error("Unsupported content type");
};

const validateSubmission = (raw) => {
  const name = cleanHeaderText(raw.name, 100);
  const email = cleanHeaderText(raw.email, 160).toLowerCase();
  const phone = cleanHeaderText(raw.phone, 30);
  const patientStatus = cleanText(raw.patientStatus, 30);
  const preferredTime = cleanText(raw.preferredTime, 30);
  const appointmentType = cleanText(raw.appointmentType, 60);
  const message = cleanText(raw.message, 500);
  const preferredDays = (Array.isArray(raw.preferredDays) ? raw.preferredDays : [raw.preferredDays])
    .map((day) => cleanText(day, 20))
    .filter(Boolean);
  const consent = raw.consent === true || raw.consent === "true" || raw.consent === "on";

  if (name.length < 2) return { error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Please enter a valid email address." };
  if (phone.length < 7 || !/^[0-9+().\-\s]+$/.test(phone)) return { error: "Please enter a valid phone number." };
  if (!allowedPatientStatuses.has(patientStatus)) return { error: "Please select whether you are a new or current patient." };
  if (preferredDays.length === 0 || preferredDays.some((day) => !allowedDays.has(day))) return { error: "Please select at least one preferred day." };
  if (!allowedTimes.has(preferredTime)) return { error: "Please select a preferred time." };
  if (!allowedAppointmentTypes.has(appointmentType)) return { error: "Please select an appointment type." };
  if (!consent) return { error: "Please acknowledge that the appointment must be confirmed by the office." };

  return {
    value: { name, email, phone, patientStatus, preferredDays, preferredTime, appointmentType, message },
  };
};

export async function onRequestPost({ request, env }) {
  const formEnabled = cleanText(env.PUBLIC_APPOINTMENT_FORM_ENABLED, 10).toLowerCase() === "true";
  if (!formEnabled) {
    return jsonResponse(
      { ok: false, message: "Online appointment requests are not currently available. Please contact the office instead." },
      503,
    );
  }

  const contentLength = Number(request.headers.get("Content-Length") ?? 0);
  if (contentLength > 20_000) return jsonResponse({ ok: false, message: "This request is too large." }, 413);

  const origin = request.headers.get("Origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return jsonResponse({ ok: false, message: "This request could not be accepted." }, 403);
      }
    } catch {
      return jsonResponse({ ok: false, message: "This request could not be accepted." }, 403);
    }
  }

  let raw;
  try {
    raw = await readSubmission(request);
  } catch {
    return jsonResponse({ ok: false, message: "Please check the form and try again." }, 400);
  }

  if (cleanText(raw.website, 200)) {
    return jsonResponse({ ok: true, message: "Your request was received." });
  }

  const startedAt = Number(raw.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 1_500 || elapsed > 7_200_000) {
    return jsonResponse({ ok: false, message: "Please refresh the page and try again." }, 400);
  }

  const validation = validateSubmission(raw);
  if (validation.error) return jsonResponse({ ok: false, message: validation.error }, 400);

  const apiKey = cleanText(env.RESEND_API_KEY, 300);
  const toEmail = cleanHeaderText(env.APPOINTMENT_TO_EMAIL, 200);
  const fromEmail = cleanHeaderText(env.APPOINTMENT_FROM_EMAIL, 240);

  if (!apiKey || !toEmail || !fromEmail) {
    return jsonResponse(
      { ok: false, message: "Online appointment requests are not configured yet. Please call the office instead." },
      503,
    );
  }

  const submission = validation.value;
  const dayList = submission.preferredDays.join(", ");
  const safe = Object.fromEntries(Object.entries(submission).map(([key, value]) => [key, escapeHtml(String(value))]));
  const safeDays = escapeHtml(dayList);
  const safeMessage = safe.message || "No optional note provided.";

  const emailHtml = `
    <div style="font-family:Arial,sans-serif;color:#243447;line-height:1.55;max-width:680px;margin:0 auto">
      <div style="background:#023a66;color:#fff;padding:24px 28px;border-radius:18px 18px 0 0">
        <p style="margin:0;font-size:12px;letter-spacing:.16em;text-transform:uppercase;opacity:.8">Eastland Family Dental website</p>
        <h1 style="margin:8px 0 0;font-size:26px">New appointment request</h1>
      </div>
      <div style="border:1px solid #dce6eb;border-top:0;padding:26px 28px;border-radius:0 0 18px 18px">
        <table role="presentation" style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Name</td><td style="padding:8px 0">${safe.name}</td></tr>
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Email</td><td style="padding:8px 0">${safe.email}</td></tr>
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Phone</td><td style="padding:8px 0">${safe.phone}</td></tr>
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Patient</td><td style="padding:8px 0">${safe.patientStatus}</td></tr>
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Preferred day(s)</td><td style="padding:8px 0">${safeDays}</td></tr>
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Preferred time</td><td style="padding:8px 0">${safe.preferredTime}</td></tr>
          <tr><td style="padding:8px 12px 8px 0;font-weight:bold;vertical-align:top">Appointment type</td><td style="padding:8px 0">${safe.appointmentType}</td></tr>
        </table>
        <div style="margin-top:18px;padding-top:18px;border-top:1px solid #dce6eb">
          <p style="margin:0 0 6px;font-weight:bold">Optional note</p>
          <p style="margin:0;white-space:pre-wrap">${safeMessage}</p>
        </div>
        <p style="margin:24px 0 0;color:#64748b;font-size:13px">This is an appointment request, not a confirmed appointment. Please follow up with the patient directly.</p>
      </div>
    </div>`;

  const emailText = [
    "New appointment request from the Eastland Family Dental website",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Patient: ${submission.patientStatus}`,
    `Preferred day(s): ${dayList}`,
    `Preferred time: ${submission.preferredTime}`,
    `Appointment type: ${submission.appointmentType}`,
    `Optional note: ${submission.message || "No optional note provided."}`,
    "",
    "This is an appointment request, not a confirmed appointment.",
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `appointment-${crypto.randomUUID()}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: submission.email,
        subject: "New appointment request from the website",
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend appointment email failed", resendResponse.status);
      return jsonResponse(
        { ok: false, message: "We could not send your request right now. Please call the office instead." },
        502,
      );
    }

    return jsonResponse({ ok: true, message: "Your request was sent. The office will follow up to confirm your appointment." });
  } catch (error) {
    console.error("Appointment email request failed", error instanceof Error ? error.message : "Unknown error");
    return jsonResponse(
      { ok: false, message: "We could not send your request right now. Please call the office instead." },
      502,
    );
  }
}

export function onRequest() {
  return jsonResponse({ ok: false, message: "Method not allowed." }, 405, { Allow: "POST" });
}
