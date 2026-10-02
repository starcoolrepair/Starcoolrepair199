import React from "react";
import { MessageSquareQuote, Info, MapPin, Star } from "lucide-react";

export default function CustomerReviews() {
  const sampleTestimonials = [
    {
      appliance: "AC Repair & Service",
      location: "Vashi, Navi Mumbai",
      quote:
        "Our split AC was blowing normal air instead of cooling during peak heat. The technician arrived on time for the doorstep inspection, tested the refrigerant pressure, and clearly explained the repair work required before starting.",
      customerLabel: "Priya Patel",
      serviceTag: "Split AC Cooling Issue",
      rating: 5,
    },
    {
      appliance: "Washing Machine Repair",
      location: "Kharghar, Navi Mumbai",
      quote:
        "The front-load washing machine was stopping mid-cycle with a drain error. Prompt doorstep visit, accurate diagnosis of the drain pump issue, and upfront explanation of the ₹199 visit charge.",
      customerLabel: "Sneha Deshmukh",
      serviceTag: "Front-Load Drain Diagnosis",
      rating: 5,
    },
    {
      appliance: "Refrigerator Repair",
      location: "Nerul, Navi Mumbai",
      quote:
        "The freezer was cooling normally but the lower refrigerator compartment was warm. The technician inspected the defrost mechanism and airflow on-site and provided a transparent estimate without pressure.",
      customerLabel: "Sumit Kulkarni",
      serviceTag: "Frost-Free Cooling Check",
      rating: 5,
    },
    {
      appliance: "Microwave Repair",
      location: "Seawoods, Navi Mumbai",
      quote:
        "Our microwave stopped heating food even though the digital timer and turntable were functioning. The technician handled the doorstep inspection safely and explained the high-voltage component check clearly.",
      customerLabel: "Manoj Jadhav",
      serviceTag: "Heating Issue Inspection",
      rating: 5,
    },
    {
      appliance: "Doorstep Service Experience",
      location: "Panvel, Navi Mumbai",
      quote:
        "Appreciated the convenient doorstep repair model. It saved us the trouble of moving heavy appliances out of our apartment. Clear communication over phone and WhatsApp throughout the process.",
      customerLabel: "Farhan Khan",
      serviceTag: "Doorstep Convenience",
      rating: 5,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
            <Info className="w-3.5 h-3.5" />
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Customer Reviews
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Illustrative sample testimonials reflecting common appliance
            diagnostic and doorstep repair scenarios across Navi Mumbai.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sampleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.serviceTag}
                  </span>

                  <MessageSquareQuote className="w-5 h-5 text-slate-300 shrink-0" />
                </div>

                {/* 5-Star Rating */}
                <div
                  className="flex items-center gap-1.5 mb-3"
                  aria-label={`${item.rating}.0 out of 5 stars`}
                >
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    {item.rating}.0
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {item.customerLabel}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                  Verified Customer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
