import LinkButton from "@/components/buttons/LinkButton";

interface Props {
  className?: string;
}

const ReserveCTA = ({ className = "" }: Props) => {
  return (
    <LinkButton
      label="Reserve Table"
      href="/"
      className={`bg-p1 text-white px-6 py-2 ${className}`}
    />
  );
};

export default ReserveCTA;