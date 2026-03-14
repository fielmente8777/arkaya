import LinkButton from "../buttons/LinkButton";
import PopUpFormBtn from "../buttons/PopUpFormBtn";
import Form2 from "../forms/Form2";
import { Container, Section } from "../sectionComponants";
import BannerSlider from "../sliders/BannerSlider";

interface BannerProps {
  title?: string;
  description?: string[];
  images: string[];
  actions?: {
    label: string;
    href: string;
    openPopUpForm?: boolean;
    [key: string]: unknown;
  }[];
  wrapperClassName?: string;
  contentWrapperClassName?: string;
  showForm?: boolean;
}
const Banner: React.FC<BannerProps> = ({
  title,
  images,
  description,
  actions,
  wrapperClassName,
  contentWrapperClassName,
  showForm = false,
}) => {
  return (
    <Section defaultPadding={false} className="relative">
      {images && (
        <BannerSlider images={images} wrapperClassName={wrapperClassName} />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-10" />
      <div className="absolute  inset-0 flex items-center justify-center w-full text-white z-20">
        <Container
          className={`flex flex-col items-center ${contentWrapperClassName || ""}`}
        >
          {title && (
            <h1
              className="text-3xl text-center md:text-[3.5rem]/[3.5rem] font-primary uppercase"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {description && (
            <p className="text-center md:text-lg mt-5">{description}</p>
          )}
          {actions && (
            <div className="lg:grid hidden grid-cols-2 md:gap-5 gap-4 mt-5">
              {actions.map((action, index) =>
                action.openPopUpForm ? (
                  <PopUpFormBtn
                    key={index}
                    cta={action.label}
                    className={`w-full items-center justify-center ${index === 0 ? "" : "bg-white! text-p2!"}`}
                  />
                ) : (
                  <LinkButton
                    key={index}
                    href={action.href}
                    label={action.label}
                    className={`w-full items-center justify-center ${index === 0 ? "" : "bg-white! text-p2!"}`}
                  />
                )
              )}
            </div>
          )}
        </Container>
        {actions && (
          <div className="grid lg:hidden absolute bottom-10 inset-x-0 px-6 grid-cols-2 md:gap-5 gap-4">
            {actions.map((action, index) =>
              action.openPopUpForm ? (
                <PopUpFormBtn
                  key={index}
                  cta={action.label}
                  className={`w-full items-center justify-center ${index === 0 ? "" : "bg-white! text-p2!"}`}
                />
              ) : (
                <LinkButton
                  key={index}
                  href={action.href}
                  label={action.label}
                  className={`w-full items-center justify-center ${index === 0 ? "" : "bg-white! text-p2!"}`}
                />
              )
            )}
          </div>
        )}

        {showForm && (
          <div className="absolute bottom-12 inset-x-0 w-full z-10 md:block hidden">
            <Container>
              <Form2 />
            </Container>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Banner;
