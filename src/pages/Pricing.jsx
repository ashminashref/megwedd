import React from 'react'
import Appbar from '../common/Appbar'
import Footer from '../common/Footer'
import { IoCheckmark, IoArrowForward } from "react-icons/io5"

const pricingPlans = [
  {
    name: "Starter",
    price: "$899",
    description: "For intimate elopements",
    features: [
      "4-hour coverage",
      "Cinematic highlight film",
      "Online gallery access",
      "Color grading",
      "Digital delivery",
      "Social media teaser",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$2,199",
    description: "For full wedding days",
    features: [
      "8-hour coverage",
      "10-minute feature film",
      "Raw footage access",
      "Drone cinematography",
      "Premium photo book",
      "Two cinematographers",
    ],
    buttonText: "Get Started",
    highlighted: true, // This one gets the orange button and border
  },
  {
    name: "Scale",
    price: "$3,999",
    description: "Multi-day luxury events",
    features: [
      "12-hour coverage",
      "20-minute legacy film",
      "4K source files",
      "Next-day teaser",
      "Rehearsal dinner coverage",
      "Priority editing",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Destination weddings",
    features: [
      "Full weekend coverage",
      "Documentary feature",
      "Physical legacy drive",
      "Travel included",
      "Custom music licensing",
      "Unlimited revisions",
    ],
    buttonText: "Contact Us",
    highlighted: false,
  }
];

function Pricing() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-500/30">
      <Appbar />
      
      {/* Header Section */}
      <div className="pt-44 px-6 max-w-7xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
          Flexible Packages
        </h1>
        <p className="text-neutral-500 max-w-lg mt-6 text-lg font-light leading-relaxed">
          Designed for every milestone. Select a plan that fits your roadmap, 
          from simple highlights to enterprise-grade cinematic builds.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 group ${
                plan.highlighted 
                ? "border-orange-500/50 bg-neutral-900/20" 
                : "border-white/5 bg-neutral-950 hover:border-white/20"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price === "Custom" ? "" : plan.price}
                </span>
                <span className="text-neutral-500 font-medium">
                  {plan.price === "Custom" ? "Custom pricing" : "/event"}
                </span>
              </div>
              <p className="text-sm text-neutral-500 mb-8">{plan.description}</p>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mb-10 ${
                plan.highlighted 
                ? "bg-orange-600 text-white hover:bg-orange-500" 
                : "bg-transparent border border-white/10 text-white hover:bg-white hover:text-black"
              }`}>
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <IoCheckmark className={`mt-1 flex-shrink-0 ${plan.highlighted ? "text-orange-500" : "text-neutral-600"}`} />
                    <span className="text-[13px] text-neutral-400 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Floating Info Box (Matching screenshot) */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-end items-end">
           <div className="bg-white text-black p-6 rounded-2xl max-w-xs shadow-2xl flex flex-col gap-2 scale-90 md:scale-100">
              <div className="flex gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold italic">W</div>
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold">f</div>
              </div>
              <p className="text-xs font-bold uppercase tracking-tighter">Explore our premium work</p>
              <a href="#" className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1">
                More portfolios <IoArrowForward />
              </a>
           </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Pricing