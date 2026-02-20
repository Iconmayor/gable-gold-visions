import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/construction", label: "Construction" },
  { to: "/roofing", label: "Roofing" },
  { to: "/interior-design", label: "Interior & Furniture" },
  { to: "/warehouse", label: "Materials Supply" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GOD IS ABLE Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden font-heading text-sm font-bold text-foreground sm:inline-block lg:text-base">
            GOD IS ABLE CONSTRUCTION 
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-md p-2 text-muted-foreground transition-colors hover:text-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground hover:text-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.to ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
