interface Props {
  currentYear: number;
}
export const getTechStackList = ({ currentYear }: Props) => [
  {
    name: "HTML",
    imageUrl: "/tech-icons/html-icon.svg",
    yearsOfExperience: `${currentYear - 2016}y`,
  },
  {
    name: "CSS",
    imageUrl: "/tech-icons/css-icon.svg",
    yearsOfExperience: `${currentYear - 2016}y`,
  },
  {
    name: "React",
    imageUrl: "/tech-icons/react-icon.svg",
    yearsOfExperience: `${currentYear - 2019}y`,
  },
  {
    name: "React Native",
    imageUrl: "/tech-icons/react-icon.svg",
    yearsOfExperience: `${currentYear - 2019}y`,
  },
  {
    name: "NodeJS",
    imageUrl: "/tech-icons/node-icon.svg",
    yearsOfExperience: `${currentYear - 2019}y`,
  },
  {
    name: "Styled Components",
    imageUrl: "/tech-icons/styled-components-icon.svg",
    yearsOfExperience: `${currentYear - 2019}y`,
  },
  {
    name: "Typescript",
    imageUrl: "/tech-icons/typescript-icon.svg",
    yearsOfExperience: `${currentYear - 2020}y`,
  },
  {
    name: "Sass",
    imageUrl: "/tech-icons/sass-icon.svg",
    yearsOfExperience: `${currentYear - 2020}y`,
  },
  {
    name: "Django Rest Framework",
    imageUrl: "/tech-icons/django-icon.svg",
    yearsOfExperience: "<1y",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "/tech-icons/tailwind-icon.svg",
    yearsOfExperience: "<1y",
  },
];
