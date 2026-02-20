import Layout from "@/components/Layout";
import { Building2, Home, Paintbrush, Armchair, Warehouse } from "lucide-react";

const categories = [
  { icon: Home, title: "Roofing Projects", count: 6 },
  { icon: Building2, title: "Completed Buildings", count: 6 },
  { icon: Paintbrush, title: "Interior Design Work", count: 6 },
  { icon: Armchair, title: "Furniture Production", count: 6 },
  { icon: Warehouse, title: "Warehouse Stock", count: 6 },
];

const Projects = () => (
  <Layout>
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-bold md:text-5xl">
          Our <span className="text-accent">Projects</span> & Showroom
        </h1>
        <p className="mt-4 text-base opacity-80">A showcase of our quality craftsmanship across Nigeria.</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        {categories.map((cat) => (
          <div key={cat.title} className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <cat.icon className="h-6 w-6 text-accent" />
              <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">{cat.title}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: cat.count }).map((_, i) => (
                <div
                  key={i}
                  className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                >
                  <div className="flex h-full items-center justify-center">
                    <cat.icon className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium text-primary-foreground">
                      {cat.title} — Project {i + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-center text-sm text-muted-foreground">
          More project photos coming soon. Contact us to see our full portfolio.
        </p>
      </div>
    </section>
  </Layout>
);

export default Projects;
