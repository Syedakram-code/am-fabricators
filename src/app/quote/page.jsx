"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = "Phone must be at least 10 digits";

    if (!formData.service) newErrors.service = "Please select a service";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({});
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="max-w-2xl mx-auto shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6 primary-color">
        Get a Quote
      </h2>

      {submitted && (
        <p className="text-green-600 text-center mb-4 animate-bounce">
          ✅ Your request has been submitted!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none ${
              errors.name ? "border-red-500" : "focus:ring-blue-500"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none ${
              errors.email ? "border-red-500" : "focus:ring-blue-500"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none ${
              errors.phone ? "border-red-500" : "focus:ring-blue-500"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:bg-black-500 outline-none ${
              errors.service ? "border-red-500" : "focus:ring-blue-500"
            }`}
          >
            <option value="" className="bg-gray-100 text-black">Select a service</option>
            <option value="fabrication" className="text-black">Fabrication</option>
            <option value="welding" className="text-black">Welding</option>
            <option value="engineering" className="text-black">Engineering</option>
            <option value="custom" className="text-black">Custom Design</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none ${
              errors.message ? "border-red-500" : "focus:ring-blue-500"
            }`}
            placeholder="Enter your project details"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full primary-bg-color text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          Request Quote
        </button>
      </form>
    </section>
  );
}
