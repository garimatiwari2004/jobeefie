import { ArrowRightIcon, Briefcase } from "lucide-react";
import React from "react";


export default function HowItWorks() {
  const cards = [
    {
      title: "Find Opportunities",
      description:
        "Browse through thousands of internships and entry-level job opportunities from top companies across India.",
      linkText: "Browse Jobs",
      iconColor: "bg-gradient-to-tr from-yellow-400 to-orange-500",
    },
    {
      title: "Upskill Yourself",
      description:
        "Enroll in industry-relevant upskilling programs to enhance your resume and accelerate your career prospects.",
      linkText: "Explore Programs",
      iconColor: "bg-gradient-to-tr from-red-400 to-orange-500",
       // for middle card
    },
    {
      title: "For Recruiters",
      description:
        "Post job openings, manage applications, and find the perfect candidates for your organization seamlessly.",
      linkText: "Start Recruiting",
      iconColor: "bg-gradient-to-tr from-pink-400 to-red-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm mb-4">
          How It Works
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Your Path to Success
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We connect students with opportunities and companies with talent
          through our comprehensive platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition hover:scale-105`}
            >
              <div
                className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-white ${card.iconColor}`}
              >
                {/* Placeholder icon: you can replace with SVG icons */}
                <Briefcase/>
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a
                href="#"
                className="text-orange-600 font-semibold inline-flex items-center hover:underline"
              >
                {card.linkText} <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
