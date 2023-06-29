import Image from "next/image";
import { GithubIcon, MailIcon, LinkedinIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-fit md:items-center flex-col bg-shape bg-no-repeat bg-cover bg-center md:min-h-screen md:-mt-36 md:bg-shape-full">
      <div className="flex flex-1 flex-col-reverse items-center ml-6 mr-6 md:flex-row md:space-x-24 md:justify-center">
        <div className="flex flex-col">
          <div className="mb-24 md:mb-6">
            <h1 className="text-7xl md:text-8xl font-extrabold mb-8 md:mb-10">
              Hi :)
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold md:mb-2">
              I&apos;m <span className="text-cyan">Mateus Bezerra</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Front-end Engineer
            </h3>
          </div>
          <div className="flex space-x-5 justify-center mb-12 md:mb-0 md:justify-start">
            <a
              target="_blank"
              href="https://github.com/mateusbzerra"
              className="hover:text-gray-600"
            >
              <GithubIcon size={36} />
            </a>
            <a
              target="_blank"
              href="mailto:dev@mateusbezerra.com"
              className="hover:text-gray-600"
            >
              <MailIcon size={36} />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/mateusbzerra"
              className="hover:text-gray-600 "
            >
              <LinkedinIcon size={36} />
            </a>
          </div>
        </div>
        <Image
          className="rounded-[8rem] mb-12 md:mb-0"
          width={400}
          height={400}
          alt="Avatar"
          src="/picofme.png"
        />
      </div>
    </main>
  );
}
