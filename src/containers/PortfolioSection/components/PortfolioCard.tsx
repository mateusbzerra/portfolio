import Image from "next/image";

interface Props {
  url: string;
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
}

export const PortfolioCard = ({
  url,
  imageUrl,
  title,
  description,
  techStack,
}: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-row decoration-transparent max-w-3xl items-center justify-start bg-blue px-5 py-8 rounded-3xl border-2 border-blue hover:border-2 hover:border-solid hover:border-sky-100"
    >
      <Image
        alt="certificate icon"
        width={90}
        height={90}
        src={imageUrl}
        className="mr-8 rounded-2xl"
      />
      <div>
        <h3 className=" text-cyan font-bold text-xl">{title}</h3>
        <p className="font-light text-sm mb-3 mt-2">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {techStack.map((tech) => (
            <span
              key={String(tech)}
              className="block px-2 py-1 bg-slate-600 text-slate-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
