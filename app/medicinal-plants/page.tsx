'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag, ChevronDown } from 'lucide-react';
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

const PLANTS = [
  {
    name: 'Eucalyptus (Blue Gum)', botanical: 'Eucalyptus globulus', icon: '🌳',
    origin: 'Introduced by the British in 1840s, now naturalised across the Nilgiris at 1,800–2,200 m',
    parts: 'Leaves, essential oil',
    uses: ['Eucalyptol (1,8-cineole) content 75–85% — highest in the Nilgiris', 'Expectorant, decongestant — used in cough syrups and inhalers', 'Topical analgesic for joint pain and muscle soreness', 'Natural insect repellent — WHO-approved formulations', 'Steam distillation yields 0.8–1.2 ml oil per 100 g fresh leaf'],
    harvest: 'Leaves: Year-round. Bark: Jan–Mar. Oil distillation: Sept–Feb (post-monsoon flush)',
    products: ['Eucalyptus Essential Oil (10 ml, 30 ml)', 'Steam-Distilled Hydrosol Spray', 'Chest Rub Balm with Beeswax'],
    tag: 'Export Grade',
  },
  {
    name: 'Geranium (Bourbon Rose)', botanical: 'Pelargonium graveolens', icon: '🌸',
    origin: 'Introduced from Réunion Island in the 1920s; thrives at 1,700–2,000 m in the Nilgiris',
    parts: 'Aerial parts (leaves, stems, flowers)',
    uses: ['Rose-like fragrance — used in perfumery, cosmetics, aromatherapy', 'Geraniol and citronellol content 20–40% — antimicrobial and anti-inflammatory', 'Balancing effect on skin sebum — popular in facial serums and toners', 'Known anxiolytic and mood-lifting properties in clinical aromatherapy', 'Steam distillation yield: 0.15–0.25 ml oil per 100 g fresh herb'],
    harvest: 'March–May (spring flush) and Sept–Nov (post-monsoon). Two cuts per year maximum.',
    products: ['Geranium Essential Oil (10 ml)', 'Rose Geranium Facial Toner', 'Aromatherapy Roll-On'],
    tag: 'Perfumery Grade',
  },
  {
    name: 'Rosemary', botanical: 'Salvia rosmarinus', icon: '🌿',
    origin: 'Mediterranean native, thriving at Nilgiri altitude since 1960s in well-drained laterite beds',
    parts: 'Flowering tops and leaves',
    uses: ['1,8-cineole and camphor content 30–50% — cognitive enhancement studies ongoing', 'Rosmarinic acid — powerful antioxidant, anti-inflammatory activity confirmed in vitro', 'Hair growth stimulation (clinical trial: 22% increase in hair count vs minoxidil)', 'Memory and focus enhancement in inhalation studies (Northumbria University, 2016)', 'Culinary: pairs with lamb, roasted vegetables, breads, and olive oil'],
    harvest: 'March–April and October–November. Harvest before full bloom for maximum essential oil.',
    products: ['Rosemary Essential Oil (10 ml)', 'Rosemary Hair Oil (with Bhringraj and Amla)', 'Dried Culinary Rosemary (20 g)'],
    tag: 'Medicinal Grade',
  },
  {
    name: 'Lavender (English)', botanical: 'Lavandula angustifolia', icon: '💜',
    origin: 'Experimental cultivation introduced at Ooty Research Station in 1980s; commercially viable at 2,000+ m',
    parts: 'Flowering spikes',
    uses: ['Linalool content 25–50% — clinically proven anxiolytic (Journal of Alternative Medicine)', 'Promotes sleep onset and sleep quality (meta-analysis of 15 RCTs)', 'Anti-inflammatory topical for minor burns, insect bites, and acne', 'Antifungal properties against Candida albicans (in vitro)', 'Sachets traditionally used in wardrobe to repel moths naturally'],
    harvest: 'June–July (main harvest) when 50% of florets open. Morning picking only.',
    products: ['Lavender Essential Oil (10 ml, 30 ml)', 'Lavender Sleep Pillow Mist (100 ml)', 'Dried Lavender Sachets (3-pack)', 'Lavender Honey (with Nilgiri forest honey)'],
    tag: 'Clinical Grade',
  },
  {
    name: 'Wintergreen', botanical: 'Gaultheria fragrantissima', icon: '❄️',
    origin: 'Native to the Nilgiri hills and high Himalayan slopes. One of the most underutilised medicinal trees.',
    parts: 'Leaves (steam distillation for oil)',
    uses: ['Methyl salicylate content 96–99% — natural aspirin analogue', 'Topical pain relief: muscular aches, arthritis, sports injuries (counter-irritant mechanism)', 'A key ingredient in tiger balm formulations and Ayurvedic liniments', 'Antimicrobial oral care: mouthwash formulations for plaque and halitosis', 'Nilgiri wintergreen oil is the world\'s purest natural methyl salicylate source'],
    harvest: 'October–December, after monsoon. Leaves are fermented 24 hours before distillation to maximise yield.',
    products: ['Wintergreen Essential Oil (10 ml)', 'Pain Relief Liniment (with Camphor)', 'Wintergreen Muscle Balm'],
    tag: 'Analgesic Grade',
  },
  {
    name: 'Cinchona (Quinine Tree)', botanical: 'Cinchona officinalis / ledgeriana', icon: '🌲',
    origin: 'Introduced to the Nilgiris by the British in 1860 for quinine production. Historical TATA estate now maintained by Hetheya.',
    parts: 'Bark (root and stem)',
    uses: ['Quinine alkaloids 1.5–2.5% in bark — historically world\'s primary malaria treatment', 'Modern use: tonic water production, bitter liqueurs, fever-break formulations', 'Quinidine used in cardiac arrhythmia treatment (WHO Essential Medicines)', 'Astringent bark used in hair tonics for scalp health', 'Rare tree — under conservation and controlled harvest on our estate'],
    harvest: 'Controlled selective harvest of 8–10 year old stems. March–May before rains.',
    products: ['Cinchona Bark Tincture (50 ml, for professional use)', 'Quinine Tonic Bitters (cocktail use)', 'Cinchona Bark Powder (100 g)'],
    tag: 'Rare · Conservation',
  },
  {
    name: 'Gotu Kola (Asiatic Pennywort)', botanical: 'Centella asiatica', icon: '🍀',
    origin: 'Indigenous to the Nilgiris and Western Ghats. Grows wild along stream banks; cultivated in our shade gardens.',
    parts: 'Whole aerial plant (leaves and stems)',
    uses: ['Asiaticoside and madecassoside content — clinical trials confirm wound healing and collagen synthesis', 'Cognitive enhancement: Brahmi-class adaptogen, studied for Alzheimer\'s and age-related memory decline', 'Chronic venous insufficiency treatment in European phytomedicine (approved in France, Italy)', 'Anti-anxiety effects comparable to diazepam in rat models (Indian J Pharmacol)', 'Consumed fresh as a chutney, smoothie addition, or tea in South Indian tradition'],
    harvest: 'Year-round in shaded, irrigated beds. Peak active compounds in March–April.',
    products: ['Gotu Kola Powder (100 g)', 'Brahmi + Gotu Kola Brain Tonic Capsules', 'Fresh Gotu Kola (seasonal, 100 g bundles)'],
    tag: 'Adaptogen',
  },
  {
    name: 'Lemon Eucalyptus', botanical: 'Corymbia citriodora', icon: '🍋',
    origin: 'Naturalised in the Nilgiris at 1,400–1,800 m. Distinct from blue gum; different chemistry.',
    parts: 'Leaves',
    uses: ['Citronellal content 70–85% — gives the distinctive lemon-citrus fragrance', 'CDC-approved insect repellent (PMD — p-menthane-3,8-diol) derived from this oil', 'Anti-fungal and anti-bacterial in MRSA-resistant strain studies', 'Calming, anxiety-reducing effects via citronellal inhalation', 'Used in natural mosquito-repellent candles, sprays, and balms'],
    harvest: 'Leaves: August–October. Oil distillation in Oct–Jan for premium citronellal content.',
    products: ['Lemon Eucalyptus Essential Oil (10 ml)', 'Natural Mosquito Repellent Spray (100 ml)', 'Lemon Eucalyptus Candle (soy + beeswax)'],
    tag: 'CDC Approved Compound',
  },
  {
    name: 'Pyrethrum (Chrysanthemum)', botanical: 'Tanacetum cinerariifolium', icon: '🌼',
    origin: 'Cultivated in the Nilgiris since 1920 by the British as a natural pesticide crop. Thrives above 1,800 m.',
    parts: 'Dried flower heads',
    uses: ['Pyrethrins I and II — natural insecticides with WHO approval for organic farming', 'Rapidly biodegradable — breaks down within 12 hours in sunlight, no soil accumulation', 'Used in eco-certified mosquito coils, sprays, livestock pour-ons, and grain storage', 'Repels insects at sub-lethal doses; kills at full dose — dual-mode action', 'Human and mammal safe at recommended concentrations; highly toxic to aquatic invertebrates (use cautiously near water)'],
    harvest: 'August–September when flowers are 75% open. Dried immediately at <40°C.',
    products: ['Pyrethrum Flower Extract (concentrated, for pest control)', 'Organic Farm Spray Kit (1 L)', 'Dried Pyrethrum Flowers (for DIY formulations)'],
    tag: 'Organic Pest Control',
  },
  {
    name: 'Nilgiri Nettle (Wild Himalayan Nettle)', botanical: 'Urtica dioica', icon: '🌱',
    origin: 'Wild-growing across Nilgiri stream edges and forest margins at 1,600–2,100 m. Sustainably wild-harvested.',
    parts: 'Leaves, roots, stems, seeds',
    uses: ['Iron: 1.64 mg per 100 g leaf — higher than spinach. Calcium: 481 mg per 100 g', 'BPH (benign prostatic hyperplasia) treatment in European phytomedicine — roots used', 'Topical anti-inflammatory: historic treatment for joint pain via controlled urtication', 'Freeze-dried leaf powder: nutritional supplement, smoothie additive, stinging sensation removed', 'Stem fibre: bast fibre used in Himalayan textiles — ancient craft we document but do not yet commercialise'],
    harvest: 'March–May (spring leaves, highest nutrients). Roots: October–November. Gloves mandatory.',
    products: ['Nettle Leaf Powder (100 g)', 'Nettle Root Extract Capsules', 'Nettle Tea (dried leaf, 50 g)'],
    tag: 'Nutritional + Medicinal',
  },
];

export default function MedicinalPlantsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <Navbar active="/medicinal-plants" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, #2D5A1E 0%, #153010 100%)`, padding: '80px 48px 64px', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', marginBottom: 28, fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' }}>
            🌿 10 SPECIES · MEDICINAL & AROMATIC · NILGIRI BIOSPHERE
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            The Nilgiri<br /><em style={{ fontStyle: 'italic', color: '#A8E6B5' }}>medicine garden.</em>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, lineHeight: 1.65, opacity: 0.85, maxWidth: 720, margin: 0 }}>
            The Nilgiris have been a centre of medicinal and aromatic plant cultivation since the 19th century.
            Hetheya grows, wild-harvests, and processes 10 species across our estate — each with documented
            therapeutic properties, traceable harvest dates, and certified organic cultivation.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '64px 48px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Click any plant to expand</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: 0 }}>
            Ten plants. Ten stories.<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>Ten reasons to be here.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {PLANTS.map((plant, i) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${BRAND.creamDeep}`, marginBottom: 8 }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  width: '100%', padding: '24px 32px', background: expanded === i ? BRAND.creamSoft : 'white',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 20, textAlign: 'left',
                  transition: 'background 0.2s',
                }}
              >
                <span style={{ fontSize: 32, flexShrink: 0 }}>{plant.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, color: BRAND.ink }}>{plant.name}</span>
                    <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: BRAND.green + '20', color: BRAND.green }}>{plant.tag}</span>
                  </div>
                  <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted, fontStyle: 'italic' }}>{plant.botanical}</span>
                </div>
                <ChevronDown size={20} color={BRAND.inkFaint} style={{ transform: expanded === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', flexShrink: 0 }} />
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 32px 32px', background: BRAND.creamSoft, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                      <div>
                        <div style={{ marginBottom: 20, paddingTop: 24 }}>
                          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Origin & Habitat</div>
                          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, lineHeight: 1.6, color: BRAND.inkMuted, margin: 0 }}>{plant.origin}</p>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Parts Used</div>
                          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.ink, margin: 0 }}>{plant.parts}</p>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Harvest Window</div>
                          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.ink, margin: 0 }}>{plant.harvest}</p>
                        </div>
                        <div>
                          <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, fontWeight: 600, color: BRAND.green, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Available Products</div>
                          {plant.products.map((p, j) => (
                            <div key={j} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink, padding: '8px 14px', background: 'white', borderRadius: 8, marginBottom: 6, border: `1px solid ${BRAND.creamDeep}` }}>
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ paddingTop: 24 }}>
                        <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Traditional & Documented Uses</div>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                          {plant.uses.map((use, j) => (
                            <li key={j} style={{ display: 'flex', gap: 12, paddingBottom: 14, borderBottom: j < plant.uses.length - 1 ? `1px solid ${BRAND.creamDeep}` : 'none', marginBottom: j < plant.uses.length - 1 ? 14 : 0 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: BRAND.green, flexShrink: 0, marginTop: 6 }} />
                              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, lineHeight: 1.6, color: BRAND.inkMuted }}>{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.blue, color: 'white', textAlign: 'center', padding: '80px 48px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Bulk orders & B2B<br /><em style={{ color: BRAND.pinkSoft }}>welcome.</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.75, marginBottom: 36 }}>
          We supply essential oils, dry herbs, and plant extracts to pharma, cosmetic, and food manufacturers.
          COA provided with every batch. Export documentation available.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND.pink, color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Enquire Now <ArrowRight size={15} />
          </Link>
          <Link href="/ecotourism" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'white', padding: '16px 32px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
            Walk the Garden <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
