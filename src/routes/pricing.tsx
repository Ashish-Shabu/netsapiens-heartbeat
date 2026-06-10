import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — NetSapiens Support Plans | VoIP Support Pro" },
      { name: "description", content: "Transparent NetSapiens support plans: Tenant Support, Service Provider Plan, and White-Label Partner Plan. Pick the tier that matches your SNAPsolution footprint." },
      { property: "og:title", content: "NetSapiens Support Pricing" },
      { property: "og:description", content: "Tenant, Service Provider, and White-Label Partner support tiers for SNAPsolution operators." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Tenant Support",
    price: "$499",
    period: "/mo",
    blurb: "For single-tenant operators running production on NetSapiens.",
    features: [
      "Business-hours ticket support",
      "SNAPsolution portal assistance",
      "IVR / auto-attendant tweaks",
      "CDR & reporting help",
      "Endpoint provisioning support",
    ],
    cta: "Start with Tenant",
    highlight: false,
  },
  {
    name: "Service Provider Plan",
    price: "$1,499",
    period: "/mo",
    blurb: "For ITSPs and MSPs scaling NetSapiens across multiple customers.",
    features: [
      "24/7 ticket support with on-call",
      "Reseller portal management",
      "Migration & porting assistance (2/mo)",
      "Quarterly architecture review",
      "Direct engineer Slack/Teams channel",
      "AI Voice feature setup",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "White-Label Partner Plan",
    price: "Custom",
    period: "",
    blurb: "For white-label resellers needing NOC augmentation under your brand.",
    features: [
      "Branded NOC: tickets answered as your team",
      "Unlimited tenant + sub-reseller support",
      "Dedicated NetSapiens engineering pod",
      "Custom SLA, monthly business review",
      "Migration & onboarding squad",
      "API integration & automation",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="relative hero-grid-bg text-white -mt-16 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-lines pointer-events-none"/>
        <div className="container-x relative max-w-3xl">
          <span className="mono-tag text-cyan-bright">Pricing</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Support tiers built for the way you sell NetSapiens.</h1>
          <p className="mt-5 text-lg text-white/75">Every plan is staffed by NetSapiens-only engineers. No first-line script-readers, no escalation black holes.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 card-lift border ${
                t.highlight
                  ? "border-electric bg-gradient-to-b from-white to-secondary shadow-[0_30px_60px_-30px_oklch(0.55_0.21_264/0.4)]"
                  : "border-border bg-white"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-electric to-cyan-bright text-white mono-tag">
                  Most Popular
                </div>
              )}
              <div className="mono-tag text-electric">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-navy-deep">{t.price}</span>
                <span className="text-cool-gray">{t.period}</span>
              </div>
              <p className="mt-3 text-cool-gray">{t.blurb}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-navy-deep">
                    <svg className="h-5 w-5 flex-none text-cyan-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 w-full justify-center inline-flex ${
                  t.highlight ? "btn-cyan btn-cyan-hover" : "px-5 py-3 rounded-lg border border-border font-semibold text-navy-deep hover:bg-secondary"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="container-x mt-16 max-w-3xl text-center mx-auto">
          <p className="text-cool-gray">Need something between tiers? Custom retainer hours, project-based migration scopes, and per-ticket support are all available. <Link to="/contact" className="text-electric font-semibold hover:underline">Get in touch →</Link></p>
        </div>
      </section>
    </SiteLayout>
  );
}
