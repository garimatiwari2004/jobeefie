import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export default function OnboardingForm() {
  const { user } = useUser(); // Clerk user object

  const [form, setForm] = useState({
    name: "",
    email: "",
    industry: "",
    goals: "",
    skills: "",
    summary: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const industries = [
    "Information Technology (IT)",
    "Human Resources (HR)",
    "Finance & Accounting",
    "Marketing & Advertising",
    "Sales & Business Development",
    "Operations & Supply Chain",
    "Consulting",
    "Product Management",
    "Data Science & Analytics",
    "Customer Success / Support",
    "Cybersecurity",
    "Design (UI/UX)",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("handleSubmit triggered");

  setLoading(true);

  try {
    const res = await fetch("https://jobeefie-backend.onrender.com/api/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clerkId: user.id,
        ...form,
        skills: form.skills.split(",").map((s) => s.trim()),
      }),
    });

    console.log("Response status:", res.status);

    const data = await res.json();
    console.log("Response body:", data);

    if (res.ok) {
      alert("Profile saved!");
      window.location.href = "/";
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.log("ERROR:", err);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-2xl mx-auto mt-10 md:mt-20 py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Complete Your Profile</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-300/10 rounded-lg shadow-2xl shadow-gray-100/20 p-6"
      >
        {/* --------------------------- Inputs --------------------------- */}

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Target Industry
          </label>
          <select
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          >
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Goals */}
        <div>
          <label className="block text-sm font-medium mb-1">Career Goals</label>
          <textarea
            name="goals"
            rows="3"
            value={form.goals}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          <textarea
            name="skills"
            rows="3"
            value={form.skills}
            onChange={handleChange}
            placeholder="e.g. React, Python, Machine Learning"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Professional Summary
          </label>
          <textarea
            name="summary"
            rows="4"
            value={form.summary}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}
