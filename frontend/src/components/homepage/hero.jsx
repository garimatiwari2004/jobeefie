import { CirclePlus, TrendingUp } from "lucide-react";
import office from "../homepage/assetshome/office.webp";
//
// #0f2027
// → 
// #203a43
// → 
// #2c5364

export default function Hero() {
  return (
    <section
      className="min-h-screen px-5 md:px-12 lg:px-20 py-12 flex items-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(109.6deg, rgba(62,161,219,1) 11.2%, rgba(93,52,236,1) 100.2%)",
      // }}
    >
      <div className="container mx-autompx-5 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* LEFT SECTION */}
        <div className="space-y-6 text-center lg:text-left max-w-xl">
          <div className="flex gap-2 mx-auto lg:mx-0 p-2 bg-gray-300/40 rounded-3xl w-fit items-center">
            <TrendingUp className="text-yellow-300" />
            <h2 className="text-white font-medium">10,000+ students placed</h2>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Launch your career
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 leading-tight">
              Journey today
            </h1>
          </div>

          <p className="font-medium text-white text-lg md:text-xl leading-relaxed">
            Connect with top employers, find internships, jobs, and upskilling
            programs tailored for students and recent graduates.
          </p>

          <div className="flex justify-center flex-col md:flex-row lg:justify-start gap-4">
            <button className="px-8 py-3 rounded-lg bg-white hover:bg-amber-50 text-red-500 font-semibold transition">
              Get started free
            </button>
            <button className="px-8 py-3 rounded-lg border border-white hover:bg-white hover:text-red-400 text-white font-semibold transition">
              Browse Jobs
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto hidden md:flex">
          <img
            src={office}
            alt="office"
            className="w-full rounded-xl border-x-15 border-y-20 border-blue-300/40 shadow-xl"
          />

          {/* Success Badge */}
          <div className="absolute -top-5 -right-5 md:-top-6 md:-right-6">
            <div className="bg-red-500 p-3 md:p-4 flex gap-2 items-center rounded-lg text-white shadow-lg">
              <div className="bg-gray-300/20 rounded p-2">
                <CirclePlus className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">95%</h2>
                <h2 className="text-xs md:text-sm">Success rate</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
