import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

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
              {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0"
              placeholder="Password"
            />
            <label className="absolute left-4 top-0 text-white/70 text-sm -translate-y-2 px-1">
              Password
            </label>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/80 mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
