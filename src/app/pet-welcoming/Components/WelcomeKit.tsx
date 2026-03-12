import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface WelcomeKitProps {
  title: string;
  description: string[];
}

const WelcomeKit: React.FC<WelcomeKitProps> = ({ title, description }) => {
  return (
    <SectionWithContainer>
      <SectionHeading title={title} line />
      <div className="mt-8 max-w-4xl mx-auto text-center bg-p4 border-l-8 border-p1">
        {description.map((item, index) => (
          <p key={index} className="md:text-3xl text-p2 px-8 py-16 font-primary">
            {item}
          </p>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WelcomeKit;
