import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaStethoscope, FaBars, FaTimes } from "react-icons/fa";
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
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <nav className="flex w-full items-center justify-between px-6 py-3">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
              <FaStethoscope />
            </div>
            <span className="text-sm font-semibold text-slate-900">
              Medical Journey
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline underline-offset-8"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => navigate("/appointment")}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-slate-800"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <span className="text-sm font-semibold text-slate-900">
                  Menu
                </span>
                <button onClick={() => setMenuOpen(false)}>
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col gap-4 px-6 py-6">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item)}
                    className="text-left text-sm font-medium text-slate-700 hover:text-emerald-600"
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  onClick={() => {
                    navigate("/appointment");
                    setMenuOpen(false);
                  }}
                  className="mt-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 py-2 text-xs font-semibold text-white shadow-md"
                >
                  Book Appointment
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
