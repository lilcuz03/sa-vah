"use server";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const response = await fetch("https://formspree.io/f/mpqozwkl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || "",
        subject: formData.subject || "",
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Formspree API error: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
