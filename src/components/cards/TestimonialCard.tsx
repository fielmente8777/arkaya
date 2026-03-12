import { TestimonialDataType } from "@/@types/type";

const TestimonialCard: React.FC<TestimonialDataType["testimonials"][0]> = ({
  name,
  text: description,
}) => {
  return (
    <div className="space-y-4 text-center">
      <p className="text-light md:text-xl">{description}</p>
      <h3 className="text-secondary font-semibold text-[1.063rem]" >{name}</h3>
    </div>
  );
};

export default TestimonialCard;
