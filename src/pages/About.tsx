import Layout from "@/components/Layout";
import { Building2, Home, Paintbrush, Warehouse, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const specializations = [
  { icon: Building2, text: "Residential & Commercial Construction" },
  { icon: Home, text: "Modern Roofing Solutions" },
  { icon: Paintbrush, text: "Interior Space Transformation" },
  { icon: Award, text: "Furniture Manufacturing" },
  { icon: Warehouse, text: "Building Materials Warehouse Distribution" },
];

const About = () => (
  <Layout>
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-bold md:text-5xl">
          About <span className="text-accent">GOD IS ABLE</span>
        </h1>
        <p className="mt-4 text-base opacity-80">Building Contractor Services Ltd</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div>
            <img src={logo} alt="GOD IS ABLE Logo" className="mx-auto h-64 w-64 rounded-2xl object-cover shadow-lg" />
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">Our Story</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We are a professional construction and furniture company based in Sanyo Area, Ibadan,
              serving clients across Ibadan and Lagos. Our mission is to provide reliable construction
              services and premium materials that meet international standards.
            </p>
            <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">Our Vision</h3>
            <p className="leading-relaxed text-muted-foreground">
              To become one of Nigeria's most trusted construction and roofing brands.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-4xl">
          We Specialize In
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((s) => (
            <div key={s.text} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
              <s.icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <span className="text-sm font-medium text-card-foreground">{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
