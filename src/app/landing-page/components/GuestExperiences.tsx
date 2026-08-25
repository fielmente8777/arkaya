import Testimonials from "@/app/(home)/Components/Testimonials";
import { TestimonialDataType } from "@/@types/type";

const GuestExperiences: React.FC<TestimonialDataType> = (props) => {
  return <Testimonials {...props} />;
};

export default GuestExperiences;
