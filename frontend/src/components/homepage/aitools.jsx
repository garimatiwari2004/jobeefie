import { ArrowRight, Brain, ChartAreaIcon, CloudLightning, File, Mic, Text, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";


export default function AItools() {
  return (
    <div className="flex flex-col justify-center space-y-4 py-10 px-5 md:px-10 gap-6 items-center">
      <div className="mt-10 md:mt-16 py-5 p md:py-10 flex flex-col justify-center items-center gap-4">
        <div className="text-white">
          <div className="flex gap-2 p-2 bg-red-500 rounded-3xl w-fit items-center">
            <Brain /> Powered By Advanced AI
          </div>
        </div>
        <h2 className="text-black text-center font-bold text-2xl md:text-5xl">
          AI Powered Career Tools
        </h2>
        <p className="text-center font-sm text-md md:text-xl text-gray-700">
          Leverage cutting-edge artificial intelligence to enhance your job
          search, prepare for <br /> interviews, and accelerate your career
          growth
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-10 justify-center md:grid-cols-3">
        <div className="p-6 rounded-2xl bg-linear-to-b from-purple-100 to-white hover:bg-linear-to-b hover:from-purple-300 hover:to-white shadow-md w-full text-black hover:text-red-600 max-w-sm hover:scale-102 hover:border hover:border-orange-400 ">
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-b from-purple-500 to-pink-500 text-white shadow-md">
            <Mic size={32} />
          </div>

          {/* AI Powered Badge */}
          <div className="mt-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
              ✨ AI-POWERED
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-2xl font-bold  ">
            Resume Analyser
          </h2>

          {/* Text */}
          <p className="mt-2 text-gray-700 leading-relaxed">
            Practice with AI-powered mock interviews. Get real-time feedback,
            personalized tips, and track your improvement over time.
          </p>

          {/* CTA */}
          <Link to="/resume" className="mt-5 flex  items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            Try Now <ArrowRight size={18} />
          </Link>
        </div>
        <div className="p-6 rounded-2xl bg-linear-to-b from-blue-100 to-white hover:bg-linear-to-b hover:from-blue-300 hover:to-white shadow-md w-full text-black hover:text-red-600 max-w-sm hover:scale-102 hover:border hover:border-orange-400 ">
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-b from-blue-500 to-blue-700 text-white shadow-md">
            <File size={32} />
          </div>

          {/* AI Powered Badge */}
          <div className="mt-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
              ✨ AI-POWERED
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-2xl font-bold">
            Mock Interviews
          </h2>

          {/* Text */}
          <p className="mt-2 text-gray-700 leading-relaxed">
            Upload your resume and get instant AI analysis. Improve ATS scores, fix weaknesses, and optimize for your target role.
          </p>

          {/* CTA */}
          <Link to="/mock-interview" className="mt-5 flex  items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            Try Now <ArrowRight size={18} />
          </Link>
        </div>
        <div className="p-6 rounded-2xl bg-linear-to-b from-red-100 to-white hover:bg-linear-to-b hover:from-red-300 hover:to-white shadow-md w-full text-black hover:text-red-600 max-w-sm hover:scale-102 hover:border hover:border-orange-400 ">
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-b from-red-500 to-pink-500 text-white shadow-md">
            <Text size={32} />
          </div>

          {/* AI Powered Badge */}
          <div className="mt-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
              ✨ AI-POWERED
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-2xl font-bold ">
            Career AI Advisor
          </h2>

          {/* Text */}
          <p className="mt-2 text-gray-700 leading-relaxed">
            Chat with our AI career advisor 24/7. Get personalized guidance, career path suggestions, and answers to all your questions.
          </p>

          {/* CTA */}
          <div className="mt-5 flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            Try Now <ArrowRight size={18} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 mt-8">
        <div className="px-3 md:px-8 py-4 shadow-lg border-t border-gray-300 shadow-gray-400 rounded-lg text-gray-800">
            <div className="flex gap-2">
            <CloudLightning className="text-orange-400"/>
            <h2 className="text-xl text-black font-bold">10K+</h2>
            </div>
            <h3 className="font-semibold text-lg">Interviews Completed</h3>
        </div>
        <div className="px-3 md:px-8 py-4  shadow-lg shadow-gray-400 border-t border-gray-300 rounded-lg text-gray-800">
            <div className="flex gap-2">
            <TrendingUp className="text-orange-400"/>
            <h2 className="text-xl text-black font-bold">95%</h2>
            </div>
            <h3 className="font-semibold text-lg">Improvement Rate</h3>
        </div>
        <div className="px-3 md:px-8 py-4 shadow-lg shadow-gray-400 border-t border-gray-300 rounded-lg text-gray-800">
            <div className="flex gap-2">
            <Brain className="text-orange-400"/>
            <h2 className="text-xl text-black font-bold">24/7</h2>
            </div>
            <h3 className="font-semibold text-lg">AI assistance</h3>
        </div>

      </div>
    </div>
  );
}
