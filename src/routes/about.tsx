import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NetSapiens Specialists | VoIP Support Pro" },
      { name: "description", content: "A team of NetSapiens specialists with deep hands-on experience across hundreds of service provider deployments on the SNAPsolution platform." },
      { property: "og:title", content: "About VoIP Support Pro" },
      { property: "og:description", content: "NetSapiens specialists with hundreds of SNAPsolution deployments under our belt." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative hero-grid-bg text-white -mt-16 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-lines pointer-events-none"/>
        <div className="container-x relative max-w-3xl">
          <span className="mono-tag text-cyan-bright">About us</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">We are NetSapiens specialists. That's the whole job.</h1>
          <p className="mt-5 text-lg text-white/75">A team of engineers and consultants with deep hands-on experience across hundreds of service provider deployments on the NetSapiens / Crexendo SNAPsolution platform.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-navy-deep">A specialist shop, on purpose.</h2>
            <div className="mt-6 space-y-5 text-cool-gray leading-relaxed">
              <p>Generalist VoIP shops dabble in five or six platforms and master none. We picked a lane: NetSapiens — the carrier-grade UCaaS platform powering Crexendo's SNAPsolution — and we built our entire practice around it.</p>
              <p>That means when you call us about a hunt group misroute, a SIP trunk renegotiation, or a reseller-portal permission quirk, you're not talking to someone Googling the answer in another tab. You're talking to engineers who shipped that exact configuration last week.</p>
              <p>We've helped service providers, MSPs, and resellers stand up tenants, migrate legacy switches, design auto-attendants for multi-site enterprises, and tune SNAPsolution architectures for tens of thousands of seats.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-electric/10 text-electric mono-tag">NetSapiens Certified Workflow</span>
              <span className="px-3 py-1.5 rounded-full bg-cyan-bright/10 text-navy-deep mono-tag">SNAPsolution Expert</span>
              <span className="px-3 py-1.5 rounded-full bg-secondary text-navy-deep mono-tag">SIP / RTP Deep</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { k: "What we know cold", v: "SNAPsolution portal, SIP trunking, reseller management, NetSapiens API, NMS, NDP, CDR pipelines, mobile/desktop client provisioning." },
              { k: "Who we work with", v: "ITSPs, MSPs, white-label resellers, regional CLECs, and enterprise IT teams running self-hosted SNAPsolution." },
              { k: "How we engage", v: "Per-ticket, monthly retainer, white-label NOC augmentation, or fixed-scope migration projects." },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-border bg-white p-6">
                <div className="mono-tag text-electric">{b.k}</div>
                <p className="mt-2 text-navy-deep">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border section-pad">
        <div className="container-x max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Built around your platform. Built around your channel.</h2>
          <p className="mt-4 text-cool-gray text-lg">If NetSapiens is the engine of your business, we'll make sure it never lets you down.</p>
          <Link to="/contact" className="mt-7 inline-flex btn-cyan btn-cyan-hover">Talk to a Specialist</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
