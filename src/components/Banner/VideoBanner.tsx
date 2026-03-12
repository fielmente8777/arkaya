import Link from "next/link";
import PopUpFormBtn from "../buttons/PopUpFormBtn";
import LandingNavbar from "../navbar/LandingNavbar";
import { LazyLoadedVideo } from "../Video";
import { FillLocationIcon } from "../../utils/icons";

interface BannerProps {
  video: {
    src: string;
    poster: string;
  };
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  showMapText?: string;
}

const VideoBanner: React.FC<BannerProps> = ({
  video: { src, poster },
  title,
  subtitle,
  buttonText,
  href,
  showMapText,
}) => {
  const hasContent = title || subtitle || buttonText || showMapText;

  return (
    <section
      className={`max_screen_width md:aspect-[4/1.85]  relative overflow-hidden  ${!hasContent ? "md:rounded-b-[56px] rounded-b-[48px] aspect-square" : "aspect-4/9"}`}
    >
      {/* Video */}
      <LazyLoadedVideo
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        pauseOnScroll
        controls={false}
      />

      {/* Dark Overlay */}
      {hasContent && <div className="absolute inset-0 bg-black/40 z-10" />}

      {/* Navbar */}
      {!hasContent && (
        <div className="absolute top-0 inset-x-0 z-20">
          <LandingNavbar />
        </div>
      )}

      {/* Center Content */}
      {hasContent && (
        <div className="absolute inset-0 z-20 flex flex-col gap-6 items-center justify-center text-center text-white px-6">
          {title && (
            <h1 className="text-3xl md:text-6xl font-semibold secondary-font ">{title}</h1>
          )}

          {subtitle && (
            <p className="mt-3 text-sm md:text-xl">{subtitle}</p>
          )}

          {buttonText && <PopUpFormBtn cta={buttonText} />}

          {showMapText && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={href ?? "#"}
              className="mt-4 text-sm flex items-center"
            >
              <span>
                <FillLocationIcon />
              </span>{" "}
              {showMapText ?? ""}
            </Link>
          )}
        </div>
      )}
    </section>
  );
};

export default VideoBanner;
