'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

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
  <nav style={{
    position: 'sticky', top: 0, zIndex: 50,
    padding: '14px 48px',
    background: 'rgba(250, 245, 234, 0.96)',
    backdropFilter: 'blur(16px) saturate(140%)',
    borderBottom: `1px solid ${BRAND.creamDeep}`,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  }}>
    <Link href="/" style={{ textDecoration: 'none' }}><HetheyaLogo height={40} /></Link>
    <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
      {NAV_LINKS.map((item) => (
        <Link key={item.label} href={item.href} style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 13, fontWeight: item.href === active ? 600 : 500,
          color: item.href === active ? BRAND.pink : BRAND.ink,
          textDecoration: 'none', transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = BRAND.pink}
        onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = item.href === active ? BRAND.pink : BRAND.ink}
        >{item.label}</Link>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Link href="/contact" style={{
        fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 500,
        color: BRAND.blue, border: `1px solid ${BRAND.blue}`,
        padding: '9px 18px', borderRadius: 999, textDecoration: 'none', transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
      >Order Now</Link>
      <button style={{
        background: BRAND.blue, color: 'white', border: 'none',
        width: 42, height: 42, borderRadius: 999, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <ShoppingBag size={17} />
      </button>
    </div>
  </nav>
);

const REASONS = [
  {
    num: '01',
    title: 'Altitude at 2,240 m — The Nilgiri Advantage',
    body: `Ooty sits at an average elevation of 2,240 metres above sea level. At this height, the air is cooler, thinner, and free from the heat-stress that plagues lowland dairy. Our cows graze in ambient temperatures between 8°C and 22°C year-round — the exact sweet spot for milk that is naturally rich in fat, protein, and beneficial enzymes.\n\nHighland grass absorbs more minerals from the cool, slow-draining volcanic soil. That mineral complexity passes directly into our milk, giving Hetheya dairy its unmistakable depth of flavour — the kind that lingers.`,
    icon: '⛰️',
    stat: '2,240 m', statLabel: 'average elevation',
  },
  {
    num: '02',
    title: 'The Nilgiri Microclimate — Mist, Rain & Cool Air',
    body: `The Nilgiris receive an average of 1,900 mm of rainfall annually, spread across two monsoons — the southwest monsoon from June to September and the northeast monsoon through December. This ensures lush green pastures all year, never brown, never dormant.\n\nThe perpetual mist that wraps our hillsides acts as a natural humidifier, keeping grasses tender and high in moisture content. Cows on this terrain produce milk with higher casein and whey protein ratios — critical for making excellent paneer, cheese, and yogurt.`,
    icon: '🌧️',
    stat: '1,900 mm', statLabel: 'annual rainfall',
  },
  {
    num: '03',
    title: 'Biodiversity — 3,000+ Plant Species as Natural Forage',
    body: `The Nilgiri Biosphere Reserve is a UNESCO-recognised hotspot containing over 3,300 species of flowering plants. Our grazing lands border this reserve, and the diversity of wild herbs, shrubs, and grasses that our cattle consume is staggering.\n\nCows that graze on diverse botanical pastures — including wild clover, lemon grass, eucalyptus-scented grasses, blue-stem varieties, and Nilgiri fescue — produce milk with a broader spectrum of short-chain fatty acids, antioxidants, and fat-soluble vitamins (A, D, E, K2) than grain-fed or single-grass-fed counterparts.`,
    icon: '🌿',
    stat: '3,300+', statLabel: 'flowering plant species',
  },
  {
    num: '04',
    title: 'Volcanic Laterite Soil — Mineral-Rich from the Ground Up',
    body: `The Nilgiri plateau was formed by volcanic activity millions of years ago. The resulting laterite soil is iron-rich, well-drained, and loaded with trace minerals — selenium, zinc, manganese, and magnesium — that are often depleted in conventional farmland.\n\nMineral-rich soil → mineral-rich grass → mineral-rich milk. Our A2 cow milk consistently tests higher in selenium and magnesium than lowland dairy. Selenium is critical for thyroid function; magnesium for sleep and nervous system regulation. You are, quite literally, eating the mountain.`,
    icon: '🌋',
    stat: 'Iron-rich', statLabel: 'laterite volcanic soil',
  },
  {
    num: '05',
    title: 'Stress-Free Animals — The Hetheya Commitment',
    body: `Our cows are never confined. They roam 4–6 km of open hill pasture daily, following their natural grazing instincts. We milk them only once a day — at dawn — so the calf always feeds first. The surplus is what becomes your milk.\n\nResearch consistently shows that low-stress cattle produce milk with higher oxytocin levels, lower cortisol contamination, and better fat globule structure — translating to creamier, sweeter milk. Our herd's welfare is not a marketing claim; it is written into our farm management protocol, and you are welcome to visit any day of the year.`,
    icon: '🐄',
    stat: '4–6 km', statLabel: 'daily free-roam grazing',
  },
  {
    num: '06',
    title: 'Zero Chemical Inputs — Certified Organic Pastures',
    body: `Our pastures have never seen synthetic fertiliser, herbicide, or pesticide. We use composted cow dung and vermicompost from our own biogas unit to enrich the soil. Pest management is done using neem-based sprays and companion planting with pyrethrum — a Nilgiri flower with natural insecticidal properties.\n\nWe are certified organic by APOF (Association for Promotion of Organic Farming) and in process of obtaining India Organic and EU Organic equivalency. Every batch of milk we produce is tested by an NABL-accredited laboratory for 140 parameters including pesticide residues, antibiotics, and aflatoxins — before it leaves the farm.`,
    icon: '🌱',
    stat: '140+', statLabel: 'quality parameters tested',
  },
  {
    num: '07',
    title: 'The A2 Difference — Desi Cow Genetics',
    body: `Hetheya farms exclusively Gir, Sahiwal, and Kangayam cows — all indigenous Indian breeds that naturally produce A2 beta-casein protein. This is in contrast to most commercial dairy which uses Holstein-Friesian (HF) or Jersey crossbreeds that predominantly produce A2 mixed with A1 protein.\n\nA1 beta-casein is associated in several peer-reviewed studies with increased gut inflammation, higher rates of type-1 diabetes in susceptible populations, and digestive discomfort in lactose-sensitive individuals. A2-only milk avoids this protein entirely, making it gentler on the gut — and noticeably easier to digest for those who thought they were lactose intolerant.`,
    icon: '🐮',
    stat: '100% A2', statLabel: 'desi breed cattle only',
  },
  {
    num: '08',
    title: '6-Hour Farm-to-Door Chain — Freshness is a Science',
    body: `Our milk is collected at 4:30 AM, chilled to 4°C within 30 minutes using solar-powered plate chillers, tested at our on-site mini-lab, and dispatched in insulated vehicles by 5:15 AM. It reaches your doorstep in Coimbatore, Chennai, or Bangalore before 7 AM.\n\nThe international standard for fresh milk quality is the Standard Plate Count (SPC). Our milk arrives at your door with an SPC below 10,000 CFU/ml — compared to the Indian standard of 500,000 CFU/ml for pasteurised milk. That gap represents the Nilgiri cold chain, and the discipline of doing every step right.`,
    icon: '🚚',
    stat: '< 6 hours', statLabel: 'farm-to-door guarantee',
  },
];

const SEASONS = [
  { season: 'Jan – Mar', weather: 'Cool & Dry', pasture: 'Star grass, wild clover', milkNotes: 'Peak fat content — best for ghee and butter' },
  { season: 'Apr – May', weather: 'Warm & Pre-monsoon', pasture: 'Lemon grass emerges, fescue', milkNotes: 'Higher lactose, ideal for sweets and desserts' },
  { season: 'Jun – Sep', weather: 'SW Monsoon, Heavy Rain', pasture: 'Lush dense growth, nitrogen-rich', milkNotes: 'Highest yield, peak protein — best for paneer and cheese' },
  { season: 'Oct – Nov', weather: 'NE Monsoon, Mist', pasture: 'Wild herbs, fragrant grasses', milkNotes: 'Most flavourful milk of the year — drink it plain' },
  { season: 'Dec', weather: 'Cold, occasional frost', pasture: 'Slower growth, mineral-dense', milkNotes: 'Dense, thick milk with visible cream layer' },
];

export default function WhyOotyPage() {
  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <Navbar active="/why-ooty" />

      {/* Hero */}
      <section style={{
        background: `linear-gradient(160deg, ${BRAND.green} 0%, #1F5C2E 100%)`,
        padding: '80px 48px 64px', color: 'white',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            background: 'rgba(255,255,255,0.15)', marginBottom: 28,
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
          }}>
            🌿 NILGIRI BIOSPHERE RESERVE · UNESCO RECOGNIZED
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(44px, 6vw, 88px)',
            fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em',
            margin: '0 0 24px',
          }}>
            Why Ooty makes<br />
            <em style={{ fontStyle: 'italic', color: '#A8E6B5' }}>better dairy.</em>
          </h1>
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 18, lineHeight: 1.65, opacity: 0.85,
            maxWidth: 680, margin: 0,
          }}>
            The Nilgiris is not just a location — it is a living laboratory of biodiversity,
            climate, and geology that has been producing the finest dairy in India for over
            two centuries. Here is the science behind why our milk tastes different.
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section style={{ background: BRAND.blue, padding: '40px 48px' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }}>
          {[
            { value: '2,240 m', label: 'Elevation above sea level' },
            { value: '1,900 mm', label: 'Annual rainfall' },
            { value: '8–22 °C', label: 'Year-round temperature range' },
            { value: '3,300+', label: 'Native plant species' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, opacity: 0.7, marginTop: 6, letterSpacing: '0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons */}
      <section style={{ padding: '80px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Eight reasons</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
            The geography of<br />
            <em style={{ fontStyle: 'italic', color: BRAND.blue }}>exceptional milk.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                gap: 64, alignItems: 'start',
              }}
            >
              {i % 2 === 0 ? (
                <>
                  <div style={{
                    background: BRAND.creamSoft, borderRadius: 24, padding: 40,
                    border: `1px solid ${BRAND.creamDeep}`, textAlign: 'center',
                    position: 'sticky', top: 120,
                  }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>{reason.icon}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 11, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{reason.num}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 700, color: BRAND.blue, letterSpacing: '-0.02em' }}>{reason.stat}</div>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted, marginTop: 8, letterSpacing: '0.04em' }}>{reason.statLabel}</div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 400, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 20px', lineHeight: 1.15 }}>{reason.title}</h3>
                    {reason.body.split('\n\n').map((para, j) => (
                      <p key={j} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: BRAND.inkMuted, margin: '0 0 16px' }}>{para}</p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 400, letterSpacing: '-0.02em', color: BRAND.ink, margin: '0 0 20px', lineHeight: 1.15 }}>{reason.title}</h3>
                    {reason.body.split('\n\n').map((para, j) => (
                      <p key={j} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: BRAND.inkMuted, margin: '0 0 16px' }}>{para}</p>
                    ))}
                  </div>
                  <div style={{
                    background: BRAND.creamSoft, borderRadius: 24, padding: 40,
                    border: `1px solid ${BRAND.creamDeep}`, textAlign: 'center',
                    position: 'sticky', top: 120,
                  }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>{reason.icon}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 11, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{reason.num}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 700, color: BRAND.blue, letterSpacing: '-0.02em' }}>{reason.stat}</div>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted, marginTop: 8, letterSpacing: '0.04em' }}>{reason.statLabel}</div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasons Table */}
      <section style={{ background: BRAND.creamSoft, padding: '80px 48px', borderTop: `1px solid ${BRAND.creamDeep}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Seasonal Calendar</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
              How Nilgiri seasons<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>shape your dairy.</em>
            </h2>
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${BRAND.creamDeep}` }}>
            {SEASONS.map((row, i) => (
              <div key={row.season} style={{
                display: 'grid', gridTemplateColumns: '140px 180px 1fr 1fr',
                gap: 24, padding: '24px 32px',
                background: i % 2 === 0 ? 'white' : BRAND.creamSoft,
                borderBottom: i < SEASONS.length - 1 ? `1px solid ${BRAND.creamDeep}` : 'none',
                alignItems: 'start',
              }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600, color: BRAND.blue }}>{row.season}</div>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted }}>{row.weather}</div>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink }}>{row.pasture}</div>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.green, fontWeight: 500 }}>{row.milkNotes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.blue, color: 'white', textAlign: 'center', padding: '80px 48px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Taste the mountain.<br /><em style={{ color: BRAND.pinkSoft }}>Every morning.</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.75, marginBottom: 36 }}>
          Start a subscription and receive fresh Nilgiri dairy at your door before 7 AM.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND.pink, color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Shop Products <ArrowRight size={15} />
          </Link>
          <Link href="/ecotourism" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 500, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
            Visit the Farm <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
