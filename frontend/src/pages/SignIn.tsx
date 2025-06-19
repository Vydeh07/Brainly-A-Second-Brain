import { useRef, useState } from "react";
import Button from "../components/ui/Button";
import InputBox from "../components/ui/InputBox";
import Navbar from "../components/ui/Navbar";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";
const apiUrl = import.meta.env.VITE_API_URL;

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const OnButtonClick = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response: any = await axios.post(
        `${apiUrl}/signin`,
        { email, password },
        { withCredentials: true }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center mb-6 tracking-wide">Welcome Back</h2>
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}
          <div className="space-y-5">
            <InputBox
              placeholder="Email"
              reference={emailRef}
              type="text"
              required={true}
              extraClasses="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <InputBox
              placeholder="Password"
              reference={passwordRef}
              type="password"
              required={true}
              extraClasses="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              text="Sign In"
              size="md"
              variant="primary"
              OnClickFn={OnButtonClick}
              extraClasses="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-primary-dark transition-all"
            />
          </div>
          <div className="text-center mt-6 text-sm text-gray-400">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-primary hover:underline">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
