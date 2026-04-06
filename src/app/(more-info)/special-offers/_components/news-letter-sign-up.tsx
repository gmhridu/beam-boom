// components/NewsletterSignup.tsx
"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "newsletter" }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send. Please try again.");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Small subtitle */}
        <div className="text-center mb-3">
          <span className="bb-subtitle text-sm md:text-base font-medium tracking-wide text-gray-600 dark:text-gray-400 uppercase transition-colors duration-300">
            BEAM &amp; BLOOM
          </span>
        </div>

        {/* Main headline */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
          Sign up Now
        </h2>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto transition-colors duration-300">
          Sign up to our Newsletter to receive all our latest special offers.
        </p>

        {/* Success screen */}
        {status === "success" ? (
          <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 px-8 py-12 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
              You're signed up!
            </h3>
            <p className="text-green-600 dark:text-green-300">
              Thank you for signing up. We'll keep you updated with our latest
              special offers.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nl-firstName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="nl-firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label
                  htmlFor="nl-lastName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="nl-lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Phone & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nl-phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="nl-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label
                  htmlFor="nl-email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="nl-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="nl-message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                id="nl-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Message (optional)"
              />
            </div>

            {/* Privacy notice */}
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left mt-2 transition-colors duration-300">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a
                href="/privacy-policy"
                className="underline hover:text-black dark:hover:text-white transition-colors"
              >
                privacy policy
              </a>
              .
            </p>

            {/* Error message */}
            {status === "error" && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            {/* Submit button */}
            <div className="pt-6 flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group bg-black dark:bg-white text-white dark:text-black font-medium text-lg px-10 py-4 rounded-full hover:bg-gray-900 dark:hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg active:scale-98"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
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
                    Register
                    <span className="text-xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
