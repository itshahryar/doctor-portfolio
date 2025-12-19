import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", section: true },
  { id: "education", label: "Education", path: "/education" },
  { id: "certifications", label: "Certifications & Seminars", path: "/certifications-seminars" },
  { id: "skills", label: "Skills & Services", path: "/skills-services" },
  { id: "research", label: "Research & Blogs", path: "/research-blogs" },
  { id: "testimonials", label: "Testimonials", path: "/testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = (item) => {
    if (item.section) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection("about"), 100);
      } else {
        scrollToSection("about");
      }
    } else {
      navigate(item.path);
    }
    setMenuOpen(false);
  };

  return (
<header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
  <nav className="flex w-full items-center justify-between px-6 py-3">
    
    {/* Left: Logo */}
    <motion.div
      className="flex items-center gap-3 cursor-pointer"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => navigate("/")}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
        <FaStethoscope />
      </div>
      <span className="text-sm font-semibold text-slate-900">
        Medical Journey
      </span>
    </motion.div>

    {/* Right: Menu */}
    <div className="hidden items-center gap-6 sm:flex">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className="cursor-pointer text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline underline-offset-8"
        >
          {item.label}
        </button>
      ))}

      <button
        onClick={() => navigate("/appointment")}
        className="rounded-full bg-gradient-to-r cursor-pointer from-emerald-500 to-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md"
      >
        Book Appointment
      </button>
    </div>

  </nav>
</header>

  );
}


