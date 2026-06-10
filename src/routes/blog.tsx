import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "NetSapiens Blog & Resources | VoIP Support Pro" },
      { name: "description", content: "Admin tips, SNAPsolution configuration guides, IVR best practices, API use cases, and migration checklists for NetSapiens operators." },
      { property: "og:title", content: "NetSapiens Resources & Blog" },
      { property: "og:description", content: "Hands-on guides for NetSapiens admins, resellers, and service providers." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "Admin Tips", title: "10 NetSapiens admin shortcuts every NOC should know", desc: "Quick wins from the SNAPsolution portal that cut ticket time in half.", read: "6 min read" },
  { tag: "Configuration", title: "SNAPsolution call routing: time frames, hunt groups, and the order that matters", desc: "How to layer routing rules so after-hours behavior is never a surprise.", read: "9 min read" },
  { tag: "IVR", title: "Designing auto-attendants people actually press 1 on", desc: "Menu length, voice talent, and the metrics that prove your IVR is working.", read: "7 min read" },
  { tag: "API", title: "5 high-leverage NetSapiens API use cases for resellers", desc: "Auto-provisioning, billing reconciliation, and CDR pipelines worth building.", read: "11 min read" },
  { tag: "Migration", title: "The migrating-to-NetSapiens checklist we actually use", desc: "The pre-flight, cutover, and post-port steps that prevent escalations.", read: "12 min read" },
  { tag: "AI Voice", title: "Standing up NetSapiens AI Receptionist for SMB customers", desc: "Prompt design, fallback handoff, and post-call summarization that sticks.", read: "8 min read" },
];

function BlogPage() {
  return (
    <SiteLayout>
      <section className="relative hero-grid-bg text-white -mt-16 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-lines pointer-events-none"/>
        <div className="container-x relative max-w-3xl">
          <span className="mono-tag text-cyan-bright">Resources</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">NetSapiens know-how, in writing.</h1>
          <p className="mt-5 text-lg text-white/75">Guides, configuration walkthroughs, and architectural notes from the team that lives in SNAPsolution every day.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="glass-card card-lift rounded-2xl overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-navy-deep via-electric to-cyan-bright relative grid-lines">
                <div className="absolute inset-0 bg-navy-deep/30"/>
                <span className="absolute top-4 left-4 mono-tag text-white bg-white/15 backdrop-blur px-2.5 py-1 rounded-full">{p.tag}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-navy-deep leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-cool-gray flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-cool-gray">
                  <span>{p.read}</span>
                  <Link to="/contact" className="text-electric font-semibold">Read →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
