"use client";
import { contact } from "@/utils/constent";
import { useState } from "react";

const NewsLetter = () => {
  const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const [email, setEmail] = useState("");

  const handleNewsletter = async () => {
    if (!email) return;

    const data = {
      Domain: contact.formDomain,
      email,
    };

    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const result = await response.json();
      console.log("Newsletter subscribed:", result);

      setEmail("");
    } catch (error) {
      console.error("Newsletter error:", error);
    }
  };

  return (
    <div className="flex border-b border-white/50">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-1 py-2 outline-none focus-outline-none bg-transparent placeholder:text-white/70 text-white"
        placeholder="Enter email here*"
      />
      <button
        type="button"
        onClick={handleNewsletter}
        className="cursor-pointer aspect-4/6 flex items-center justify-end"
      >
        <span className="sr-only">Subscribe</span>
        <RightArrow />
      </button>
    </div>
  );
};

export default NewsLetter;

export const RightArrow = () => {
  return (
    <svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.58105 0.856934L6.23145 0.206543C6.50684 -0.0688476 6.95215 -0.0688476 7.22461 0.206543L12.9199 5.89893C13.1953 6.17432 13.1953 6.61963 12.9199 6.89209L7.22461 12.5874C6.94922 12.8628 6.50391 12.8628 6.23145 12.5874L5.58105 11.937C5.30273 11.6587 5.30859 11.2046 5.59277 10.9321L9.12305 7.56885H0.703125C0.313477 7.56885 0 7.25537 0 6.86572V5.92822C0 5.53857 0.313477 5.2251 0.703125 5.2251H9.12305L5.59277 1.86182C5.30566 1.58936 5.2998 1.13525 5.58105 0.856934Z"
        fill="white"
      />
    </svg>
  );
};
