"use client";
import { useWebContext } from "@/context-api/WebContext";

const PopUpFormBtn = ({ cta }: { cta: string }) => {
  const { setIsOpenPopUpForm } = useWebContext();
  return (
    <button
      onClick={() => setIsOpenPopUpForm(true)}
      className="text-primary border secondary-font italic text-lg font-medium flex items-center gap-2 md:px-5 px-4 md:py-3 py-1 rounded-full bg-white active:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg mx-auto"
    >
      {cta}
      <ArrowIcon />
    </button>
  );
};

export default PopUpFormBtn;

export const ArrowIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3L14 8M14 8L9 13M14 8H2"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
