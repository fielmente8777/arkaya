import { AdventureDataType } from "@/@types/type";
import Image from "next/image";

export const AdventureCard: React.FC<AdventureDataType["items"][0]> = ({
  title,
  image,
}) => {
  return (
    <div>
      <div className="w-full relative aspect-4/4.5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-lg text-center text-p2 mt-4">{title}</h3>
    </div>
  );
};