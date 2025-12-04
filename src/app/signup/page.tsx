"use client";

import { useState, FormEvent } from "react";
import { Eye, EyeOff, X, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();

  const [ownerName, setOwnerName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate registration process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success popup
      setShowSuccess(true);
      
      // Reset form
      setOwnerName("");
      setOrganizationName("");
      setMobileNumber("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl font-light text-gray-900 mb-3 text-center">
            Don’t have an <br />  account
          </h1>
          <p className="text-gray-600 mb-8 text-center">Register to access all the features of our service.</p>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Owner Name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                required
              />
            </div>
            <div className="pt-2">
              {/* <p className="text-gray-700 font-medium mb-4">Contact Details</p> */}
              <div className="space-y-4">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                  required
                />
              </div>
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
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>


          <p className="text-center text-gray-700">
            Already have account?{" "}
            <a
              href="/login"
              className="font-semibold text-gray-900 hover:text-yellow-400 transition-colors"
            >
              Login
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

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} className="cursor-pointer"/>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-4 mb-4">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Thank you for register!
              </h2>
              <p className="text-gray-600 mb-6">
                Successfully register and we will contact you soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
