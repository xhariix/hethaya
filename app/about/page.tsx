'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import SiteNav from '../SiteNav';

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
    <Link href="/" style={{ textDecoration: 'none' }}><HetheyaLogo height={40} /></Link>
    <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
      {NAV_LINKS.map((item) => (
        <Link key={item.label} href={item.href} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: item.href === active ? 600 : 500, color: item.href === active ? BRAND.pink : BRAND.ink, textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = BRAND.pink}
          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = item.href === active ? BRAND.pink : BRAND.ink}
        >{item.label}</Link>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Link href="/contact" style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.blue, border: `1px solid ${BRAND.blue}`, padding: '9px 18px', borderRadius: 999, textDecoration: 'none' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
      >Order Now</Link>
      <button style={{ background: BRAND.blue, color: 'white', border: 'none', width: 42, height: 42, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingBag size={17} /></button>
    </div>
  </nav>
);

const TIMELINE = [
  { year: '1948', title: 'The Estate Begins', desc: 'The 85-acre plot on the Nilgiri plateau — then a mix of shola forest and abandoned British tea plots — is acquired by the founding family. The first 40 cows are brought from Mysore. No machinery. No cold chain. Just the cold mountain air.' },
  { year: '1962', title: 'Coffee is Planted', desc: '28 acres of shade-grown coffee — Arabica, under silver oak — are established on the lower slopes of the estate. This becomes the foundation of what is today Hetheya\'s single-estate coffee programme.' },
  { year: '1975', title: 'Spice Gardens', desc: 'Intercropping begins: cardamom between tea rows, black pepper on coffee trellises, turmeric in the vegetable plots. What starts as family kitchen gardening becomes a serious spice programme over the next decade.' },
  { year: '1989', title: 'The Cold Chain Revolution', desc: 'The farm invests in its first plate chiller and refrigerated vehicle. Milk that was previously sold to a local cooperative now reaches Ooty town and Coonoor as a branded product for the first time.' },
  { year: '2008', title: 'Going Organic', desc: 'The decision to fully eliminate synthetic inputs is made — not driven by certification ambition, but by soil science. A soil test reveals organic matter at 0.4%. The recovery plan begins: vermicomposting beds, rotational grazing, biogas from cow dung.' },
  { year: '2011', title: 'Last Synthetic Chemical', desc: 'The final bag of synthetic fertiliser leaves the farm. Soil organic matter is now 0.9% and rising. The first organic certification application is submitted. The farm\'s transformation is complete in practice if not yet in paper.' },
  { year: '2016', title: 'Hetheya is Born', desc: 'The brand is formally registered. The website launches. The first 500 subscription customers in Coimbatore and Ooty receive milk before 7 AM. The name "Hetheya" — a transliteration of an old Tamil word for "homestead" — is chosen to reflect the farm\'s domestic, personal roots.' },
  { year: '2019', title: 'APOF Organic Certification', desc: 'The Association for Promotion of Organic Farming formally certifies Hetheya. Eight years after the last chemical input and eleven years of rebuilding soil biology, the paper recognises what the land already knew.' },
  { year: '2022', title: 'ISO 22000 & Export Ready', desc: 'ISO 22000:2018 Food Safety Management certification is achieved. The EIC export inspection registration opens the door to UAE and European markets for our spices, oils, and specialty teas.' },
  { year: '2023', title: 'Net Zero Energy', desc: 'The 72 kWp solar array is commissioned, and the 30,000-litre biogas plant reaches full capacity. For the first time, all farm energy — milking, chilling, pasteurising, bottling — runs on renewable sources generated on-site.' },
  { year: '2024', title: 'Ecotourism Opens', desc: 'The first guided farm visits begin. 1,400 guests in the first year. The school programme reaches 2,800 students from 34 institutions. The farm stays are booked three months in advance. Hetheya discovers it is not just a dairy — it is a place people need to visit.' },
  { year: '2026', title: 'Where We Are Today', desc: '12,000+ subscriber households. 14 smallholder partner families. 200+ desi cows. 66 dairy and farm products. Five ecotourism experiences. One farm at Kundanatty, Melkavatty, Ooty. One mountain. The same cold Nilgiri air that has always made the milk taste like this.' },
];

const TEAM = [
  {
    name: 'K.K. Visakan & K.C. Jagadesh',
    role: 'Managing Partners — Hetheya',
    bio: 'K.K. Visakan and K.C. Jagadesh are the managing partners behind Hetheya. Rooted in the Nilgiri hills, they have built the brand on a founding conviction: that the land, if treated well, produces everything the dairy needs. Their combined vision spans regenerative farming, premium dairy processing, and ecotourism — all from one 85-acre estate at Kundanatty, Melkavatty, Ooty.',
    icon: '👨‍💼',
  },
  {
    name: 'Murugan',
    role: 'Head Milkman — 22 Years on the Farm',
    bio: 'Murugan has been at the 4:30 AM milking every day for twenty-two years without exception. He knows each of our 200+ cows by name. He can tell you which cow had a calf last week, which is producing below average, and which one is most likely to be responsible for the unusually sweet batch that came out last Tuesday. He is irreplaceable. He knows it. We know it.',
    icon: '🧑‍🌾',
  },
  {
    name: 'Dr. Kavitha S.',
    role: 'Farm Veterinarian & Animal Welfare Officer',
    bio: 'Dr. Kavitha joined Hetheya in 2017 after a decade in bovine clinical practice at Tamil Nadu Veterinary and Animal Sciences University. She manages our Gir and Sahiwal breeding programme, oversees animal health protocols, and trains our 14 partner smallholders in preventive veterinary care. Her philosophy: a healthy cow is the only quality control that matters at the beginning.',
    icon: '👩‍⚕️',
  },
  {
    name: 'Rajan K.',
    role: 'Tea Planter — Third Generation',
    bio: 'Rajan\'s grandfather planted our first tea row in 1948. His father ran the factory through the 1970s and 80s. Rajan now manages the entire 42-acre estate with a philosophy unchanged from his grandfather\'s: hand-pluck only, no shortcuts in withering, and never compromise the cup for yield. He introduced the experimental oolong programme in 2022 and does the first cupping on every single batch.',
    icon: '🍵',
  },
  {
    name: 'Lakshmi P.',
    role: 'Resident Botanist & Medicinal Garden Manager',
    bio: 'Lakshmi holds a PhD in Ethnobotany from the University of Madras and has spent fifteen years cataloguing the medicinal plants of the Nilgiri Biosphere. She joined Hetheya in 2020 to build and manage our 4-acre medicinal garden. She leads every Garden Walk, trains guests in plant identification, and is completing a monograph on 80 underutilised Nilgiri medicinal species.',
    icon: '🌿',
  },
  {
    name: 'Senthil Kumar',
    role: 'Delivery Operations & Route Planning',
    bio: 'Senthil manages the logistics of getting 12,000+ orders delivered before 7 AM. Cold chain, route planning, app integration, customer service escalations — his department is the one that makes or breaks the brand every single morning. He has not missed a delivery SLA in 18 months. During COVID, he personally drove the Coimbatore route when two drivers quarantined simultaneously.',
    icon: '🚚',
  },
];

const VALUES = [
  { title: 'The land is the boss.', desc: 'Every decision on this farm — what to grow, how many cows, how much milk to produce — is governed by what the land can sustain without degrading. We do not maximise yield. We optimise for the land\'s long-term health, which happens to produce the best possible product.' },
  { title: 'The calf feeds first.', desc: 'We milk once a day. The calf nurses before we collect a single litre. This is not a marketing claim. It is the fundamental ethical position that drives every other animal welfare decision on the farm. Dairy without this principle is extraction. Dairy with it is collaboration.' },
  { title: 'Nothing leaves the gate untested.', desc: 'We test every batch for 140 parameters. Not because the law requires it — the law requires far fewer. But because the people who drink our milk are feeding it to their children, and that requires a standard the law has not caught up to yet.' },
  { title: 'Traceability is non-negotiable.', desc: 'Every bottle of milk can be traced to the specific vat, the specific milking session, the specific cows that produced it, and the specific test results that cleared it. If we cannot trace it, we do not sell it.' },
  { title: 'The price must be fair — to the farmer and the cow.', desc: 'We pay our 14 partner smallholders 20% above market rate, provide veterinary support, and guarantee purchase — removing the price uncertainty that crushes small dairies. A fair price upstream is the only way to maintain quality downstream.' },
  { title: 'Transparency is our marketing strategy.', desc: 'We publish our test results. We invite anyone to visit the farm unannounced. We show school children the milking shed and the lab. If we ever have something to hide, we will stop doing it — not stop showing it.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <SiteNav active="/about" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)`, padding: '80px 48px 64px', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', marginBottom: 28, fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' }}>
            🏔️ SINCE 1948 · THREE GENERATIONS · ONE NILGIRI ESTATE
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            We are not<br /><em style={{ fontStyle: 'italic', color: BRAND.pinkSoft }}>a dairy company.</em>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, lineHeight: 1.65, opacity: 0.85, maxWidth: 700, margin: 0 }}>
            We are a three-generation Nilgiri farming family that has been tending the same 85 acres
            since 1948. The dairy came first. Then coffee. Then tea. Then spices. Then a name —
            Hetheya — for what we had always been: a homestead that refuses to compromise.
          </p>
        </div>
      </section>

      {/* Opening statement */}
      <section style={{ padding: '80px 48px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 300, lineHeight: 1.4, letterSpacing: '-0.02em', color: BRAND.ink, fontStyle: 'italic', margin: 0 }}>
          "The milk tastes the way it does because of the grass, and the grass tastes the way it does because of the soil,
          and the soil is what it is because we have never done anything to it that would make it otherwise."
        </p>
        <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.inkMuted, marginTop: 24 }}>
          — The Hetheya founding family, Nilgiris
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: BRAND.creamSoft, padding: '80px 48px', borderTop: `1px solid ${BRAND.creamDeep}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Our History</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
              78 years on<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>one hill.</em>
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 48 }}>
            <div style={{ position: 'absolute', left: 16, top: 0, bottom: 0, width: 2, background: BRAND.creamDeep }} />
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative', paddingBottom: 40 }}
              >
                <div style={{ position: 'absolute', left: -41, top: 4, width: 10, height: 10, borderRadius: '50%', background: i === TIMELINE.length - 1 ? BRAND.pink : BRAND.blue, border: `2px solid ${BRAND.cream}` }} />
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 13, fontWeight: 700, color: BRAND.pink, letterSpacing: '0.08em', marginBottom: 6 }}>{item.year}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, lineHeight: 1.65, color: BRAND.inkMuted, margin: 0, maxWidth: 680 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— What we believe</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
            Six sentences we<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>actually live by.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '32px 36px', background: BRAND.creamSoft, borderRadius: 20, border: `1px solid ${BRAND.creamDeep}` }}
            >
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 11, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 14px', lineHeight: 1.2 }}>{val.title}</h3>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, lineHeight: 1.65, color: BRAND.inkMuted, margin: 0 }}>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: BRAND.blue, color: 'white', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pinkSoft, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— The people</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', margin: 0 }}>
              The team behind<br /><em style={{ fontStyle: 'italic', color: BRAND.pinkSoft }}>every morning.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: '28px 28px', background: 'rgba(255,255,255,0.08)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{member.icon}</div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, color: 'white', marginBottom: 4 }}>{member.name}</div>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.pinkSoft, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>{member.role}</div>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section style={{ background: BRAND.creamDeep, padding: '72px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { value: '78 yrs', label: 'Of continuous farming on this estate' },
            { value: '12,000+', label: 'Subscriber households served daily' },
            { value: '66', label: 'Products made from one farm' },
            { value: '0', label: 'Preservatives or synthetic additives. Ever.' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 700, color: BRAND.blue, letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.inkMuted, marginTop: 8, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.ink, color: 'white', textAlign: 'center', padding: '80px 48px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Come see for yourself.<br /><em style={{ color: BRAND.pinkSoft }}>Any morning.</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.7, marginBottom: 36 }}>
          Farm visits are open year-round. No appointment needed for walk-ins. Guided tours require 48-hour notice.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/ecotourism" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND.pink, color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Book a Farm Visit <ArrowRight size={15} />
          </Link>
          <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
            Shop the Farm <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
