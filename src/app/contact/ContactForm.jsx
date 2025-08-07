"use client";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    captcha: ""
  });

  const [captchaUrl, setCaptchaUrl] = useState("/api/captcha.php");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const reloadCaptcha = () => {
    setCaptchaUrl(`/api/captcha.php?${Date.now()}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // برای ارسال کوکی PHPSESSID
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          description: "",
          captcha: "",
        });
        reloadCaptcha();
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        reloadCaptcha();
      }
    } catch (err) {
      setErrorMsg("Network error or server is unavailable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="First Name(Required)" className="w-full p-2 border" />
          <input name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Last Name(Required)" className="w-full p-2 border" />
          <input name="email" required type="email" value={formData.email} onChange={handleChange} placeholder="Email(Required)" className="w-full p-2 border" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone(Optional)" className="w-full p-2 border" />
          <textarea name="description" required value={formData.description} onChange={handleChange} placeholder="Message(Required)" className="w-full p-2 border" rows={4}></textarea>

          {/* CAPTCHA */}
          <div className="flex items-center space-x-4">
            <img src={captchaUrl} alt="CAPTCHA" className="border" />
            <button type="button" onClick={reloadCaptcha} className="text-sm text-blue-600 underline">Reload</button>
          </div>
          <input name="captcha" required value={formData.captcha} onChange={handleChange} placeholder="Enter CAPTCHA" className="w-full p-2 border" />

          <button disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
            {loading ? "Sending..." : "Send"}
          </button>

          {successMsg && <p className="text-green-500">{successMsg}</p>}
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
}
