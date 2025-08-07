import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Neda Group",
  description: "Get in touch with Neda Group for inquiries, support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <ContactForm />
    </main>
  );
}
