import { useParams } from "react-router";
import Navbar from "../components/ui/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/ui/Card";

const apiUrl = import.meta.env.VITE_API_URL;

interface Content {
  _id: string;
  link: string;
  type: "youtube" | "tweet";
  title: string;
  tags: string[];
  userId: string;
  username: string;
  __v: number;
}

interface BrainResponse {
  contents: Content[];
  message: string;
}

const Share = () => {
  const { username } = useParams<{ username: string }>();
  const [contents, setContents] = useState<Content[]>([]);
  const [message, setMessage] = useState<string>("Loading user's content...");

  const share = async () => {
    try {
      const response = await axios.get<BrainResponse>(`${apiUrl}/brain/${username}`);
      setContents(response.data.contents);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error fetching user's content 😢");
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    if (username) share();
  }, [username]);

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Navbar />
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold">
          <span className="inline-block px-4 py-2 border border-black rounded-full bg-black text-white hover:bg-white hover:text-black hover:border hover:transition-all">
            {username}
          </span>{' '}
          <span className="italic">Brain</span>
        </h1>
        <p className="mt-2 text-gray-600">Explore what they've been collecting.</p>
      </div>

      {contents.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh] text-xl font-semibold">
          <p className="text-black">{message}</p>
        </div>
      ) : (
        <div className="px-6 pb-10 flex flex-wrap justify-center gap-6">
          {contents.map((content) => (
            <Card
              key={content._id}
              title={content.title}
              link={content.link}
              type={content.type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Share;
