import { CardWithIcon } from "@/components/CardWithIcon/CardWithIcon";

export const AwardsSection = () => {
  return (
    <section className="w-full">
      <h1 className="font-extrabold text-5xl pb-12">Awards</h1>
      <CardWithIcon
        title="Best Mobile App (SafeGirl)"
        subTitle="Campus Mobile"
        description="Winner in the Diversity category in the seventh edition of the Campus Mobile competition"
        iconUrl="/icons/award-icon.svg"
        dateRange="2019"
        url="https://www.institutoclaro.org.br/nossas-novidades/participantes-da-7a-edicao-do-campus-mobile-criam-app-para-combater-assedio-contra-mulheres/"
      />
    </section>
  );
};
