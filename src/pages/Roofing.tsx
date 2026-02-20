import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const services = [
  "Aluminium Roofing Sheets",
  "Stone-Coated Roofing Sheets",
  "Longspan Aluminium Roofing",
  "Step Tiles Roofing",
  "Roof Installation",
  "Roof Repairs",
  "Roof Trusses Fabrication",
  "Roofing Maintenance",
];

const Roofing = () => (
  <Layout>
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-bold md:text-5xl">
          Professional Roofing Contractors in <span className="text-accent">Ibadan & Lagos</span>
        </h1>
        <p className="mt-4 text-base opacity-80">Premium roofing materials built for durability and weather resistance.</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">Roofing Services</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-card-foreground">{s}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            We supply and install premium roofing materials built for durability and weather resistance.
            Whether you need a new roof or repairs, our team delivers exceptional quality every time.
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

export default Roofing;
