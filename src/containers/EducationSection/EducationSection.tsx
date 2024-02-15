import { CardWithIcon } from "@/components/CardWithIcon/CardWithIcon";

export const EducationSection = () => {
  return (
    <section className="w-full">
      <h1 className="font-extrabold text-5xl pb-12">Education</h1>
      <CardWithIcon
        title="Computer Science"
        subTitle="Bachelor's Degree"
        description="Undergraduate at Universidade Federal do Amapá, concluded in March 2023."
        iconUrl="/icons/student-cap-icon.svg"
        dateRange="2016 - 2023"
      />
    </section>
  );
};
