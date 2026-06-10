import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoIP Support Pro — Expert NetSapiens Support for Service Providers" },
      { name: "description", content: "We help telecom operators, MSPs, and resellers get the most out of the NetSapiens UCaaS platform — from onboarding to advanced configurations." },
      { property: "og:title", content: "VoIP Support Pro — NetSapiens Specialist" },
      { property: "og:description", content: "The #1 NetSapiens Support & Consulting Partner for Service Providers." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: "settings", title: "NetSapiens Platform Setup", desc: "Full SNAPsolution deployment, domain/tenant setup, SIP trunk configuration." },
  { icon: "phone", title: "Call Flow & Auto-Attendant Design", desc: "IVR menus, time frames, hunt groups, and ring strategies built for scale." },
  { icon: "users", title: "Reseller & Sub-Reseller Management", desc: "White-label setup, branding, and full reseller portal training." },
  { icon: "chart", title: "Reporting & Analytics", desc: "CDRs, real-time dashboards, and call volume analysis your team can act on." },
  { icon: "swap", title: "Migration & Porting", desc: "Move existing customers onto NetSapiens with smooth, audited number porting." },
  { icon: "headset", title: "Ongoing Technical Support", desc: "Ticket-based or retainer support engineered for service provider workloads." },
  { icon: "grad", title: "Admin & End-User Training", desc: "Platform training for internal teams and your business customers." },
  { icon: "spark", title: "AI Receptionist Integration", desc: "Set up NetSapiens AI Voice features for your client deployments." },
];

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const props = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };
  switch (name) {
    case "settings": return (<svg {...props}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>);
    case "phone": return (<svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.33 1.81.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>);
    case "users": return (<svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
    case "chart": return (<svg {...props}><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/></svg>);
    case "swap": return (<svg {...props}><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>);
    case "headset": return (<svg {...props}><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/><path d="M3 14v3a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2Z"/></svg>);
    case "grad": return (<svg {...props}><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5a6 6 0 0 0 12 0v-5"/></svg>);
    case "spark": return (<svg {...props}><path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/></svg>);
    default: return null;
  }
}

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-16 pt-32 pb-28 md:pt-44 md:pb-36 overflow-hidden hero-grid-bg text-white">
        <div className="absolute inset-0 grid-lines pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-electric/30 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-cyan-bright/20 blur-[120px] pointer-events-none" />

        <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark mono-tag text-cyan-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright animate-pulse" />
              NetSapiens / SNAPsolution Specialist
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Expert <span className="bg-gradient-to-r from-cyan-bright to-electric bg-clip-text text-transparent">NetSapiens</span> Support,<br className="hidden sm:block" /> Built for Service Providers.
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
              We help telecom operators, MSPs, and resellers get the most out of the NetSapiens UCaaS platform — from onboarding to advanced configurations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-cyan btn-cyan-hover">
                Get Support Now
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/services" className="btn-ghost-light">See What We Do</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-bright"/> 500+ NetSapiens tickets resolved</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-electric"/> 10+ years UCaaS experience</div>
            </div>
          </div>

          {/* NetSapiens dashboard mock */}
          <div className="lg:col-span-5 relative">
            <div className="float-slow glass-dark rounded-2xl p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 pb-3 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"/>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"/>
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80"/>
                <span className="ml-3 mono-tag text-white/40">snapsolution.admin / tenant.acme</span>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { l: "Active Calls", v: "247", d: "+12%" },
                  { l: "Domains", v: "38", d: "+3" },
                  { l: "Avg MOS", v: "4.41", d: "+0.08" },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg bg-white/[0.04] border border-white/10 p-3">
                    <div className="mono-tag text-white/40">{s.l}</div>
                    <div className="mt-1 text-xl font-bold text-white">{s.v}</div>
                    <div className="text-xs text-cyan-bright mt-0.5">{s.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-white/[0.04] border border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="mono-tag text-white/40">Call Volume — 24h</div>
                  <div className="mono-tag text-cyan-bright">LIVE</div>
                </div>
                <svg viewBox="0 0 320 80" className="w-full h-20">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.55"/>
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 30 L175 18 L200 28 L225 14 L250 24 L275 10 L300 20 L320 8 L320 80 L0 80 Z" fill="url(#g1)"/>
                  <path d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 30 L175 18 L200 28 L225 14 L250 24 L275 10 L300 20 L320 8" fill="none" stroke="#06B6D4" strokeWidth="2"/>
                </svg>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[{ l: "SIP Trunks", v: "Operational", c: "bg-green-400" }, { l: "Voicemail", v: "Operational", c: "bg-green-400" }].map(s => (
                  <div key={s.l} className="flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5">
                    <span className={`h-2 w-2 rounded-full ${s.c}`}/>
                    <div className="text-xs"><div className="text-white/50">{s.l}</div><div className="text-white font-medium">{s.v}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-y border-border">
        <div className="container-x py-10">
          <p className="mono-tag text-cool-gray text-center">Trusted by NetSapiens Service Providers Worldwide</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
            {["NetSapiens", "Crexendo", "SNAPsolution", "Poly", "Yealink", "SNOM"].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-navy-deep to-electric grid place-items-center text-white text-xs font-bold">{n[0]}</div>
                <span className="font-semibold text-navy-deep tracking-tight">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-tag text-electric">What we do</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">Services scoped 100% to NetSapiens.</h2>
            <p className="mt-4 text-cool-gray text-lg">No generalist VoIP advice. Everything we ship is rooted in deep, daily SNAPsolution experience.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="glass-card card-lift rounded-2xl p-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-electric/10 to-cyan-bright/10 text-electric grid place-items-center">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-cool-gray leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:gap-2.5 transition-all">
                  Learn more <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white border-y border-border section-pad">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-tag text-electric">Why VoIP Support Pro</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">We don't dabble. We specialize.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { stat: "100%", label: "NetSapiens-Only Focus", desc: "We don't split attention across other VoIP platforms. SNAPsolution is the entire job." },
              { stat: "500+", label: "Service Provider Tickets", desc: "Reseller models, white-label needs, and SNAPsolution architecture — known cold." },
              { stat: "10+ yrs", label: "Fast, Certified Support", desc: "Direct expertise means faster resolution. No guessing, no Google — we've seen it before." },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border border-border bg-surface p-7 card-lift">
                <div className="text-4xl font-extrabold bg-gradient-to-br from-electric to-cyan-bright bg-clip-text text-transparent">{b.stat}</div>
                <h3 className="mt-3 text-lg font-bold text-navy-deep">{b.label}</h3>
                <p className="mt-2 text-cool-gray leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL COVERAGE */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mono-tag text-electric">Global presence</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">Coverage where your customers live.</h2>
              <p className="mt-4 text-cool-gray text-lg">We support NetSapiens service providers and their customers across key international markets, with overlapping timezone coverage for true 24/7 response.</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {[
                { c: "US", n: "United States" },
                { c: "CA", n: "Canada" },
                { c: "GB", n: "United Kingdom" },
                { c: "IE", n: "Ireland" },
                { c: "IN", n: "India" },
              ].map((f) => (
                <div key={f.c} className="glass-card rounded-xl p-4 text-center card-lift">
                  <img src={`https://flagcdn.com/w160/${f.c.toLowerCase()}.png`} alt={f.n} loading="lazy" className="mx-auto h-10 w-14 object-cover rounded shadow-sm" />
                  <div className="mt-2 text-xs font-semibold text-navy-deep">{f.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white border-y border-border section-pad">
        <div className="container-x">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Testimonial</h2>
            <span className="text-electric font-semibold text-base">Hear from Our Satisfied Partners</span>
          </div>
          <div className="w-16 h-0.5 bg-border mb-6" />
          <p className="text-center text-cool-gray max-w-2xl mx-auto mb-12 text-sm">
            Here's what VoIP resellers, MSPs, and telecom providers have to say about working with our white-label support team.
          </p>
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Partnering with this team has been a game-changer. Our clients never experience downtime, and we get to focus on scaling our business.",
                a: "Michael R",
                r: "VoIP Reseller",
                avatar: "https://i.pravatar.cc/48?img=11",
              },
              {
                q: "Their white-label support is flawless. Our customers think they're speaking directly with our in-house team. Highly recommended!",
                a: "Sarah L",
                r: "Managed Service Provider",
                avatar: "https://i.pravatar.cc/48?img=47",
              },
              {
                q: "From onboarding to ongoing maintenance, they've handled everything smoothly. Incredible expertise!",
                a: "Philip Deckow",
                r: "Telecom Distributor",
                avatar: "https://i.pravatar.cc/48?img=53",
              },
            ].map((t) => (
              <div key={t.a} className="rounded-xl border border-border bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                {/* Stars + badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[0.7rem] font-semibold tracking-widest uppercase text-electric border border-electric/30 rounded px-2 py-0.5">Testimonial</span>
                </div>
                {/* Quote */}
                <p className="text-navy-deep/85 leading-relaxed italic flex-1 text-sm">"{t.q}"</p>
                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt={t.a} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-semibold text-navy-deep text-sm">{t.a}</div>
                    <div className="text-xs text-cool-gray">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl hero-grid-bg p-10 md:p-16 text-white">
            <div className="absolute inset-0 grid-lines pointer-events-none" />
            <div className="relative max-w-3xl">
              <span className="mono-tag text-cyan-bright">Let's talk</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">Ready to take control of your NetSapiens platform?</h2>
              <p className="mt-5 text-lg text-white/75">We support service providers on the NetSapiens SNAPsolution platform only. Not sure if that's you? Reach out anyway.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-cyan btn-cyan-hover">Request a Quote</Link>
                <Link to="/services" className="btn-ghost-light">Browse Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
