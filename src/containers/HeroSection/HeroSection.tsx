import Image from "next/image";
import { TechItem } from "./components/TechItem/TechItem";
import { getTechStackList } from "@/data/get-tech-stack-list";
import { SocialButton } from "@/components/SocialButton/SocialButton";

export const HeroSection = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2019;
  const techStackList = getTechStackList({ currentYear });

  return (
    <section className="flex h-full mb-36 md:mb-15 mt-12 min-h-screen md:items-center flex-col  bg-no-repeat bg-cover bg-center md:mt-0  ">
      <div className="flex  flex-1 flex-col-reverse items-center ml-6 mr-6 md:flex-row md:space-x-24 md:justify-center">
        <div className="bg-blue w-full md:w-7/12 min-h-full absolute left-0 top-0 z-0 rounded-br-[30vh] rounded-tr-[30vh]" />
        <div className="flex flex-col z-10">
          <div className="mb-16 md:mb-12">
            <h1 className="text-7xl md:text-8xl font-extrabold mb-8 md:mb-10">
              Hi :)
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              I&apos;m <span className="text-cyan">Mateus Bezerra</span>
            </h2>
            <p className="text-xl max-w-md font-normal">
              {yearsOfExperience}-year experienced{" "}
              <span className="text-cyan">Software Engineer</span> with working
              experience in <b>Front-end</b>, <b>Back-end</b> and <b>Mobile </b>
              development.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-2xl md:mb-3 mb-6">Tech Stack:</h1>
            <div className="flex flex-wrap gap-3 max-w-xl">
              {techStackList.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-12 md:mb-0 z-10">
          <Image
            className="mb-6 md:w-96 md:min-w-96 lg:h-96 w-64 h-64"
            width={400}
            height={400}
            alt="Avatar"
            src="/picofme.png"
          />
          <div className="flex flex-row justify-center gap-4">
            <SocialButton
              label="Github"
              color="#151515"
              url="https://github.com/mateusbzerra"
              iconUrl="/icons/github-icon.svg"
            />
            <SocialButton
              label="LinkedIn"
              color="#0E76A8"
              url="https://linkedin.com/in/mateusbzerra"
              iconUrl="/icons/linkedin-icon.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
