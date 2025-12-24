import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm({ onSuccess }) {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [sending, setSending] = useState(false);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!captchaToken) {
      setError("Please verify you are not a robot.");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setSending(false);
        formRef.current?.reset();
        setCaptchaToken(null);

        // Auto-close after 2 seconds
        setTimeout(() => {
          setSent(false);
          onSuccess?.();
        }, 2000);
      })
      .catch((err) => {
        setSending(false);
        setError("Something went wrong. Please try again.");
        console.error(err);
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 mt-4">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      {/* Optional phone field (nice for service businesses) */}
      <input
        type="text"
        name="user_phone"
        placeholder="Your Phone (optional)"
        className="border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      {!RECAPTCHA_SITE_KEY ? (
        <p className="text-sm text-red-600">
          Missing <strong>VITE_RECAPTCHA_SITE_KEY</strong> in your environment.
        </p>
      ) : (
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
          className="mx-auto"
        />
      )}

      <button
        type="submit"
        disabled={sending}
        className="bg-blue-700 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>

      {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
}
