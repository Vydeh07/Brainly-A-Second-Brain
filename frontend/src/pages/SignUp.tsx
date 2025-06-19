import InputBox from "../components/ui/InputBox";
import Button from "../components/ui/Button";
import Navbar from "../components/ui/Navbar";
import { useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router";

const apiUrl = import.meta.env.VITE_API_URL;

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const OnButtonClick = async () => {
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    setMessage(null);
    setErrors([]);
    setLoading(true);

    try {
      const response = await axios.post<{ message: string }>(
        `${apiUrl}/signup`,
        {
          username,
          email,
          password,
        }
      );

      setMessage(response.data.message);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const validationErrors = error.response.data.errors.map(
          (err: any) => err.message
        );
        setErrors(validationErrors);
      } else if (error.response && error.response.status === 403) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center mb-6 tracking-wide">Create Your Account</h2>

          {loading && (
            <p className="text-blue-400 text-center mb-4 animate-pulse">Creating account...</p>
          )}

          {message && (
            <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-4 text-sm">
              {message}
            </div>
          )}

          {errors.length > 0 && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4 text-sm">
              <ul className="list-disc list-inside space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-5">
            <InputBox
              placeholder="Username"
              reference={usernameRef}
              type="text"
              required={true}
              extraClasses="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
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
              text="Sign Up"
              size="md"
              variant="primary"
              OnClickFn={OnButtonClick}
              extraClasses="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-primary-dark transition-all"
            />
          </div>

          <div className="text-center mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink to="/signin" className="text-primary hover:underline">
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
