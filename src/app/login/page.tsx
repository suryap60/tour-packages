"use client";

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
    //   const { error } = await supabase.auth.signInWithPassword({
    //     email,
    //     password,
    //   });

      if (error) throw error;

      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 text-center">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-8 text-center">Please enter your details</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                forgot password?
              </a>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-3 rounded-full transition-colors duration-200"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex gap-6 justify-center mb-8">
            <button
            onClick={() => alert("Google login coming soon")}
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
                <svg
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                >
                    <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6 1.54 7.38 2.83l5.4-5.4C33.73 3.73 29.27 1.5 24 1.5 14.96 1.5 7.22 6.92 3.66 14.34l6.42 4.98C11.77 12.31 17.36 9.5 24 9.5z"
                    />
                    <path
                    fill="#34A853"
                    d="M46.15 24.5c0-1.55-.14-3.04-.39-4.5H24v8.52h12.5c-.56 2.84-2.27 5.24-4.87 6.85l7.52 5.85C43.25 37.29 46.15 31.41 46.15 24.5z"
                    />
                    <path
                    fill="#FBBC05"
                    d="M10.08 28.38A14.5 14.5 0 0 1 9.5 24c0-1.53.26-3.01.73-4.38l-6.42-4.98A22.49 22.49 0 0 0 1.5 24c0 3.61.87 7.02 2.41 10.05l6.17-5.67z"
                    />
                    <path
                    fill="#4285F4"
                    d="M24 46.5c6.5 0 11.95-2.14 15.93-5.8l-7.52-5.85c-2.1 1.4-4.8 2.22-8.41 2.22-6.64 0-12.23-3.81-14.91-9.29l-6.17 5.67C7.22 41.08 14.96 46.5 24 46.5z"
                    />
                </svg>
            </button>

            <button
              onClick={() => alert("Facebook login coming soon")}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
           <button
                onClick={() => alert("Apple login coming soon")}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-black"
                >
                    <path d="M16.365 1.43c0 1.14-.418 2.108-1.138 2.905-.687.767-1.848 1.36-2.956 1.281-.137-1.118.404-2.238 1.072-2.948.713-.767 1.985-1.33 3.022-1.358zM21.74 17.82c-.506 1.164-1.114 2.317-2.003 3.428-.95 1.174-1.918 2.343-3.425 2.367-1.347.021-1.782-.875-3.311-.875-1.528 0-2.012.854-3.291.895-1.324.042-2.334-1.269-3.29-2.438C4.86 20.326 3 16.2 3 12.75c0-3.25 1.773-5.941 4.509-5.961 1.178-.012 2.29.84 3.29.86 1.001.021 2.32-1.028 3.923-.878 1.337.12 2.706.79 3.682 2.002-3.233 1.754-2.715 6.355.512 7.843-.643 1.49-1.396 2.807-2.135 4.004z" />
                </svg>
            </button>

          </div>

          <p className="text-center text-gray-700">
            Are you new?{" "}
            <a
              href="/signup"
              className="font-semibold text-gray-900 hover:text-yellow-400 transition-colors"
            >
              Create an Account
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-96">
            <Image
              src="/assets/imgs/login/login.png"
              alt="Tropical island"
              className="w-full h-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
