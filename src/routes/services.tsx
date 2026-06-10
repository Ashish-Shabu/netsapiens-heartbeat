import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "NetSapiens Services — Setup, Support, Migration | VoIP Support Pro" },
      { name: "description", content: "Full-spectrum NetSapiens / SNAPsolution services: platform setup, IVR design, reseller management, reporting, migration, training and ongoing support." },
      { property: "og:title", content: "NetSapiens Services | VoIP Support Pro" },
      { property: "og:description", content: "Setup, support, migration, IVR, reseller management — all scoped to NetSapiens." },
    ],
  }),
  component: ServicesPage,
});

const items = [
  { t: "NetSapiens Platform Setup", d: "End-to-end SNAPsolution deployment: domain/tenant architecture, SIP trunk provisioning, codec strategy, and routing rules tuned for your call mix." },
  { t: "Call Flow & Auto-Attendant Design", d: "IVR menus, time frames, hunt groups, ring strategies, voicemail logic and after-hours routing — designed to reduce mishandled calls and dropped sessions." },
  { t: "Reseller & Sub-Reseller Management", d: "White-label branding, reseller portal training, billing-tier setup, and sub-reseller hierarchy that mirrors how your channel actually sells." },
  { t: "Reporting & Analytics", d: "CDR pipelines, real-time dashboards, call volume and quality (MOS) analysis. Reporting your account managers can hand to customers without translation." },
  { t: "Migration & Porting", d: "Move existing customers onto NetSapiens with audited porting playbooks, cutover rehearsals, and zero-surprise number portability windows." },
  { t: "Ongoing Technical Support", d: "Ticket-based or retainer support engineered for service-provider load. Senior NetSapiens engineers, not first-line agents reading a script." },
  { t: "Admin & End-User Training", d: "Custom training for your internal teams (NOC, support, sales engineering) and end-user enablement decks for your business customers." },
  { t: "AI Receptionist Integration", d: "Set up NetSapiens AI Voice for client deployments: prompt design, fallback flows, hand-off rules and post-call summarization." },
  { t: "Endpoint & Hardware Certification", d: "Provisioning templates for Poly, Yealink, and SNOM endpoints — auto-provisioning servers, firmware policies, and EHS/USB headset profiles." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative hero-grid-bg text-white -mt-16 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-lines pointer-events-none"/>
        <div className="container-x relative">
          <span className="mono-tag text-cyan-bright">Services</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">Everything you need to operate confidently on NetSapiens.</h1>
          <p className="mt-5 text-lg text-white/75 max-w-2xl">From the first tenant build to the 10,000th seat in production — one team, one platform, deep specialization.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <div key={s.t} className="glass-card card-lift rounded-2xl p-7">
              <div className="mono-tag text-electric">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-lg font-bold text-navy-deep">{s.t}</h3>
              <p className="mt-3 text-cool-gray leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-border section-pad">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Need something more specific?</h2>
          <p className="mt-4 text-cool-gray text-lg">If it touches the NetSapiens platform, we probably do it. Tell us what you're trying to ship.</p>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Link to="/contact" className="btn-cyan btn-cyan-hover">Start a Conversation</Link>
            <Link to="/pricing" className="inline-flex items-center px-5 py-3 rounded-lg border border-border font-semibold text-navy-deep hover:bg-secondary">See Pricing</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
