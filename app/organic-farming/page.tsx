'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const BRAND = {
  cream: '#FAF5EA', creamDeep: '#F2EBD6', creamSoft: '#FDFAF3',
  blue: '#1B2F8E', blueDeep: '#131F63', blueSoft: '#4258B8',
  pink: '#D8379B', pinkSoft: '#F5C5DF', pinkPale: '#FCE9F3',
  ink: '#0D1427', inkMuted: '#57617A', inkFaint: '#9AA1B4',
  green: '#3A7D44', greenSoft: '#E8F5EA',
};

const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Why Ooty', href: '/why-ooty' },
  { label: 'Farms', href: '/organic-farming' },
  { label: 'Plantations', href: '/plantations' },
  { label: 'Ecotourism', href: '/ecotourism' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const HetheyaLogo = ({ height = 44 }: { height?: number }) => (
  <svg viewBox="0 0 420 200" height={height} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M 30 70 Q 160 25, 300 55 Q 355 62, 395 50" stroke={BRAND.pink} strokeWidth="3" fill="none" strokeLinecap="round" />
    <g transform="translate(285, 12)">
      <path d="M 0 52 L 30 18 L 52 38 L 72 6 L 112 52 Z" fill={BRAND.blue} />
      <path d="M 52 38 L 72 6 L 84 18 Z" fill={BRAND.cream} />
    </g>
    <text x="30" y="135" fontFamily="'Fraunces', Georgia, serif" fontSize="76" fontWeight="700" fill={BRAND.blue} letterSpacing="-2">Hetheya</text>
    <text x="155" y="178" fontFamily="'Dancing Script', cursive" fontSize="36" fontStyle="italic" fontWeight="600" fill={BRAND.pink}>Dairy</text>
    <line x1="105" y1="188" x2="315" y2="188" stroke={BRAND.pink} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Navbar = ({ active }: { active: string }) => (
  <nav style={{ position: 'sticky', top: 0, zIndex: 50, padding: '14px 48px', background: 'rgba(250, 245, 234, 0.96)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${BRAND.creamDeep}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <a href="/" style={{ textDecoration: 'none' }}><HetheyaLogo height={40} /></a>
    <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
      {NAV_LINKS.map((item) => (
        <a key={item.label} href={item.href} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: item.href === active ? 600 : 500, color: item.href === active ? BRAND.pink : BRAND.ink, textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = BRAND.pink}
          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = item.href === active ? BRAND.pink : BRAND.ink}
        >{item.label}</a>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <a href="/contact" style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.blue, border: `1px solid ${BRAND.blue}`, padding: '9px 18px', borderRadius: 999, textDecoration: 'none', transition: 'all 0.2s' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
      >Order Now</a>
      <button style={{ background: BRAND.blue, color: 'white', border: 'none', width: 42, height: 42, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingBag size={17} /></button>
    </div>
  </nav>
);

const PRACTICES = [
  {
    icon: '🐄',
    title: 'Desi Breed Conservation',
    body: 'We rear Gir, Sahiwal, Kangayam, and Tharparkar cows — endangered indigenous breeds that produce A2 beta-casein milk. Our breeding programme is focused on genetic purity. We do not crossbreed with exotic HF or Jersey cattle. Each of our 200+ cows has a named identity card, medical record, and individualised feeding plan.',
  },
  {
    icon: '🌾',
    title: 'Rotational Grazing — Pasture as a Living System',
    body: 'Our 85-acre farm is divided into 14 rotational grazing paddocks. Cows graze each paddock for 3–4 days, then the land rests for 24–28 days. This mimics the movement of wild herbivores and allows grass to regenerate fully before the next grazing cycle. The result: pastures that get denser and more biodiverse year after year, rather than degrading.',
  },
  {
    icon: '🪱',
    title: 'Vermicomposting — Closing the Nutrient Loop',
    body: 'Every gram of cow dung produced on our farm enters one of six 12-metre vermicomposting beds, hosting 20 kg of Eisenia fetida (red wigglers) each. The resulting vermicompost — 2.5 tonnes per month — is applied back to our pastures and vegetable gardens. Nothing leaves the farm as waste. The soil biology improves measurably every year.',
  },
  {
    icon: '⚡',
    title: 'Solar + Biogas — Off-Grid Energy',
    body: 'A 72 kWp solar array powers our milking machines, plate chillers, pasteurisation units, and staff quarters. Our 30,000-litre biogas plant — fed by excess dung — generates cooking fuel for 40 farm workers daily and provides CO₂ for our carbonated beverage line. We are net-zero energy since 2023.',
  },
  {
    icon: '💧',
    title: 'Rainwater Harvesting — Every Drop Accounted For',
    body: 'We have built 18 check dams and 6 percolation ponds across our watershed to capture all 1,900 mm of annual rainfall. Our drip irrigation system, fed by a 4-lakh-litre overhead tank, delivers water directly to plant root zones with zero runoff. A 40% water-use reduction against conventional farming since 2020.',
  },
  {
    icon: '🌿',
    title: 'No Synthetic Inputs — Ever',
    body: 'Our land last received synthetic fertiliser or pesticide in 2011. In the 13 years since, soil organic matter has risen from 0.4% to 2.8%. Pest control is handled through integrated pest management: predatory insects, neem extract sprays, sticky traps, and companion planting with Tagetes (marigold) and pyrethrum around perimeters.',
  },
  {
    icon: '🧪',
    title: 'On-Farm Laboratory — 140 Tests Before Dispatch',
    body: 'Our milk is tested at collection point using a Milkana analyser for fat, protein, SNF, and somatic cell count. After pasteurisation, each batch is held until the NABL-accredited lab in Coimbatore clears results for antibiotics, pesticide residues, aflatoxin M1, and microbiological parameters. Batches failing any threshold are composted — never sold.',
  },
  {
    icon: '📦',
    title: 'Packaging — Minimalist and Recyclable',
    body: 'Our glass bottles are returned by customers, sanitised, and refilled — completing an average 40-cycle life before retirement. Pouches use 25-micron LLDPE — the thinnest viable food-safe barrier — and are collected back for co-processing at a Coimbatore recycling facility. We have eliminated PET bottles from our supply chain entirely.',
  },
  {
    icon: '👨‍🌾',
    title: 'Community Farming — 14 Partner Smallholders',
    body: 'Beyond our main farm, Hetheya works with 14 smallholder dairy families in the Nilgiri hills, providing veterinary support, silage, and guaranteed purchase at fair trade prices. We supply Gir heifers on credit and train families in organic practices. Their milk undergoes the same 140-parameter testing as our own. It is the Hetheya network — not just a farm.',
  },
];

const CERTIFICATIONS = [
  { name: 'APOF Organic Certified', body: 'Association for Promotion of Organic Farming, India', year: '2019', icon: '🌿' },
  { name: 'FSSAI Certified', body: 'Food Safety and Standards Authority of India', year: '2016', icon: '✅' },
  { name: 'ISO 22000:2018', body: 'Food Safety Management System — Bureau Veritas', year: '2022', icon: '📋' },
  { name: 'NABL-Accredited Lab Partner', body: 'All batch testing via NABL-accredited facility', year: '2021', icon: '🔬' },
  { name: 'PGS India Organic', body: 'Participatory Guarantee System — Ministry of Agriculture', year: '2020', icon: '🌱' },
  { name: 'EIC Export Inspection', body: 'Export Inspection Council — eligible for EU & UAE markets', year: '2023', icon: '🌍' },
];

export default function OrganicFarmingPage() {
  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <Navbar active="/organic-farming" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${BRAND.green} 0%, #0F3D1A 100%)`, padding: '80px 48px 64px', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', marginBottom: 28, fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' }}>
            🌿 85 ACRES · OOTY, NILGIRIS · CERTIFIED ORGANIC SINCE 2019
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            Farming with<br /><em style={{ fontStyle: 'italic', color: '#A8E6B5' }}>the land, not against it.</em>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, lineHeight: 1.65, opacity: 0.85, maxWidth: 680, margin: 0 }}>
            Hetheya is a regenerative organic farm in the Nilgiri hills. Our 85-acre estate raises
            200+ indigenous cows, practises rotational grazing, runs on solar and biogas energy, and
            sends zero dairy waste to landfill. Farming the way the land intended.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: BRAND.green, padding: '36px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {[
            { value: '85 acres', label: 'Organic farm land' },
            { value: '200+', label: 'Indigenous cows' },
            { value: '14', label: 'Partner smallholders' },
            { value: '2.8%', label: 'Soil organic matter (up from 0.4%)' },
            { value: 'Net Zero', label: 'Energy since 2023' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, opacity: 0.75, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* A day on the farm */}
      <section style={{ padding: '80px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— A day at Hetheya Farm</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
            From 4 AM milking to<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>7 AM doorstep delivery.</em>
          </h2>
        </div>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          <div style={{ position: 'absolute', left: 12, top: 0, bottom: 0, width: 2, background: BRAND.creamDeep }} />
          {[
            { time: '4:00 AM', title: 'Calf feeding & morning milking', desc: 'Calves nurse first. Our milking team begins collection from the first cow at precisely 4:00 AM. Warm, frothy, just-drawn milk is transferred directly into pre-chilled stainless vats.' },
            { time: '4:45 AM', title: 'Chilling to 4°C', desc: 'Plate chillers drop the milk temperature from 34°C to 4°C within 20 minutes. Speed here determines shelf life and microbiological quality.' },
            { time: '5:00 AM', title: 'On-farm lab testing', desc: 'Our farm analyst runs a Milkana battery test: fat, protein, SNF, lactose, density, and somatic cell count. Any vat with elevated SCC is flagged for investigation.' },
            { time: '5:15 AM', title: 'Pasteurisation & bottling', desc: 'Milk passes through HTST (High Temperature Short Time) pasteurisation at 72°C for 15 seconds — preserving flavour while eliminating pathogens. Immediately bottled into glass or LLDPE pouches.' },
            { time: '5:30 AM', title: 'Dispatch from the farm gate', desc: 'Refrigerated vans load at the farm gate with GPS tracking and temperature loggers. Routes cover Ooty, Coonoor, Coimbatore, Chennai, and Bangalore.' },
            { time: '6:45 AM', title: 'Last-mile delivery begins', desc: 'Local delivery partners begin handoffs in residential areas. Doorstep delivery is GPS-confirmed. The app notifies you when milk is placed at your door.' },
            { time: '7:00 AM', title: 'Your morning — done.', desc: 'The milk on your kitchen shelf has been drawn from a cow less than 3 hours ago, tested for 140 parameters, and travelled 250 km through a continuous cold chain. Good morning.' },
          ].map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', paddingBottom: 40 }}
            >
              <div style={{ position: 'absolute', left: -35, top: 4, width: 10, height: 10, borderRadius: '50%', background: BRAND.blue, border: `2px solid ${BRAND.cream}` }} />
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 13, color: BRAND.pink, fontWeight: 600, marginBottom: 6 }}>{step.time}</div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 10px' }}>{step.title}</h3>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, lineHeight: 1.65, color: BRAND.inkMuted, margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Practices */}
      <section style={{ background: BRAND.creamSoft, padding: '80px 48px', borderTop: `1px solid ${BRAND.creamDeep}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Our practices</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
              Nine pillars of<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>regenerative farming.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {PRACTICES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: 'white', borderRadius: 20, padding: 32, border: `1px solid ${BRAND.creamDeep}` }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 12px', lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, lineHeight: 1.65, color: BRAND.inkMuted, margin: 0 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '80px 48px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Certifications</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
            Not just a claim.<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>Certified and verified.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ padding: 28, borderRadius: 16, background: BRAND.creamSoft, border: `1px solid ${BRAND.creamDeep}` }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{cert.icon}</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, color: BRAND.ink, marginBottom: 6 }}>{cert.name}</div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted, marginBottom: 8 }}>{cert.body}</div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: BRAND.green, fontWeight: 600, letterSpacing: '0.08em' }}>CERTIFIED {cert.year}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.blue, color: 'white', textAlign: 'center', padding: '80px 48px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Want to see it<br /><em style={{ color: BRAND.pinkSoft }}>for yourself?</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.75, marginBottom: 36 }}>
          Book a farm visit. Walk the pastures, meet the cows, watch the morning milking.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/ecotourism" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND.pink, color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Book a Farm Visit <ArrowRight size={15} />
          </a>
          <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
            Shop Farm-Fresh Dairy <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
