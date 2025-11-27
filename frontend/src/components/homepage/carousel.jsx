import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ratibhan Singh",
    role: "HR Executive at Zensar Technologies",
    initials: "RS",
    text: "The HRMS certification from Jobeefie transformed my career...",
  },
  {
    name: "Mahwish Kidwai",
    role: "Talent Acquisition Specialist at Mindtree",
    initials: "MK",
    text: "I wanted to transition into HR, and Jobeefie made it possible...",
  },
  {
    name: "Sneha Dubey",
    role: "HR Generalist at Hexaware Technologies",
    initials: "SD",
    text: "Jobeefie's HRMS certification was a game-changer for me...",
  },
  {
    name: "Aarav Sharma",
    role: "Software Engineer at Infosys",
    initials: "AS",
    text: "The coding mentorship from Jobeefie gave me confidence...",
  },
  {
    name: "Priya Mehta",
    role: "Data Analyst at Deloitte",
    initials: "PM",
    text: "Jobeefie’s practical projects helped me gain hands-on experience...",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <p className="text-orange-400 font-semibold text-sm mb-2">Testimonials</p>
      <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
      <p className="text-gray-500 mb-8">
        Hear from students who found their dream opportunities through Jobeefie
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-md rounded-lg p-6 h-full">
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
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
