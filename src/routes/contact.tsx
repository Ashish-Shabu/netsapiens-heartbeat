import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request NetSapiens Support | VoIP Support Pro" },
      { name: "description", content: "Talk to a NetSapiens specialist. Request a quote for SNAPsolution support, migration, IVR design, or white-label NOC services." },
      { property: "og:title", content: "Contact VoIP Support Pro" },
      { property: "og:description", content: "Talk to a NetSapiens specialist about your SNAPsolution platform." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="relative hero-grid-bg text-white -mt-16 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-lines pointer-events-none"/>
        <div className="container-x relative max-w-3xl">
          <span className="mono-tag text-cyan-bright">Contact</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">Ready to take control of your NetSapiens platform? Let's talk.</h1>
          <p className="mt-5 text-lg text-white/75">We support service providers on the NetSapiens SNAPsolution platform only. Not sure if that's you? Reach out anyway.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { k: "Email", v: "support@voipsupportpro.com" },
              { k: "Response time", v: "Under 2 business hours" },
              { k: "Retainer clients", v: "24/7 on-call SLA" },
              { k: "Coverage", v: "US, Canada, UK, Ireland, India" },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-border bg-white p-6">
                <div className="mono-tag text-electric">{b.k}</div>
                <div className="mt-1.5 text-navy-deep font-semibold">{b.v}</div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-card rounded-3xl p-8 space-y-5"
            >
              {sent ? (
                <div className="text-center py-10">
                  <div className="mx-auto h-14 w-14 rounded-full bg-cyan-bright/15 grid place-items-center text-cyan-bright">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-navy-deep">Got it. A specialist will reply within 2 business hours.</h3>
                  <p className="mt-2 text-cool-gray">In the meantime, feel free to browse our services and pricing.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" required>
                      <input required type="text" className="input" placeholder="Jane Operator" />
                    </Field>
                    <Field label="Company" required>
                      <input required type="text" className="input" placeholder="Northwind Telecom" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Work email" required>
                      <input required type="email" className="input" placeholder="jane@northwind.com" />
                    </Field>
                    <Field label="Phone (optional)">
                      <input type="tel" className="input" placeholder="+1 555 010 0100" />
                    </Field>
                  </div>
                  <Field label="What can we help with?" required>
                    <select required className="input">
                      <option value="">Choose one…</option>
                      <option>NetSapiens platform setup</option>
                      <option>Migration & porting</option>
                      <option>Ongoing support / retainer</option>
                      <option>Reseller / white-label NOC</option>
                      <option>IVR / call flow design</option>
                      <option>Something else</option>
                    </select>
                  </Field>
                  <Field label="Tell us about your environment" required>
                    <textarea required rows={4} className="input" placeholder="Tenants, approx. seat count, current pain points, timeline…" />
                  </Field>
                  <button type="submit" className="btn-cyan btn-cyan-hover w-full justify-center">
                    Request a Quote
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </button>
                  <p className="text-xs text-cool-gray text-center">By submitting, you agree to be contacted about NetSapiens support services.</p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.625rem;
          border: 1px solid var(--border);
          background: white;
          color: var(--navy-deep);
          font-size: 0.95rem;
          transition: border-color .15s ease, box-shadow .15s ease;
          outline: none;
        }
        .input:focus {
          border-color: var(--electric);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--electric) 15%, transparent);
        }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy-deep mb-1.5">{label}{required && <span className="text-electric"> *</span>}</span>
      {children}
    </label>
  );
}
