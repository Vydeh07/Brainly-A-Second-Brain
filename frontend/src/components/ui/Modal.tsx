import CloseIcon from "../icons/CloseIcon";
import InputBox from "./InputBox";
import Button from "./Button";
import { useRef, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

interface ModalProps {
  value: boolean;
  onClickFn: () => void;
  onSubmitFn: () => void;
}

const Modal = (props: ModalProps) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async () => {
    const token = localStorage.getItem("token");
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = (document.getElementById("type") as HTMLSelectElement)?.value;

    interface ResponseData {
      message: string;
    }

    try {
      const response = await axios.post<ResponseData>(
        `${apiUrl}/content`,
        { title, link, type },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setMessage(response.data?.message || "Content added successfully.");
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data?.message || error.response.statusText);
      } else if (error.request) {
        setMessage("Network error: No response from server.");
      } else {
        setMessage(error.message);
      }
    }
    props.onSubmitFn();
  };

  return (
    <div
      className={`h-full w-full bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center z-20 transition-opacity duration-300 ${
        props.value ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
      <div className="w-80 md:w-96 h-auto bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6 animate-fade-in-up">
        <div className="flex justify-end">
          <button
            className="text-white hover:text-red-400 transition-colors duration-200"
            onClick={props.onClickFn}>
            <CloseIcon />
          </button>
        </div>

        <div className="w-full flex flex-col items-center gap-4 mt-4">
          {message && (
            <p className="text-center text-sm font-medium text-green-300 bg-black/30 px-4 py-2 rounded-xl">
              {message}
            </p>
          )}

          <InputBox
            reference={titleRef}
            placeholder="Enter your Title"
            type="text"
            required={true}
          />
          <InputBox
            reference={linkRef}
            placeholder="Enter Link"
            type="text"
            required={true}
          />

          <div className="w-full px-4">
            <label htmlFor="type" className="text-white text-sm font-medium">
              Type:
            </label>
            <select
              id="type"
              className="w-full mt-1 bg-black/20 border border-white/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200">
              <option value="youtube">YouTube</option>
              <option value="tweet">Tweet</option>
            </select>
          </div>

          <Button
            text="Submit"
            variant="secondary"
            size="md"
            OnClickFn={onSubmit}
            extraClasses="w-full mt-2 rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
