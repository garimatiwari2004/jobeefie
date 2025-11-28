import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isSignedIn, user } = useUser();   // ✅ FIXED
  const clerk = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
  async function checkOnboarding() {
    if (!isSignedIn || !user) return;

    try {
      const res = await fetch(
        `https://jobeefie-backend.onrender.com/api/onboarding/${user.id}`
      );

      // If user has not completed onboarding → redirect
      if (res.status === 404) {
        navigate("/onboarding");
        return;
      }

      // If request failed for another reason
      if (!res.ok) {
        console.error("Unexpected error checking onboarding");
        return;
      }

      const data = await res.json();

      // If exists but hasn't onboarded
      if (!data.hasOnboarded) {
        navigate("/onboarding");
      }

    } catch (err) {
      console.error("Onboarding check failed:", err);
    }
  }

  checkOnboarding();
}, [isSignedIn, user]);

  return (
    <nav className="w-full fixed top-0 left-0  z-50 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="" alt="Logo" className="w-10 h-10 rounded-full shadow" />
          <div>
            <h2 className="text-xl font-semibold text-orange-600">Jobeefie</h2>
            <p className="text-xs text-gray-500 -mt-1">Gateway to Growth</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="relative group text-gray-700 hover:text-orange-600"
          >
            Jobs
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="relative group text-gray-700 hover:text-orange-600"
          >
            Skill Programs
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="relative group text-gray-700 hover:text-orange-600 flex items-center gap-1"
          >
            More <span>▼</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {!isSignedIn ? (
            <button
              className="px-5 py-2 rounded-lg border border-orange-500 text-orange-600 hover:bg-orange-50"
              onClick={() => clerk.openSignIn()}
            >
              Login
            </button>
          ) : (
            <UserButton />
          )}

          {/* <button className="px-5 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 shadow">
              Register
            </button> */}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🚀 Mobile Slide-in Panel from Right */}
      {/* 🚀 Mobile Slide-in Panel from Right */}
      <div
        className={`
      fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 
      transform transition-transform duration-300 
      md:hidden
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
      >
        {/* Close (X) button inside the panel */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <X size={26} />
        </button>

        <div className="px-6 py-14 flex flex-col gap-6">
          <a className="text-gray-700 text-lg" href="#">
            Jobs
          </a>
          <a className="text-gray-700 text-lg" href="#">
            Skill Programs
          </a>
          <a className="text-gray-700 text-lg" href="#">
            More ▼
          </a>

          {!isSignedIn ? (
            <button
              className="px-5 py-2 rounded-lg border border-orange-500 text-orange-600 hover:bg-orange-50"
              onClick={() => clerk.openSignIn()}
            >
              Login
            </button>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </nav>
  );
}
