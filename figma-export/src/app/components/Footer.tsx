import ZingLogo from "../../imports/Group758531323";

export function Footer() {
  return (
    <footer className="bg-[#111211] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 mb-16">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="w-[80px] h-[37px] relative mb-4">
              <ZingLogo />
            </div>
            <p
              className="text-white/40"
              style={{ fontSize: "14px", lineHeight: 1.7 }}
            >
              Cleaning, reimagined for
              <br />
              modern apartment living.
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-white/60 tracking-[0.15em] uppercase mb-5"
              style={{ fontSize: "11px" }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {[
                "Bathroom Refresh",
                "Floors Mopped",
                "Clothes Folded",
                "Kitchen Wipe-Down",
                "All Services",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-white/70 transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-white/60 tracking-[0.15em] uppercase mb-5"
              style={{ fontSize: "11px" }}
            >
              Company
            </p>
            <ul className="space-y-3">
              {["About", "Careers", "For Property Managers", "Blog", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/70 transition-colors"
                      style={{ fontSize: "14px" }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Address */}
          <div>
            <p
              className="text-white/60 tracking-[0.15em] uppercase mb-5"
              style={{ fontSize: "11px" }}
            >
              Address
            </p>
            <p
              className="text-white/40"
              style={{ fontSize: "14px", lineHeight: 1.7 }}
            >
              2222 Ponce de Leon
              <br />
              Miami, FL 33134
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white/60 tracking-[0.15em] uppercase mb-5"
              style={{ fontSize: "11px" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18626215884"
                  className="text-white/40 hover:text-white/70 transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  +1 (862) 621-5884
                </a>
              </li>
              <li>
                <a
                  href="mailto:alvaro@justzingit.com"
                  className="text-white/40 hover:text-white/70 transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  alvaro@justzingit.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30" style={{ fontSize: "13px" }}>
            &copy; 2026 Zing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Twitter", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/30 hover:text-white/60 transition-colors"
                style={{ fontSize: "13px" }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}