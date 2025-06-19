import { NavLink } from "react-router";
import Button from "./Button";
import CollabIcon from "../icons/CollabIcon";
import { BrainlyIcon } from "../icons/BrainlyIcon";

const DashNav = (props: { menuOpen: boolean; setMenuOpen: () => void }) => {
  return (
    <nav className="md:h-16 h-16 w-[90%] m-auto px-4 bg-black bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg flex justify-between items-center transition-all duration-200">
      <div className="px-4">
        <NavLink to="/" end>
        <div className="flex items-center gap-2 md:gap-4">
          
          <h1 className="text-xl md:text-2xl font-bold text-white hover:tracking-wide transition-all duration-200">
            Brainly
          </h1>
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
        </div>
        </NavLink>
      </div>

      <div className="px-4 flex gap-2 md:gap-4">
        <div
          onClick={props.setMenuOpen}
          className="hover:scale-105 transition-transform duration-200"
        >
          <Button variant="secondary" size="sm" text="Menu" />
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
