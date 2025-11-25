import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e1525] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT SECTION */}
        <div>
          <img src="" alt="Logo" className="w-24 mb-4" />
          <h2 className="text-xl font-bold text-white">
            Jobeefie Talenthub <br /> Solutions Pvt. Ltd.
          </h2>

          <p className="mt-3 text-gray-400">Gateway to growth.</p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Connecting talented students with amazing career opportunities and
            upskilling programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl text-gray-400">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3 border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Browse Jobs</li>
            <li className="hover:text-white cursor-pointer">
              Upskilling Programs
            </li>
            <li className="hover:text-white cursor-pointer">Create Account</li>
            <li className="hover:text-white cursor-pointer">Login</li>
          </ul>
        </div>

        {/* FOR STUDENTS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3 border-b border-gray-700 pb-2">
            For Students
          </h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">
              Find Internships
            </li>
            <li className="hover:text-white cursor-pointer">
              Entry Level Jobs
            </li>
            <li className="hover:text-white cursor-pointer">
              Skill Development
            </li>
            <li className="hover:text-white cursor-pointer">
              Career Resources
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3 border-b border-gray-700 pb-2">
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1" size={18} />
              <span>123 Jobeefie Ave, Growth City, 10001</span>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={18} />
              info@jobeefie.com
            </li>

            <li className="flex items-start gap-3">
              <Phone size={18} />
              +1 (234) 567-890
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT LINE */}
      <div className="border-t border-gray-700 mt-12 pt-5 text-center text-gray-500 text-sm">
        © 2025 Jobeefie - Gateway to growth. All rights reserved.
      </div>
    </footer>
  );
}
