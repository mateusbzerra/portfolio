import Image from "next/image";

interface Props {
  label: string;
  color: string;
  iconUrl: string;
  url: string;
}

export const SocialButton = ({ label, color, url, iconUrl }: Props) => {
  return (
    <a
      className="flex flex-row items-center max-w-fit px-4 py-2 rounded-3xl hover:opacity-70 border-2 border-solid border-gray-300"
      style={{ backgroundColor: color }}
      href={url}
      target="_blank"
    >
      <Image
        className="mr-3"
        alt="external link"
        width={24}
        height={24}
        src={iconUrl}
      />
      <span className="block text-md font-semibold h-6">{label}</span>
    </a>
  );
};
