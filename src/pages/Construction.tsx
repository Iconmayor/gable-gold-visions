import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const services = [
  "Residential Building Construction",
  "Commercial Building Projects",
  "Renovations & Remodeling",
  "Structural Engineering Services",
  "Foundation & Concrete Works",
  "Plastering & Finishing",
  "Site Supervision",
];

const Construction = () => (
  <Layout>
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-bold md:text-5xl">
          Building Construction Company  <span className="text-accent"></span>
        </h1>
        <p className="mt-4 text-base opacity-80">Quality craftsmanship and structural integrity in every project.</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">Our Construction Services</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-card-foreground">{s}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            We ensure quality craftsmanship and structural integrity in every project. Our experienced
            team handles all aspects of building construction from foundation to finishing, delivering
            projects on time and within budget.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Construction;
