import React, { useState } from "react";
import { MessageSquare, AlertCircle, User, Phone, Wrench, CheckCircle2 } from "lucide-react";
import { businessData } from "../data/businessData";

export default function BookingForm({ initialAppliance = "" }) {
  // Map initialAppliance prop if passed from query params
  const getInitialService = (app) => {
    if (!app) return "";
    const lower = app.toLowerCase();
    if (lower.includes("wash")) return "Washing Machine Repair";
    if (lower.includes("ac") || lower.includes("air")) return "AC Repair & Service";
    if (lower.includes("fridge") || lower.includes("refrig")) return "Refrigerator Repair";
    if (lower.includes("micro")) return "Microwave Repair";
    return "";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    serviceRequired: getInitialService(initialAppliance),
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Washing Machine Repair",
    "AC Repair & Service",
    "Refrigerator Repair",
    "Microwave Repair",
    "Other Appliance Service"
  ];

  const validate = () => {
    const errs = {};

    // 1. Full Name
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name should be at least 2 characters long.";
    }

    // 2. Phone Number (Indian mobile numbers: 10 digits starting with 6, 7, 8, 9, allowing optional +91 or leading 0)
    const cleanMobile = formData.phoneNumber.replace(/[\s\-()]/g, "");
    const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*-\s*)?|[0]?)?[6789]\d{9}$/;
    if (!cleanMobile) {
      errs.phoneNumber = "Please enter your phone number.";
    } else if (!mobileRegex.test(cleanMobile)) {
      errs.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    // 3. Service Required
    if (!formData.serviceRequired) {
      errs.serviceRequired = "Please select the service required.";
    }

    // 4. Message / Problem
    if (!formData.message.trim()) {
      errs.message = "Please describe your issue.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const text = `Hello Star Cool Service,
I want to book an appliance repair service.

Name: ${formData.fullName.trim()}
Phone: ${formData.phoneNumber.trim()}
Service: ${formData.serviceRequired}
Message: ${formData.message.trim()}

Please contact me regarding the service.`;

    const encodedMessage = encodeURIComponent(text);
    const targetNumber = businessData.whatsappNumber || "9137355620";
    const whatsappLink = `https://wa.me/91${targetNumber}?text=${encodedMessage}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Form Header */}
      <div className="bg-slate-900 text-white p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <Wrench className="w-4 h-4" />
          <span>Doorstep Service Request</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          Send us a Message
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-300">
          Fill out this short form to request an inspection visit via WhatsApp. Visit / Inspection charge is ₹199.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
        {/* 1. Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
          >
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white ${
                errors.fullName
                  ? "border-red-500 bg-red-50/30"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* 2. Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
          >
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Your phone number"
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white ${
                errors.phoneNumber
                  ? "border-red-500 bg-red-50/30"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phoneNumber}</span>
            </p>
          )}
        </div>

        {/* 3. Service Required */}
        <div>
          <label
            htmlFor="serviceRequired"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
          >
            Service Required *
          </label>
          <div className="relative">
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white transition-colors appearance-none ${
                errors.serviceRequired ? "border-red-500" : "border-slate-300 focus:border-blue-600"
              }`}
            >
              <option value="">Select Service &#9660;</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>
          {errors.serviceRequired && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.serviceRequired}</span>
            </p>
          )}
        </div>

        {/* 4. Message / Problem */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
          >
            Message *
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your issue"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white resize-none ${
                errors.message
                  ? "border-red-500 bg-red-50/30"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Compact Service Notice */}
        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Notice:</strong> Submitting this form creates a service request (₹199 visit & inspection). Our team will contact you to confirm technician availability.
          </p>
        </div>

        {/* Submission CTA */}
        <div>
          <button
            type="submit"
            className="btn-whatsapp w-full py-3 text-sm sm:text-base font-bold shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Request</span>
          </button>
        </div>

        {isSubmitted && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              WhatsApp opened with your request details. Click send on WhatsApp to submit!
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
