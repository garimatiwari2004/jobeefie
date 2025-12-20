import { useState } from "react";
import axios from "axios";

export default function ResumeUploader() {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Upload a resume!");

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jd", jd);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(res.data);
    } catch (err) {
      alert("Error analyzing resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-linear-to-br from-blue-50 to-purple-100 flex justify-center items-start py-14 px-4 font-sans">
      <div className="w-full max-w-2xl bg-white backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-white">
        <h1 className="text-3xl font-bold text-gray-800 m text-center">
          Resume Analyzer
        </h1>
        <p className="text-gray-500 text-center mb-6">Uplaod a pdf of your updated resume! <span className="text-md font-semibold text-red-600">(Only PDF files accepted)</span></p>

        <div className="flex flex-col gap-4">
          {/* File Upload Box */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl py-10 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span className="text-gray-600 text-lg">
              {file ? file.name : "Click to upload PDF resume"}
            </span>
          </label>

          {/* JD Textarea */}
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste Job Description here (optional)"
            className="rounded-xl w-full p-4 border border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-300 outline-none"
            rows={5}
          />

          {/* Submit Button */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition font-semibold text-lg"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-10 bg-gray-50 rounded-2xl p-6 shadow-inner">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Analysis Result
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><b>Name:</b> {result.name || "Not Found"}</p>
              <p><b>Email:</b> {result.email}</p>
              <p><b>Phone:</b> {result.phone}</p>
              <p>
                <b>Score:</b>{" "}
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                  {result.normalizedScore}
                </span>
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Skills Found</h3>
              <div className="flex flex-wrap gap-2">
                {result.skills?.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* JD Skills */}
            {result.jdSkills?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">JD Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {result.jdSkills?.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Missing Skills */}
            {result.missingSkills?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2 text-red-600">Missing Based on JD</h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills?.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
