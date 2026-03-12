import Image from "next/image";
import LinkButton, { ArrowIcon } from "../buttons/LinkButton";
import Link from "next/link";
import { contact } from "@/utils/constent";
import { FillCallIcon } from "@/utils/icons";

const LandingNavbar = () => {
  return (
    <header className="max_screen_width py-3.5">
      <nav className="max_width flex items-center justify-between">
        <div className="relative md:w-50 w-44 aspect-[4/1.45]">
          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </div>

        <div className="md:block hidden">
          <LinkButton
            href={contact.WhatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            label="Book Now"
            className="bg-white text-primary rounded-full uppercase"
          />
        </div>
        <div className="md:hidden block">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`tel:${contact.phone[0]}`}
            className="w-fit border-secondary flex items-center gap-2 text-secondary text-lg md:px-8 md:py-2 p-4 transition-all duration-300 ease-in-out hover:scale-95 rounded-full hover:shadow-lg"
          >
            <span className="sr-only">Book Now</span>

            <span className="md:hidden">
              <FillCallIcon size={30} />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
