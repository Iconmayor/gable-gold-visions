import { Link } from "react-router-dom";
import { Building2, Home, Paintbrush, Warehouse, ShieldCheck, Clock, DollarSign, Users, Award } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: Building2, title: "Building Construction", to: "/construction" },
  { icon: Home, title: "Roofing Installation & Materials", to: "/roofing" },
  { icon: Paintbrush, title: "Interior Design", to: "/interior-design" },
  { icon: Award, title: "Custom Furniture Production", to: "/interior-design" },
  { icon: Warehouse, title: "Building Materials Supply", to: "/warehouse" },
];

const whyUs = [
  { icon: Users, title: "Experienced Professionals" },
  { icon: ShieldCheck, title: "High-Quality Materials" },
  { icon: DollarSign, title: "Affordable Pricing" },
  { icon: Clock, title: "Timely Project Delivery" },
  { icon: Award, title: "Trusted in Ibadan & Lagos" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjOGE0NWEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2Mkgy NHYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-heading text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Reliable Construction & Premium Roofing Experts.{" "}
            <span className="text-accent"></span>
          </h1>
          <p className="mb-8 text-base leading-relaxed opacity-90 md:text-lg">
            GOD IS ABLE BUILDING CONTRACTOR SERVICES LTD delivers quality building construction,
            roofing systems, luxury furniture, interior design, and warehouse building materials supply.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex rounded-md bg-accent px-8 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/2349167587995?text=Hello%2C%20I%20want%20to%20make%20enquiries%20about%20your%20construction%20and%20roofing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-primary-foreground/30 px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-2xl font-bold text-foreground md:text-4xl">
            Who We Are
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We are a trusted Nigerian construction and furniture company providing residential and
            commercial building solutions. From roofing installation to interior finishing and premium
            furniture production, we deliver durability, elegance, and excellence.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>

    {/* Core Services */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-4xl">
          Our Core Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg"
            >
              <s.icon className="mx-auto mb-4 h-10 w-10 text-accent transition-transform group-hover:scale-110" />
              <h3 className="font-heading text-sm font-semibold text-card-foreground">{s.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-4xl">
          Why Choose Us
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w) => (
            <div key={w.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <w.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">{w.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
