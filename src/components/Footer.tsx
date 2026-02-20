import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/God is able logo .png";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading text-sm font-bold">GOD IS ABLE CONSTRUCTION</span>
          </div>
          <p className="text-sm opacity-80">
            Reliable construction, roofing, interior design & building materials supply in Ibadan & Lagos, Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-accent">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { to: "/about", label: "About Us" },
              { to: "/construction", label: "Construction" },
              { to: "/roofing", label: "Roofing Services" },
              { to: "/interior-design", label: "Interior & Furniture" },
              { to: "/warehouse", label: "Materials Supply" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-accent">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Sanyo Area, Ibadan, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              +2348060731865
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              +2349167587995
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              iconmayor1@gmail.com
            </li>
          </ul>
        </div>

        {/* WhatsApp */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-accent">Connect With Us</h3>
          <a
            href="https://wa.me/2349167587995?text=Hello%2C%20I%20want%20to%20make%20enquiries%20about%20your%20construction%20and%20roofing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} GOD IS ABLE Building Contractor Services Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
