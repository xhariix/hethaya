'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const BRAND = {
  cream: '#FAF5EA', creamDeep: '#F2EBD6', creamSoft: '#FDFAF3',
  blue: '#1B2F8E', blueDeep: '#131F63', blueSoft: '#4258B8',
  pink: '#D8379B', pinkSoft: '#F5C5DF', pinkPale: '#FCE9F3',
  ink: '#0D1427', inkMuted: '#57617A', inkFaint: '#9AA1B4',
  green: '#3A7D44', greenSoft: '#E8F5EA',
  gold: '#C89B3C', goldPale: '#FBF3E0',
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
      <a href="/contact" style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.blue, border: `1px solid ${BRAND.blue}`, padding: '9px 18px', borderRadius: 999, textDecoration: 'none' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
      >Order Now</a>
      <button style={{ background: BRAND.blue, color: 'white', border: 'none', width: 42, height: 42, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingBag size={17} /></button>
    </div>
  </nav>
);

const PLANTATIONS = [
  {
    id: 'tea',
    name: 'Nilgiri Tea',
    tagline: 'Orthodox · CTC · Specialty',
    icon: '🍵',
    color: BRAND.green,
    acreage: '42 acres',
    altitude: '1,800–2,100 m',
    established: '1948',
    description: `The Nilgiris produce some of the world's finest teas — fruity, bright, and brisk in a way that Assam and Darjeeling cannot replicate. Our 42-acre tea estate was planted with vegetatively propagated (VP) clones selected for cup quality over yield, and is maintained under certified organic cultivation without pesticides or synthetic fertilisers.

Nilgiri teas derive their characteristic brightness from the cool mist that rolls in nightly, slowing leaf growth and concentrating flavour compounds. The best flushes happen between November and January (frost tender growth) and in April–May before the monsoon — and we hand-pluck only the top two leaves and a bud during these windows.`,
    products: [
      { name: 'First Flush Nilgiri Orthodox', grade: 'FTGFOP1', desc: 'Tippy golden-flavoured tea from January pluck. Floral, honey-noted, sweet finish.', price: '₹480 / 100 g' },
      { name: 'Nilgiri BOP (Broken Orange Pekoe)', grade: 'BOP', desc: 'Strong, malty morning tea for chai. Our best-seller in 500 g packs.', price: '₹180 / 250 g' },
      { name: 'Nilgiri CTC Dust No. 1', grade: 'D1', desc: 'For hotels, restaurants, and bulk buyers. Full liquor, uniform colour.', price: '₹120 / 500 g' },
      { name: 'Green Tea – Nilgiri Shade-Grown', grade: 'Special', desc: 'Shade-grown for 3 weeks, steamed not fired. Vegetal, mellow, low-astringency.', price: '₹560 / 100 g' },
      { name: 'Nilgiri Oolong (20% oxidized)', grade: 'Special', desc: 'Rare semi-oxidised oolong from our high-altitude plots. Stone fruit and jasmine notes.', price: '₹820 / 100 g' },
      { name: 'Masala Chai Blend', grade: 'Blend', desc: 'Nilgiri BOP with farm-grown cardamom, ginger, and cinnamon. Just add milk.', price: '₹220 / 200 g' },
    ],
    process: [
      '🌿 Hand plucking at 4:30 AM, only two leaves + bud',
      '☀️ Natural withering for 16–18 hours in shade',
      '🌀 Rolling and oxidation in controlled chambers',
      '🔥 Firing at 120°C on gas-fired trough driers',
      '🔬 Grading, tasting, and lab-testing for residues',
      '📦 Nitrogen-flushed foil pouches, sealed same day',
    ],
  },
  {
    id: 'coffee',
    name: 'Nilgiri Coffee',
    tagline: 'Arabica · Robusta · Single Estate',
    icon: '☕',
    color: '#6B4423',
    acreage: '28 acres',
    altitude: '1,400–1,700 m',
    established: '1962',
    description: `Coffee was introduced to the Nilgiris by European planters in the mid-19th century, and the region's unique microclimate — cool nights, warm days, misty mornings, and rich laterite soil — creates conditions that rival Colombia and Ethiopia for cup complexity.

Our 28-acre coffee plantation grows Arabica (SL9, SL34, Cauvery) and Robusta (CXR clone) under a mix of native shade trees — silver oak and jackfruit — that maintain biodiversity while moderating the temperature extremes that damage coffee cherries. We process using three methods: natural (sun-dried), washed (wet process), and honey process — each producing a distinct flavour profile from the same farm.`,
    products: [
      { name: 'Nilgiri Single Estate Arabica', grade: 'AA', desc: 'Washed Cauvery Arabica. Bright acidity, citrus-honey body, clean finish. Best as filter or pour-over.', price: '₹680 / 200 g' },
      { name: 'Natural Process Arabica', grade: 'Natural AA', desc: 'Sun-dried 28 days on raised beds. Intense berry-fruit sweetness, wine-like character. Unique.', price: '₹780 / 200 g' },
      { name: 'Espresso Blend (Arabica + Robusta)', grade: 'Blend', desc: '70% Arabica, 30% Robusta. Crema-rich, chocolatey, handles milk perfectly. Our café staple.', price: '₹420 / 250 g' },
      { name: 'Nilgiri Cold Brew Concentrate', grade: 'Ready-to-use', desc: 'Brewed at 4°C for 20 hours, concentrated 1:4. Dilute with farm milk or water. Pre-order basis.', price: '₹320 / 250 ml' },
      { name: 'Kaapi Powder (South Indian Filter)', grade: 'Blend 60:40', desc: '60% coffee, 40% chicory — classic South Indian filter kaapi blend. Use with a degree filter.', price: '₹280 / 250 g' },
    ],
    process: [
      '🍒 Hand-picking ripe red cherries at peak brix (>22°)',
      '⚖️ Flotation sorting — only dense, high-quality cherries pass',
      '🌊 Wet processing (washed) or dry fermentation (natural)',
      '☀️ Raised-bed drying for 21–28 days for natural lots',
      '🏭 Hulling, grading, density sorting at Ooty dry mill',
      '🧪 Green bean QC + cupping score assessment (SCA methodology)',
      '🔥 Small-batch roasting on a 15 kg drum roaster, on order',
    ],
  },
  {
    id: 'spices',
    name: 'Cash Crops & Spices',
    tagline: 'Cardamom · Pepper · Cinnamon · Turmeric',
    icon: '🌶️',
    color: '#C89B3C',
    acreage: '18 acres',
    altitude: '1,500–1,900 m',
    established: '1975',
    description: `Intercropped across our tea and coffee plantations and grown in dedicated spice gardens, Hetheya's spice portfolio draws on centuries of Nilgiri agricultural tradition. The cool, mist-laden climate of the Nilgiris produces cardamom with exceptionally high volatile oil content, black pepper with intense piperine, and turmeric with curcumin levels that regularly exceed 5% — well above the national average of 2.5%.

All spices are shade-grown, hand-harvested, sun-dried on elevated mesh racks, and processed without chemical additives. Our turmeric is grown from Lakadong (Meghalaya) rhizomes acclimatised to Nilgiri soil — producing a vivid orange-gold colour and curcumin content that has our laboratory consistently reporting 5.5–6%.`,
    products: [
      { name: 'Nilgiri Green Cardamom', grade: 'AGEB Bold', desc: 'Hand-picked at 7 mm+ size. Exceptionally fragrant, high volatile oil (>7% cineole). Certified organic.', price: '₹1,200 / 100 g' },
      { name: 'Cardamom Powder (Fresh Ground)', grade: 'Powder', desc: 'Ground on order from AGEB-grade pods. 48-hour freshness guarantee. Airtight foil sachet.', price: '₹1,400 / 100 g' },
      { name: 'Tellicherry Black Pepper', grade: 'TGSEB', desc: 'Extra bold 7mm+ berries grown in pepper gardens adjacent to our coffee estate.', price: '₹380 / 100 g' },
      { name: 'Nilgiri Turmeric (Lakadong)', grade: 'Organic Raw', desc: 'Curcumin content 5.5–6%. Vivid orange-gold. Available as fingers, powder, or fresh rhizome (seasonal).', price: '₹240 / 200 g' },
      { name: 'Ceylon-Style Cinnamon Quills', grade: 'C4 Grade', desc: 'True Cinnamomum verum — thin-quilled, delicate, sweet. Not cassia. Grown in our spice garden.', price: '₹320 / 100 g' },
      { name: 'Nilgiri Ginger (Dry)', grade: 'Organic', desc: 'Mature ginger sun-dried whole. Sharp, pungent, high gingerol. Ideal for medicinal preparations.', price: '₹180 / 200 g' },
      { name: 'Spice Gift Box (6 varieties)', grade: 'Gift Set', desc: 'Six signature Nilgiri spices in hand-turned wooden caddies. Cardamom, pepper, turmeric, cinnamon, ginger, clove.', price: '₹1,800 / set' },
    ],
    process: [
      '🌱 Shade-grown under native silver oak canopy',
      '✋ Hand-harvested at precise ripeness windows',
      '☀️ Sun-dried on elevated mesh racks, 7–14 days',
      '🌀 Cleaning, grading, and sorting by hand',
      '🔬 Essential oil content tested (GC/MS method)',
      '📦 Nitrogen-sealed moisture-proof packaging',
    ],
  },
];

export default function PlantationsPage() {
  const [active, setActive] = useState('tea');
  const current = PLANTATIONS.find(p => p.id === active)!;

  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <Navbar active="/plantations" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, #5C3D1E 0%, #2A1A0D 100%)`, padding: '80px 48px 64px', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', marginBottom: 28, fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' }}>
            🍵 TEA · ☕ COFFEE · 🌶️ SPICES · NILGIRI HIGHLANDS
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            Three crops.<br /><em style={{ fontStyle: 'italic', color: '#F5D49A' }}>One mountain.</em>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, lineHeight: 1.65, opacity: 0.85, maxWidth: 680, margin: 0 }}>
            Across 88 acres of Nilgiri highlands, Hetheya cultivates single-estate Nilgiri tea,
            shade-grown arabica coffee, and certified organic spices — all processed on-farm,
            all traceable to a specific field and a specific harvest date.
          </p>
        </div>
      </section>

      {/* Plantation tabs */}
      <section style={{ background: BRAND.creamSoft, borderBottom: `1px solid ${BRAND.creamDeep}`, padding: '0 48px', position: 'sticky', top: 66, zIndex: 40, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 0 }}>
          {PLANTATIONS.map(p => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600,
                padding: '20px 32px', border: 'none', background: 'transparent',
                color: active === p.id ? p.color : BRAND.inkMuted,
                borderBottom: `3px solid ${active === p.id ? p.color : 'transparent'}`,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {p.icon} {p.name}
            </button>
          ))}
        </div>
      </section>

      {/* Detail */}
      <section style={{ padding: '72px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start', marginBottom: 56 }}>
            <div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>{current.tagline}</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: '0 0 24px' }}>
                {current.icon} {current.name}
              </h2>
              {current.description.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: BRAND.inkMuted, margin: '0 0 16px' }}>{para}</p>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 200 }}>
              {[
                { label: 'Acreage', value: current.acreage },
                { label: 'Altitude', value: current.altitude },
                { label: 'Est.', value: current.established },
              ].map(s => (
                <div key={s.label} style={{ padding: 20, background: BRAND.creamSoft, borderRadius: 14, border: `1px solid ${BRAND.creamDeep}`, textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: current.color }}>{s.value}</div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: BRAND.inkFaint, marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div style={{ background: BRAND.creamSoft, borderRadius: 20, padding: '36px 40px', border: `1px solid ${BRAND.creamDeep}`, marginBottom: 56 }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 500, color: BRAND.ink, margin: '0 0 24px' }}>From plant to packet</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {current.process.map((step, i) => (
                <div key={i} style={{ padding: '14px 18px', background: 'white', borderRadius: 12, border: `1px solid ${BRAND.creamDeep}`, fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink, lineHeight: 1.45 }}>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 28px' }}>Available now</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {current.products.map((prod, i) => (
                <motion.div
                  key={prod.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{ padding: '24px 28px', background: 'white', borderRadius: 16, border: `1px solid ${BRAND.creamDeep}`, display: 'flex', flexDirection: 'column', gap: 10 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: BRAND.ink, margin: 0, lineHeight: 1.2 }}>{prod.name}</h4>
                    <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, background: BRAND.creamDeep, color: BRAND.inkMuted, whiteSpace: 'nowrap' }}>{prod.grade}</span>
                  </div>
                  <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, lineHeight: 1.55, color: BRAND.inkMuted, margin: 0 }}>{prod.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: current.color }}>{prod.price}</span>
                    <button style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, padding: '8px 16px', borderRadius: 999, border: `1px solid ${current.color}`, background: 'transparent', color: current.color, cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = current.color; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = current.color; }}
                    >
                      Add to order
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.blue, color: 'white', textAlign: 'center', padding: '80px 48px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Order direct from<br /><em style={{ color: BRAND.pinkSoft }}>the plantation.</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.75, marginBottom: 36 }}>
          No middlemen. Each batch traced to a specific field, harvest date, and processing lot.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND.pink, color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Place a Bulk Order <ArrowRight size={15} />
          </a>
          <a href="/ecotourism" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
            Tour the Plantation <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
