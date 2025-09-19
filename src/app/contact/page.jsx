"use client";
import React from "react";

const ContactUs = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-2xl overflow-hidden">
        <div className="relative h-64 md:h-auto">
          <img
            src="/images/Welding-image.jpg"
            alt="Building"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <img src="/images/A.M.LOGO.png" alt="AM_LOGO" className="w-26 flex items-center justify-center font-bold text-gray-700"/>
          </div>

          <h2 className="text-3xl font-bold text-center primary-color mb-2">
            Let’s Get In Touch.
          </h2>
          <p className="text-center text-white-600 mb-8">
            Or just reach out manually to{" "}
            <a
              href="mailto:hello@example.com"
              className="text-blue-600 hover:underline"
            >
              hello@example.com
            </a>
          </p>

          <form className="space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </section>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="+91 (000) 000-0000"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg primary-bg-color text-white font-semibold hover:bg-green-700 hover:cursor-pointer transition"
            >
              Submit Form →
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
