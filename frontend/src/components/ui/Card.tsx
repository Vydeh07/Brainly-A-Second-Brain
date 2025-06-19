import React from 'react';
import DeleteIcon from "../icons/DeleteIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import TweetEmbed from "./TweetEmbed";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "tweet";
  deleteFn?: () => void;
}

const Card: React.FC<CardProps> = ({ title, link, type, deleteFn }) => {
  return (
    <div className="min-w-80 min-h-full rounded-2xl bg-gradient-to-br from-black via-gray-600 to-white shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.015]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-400 bg-opacity-40 border-b border-black">
        <div className="flex items-center gap-2">
          {type === "youtube" ? (
            <YoutubeIcon />
          ) : (
            <TwitterIcon />
          )}
          <h1 className="text-white font-semibold text-md truncate max-w-[200px]">
            {title}
          </h1>
        </div>
        {deleteFn && (
          <div
            onClick={deleteFn}
            className="cursor-pointer text-black hover:text-red-500 transition-colors duration-200"
          >
            <DeleteIcon />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="w-full h-full p-4 bg-indigo-50 rounded-b-2xl">
        {type === "youtube" ? (
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={link || "N/A"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ) : link ? (
          <TweetEmbed url={link} />
        ) : (
          <p className="text-black">Invalid Tweet ID</p>
        )}
      </div>
    </div>
  );
};

export default Card;
