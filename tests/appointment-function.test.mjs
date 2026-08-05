import test from "node:test";
import assert from "node:assert/strict";
import { onRequest, onRequestPost } from "../functions/api/appointment.js";

const originalFetch = globalThis.fetch;

test.afterEach(() => {
  globalThis.fetch = originalFetch;
});

const validSubmission = (overrides = {}) => ({
  name: "Taylor Patient",
  email: "taylor@example.com",
  phone: "(816) 555-0100",
  patientStatus: "New patient",
  preferredDays: ["Monday", "Wednesday"],
  preferredTime: "Morning",
  appointmentType: "Exam or cleaning",
  message: "A first visit.",
  website: "",
  consent: true,
  startedAt: Date.now() - 3_000,
  ...overrides,
});

const makeRequest = (body, origin = "https://preview.pages.dev") =>
  new Request("https://preview.pages.dev/api/appointment", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(body),
  });

const env = {
  PUBLIC_APPOINTMENT_FORM_ENABLED: "true",
  RESEND_API_KEY: "re_test_key",
  APPOINTMENT_TO_EMAIL: "office@example.com",
  APPOINTMENT_FROM_EMAIL: "Eastland Website <appointments@example.com>",
};

test("sends a validated appointment request to Resend", async () => {
  let outbound;
  globalThis.fetch = async (url, init) => {
    outbound = { url, init };
    return Response.json({ id: "email_123" });
  };

  const response = await onRequestPost({ request: makeRequest(validSubmission()), env });
  const result = await response.json();
  const email = JSON.parse(outbound.init.body);

  assert.equal(response.status, 200);
  assert.equal(result.ok, true);
  assert.equal(outbound.url, "https://api.resend.com/emails");
  assert.equal(outbound.init.headers.Authorization, "Bearer re_test_key");
  assert.equal(email.to[0], "office@example.com");
  assert.equal(email.reply_to, "taylor@example.com");
  assert.match(email.text, /Monday, Wednesday/);
});

test("rejects invalid fields before contacting Resend", async () => {
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json({ id: "unexpected" });
  };

  const response = await onRequestPost({ request: makeRequest(validSubmission({ email: "not-an-email" })), env });
  const result = await response.json();

  assert.equal(response.status, 400);
  assert.equal(result.ok, false);
  assert.equal(called, false);
});

test("silently accepts honeypot submissions without sending email", async () => {
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json({ id: "unexpected" });
  };

  const response = await onRequestPost({ request: makeRequest(validSubmission({ website: "spam.example" })), env });
  const result = await response.json();

  assert.equal(response.status, 200);
  assert.equal(result.ok, true);
  assert.equal(called, false);
});

test("reports missing private configuration safely", async () => {
  const response = await onRequestPost({
    request: makeRequest(validSubmission()),
    env: { PUBLIC_APPOINTMENT_FORM_ENABLED: "true" },
  });
  const result = await response.json();

  assert.equal(response.status, 503);
  assert.match(result.message, /not configured/i);
});

test("keeps the endpoint dormant while the feature flag is disabled", async () => {
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json({ id: "unexpected" });
  };

  const response = await onRequestPost({
    request: makeRequest(validSubmission()),
    env: { ...env, PUBLIC_APPOINTMENT_FORM_ENABLED: "false" },
  });
  const result = await response.json();

  assert.equal(response.status, 503);
  assert.match(result.message, /not currently available/i);
  assert.equal(called, false);
});

test("rejects cross-origin submissions", async () => {
  const response = await onRequestPost({
    request: makeRequest(validSubmission(), "https://untrusted.example"),
    env,
  });

  assert.equal(response.status, 403);
});

test("rejects non-POST requests", async () => {
  const response = onRequest();
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "POST");
});
