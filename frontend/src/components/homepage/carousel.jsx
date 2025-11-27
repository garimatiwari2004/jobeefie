import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Ratibhan Singh",
    role: "HR Executive at Zensar Technologies",
    initials: "RS",
    text: "The HRMS certification from Jobeefie transformed my career. The program's real-world case studies and expert mentorship helped me land a role as an HR Executive at Zensar Technologies.",
  },
  {
    name: "Mahwish Kidwai",
    role: "Talent Acquisition Specialist at Mindtree",
    initials: "MK",
    text: "I wanted to transition into HR, and Jobeefie made it possible! The hands-on training and personalized career guidance led me to a Talent Acquisition role at Mindtree.",
  },
  {
    name: "Sneha Dubey",
    role: "HR Generalist at Hexaware Technologies",
    initials: "SD",
    text: "Jobeefie's HRMS certification was a game-changer for me. With their placement support, I secured a role as an HR Generalist at Hexaware Technologies.",
  },
  {
    name: "Aarav Sharma",
    role: "Software Engineer at Infosys",
    initials: "AS",
    text: "The coding and problem-solving mentorship from Jobeefie gave me the confidence to crack my interviews and land a role at Infosys.",
  },
  {
    name: "Priya Mehta",
    role: "Data Analyst at Deloitte",
    initials: "PM",
    text: "Jobeefie’s practical projects helped me gain hands-on experience and secure a Data Analyst role at Deloitte. Truly transformational!",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <p className="text-orange-400 font-semibold text-sm mb-2">Testimonials</p>
      <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
      <p className="text-gray-500 mb-8">
        Hear from students who found their dream opportunities through Jobeefie
      </p>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-400 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
