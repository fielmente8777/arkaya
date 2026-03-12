import Accordion from "../accordion/Accordion";
import { SectionHeading } from "../typography";
import SectionWithContainer from "./SectionWithContainer";
interface FaqType {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}
const Faq: React.FC<FaqType> = ({ title, faqs }) => {
  return (
    <SectionWithContainer sectionClassName="bg-white" containerClassName="grid md:grid-cols-[1.1fr_1fr] gap-14">
      <SectionHeading title={title} />
      <div className="">
        {faqs.map((faq, index) => (
          <Accordion {...faq} key={index} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Faq;
