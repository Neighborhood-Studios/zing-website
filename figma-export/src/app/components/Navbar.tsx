import { useState, useEffect } from "react";
import ZingLogo from "../../imports/Group758531323";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111211]/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="w-[100px] h-[46px] relative shrink-0">
          <ZingLogo />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#how-it-works"
            className="text-white/80 hover:text-white transition-colors tracking-wide"
            style={{ fontSize: "14px" }}
          >
            How It Works
          </a>
          <a
            href="#services"
            className="text-white/80 hover:text-white transition-colors tracking-wide"
            style={{ fontSize: "14px" }}
          >
            Services
          </a>
          <a
            href="#why-zing"
            className="text-white/80 hover:text-white transition-colors tracking-wide"
            style={{ fontSize: "14px" }}
          >
            Why Zing
          </a>
          <a
            href="#get-started"
            className="bg-white text-[#1A1F1C] px-6 py-2.5 rounded-full hover:bg-white/90 transition-all tracking-wide"
            style={{ fontSize: "14px" }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111211]/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-8 px-6">
            <a
              href="#how-it-works"
              className="text-white/80 hover:text-white transition-colors tracking-wide"
              style={{ fontSize: "15px" }}
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#services"
              className="text-white/80 hover:text-white transition-colors tracking-wide"
              style={{ fontSize: "15px" }}
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-zing"
              className="text-white/80 hover:text-white transition-colors tracking-wide"
              style={{ fontSize: "15px" }}
              onClick={() => setMobileOpen(false)}
            >
              Why Zing
            </a>
            <a
              href="#get-started"
              className="bg-white text-[#1A1F1C] px-8 py-3 rounded-full hover:bg-white/90 transition-all tracking-wide"
              style={{ fontSize: "15px" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}