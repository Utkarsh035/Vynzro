/**
 * Submit contact form data using Web3Forms.
 * @param {Object} formData - { name, email, phone, service, message }
 * @returns {Promise} API response
 */
export const submitContactForm = async (formData) => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Contact form is not configured");
  }

  const payload = {
    name: String(formData.name || "").trim().slice(0, 100),
    email: String(formData.email || "").trim().slice(0, 254),
    phone: String(formData.phone || "").trim().slice(0, 30),
    service: String(formData.service || "").trim().slice(0, 100),
    message: String(formData.message || "").trim().slice(0, 2000),
    botcheck: String(formData.botcheck || ""),
  };

  if (!payload.name || !payload.email || !payload.service || !payload.message) {
    throw new Error("Required contact fields are missing");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New Vynzro website enquiry",
      from_name: "Vynzro Website",
      ...payload,
    }),
  });
  
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to submit form");
  }
  return data;
};
