import Image from "next/image";

interface Props {
  label: string;
  color: string;
  url: string;
}

export const SocialButton = ({ label, color, url }: Props) => {
  return (
    <a
      className="flex flex-row max-w-fit px-4 py-2 rounded-3xl hover:opacity-70"
      style={{ backgroundColor: color }}
      href={url}
      target="_blank"
    >
      <Image
        alt="external link"
        width={24}
        height={24}
        src="/external-link-icon.svg"
      />
      <span>{label}</span>
    </a>
  );
};
