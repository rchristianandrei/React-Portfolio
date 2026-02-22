import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_API_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_API_EMAILJS_PUBLIC_KEY;

export const SendEmail = async (message: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return await emailjs.send(serviceId, templateId, message, publicKey);
};
