import Image from "next/image";
import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;

  level?: 1 | 2 | 3 | 4 | 5 | 6; // base level (title)
  subLevel?: 2 | 3 | 4 | 5 | 6; // optional override

  textCenter?: boolean;
  mdTextCenter?: boolean;
  smTextCenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  line?: boolean;
  line2?: boolean;
  logo?: boolean;
  fontPrimary?: boolean;
}

const SectionHeading: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  line = false,
  line2 = false,
  textCenter = line ? true : false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  mdTextCenter = false,
  wrapperClassName = "",
  titleClassName = "",
  subTitleClassName = "",
  logo = false,
  level,
  subLevel,
  fontPrimary = false,
}) => {
  const titleLevel = level ?? 2;
  const subTitleLevel = subLevel ?? Math.min(titleLevel + 1, 6);

  return (
    <div className={`flex flex-col gap-2 line ${wrapperClassName}`}>
      <div
        className={`${line && "flex items-center flex-col gap-7 mx-auto"} ${logo && "flex items-center gap-4 mx-auto"}`}
      >
        {title && (
          <Headings
            level={titleLevel}
            heading={title}
            className={`${titleClassName} ${
              mdTextCenter ? "md:text-center" : ""
            } ${textCenter ? "text-center" : ""} ${
              smTextCenter ? "max-md:text-center" : ""
            } ${
              titleColor ? `text-${titleColor}` : "text-primary"
            } md:text-5xl/tight text-2xl font-primary uppercase ${fontPrimary ? "primary-font" : "secondary-font"}`}
          />
        )}
        {logo && (
          <div className="w-16 aspect-square relative">
            <Image
              src={"/logo-2.png"}
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
        )}
        {line && (
          <span className="lg:block hidden">
            <LineIcon />
          </span>
        )}
      </div>
      {subTitle && (
        <div className={`${textCenter && "flex items-center gap-7 mx-auto "}`}>
          {line2 && (
            <span className="">
              <LineIcon2 />
            </span>
          )}

          <Headings
            level={subTitleLevel}
            className={`text-[1.063rem] lg:text-nowrap ${fontPrimary ? "primary-font" : "secondary-font"} ${subTitleClassName} ${subTitleColor ? `text-${subTitleColor}` : "text-primary"} ${
              mdTextCenter ? "md:text-center" : ""
            } ${textCenter ? "text-center mx-auto" : ""} ${
              smTextCenter ? "max-md:text-center" : ""
            }`}
            heading={subTitle}
          />

          {line2 && (
            <span className="rotate-180">
              <LineIcon2 />
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;

export const LineIcon = ({ ...props }) => (
  <svg
    width={363}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_149_2497)">
      <path
        d="M325.755 9.193l-36.554-.346c-12.179-.122-24.357-.382-36.545-.226-6.089.078-12.178.165-18.268.347l-1.967.06a2.333 2.333 0 00-.977-1.125 2.836 2.836 0 00-1.544-.396 2.793 2.793 0 00-1.509.487c-.432.3-.743.715-.889 1.182l-2.262.07c-2.764.13-5.519.225-8.283.372-.045-1-.506-1.952-1.295-2.673-.788-.72-1.85-1.161-2.983-1.237-1.133-.076-2.258.217-3.161.825-.904.607-1.522 1.486-1.739 2.47h-9.739a4.725 4.725 0 00-.855-2.024 5.465 5.465 0 00-1.734-1.527 6.247 6.247 0 00-2.296-.753 6.497 6.497 0 00-2.443.158c-.978-1.472-2.375-2.692-4.053-3.54a12.259 12.259 0 00-5.514-1.295c-1.934 0-3.835.447-5.513 1.295-1.679.848-3.076 2.069-4.053 3.54a6.486 6.486 0 00-1.555-.208c-1.389.017-2.726.466-3.777 1.267-1.051.801-1.748 1.903-1.968 3.113h-9.728c-.217-.984-.836-1.863-1.739-2.47-.903-.608-2.029-.901-3.161-.825-1.133.076-2.195.516-2.984 1.237-.789.721-1.249 1.673-1.294 2.673-2.765-.147-5.519-.242-8.283-.373l-1.368-.043a2.27 2.27 0 00-.888-1.181c-.431-.3-.96-.472-1.509-.488a2.832 2.832 0 00-1.544.396 2.328 2.328 0 00-.977 1.126l-2.823-.087c-6.09-.182-12.179-.269-18.268-.347-12.188-.156-24.366.104-36.554.226l-36.614.32L0 9.688v.225l36.545.469 36.545.347c12.188.12 24.366.381 36.554.225 6.089-.078 12.179-.165 18.268-.347l2.823-.087c.181.458.524.852.977 1.126.454.274.994.413 1.544.396a2.794 2.794 0 001.509-.487c.432-.3.743-.715.888-1.182h1.368c2.764-.13 5.518-.226 8.283-.373.045 1 .506 1.952 1.294 2.673.789.721 1.851 1.162 2.984 1.238 1.133.075 2.258-.218 3.161-.826.903-.607 1.522-1.486 1.739-2.47h9.797c.215 1.22.915 2.333 1.974 3.14 1.06.808 2.41 1.256 3.811 1.266a6.482 6.482 0 001.554-.208c.977 1.472 2.375 2.692 4.053 3.54a12.255 12.255 0 005.513 1.295c1.935 0 3.836-.446 5.514-1.294 1.678-.849 3.075-2.07 4.053-3.54a6.501 6.501 0 002.459.156 6.247 6.247 0 002.307-.765 5.469 5.469 0 001.733-1.546c.444-.62.73-1.317.84-2.043h9.738c.217.983.835 1.862 1.739 2.47.903.607 2.028.9 3.161.825 1.133-.076 2.195-.517 2.984-1.238.788-.72 1.249-1.672 1.294-2.673 2.764.147 5.519.243 8.283.373l2.263.07c.151.462.464.871.895 1.168.431.296.957.464 1.503.48a2.848 2.848 0 001.537-.39c.453-.27.797-.658.983-1.111l1.968.06c6.089.182 12.178.27 18.267.347 12.188.156 24.367-.104 36.545-.225l36.554-.347 36.545-.468V9.73l-36.594-.538zM149.957 12.35c-.572 0-1.132-.15-1.607-.43a2.647 2.647 0 01-1.065-1.144 2.268 2.268 0 01-.165-1.473c.112-.495.387-.949.792-1.305.404-.357.919-.6 1.48-.698a3.254 3.254 0 011.671.145c.529.193.981.52 1.298.939.318.42.488.912.488 1.416 0 .677-.305 1.325-.847 1.803-.543.479-1.278.747-2.045.747zm31.193 5.707a10.394 10.394 0 01-4.553-1.048c-1.392-.685-2.564-1.67-3.405-2.864a5.473 5.473 0 001.972-1.865c.47-.758.717-1.607.717-2.47 0-.864-.247-1.714-.717-2.472a5.473 5.473 0 00-1.972-1.865c.837-1.196 2.007-2.184 3.399-2.869a10.343 10.343 0 014.554-1.044c1.594 0 3.162.36 4.554 1.044 1.392.685 2.562 1.673 3.399 2.869a5.519 5.519 0 00-1.938 1.876 4.727 4.727 0 00-.701 2.46c0 .859.241 1.704.701 2.46a5.518 5.518 0 001.938 1.876c-.838 1.194-2.008 2.18-3.398 2.865a10.366 10.366 0 01-4.55 1.047zm31.193-5.707a3.17 3.17 0 01-1.606-.43 2.641 2.641 0 01-1.065-1.144 2.268 2.268 0 01-.165-1.473c.112-.495.387-.949.791-1.305.405-.357.92-.6 1.481-.698a3.254 3.254 0 011.671.145c.529.193.98.52 1.298.939.318.42.488.912.488 1.416-.003.676-.309 1.323-.85 1.8-.542.479-1.276.748-2.043.75z"
        fill="#E94128"
      />
    </g>
    <defs>
      <clipPath id="clip0_149_2497">
        <path
          fill="#fff"
          transform="rotate(-90 9.8 9.8)"
          d="M0 0H19.6V362.3H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export const LineIcon2 = ({ ...props }) => (
  <svg
    width={220}
    height={1}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      transform="matrix(-1 0 0 1 220 0)"
      fill="url(#paint0_linear_163_1926)"
      d="M0 0H220V1H0z"
    />
    <defs>
      <linearGradient
        id="paint0_linear_163_1926"
        x1={0}
        y1={0.5}
        x2={220}
        y2={0.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E94128" />
        <stop offset={0.928} stopColor="#FCF8F7" />
      </linearGradient>
    </defs>
  </svg>
);
