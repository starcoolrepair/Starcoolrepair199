import React from "react";
import { Sparkles } from "lucide-react";

export default function SupportedBrands() {
  const brands = [
    { name: "LG" },
    { name: "Samsung" },
    { name: "Whirlpool" },
    { name: "IFB" },
    { name: "Bosch" },
    { name: "+ More", isMore: true }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Brand Service Support</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Brands We Service
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            We repair and service major washing machine brands.
          </p>
        </div>

        {/* Brand Cards: 2-column on mobile, 3-column on sm, 6-column / horizontal on md+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center p-3.5 sm:p-4 rounded-xl border transition-all duration-200 text-center shadow-2xs ${
                brand.isMore
                  ? "bg-blue-50/70 border-blue-200 text-blue-700 font-bold hover:bg-blue-100 hover:border-blue-300"
                  : "bg-white border-slate-200/90 text-slate-800 font-bold hover:border-blue-300 hover:shadow-xs hover:text-blue-700"
              }`}
            >
              <span className="text-sm sm:text-base tracking-wide select-none">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
            All brand names and trademarks belong to their respective owners and are referenced solely for descriptive service identification.
          </p>
        </div>
      </div>
    </section>
  );
}
