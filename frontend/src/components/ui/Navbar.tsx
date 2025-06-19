import { useNavigate, NavLink } from "react-router";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogin, SetIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      SetIsLogin(true);
    }
  }, []);

  const LogoutFn = () => {
    localStorage.setItem("token", "");
    navigate("/signin");
  };

  return (
    <nav className="h-16 w-[90%] m-auto mt-4 rounded-full bg-black  backdrop-blur-md border border-white/20 shadow-lg flex justify-between items-center px-6 transition-all duration-300">
      <NavLink to="/">
        <h1 className="text-xl md:text-2xl font-bold  text-white tracking-wider hover:scale-105 transition-transform duration-200">
          Brainly
        </h1>
      </NavLink>
      <div className="flex gap-2 md:gap-4 items-center">
        {isLogin ? (
          <>
            <NavLink to="/dashboard">
              <Button
                variant="primary"
                size="sm"
                text="Dashboard"
                extraClasses="rounded-full shadow-md hover:scale-105 transition-all duration-300"
              />
            </NavLink>
            <Button
              variant="secondary"
              size="sm"
              text="Logout"
              OnClickFn={LogoutFn}
              extraClasses="rounded-full hover:bg-red-600 hover:text-white shadow-sm hover:scale-105 transition-all duration-300"
            />
          </>
        ) : (
          <>
            <NavLink to="/signup">
              <Button
                variant="primary"
                size="sm"
                text="Sign Up"
                extraClasses="rounded-full shadow-md hover:scale-105 transition-all duration-300"
              />
            </NavLink>
            <NavLink to="/signin">
              <Button
                variant="primary"
                size="sm"
                text="Sign In"
                extraClasses="rounded-full hover:bg-white hover:text-black shadow-sm hover:scale-105 transition-all duration-300"
              />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
