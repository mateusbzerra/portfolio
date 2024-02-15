import Image from "next/image";

interface Props {
  name: string;
  imageUrl: string;
  yearsOfExperience: string;
}

export const TechItem = ({ name, imageUrl, yearsOfExperience }: Props) => {
  return (
    <div className="flex max-w-fit rounded-full px-2 flex-row bg-cyan text-dark-blue py-1">
      <div className="flex flex-row">
        <Image
          className="mr-2 rounded-full w-6 h-6"
          width={24}
          height={24}
          alt={`${name}-icon`}
          src={imageUrl}
        />
        <p className="text-dark-blue text-md mr-2">{name}</p>
      </div>
      <div className="flex items-center justify-center w-6 h-6 rounded-full">
        <span className=" text-slate-700 text-sm font-normal">
          {yearsOfExperience}
        </span>
      </div>
    </div>
  );
};
