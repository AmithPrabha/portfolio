export const contactTopics = ["Frontend", "Backend", "Full Stack", "AI", "Automation", "Other"] as const;

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

export function validateContact(value: Record<string, unknown>) {
  const data: ContactFields = { name: "", email: "", phone: "", topic: "", message: "" };
  const errors: Partial<Record<keyof ContactFields, string>> = {};
  const limits = { name: 100, email: 254, phone: 30, topic: 50, message: 5000 };
  for (const key of Object.keys(data) as (keyof ContactFields)[]) {
    data[key] = typeof value[key] === "string" ? value[key].trim() : "";
    if (!data[key]) errors[key] = "Please complete this field.";
    else if (data[key].length > limits[key]) errors[key] = `Use ${limits[key]} characters or fewer.`;
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.phone && (!/^\+?[\d\s().-]+$/.test(data.phone) || data.phone.replace(/\D/g, "").length < 7)) errors.phone = "Enter a valid phone number, including your country code.";
  if (!contactTopics.some(topic => topic === data.topic)) errors.topic = "Please select a topic.";
  return { data, errors };
}
