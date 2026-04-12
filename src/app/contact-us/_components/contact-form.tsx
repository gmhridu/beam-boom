"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!isHuman) {
      setStatus("error");
      setErrorMsg("Please verify that you are not a robot.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const isFieldInvalid = (field: keyof typeof formData) =>
    touched[field] && !formData[field];

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950/50 relative overflow-hidden transition-colors duration-300">
      {/* Subtle right-side accent panel – very light for modern depth */}
      <div className="absolute top-0 right-0 bottom-0 w-1/4 lg:w-1/3 xl:w-[35%] bg-linear-to-l from-gray-50/80 to-transparent dark:from-gray-800/20 dark:to-transparent z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Form – takes ~7/12 columns on lg+ */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-100/80 dark:border-gray-700 p-8 md:p-10 lg:p-12 transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center lg:text-left transition-colors duration-300">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 dark:bg-gray-900/40 text-gray-900 dark:text-white ${
                    isFieldInvalid("name") ? "border-red-400" : ""
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                >
                  Name *
                </label>
              </div>

              {/* Email & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 dark:bg-gray-900/40 text-gray-900 dark:text-white ${
                      isFieldInvalid("email") ? "border-red-400" : ""
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                  >
                    Email *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 dark:bg-gray-900/40 text-gray-900 dark:text-white ${
                      isFieldInvalid("subject") ? "border-red-400" : ""
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                  >
                    Subject *
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className={`peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 dark:bg-gray-900/40 text-gray-900 dark:text-white resize-none ${
                    isFieldInvalid("message") ? "border-red-400" : ""
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 transition-all duration-200"
                >
                  Message *
                </label>
              </div>

              {/* reCAPTCHA placeholder – replace with real one */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="recaptcha"
                  checked={isHuman}
                  onChange={(e) => setIsHuman(e.target.checked)}
                  className="w-6 h-6 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-gray-50/40 dark:bg-gray-900/40"
                />
                <label
                  htmlFor="recaptcha"
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 transition-colors duration-300 cursor-pointer"
                >
                  I'm not a robot
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    (reCAPTCHA)
                  </span>
                </label>
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                  {errorMsg || "Something went wrong. Please try again."}
                </div>
              )}

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-lg py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="text-xl transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Success message */}
              {status === "success" && (
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 px-4 py-3 text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                  <span>✓</span>
                  <span>
                    Your message has been sent! We'll be in touch shortly.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Opening Hours Card – modern, clean, elevated, perfectly sized */}
          <div
            className="
  lg:col-span-5
  bg-white
  dark:bg-gray-800
  rounded-2xl
  shadow
  border border-gray-100
  dark:border-gray-700
  p-8 md:p-10
  max-w-2xl
  mx-auto lg:mx-0
  lg:h-full
  transition-colors duration-300
"
          >
            <h3 className="text-3xl md:text-3.5xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left tracking-tight transition-colors duration-300">
              Opening Hours
            </h3>

            <div className="space-y-7 text-gray-800 dark:text-gray-200 text-base md:text-lg transition-colors duration-300">
              <div className="pb-5 border-b border-gray-200/70 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Monday – Friday
                </p>
                <p className="mt-1.5 font-medium">09:00 – 19:00</p>
              </div>
            </div>

            {/* Optional small note or icon at bottom */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
              Appointments by prior arrangement only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
