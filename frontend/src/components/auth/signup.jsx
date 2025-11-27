import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0"
              placeholder="Name"
            />
            <label className="absolute left-4 top-0 text-white/70 text-sm -translate-y-2 px-1">
              Name
            </label>
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0"
              placeholder="Email"
            />
            <label className="absolute left-4 top-0 text-white/70 text-sm -translate-y-2 px-1">
              Email
            </label>
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0"
              placeholder="Password"
            />
            <label className="absolute left-4 top-0 text-white/70 text-sm -translate-y-2 px-1">
              Password
            </label>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0"
              placeholder="Confirm Password"
            />
            <label className="absolute left-4 top-0 text-white/70 text-sm -translate-y-2 px-1">
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="text-red-300 text-sm mt-1">
                Please confirm your password
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Signup
          </button>
        </form>

        <p className="text-center text-white/80 mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
