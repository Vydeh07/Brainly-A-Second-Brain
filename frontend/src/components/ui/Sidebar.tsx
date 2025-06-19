import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import Button from "./Button";
import SidebarItems from "./SidebarItems";
import axios from "axios";
import { useFilter } from "../../contexts/FilterContext";

const apiUrl = import.meta.env.VITE_API_URL;

interface SidebarType {
  setMenuOpen: () => void;
  setModal?: () => void;
  menuOpen: boolean;
}

const Sidebar = ({ setMenuOpen, setModal, menuOpen }: SidebarType) => {
  const { setFilter } = useFilter();

  const [username, setUsername] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const token = localStorage.getItem("token");
  const shareUrl = `https://brainlybybeast.vercel.app/brain/${username}`;

  const handleSidebarItemClick = (filter: string) => {
    setFilter(filter);
  };

  const shareBrain = () => {
    if (token) {
      setIsPublic((prev) => !prev);
    } else {
      alert("Please login to share your brain.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy the link."));
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getuserinfo`, {
        headers: { Authorization: token },
      });

      const user = response.data.userInfo;
      if (user?.isPublic) setIsPublic(user.isPublic);
      if (user?.username) setUsername(user.username);
    } catch (err) {
      console.error("Failed to fetch user info", err);
    }
  };

  const sendRequest = async () => {
    if (token) {
      await axios.post(`${apiUrl}/brain/share`, { share: isPublic }, {
        headers: { Authorization: token },
      });
    }
  };

  useEffect(() => {
    if (token) getUserInfo();
  }, []);

  useEffect(() => {
    if (hasMounted) {
      sendRequest();
    } else {
      setHasMounted(true);
    }
  }, [isPublic]);

  return (
    <div className={`transition-all duration-500 ease-in-out fixed top-0 left-0 h-screen w-80 md:w-96 bg-white border-r rounded-r-xl shadow-lg z-50 px-6 py-4
      ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 items-center">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-black">Brainly</h1>
        </div>
        <button onClick={setMenuOpen} className="p-1 hover:scale-105 transition">
          <CloseIcon />
        </button>
      </div>

      {/* Navigation Items */}
      <SidebarItems startIcon={<TwitterIcon />} text="Tweets" onClickFn={() => handleSidebarItemClick("tweet")} />
      <SidebarItems startIcon={<YoutubeIcon />} text="YouTube" onClickFn={() => handleSidebarItemClick("youtube")} />

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center py-4">
        <Button
          variant="primary"
          size="sm"
          text="Add New"
          startIcon={<PlusIcon />}
          extraClasses="max-sm:text-xs"
          OnClickFn={setModal}
        />

        <button
          onClick={shareBrain}
          className="bg-black text-white hover:bg-white hover:outline outline-1 hover:text-black transition duration-300 ease-in-out px-3 py-2 text-sm rounded-lg flex items-center gap-2"
        >
          <ShareIcon />
          {isPublic ? "Hide Brain" : "Share Brain"}
        </button>
      </div>

      {/* Share Link */}
      {isPublic && (
        <div className="mt-2 px-3 py-2 bg-gray-100 text-sm rounded-lg flex items-center justify-between">
          <span className="truncate text-primary">{shareUrl}</span>
          <button
            onClick={handleCopy}
            title="Copy Link"
            className="text-blue-500 hover:text-blue-700 ml-2 text-lg"
          >
            📋
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
