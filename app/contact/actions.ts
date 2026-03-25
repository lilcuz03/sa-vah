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
    // Replace with your Formspree endpoint after signup at formspree.io
    // Set primary email: info@sahvehinvestment.co.za, CC: tafadzwachiri03@gmail.com
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqozwkl";

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}
