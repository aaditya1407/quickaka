import Container from "../layout/Container";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/services";

const Categories = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
            37+ Services, One Platform
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Everything your Bhopal home needs — from repairs and cleaning to
            events and legal support — all under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              description={cat.description}
              services={cat.services}
              icon={cat.icon}
              color={cat.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
