import { getPortfolioList } from "@/data/get-portfolio-list";
import { PortfolioCard } from "./components/PortfolioCard";

export const PortfolioSection = () => {
  const portfolioItems = getPortfolioList();
  return (
    <section className="pb-16">
      <h2 className="font-extrabold text-5xl pb-12">Portfolio</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioItems.map((portfolio) => (
          <PortfolioCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </section>
  );
};
