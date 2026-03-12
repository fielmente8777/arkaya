import LinkButton from "../buttons/LinkButton";
import { Container, Section } from "../sectionComponants";
import BannerSlider from "../sliders/BannerSlider";

interface BannerProps {
  title?: string;
  description?: string[];
  images: string[];
  actions?: {
    label: string;
    href: string;
  }[];
  wrapperClassName?: string;
  contentWrapperClassName?: string;
}
const Banner: React.FC<BannerProps> = ({
  title,
  images,
  description,
  actions,
  wrapperClassName,
  contentWrapperClassName,
}) => {
  return (
    <Section defaultPadding={false} className="relative">
      {images && <BannerSlider images={images} wrapperClassName={wrapperClassName} />}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-10" />
      <div className="absolute  inset-0 flex items-center justify-center w-full text-white z-20">
        <Container
          className={`flex flex-col items-center ${contentWrapperClassName || ""}`}
        >
          {title && (
            <h1
              className="text-2xl text-center md:text-[3.5rem]/[3.5rem] font-primary uppercase"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {description && (
            <p className="text-center md:text-lg mt-5">
              {description}
            </p>
          )}
          {actions && (
            <div className="grid grid-cols-2 gap-5 mt-5">
              {actions.map((action, index) => (
                <LinkButton
                  key={index}
                  href={action.href}
                  label={action.label}
                  className={`w-full items-center justify-center ${index === 0 ? "" : "bg-white! text-p2!"}`}
                />
              ))}
            </div>
          )}
        </Container>
      </div>
    </Section>
  );
};

export default Banner;
