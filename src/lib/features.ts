const appointmentFlag = String(import.meta.env.PUBLIC_APPOINTMENT_FORM_ENABLED ?? "false").toLowerCase();

export const appointmentFormEnabled = appointmentFlag === "true";
export const appointmentHref = appointmentFormEnabled ? "/contact/appointment-request/" : "/contact/";
