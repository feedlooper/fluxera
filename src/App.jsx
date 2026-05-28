import React from "react";
import { Zap, ArrowRight, BatteryCharging, Building2, BarChart3, MapPin, Network, CheckCircle2, Leaf, ShieldCheck, Database, PhoneCall, Cpu } from "lucide-react";
import "./App.css";

const services = [
  {
    icon: <BarChart3 />,
    title: "Electrification Lead Generation",
    text: "Qualified commercial opportunities for EV charging, solar, battery, heat pump, and electrical infrastructure companies.",
  },
  {
    icon: <BatteryCharging />,
    title: "EV Charging Site Development",
    text: "Early-stage site sourcing, property-owner outreach, feasibility screening, partner coordination, and project handoff.",
  },
  {
    icon: <Cpu />,
    title: "Project Intelligence",
    text: "A data-first workflow to identify high-fit buildings, track market signals, and improve commercial targeting over time.",
  },
];

const audiences = [
  "EV charging operators",
  "Solar + battery installers",
  "Electrical contractors",
  "Heat pump providers",
  "Fleet electrification teams",
  "Property owners + developers",
];

const steps = [
  ["01", "Map the market", "We define your ideal sites, regions, project sizes, building types, and decision makers."],
  ["02", "Find high-fit opportunities", "We research properties, business signals, incentive pathways, and commercial electrification triggers."],
  ["03", "Qualify demand", "We confirm need, timeline, decision authority, service fit, project context, and handoff requirements."],
  ["04", "Route the opportunity", "You receive clean, documented, CRM-ready opportunities your team can actually pursue."],
];

export default function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">
          <div className="brand-mark"><Zap size={24} /></div>
          <div>
            <div className="brand-name">FLUXERA</div>
            <div className="brand-sub">ENERGY</div>
          </div>
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#why">Why Fluxera</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Book a Call</a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><Leaf size={16} /> Powering the electrification of BC</div>
            <h1>Commercial electrification opportunities, built into a repeatable pipeline.</h1>
            <p className="hero-text">
              Fluxera helps EV charging, solar, battery storage, heat pump, and electrical infrastructure companies find qualified commercial opportunities and develop high-value sites.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">Grow your pipeline <ArrowRight size={18} /></a>
              <a className="secondary-btn" href="#services">See services</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-top">
              <span>Project Intelligence</span>
              <MapPin size={18} />
            </div>
            <div className="signal-list">
              <Signal title="Multi-family portfolio" type="EV charging" status="High fit" />
              <Signal title="Warehouse park" type="Solar + storage" status="Review" />
              <Signal title="Hotel property" type="Fleet + guest charging" status="Qualified" />
              <Signal title="Retail plaza" type="Electrical upgrade" status="High fit" />
            </div>
            <div className="metrics">
              <Metric value="24" label="Qualified meetings" />
              <Metric value="$3.8M" label="Pipeline value" />
              <Metric value="5" label="Target sectors" />
            </div>
          </div>
        </section>

        <section id="services" className="section-pad">
          <div className="section-head">
            <p>What we do</p>
            <h2>Lead generation first. Site development where it makes sense.</h2>
            <span>Fluxera is designed for commercial infrastructure sales cycles — not generic marketing funnels.</span>
          </div>
          <div className="cards three">
            {services.map((s) => <Card key={s.title} {...s} />)}
          </div>
        </section>

        <section className="section-pad split">
          <div>
            <p className="mini">Who we help</p>
            <h2>Built for companies selling real electrification projects.</h2>
            <p className="muted">One qualified commercial opportunity can be worth tens or hundreds of thousands of dollars. We focus on markets where better targeting matters.</p>
          </div>
          <div className="audience-grid">
            {audiences.map((a) => <div className="audience" key={a}><CheckCircle2 size={18} /> {a}</div>)}
          </div>
        </section>

        <section id="process" className="section-pad">
          <div className="section-head">
            <p>Process</p>
            <h2>From market signal to qualified opportunity.</h2>
            <span>Clean research. Structured outreach. Better handoff. Better data every cycle.</span>
          </div>
          <div className="steps">
            {steps.map(([num, title, text]) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="section-pad why">
          <div className="why-copy">
            <p className="mini">Why Fluxera</p>
            <h2>Not a generic agency. A growth layer for electrification infrastructure.</h2>
            <p className="muted">Electrification projects involve buildings, utilities, incentives, contractors, capital planning, and long decision cycles. Fluxera is built around that complexity.</p>
          </div>
          <div className="why-list">
            <Why icon={<ShieldCheck />} title="Technical credibility" text="We understand infrastructure constraints, project workflows, and why commercial buyers move slowly." />
            <Why icon={<Database />} title="Data-first from day one" text="Every signal, objection, lead source, and outcome is tracked to improve future targeting." />
            <Why icon={<Network />} title="Built to scale" text="Lead generation today; project intelligence, routing, and marketplace software tomorrow." />
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-card">
            <div className="contact-icon"><PhoneCall size={28} /></div>
            <h2>Looking for better commercial electrification opportunities?</h2>
            <p>Let’s talk about your service area, ideal project size, target customers, and what a truly qualified opportunity looks like for your team.</p>
            <a className="primary-btn" href="mailto:hello@fluxera.energy">Contact Fluxera <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ icon, title, text }) {
  return <div className="card"><div className="card-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

function Signal({ title, type, status }) {
  return <div className="signal"><div><strong>{title}</strong><span>{type}</span></div><em>{status}</em></div>;
}

function Metric({ value, label }) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function Why({ icon, title, text }) {
  return <div className="why-item"><div className="why-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>;
}

/* Paste this entire CSS into src/App.css */
/*
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: white;
  background: #050812;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #050812; }
a { color: inherit; text-decoration: none; }

.site {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 5%, rgba(0, 213, 255, 0.22), transparent 28%),
    radial-gradient(circle at 85% 18%, rgba(43, 102, 255, 0.24), transparent 32%),
    radial-gradient(circle at 50% 100%, rgba(30, 255, 174, 0.08), transparent 35%),
    #050812;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 6vw;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  background: rgba(5, 8, 18, 0.82);
  backdrop-filter: blur(18px);
}

.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #25e6ff, #1157ff);
  box-shadow: 0 0 28px rgba(37, 230, 255, .25);
}
.brand-name { font-size: 20px; font-weight: 800; letter-spacing: .24em; }
.brand-sub { font-size: 11px; color: #7eeeff; letter-spacing: .32em; margin-top: 2px; }
.nav-links { display: flex; gap: 30px; color: rgba(255,255,255,.68); font-size: 14px; }
.nav-links a:hover { color: #7eeeff; }
.nav-cta, .primary-btn, .secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 999px;
  font-weight: 700;
}
.nav-cta { background: #7eeeff; color: #06111f; padding: 12px 18px; }

.section-pad { padding: 84px 6vw; max-width: 1440px; margin: 0 auto; }
.hero { display: grid; grid-template-columns: 1.05fr .95fr; gap: 64px; align-items: center; min-height: 86vh; }
.eyebrow, .mini {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #8af5ff;
  text-transform: uppercase;
  letter-spacing: .22em;
  font-size: 13px;
  font-weight: 800;
}

h1 { font-size: clamp(48px, 7vw, 92px); line-height: .95; letter-spacing: -0.06em; margin: 22px 0; }
h2 { font-size: clamp(34px, 4.6vw, 62px); line-height: 1.02; letter-spacing: -0.045em; margin: 0; }
h3 { margin: 0; font-size: 22px; }
p { line-height: 1.75; }
.hero-text { max-width: 720px; color: rgba(255,255,255,.68); font-size: 20px; }
.hero-actions { display: flex; gap: 16px; margin-top: 34px; flex-wrap: wrap; }
.primary-btn { background: #7eeeff; color: #06111f; padding: 16px 24px; box-shadow: 0 0 40px rgba(126,238,255,.2); }
.secondary-btn { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); padding: 16px 24px; }

.hero-panel {
  border: 1px solid rgba(255,255,255,.12);
  background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.025));
  border-radius: 36px;
  padding: 26px;
  box-shadow: 0 30px 100px rgba(0,0,0,.35);
}
.panel-top { display: flex; justify-content: space-between; color: #8af5ff; text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 800; margin-bottom: 20px; }
.signal-list { display: grid; gap: 14px; }
.signal { display: flex; justify-content: space-between; gap: 18px; padding: 18px; border-radius: 22px; background: rgba(0,0,0,.24); border: 1px solid rgba(255,255,255,.1); }
.signal strong, .signal span { display: block; }
.signal span { color: rgba(255,255,255,.5); margin-top: 4px; }
.signal em { align-self: start; font-style: normal; color: #8af5ff; background: rgba(126,238,255,.1); border: 1px solid rgba(126,238,255,.18); padding: 7px 10px; border-radius: 999px; font-size: 12px; }
.metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 18px; }
.metric { border-radius: 18px; background: rgba(255,255,255,.07); padding: 16px; }
.metric strong { display: block; color: #8af5ff; font-size: 24px; }
.metric span { display: block; color: rgba(255,255,255,.52); font-size: 12px; margin-top: 4px; }

.section-head { max-width: 820px; margin-bottom: 36px; }
.section-head p { color: #8af5ff; text-transform: uppercase; letter-spacing: .22em; font-size: 13px; font-weight: 800; margin: 0 0 14px; }
.section-head span, .muted { color: rgba(255,255,255,.64); font-size: 18px; display: block; margin-top: 18px; max-width: 760px; }
.cards.three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card, .step, .audience, .why-item {
  border: 1px solid rgba(255,255,255,.11);
  background: rgba(255,255,255,.045);
  border-radius: 28px;
}
.card { padding: 30px; min-height: 280px; }
.card-icon, .why-icon, .contact-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: rgba(126,238,255,.12);
  color: #8af5ff;
  margin-bottom: 28px;
}
.card-icon svg { width: 30px; height: 30px; }
.card p, .step p, .why-item p { color: rgba(255,255,255,.62); }

.split { display: grid; grid-template-columns: .9fr 1.1fr; gap: 60px; align-items: center; }
.audience-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.audience { padding: 18px; display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,.82); }
.audience svg { color: #8af5ff; }
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.step { padding: 26px; }
.step-num { color: #8af5ff; font-weight: 900; margin-bottom: 34px; }
.why { display: grid; grid-template-columns: .95fr 1.05fr; gap: 60px; align-items: center; }
.why-list { display: grid; gap: 16px; }
.why-item { display: flex; gap: 18px; padding: 22px; }
.why-icon { margin-bottom: 0; flex: 0 0 auto; }

.contact-card {
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  border: 1px solid rgba(126,238,255,.18);
  background: linear-gradient(135deg, rgba(126,238,255,.10), rgba(17,87,255,.10));
  border-radius: 42px;
  padding: 70px 34px;
}
.contact-icon { margin: 0 auto 24px; }
.contact-card p { color: rgba(255,255,255,.66); max-width: 720px; margin: 22px auto 32px; font-size: 18px; }

@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero, .split, .why { grid-template-columns: 1fr; }
  .cards.three, .steps { grid-template-columns: 1fr; }
  .audience-grid, .metrics { grid-template-columns: 1fr; }
  h1 { font-size: 50px; }
  .section-pad { padding: 64px 22px; }
}
*/
