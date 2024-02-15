import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  iconUrl: string;
  dateRange: string;
  url?: string;
}

export const CardWithIcon = ({
  title,
  subTitle,
  description,
  iconUrl,
  dateRange,
  url,
}: Props) => {
  return (
    <div className="flex flex-row gap-5 bg-blue rounded-3xl">
      <div className="flex h-[inherit] w-40 bg-cyan rounded-3xl items-center justify-center">
        <Image alt={`icon ${iconUrl}`} width={60} height={60} src={iconUrl} />
      </div>
      <div className=" w-full md:max-w-[16rem] py-5">
        <h2 className=" text-cyan font-bold text-xl mb-1">{title}</h2>
        <h4 className="font-medium text-md mb-1">
          {subTitle} | <span className="text-sm">{dateRange}</span>
        </h4>
        <p className="font-light text-sm">
          {description}
          {url && (
            <a className="text-sm text-cyan" href={url} target="_blank">
              {` ...See More`}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};
