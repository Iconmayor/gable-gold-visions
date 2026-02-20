import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

const roofingMaterials = ["Aluminium Sheets", "Stone Coated Sheets", "Roofing Nails", "Ridge Caps", "Roof Sealants"];

const buildingMaterials = [
  "Cement", "Granite", "Sharp Sand", "Blocks", "Iron Rods", "Binding Wire",
  "Tiles", "Paints", "Doors", "Windows", "Plumbing Materials",
  "Electrical Materials", "POP Materials", "Ceiling Boards", "Screws & Fasteners",
];

const WarehousePage = () => (
  <Layout>
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container text-center">
        <h1 className="font-heading text-3xl font-bold md:text-5xl">
          Building Materials Warehouse in <span className="text-accent">Ibadan</span>
        </h1>
        <p className="mt-4 text-base opacity-80">Bulk orders available for contractors and developers.</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">Roofing Materials</h2>
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {roofingMaterials.map((m) => (
              <div key={m} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Package className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-card-foreground">{m}</span>
              </div>
            ))}
          </div>

          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">Building Materials</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {buildingMaterials.map((m) => (
              <div key={m} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Package className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-card-foreground">{m}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-relaxed text-muted-foreground">
            We supply quality building materials at competitive prices. Bulk orders available
            for contractors and developers across Ibadan and Lagos.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default WarehousePage;
