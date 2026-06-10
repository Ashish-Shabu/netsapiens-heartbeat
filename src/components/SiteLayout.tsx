import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

function Logo({ light }: { light: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-electric to-cyan-bright grid place-items-center shadow-[0_8px_20px_-8px_oklch(0.55_0.21_264/0.6)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-[1.05rem] tracking-tight ${light ? "text-white" : "text-navy-deep"}`}>
          VoIP Support<span className="text-cyan-bright">Pro</span>
        </span>
        <span className={`mono-tag text-[0.58rem] mt-0.5 ${light ? "text-white/55" : "text-cool-gray"}`}>NetSapiens Specialist</span>
      </div>
    </Link>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color-mix(in_oklab,white_82%,transparent)] backdrop-blur-lg border-b border-border shadow-[0_4px_24px_-12px_oklch(0.21_0.04_250/0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo light={light} />
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3.5 py-2 text-[0.92rem] font-medium rounded-md transition-colors ${
                light ? "text-white/80 hover:text-white" : "text-navy-deep/80 hover:text-navy-deep"
              }`}
              activeProps={{ className: light ? "text-white bg-white/10" : "text-navy-deep bg-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-cyan btn-cyan-hover text-sm">Request a Quote</Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${light ? "text-white" : "text-navy-deep"}`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md font-medium text-navy-deep/85 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-cyan btn-cyan-hover text-sm justify-center mt-2">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-auto">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-electric to-cyan-bright grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">VoIP Support<span className="text-cyan-bright">Pro</span></span>
          </div>
          <p className="mt-4 mono-tag text-cyan-bright">NetSapiens Support Specialist</p>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Expert support and consulting for service providers running on the NetSapiens SNAPsolution platform.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-cyan-bright transition">About</Link></li>
            <li><Link to="/services" className="hover:text-cyan-bright transition">Services</Link></li>
            <li><Link to="/blog" className="hover:text-cyan-bright transition">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>NetSapiens Platform Setup</li>
            <li>Call Flow & IVR Design</li>
            <li>Reseller Management</li>
            <li>Migration & Porting</li>
            <li>24/7 Technical Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>support@voipsupportpro.com</li>
            <li>Mon – Fri • 24/7 on retainer</li>
            <li><Link to="/contact" className="text-cyan-bright hover:underline">Request a Quote →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} VoIP Support Pro. All rights reserved.</p>
          <p className="mono-tag">NetSapiens • SNAPsolution • Crexendo Certified Workflow</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Nav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
