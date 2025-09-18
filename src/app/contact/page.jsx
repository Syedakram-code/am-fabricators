"use client";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 primary-bg-color shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side Image */}
        <div className="relative h-64 md:h-auto">
          <Image
            src="/images/building.jpg" // replace with your image
            alt="Building"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* Dummy Logo */}
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-200 font-bold text-gray-700">
              LOGO
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Let’s Get In Touch.
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Or just reach out manually to{" "}
            <a
              href="mailto:hello@example.com"
              className="text-blue-600 hover:underline"
            >
              hello@example.com
            </a>
          </p>

          <form className="space-y-6">
            {/* First and Last Name */}
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

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="+91 (000) 000-0000"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Message */}
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
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
