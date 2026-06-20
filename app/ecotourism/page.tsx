'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Check, Star, Calendar, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import SiteNav from '../SiteNav';

const BRAND = {
  cream: '#FAF5EA', creamDeep: '#F2EBD6', creamSoft: '#FDFAF3',
  blue: '#1B2F8E', blueDeep: '#131F63', blueSoft: '#4258B8',
  pink: '#D8379B', pinkSoft: '#F5C5DF', pinkPale: '#FCE9F3',
  ink: '#0D1427', inkMuted: '#57617A', inkFaint: '#9AA1B4',
  green: '#3A7D44', greenSoft: '#E8F5EA',
  gold: '#C89B3C',
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
      >Book a Visit</Link>
      <button style={{ background: BRAND.blue, color: 'white', border: 'none', width: 42, height: 42, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingBag size={17} /></button>
    </div>
  </nav>
);

const EXPERIENCES = [
  {
    id: 'dairy-tour',
    title: 'Sunrise Dairy Tour',
    tagline: 'Walk the milking shed. Watch the cold chain. Taste it all.',
    duration: '3 hours (4:30 AM – 7:30 AM)',
    groupSize: '2–12 guests',
    price: '₹1,500 / person',
    bestFor: 'Families, food enthusiasts, school groups',
    icon: '🐄',
    color: BRAND.blue,
    description: `Begin before dawn at the milking parlour, where our 200+ indigenous Gir and Sahiwal cows line up for their morning milking. Watch the plate chillers bring fresh milk from 34°C to 4°C in twenty minutes. See our on-farm mini-lab in action — the Milkana tests, the somatic cell count, the fat and protein readings that determine if a batch passes.

Then move to the processing room: watch pasteurisation, bottling, and labelling. At 6:30 AM, sit down to a farm breakfast — the same milk you just saw collected, poured hot into chai over a wood fire, with fresh paneer bhurji on ghee-fried bread.`,
    includes: [
      'Guided milking shed walkthrough with our head milkman',
      'Cold chain demonstration from vat to bottle',
      'On-farm lab demonstration (fat test, protein test)',
      'Farm-fresh chai and a full Nilgiri breakfast',
      '1 litre A2 milk and 200 g paneer to take home',
      'Certificate of visit (popular with school groups)',
    ],
    schedule: 'Daily except Mondays. Booking required 48 hours in advance.',
    reviews: [
      { name: 'Karthik M.', city: 'Coimbatore', stars: 5, text: 'We\'ve been drinking Hetheya milk for 2 years. Seeing the farm brought a different kind of appreciation. My 8-year-old is now obsessed with cows.' },
      { name: 'Priya V.', city: 'Chennai', stars: 5, text: 'The 4:30 AM alarm was worth every second. The breakfast alone would justify the trip. We ordered a 6-month subscription on the drive back.' },
    ],
  },
  {
    id: 'plantation-walk',
    title: 'Plantation Walk & Tea Experience',
    tagline: 'Through the tea rows. Into the drying room. Cup in hand.',
    duration: '4 hours (8:00 AM – 12:00 PM)',
    groupSize: '2–16 guests',
    price: '₹1,800 / person',
    bestFor: 'Tea enthusiasts, couples, corporate retreats',
    icon: '🍵',
    color: BRAND.green,
    description: `Walk our 42-acre tea estate as the Nilgiri mist begins to lift. Your guide — a third-generation tea worker — will show you how to identify the right two-leaves-and-a-bud pluck, the difference between a monsoon flush and a frost flush, and why Nilgiri tea has a brightness that Assam and Darjeeling cannot replicate.

Then move to the tea factory: withering, rolling, oxidation, firing. You'll understand every cup you ever drink differently after this. End with a structured tea tasting: six Nilgiri teas from our estate, including an experimental Nilgiri oolong and a rare green tea — scored and discussed with our tea master.`,
    includes: [
      'Guided walk through the estate with an experienced planter',
      'Hands-on tea plucking demonstration (take home what you pluck)',
      'Factory tour: withering troughs, CTC rollers, firing tables',
      'Structured cupping session — 6 teas, guided by our tea master',
      '100 g premium Nilgiri orthodox to take home',
      'Complimentary tea-paired snack platter (local biscuits, cake, fruit)',
    ],
    schedule: 'Tuesday, Thursday, Saturday, Sunday. 8:00 AM – 12:00 PM. Max 16 guests.',
    reviews: [
      { name: 'Anjali & Rohan K.', city: 'Bangalore', stars: 5, text: 'Our anniversary trip. The tea tasting was extraordinarily well-curated. The oolong changed our understanding of Indian tea entirely.' },
      { name: 'Sundar N.', city: 'Mumbai', stars: 5, text: 'Took my team of 12 here for a retreat. The factory tour alone generated more discussion than our two-day offsite.' },
    ],
  },
  {
    id: 'farm-stay',
    title: 'Farmhouse Stay (2N/3D)',
    tagline: 'Wake to mist. Sleep to silence. Eat what the land grows.',
    duration: '2 nights / 3 days',
    groupSize: '2–8 guests',
    price: '₹8,500 / person (all-inclusive)',
    bestFor: 'Families, couples, small groups seeking slow travel',
    icon: '🏡',
    color: BRAND.pink,
    description: `Three days of complete immersion in the Hetheya way of life. Your private farmhouse sits at 1,900 m on the estate, surrounded by tea rows on one side and a working dairy on the other. There is no WiFi in the farmhouse — by design.

Mornings begin with the 4:30 AM milking if you choose to join. Breakfasts are made from farm produce: A2 milk, farm eggs, homegrown vegetables, and homemade preserves. Each day includes one guided experience from our programme — dairy tour, plantation walk, medicinal garden walk, or bird-watching in the forest reserve boundary. Evenings around a wood fire with hot toddy and stories from our oldest farm worker, who remembers the estate when it had 600 cows and supplied milk to the Ooty club.`,
    includes: [
      'Private farmhouse accommodation (1 or 2 bedrooms)',
      'All meals: farm-sourced breakfasts, packed lunches, home-cooked dinners',
      'One guided experience per day (choose from our full programme)',
      'Evening campfire with tea, coffee, and local snacks',
      'Complimentary farm produce hamper on checkout (milk, ghee, spices, tea)',
      'Village market visit with our farm manager on Day 2',
      'Sunrise over the Nilgiris from the estate\'s highest point (weather permitting)',
    ],
    schedule: 'Check-in: Thursday or Friday. Check-out: Sunday. Bookings open 30 days in advance.',
    reviews: [
      { name: 'Meera & Aditya S.', city: 'Hyderabad', stars: 5, text: 'We came for the farm but stayed for the food. Three days felt like three weeks in the best possible way. The silence is not something you can prepare for.' },
      { name: 'Vinod Family', city: 'Coimbatore', stars: 5, text: 'Four adults, two kids. Everyone left differently than they arrived. My daughter now wants to be a farmer. Hetheya did that.' },
    ],
  },
  {
    id: 'school-programme',
    title: 'School Farm Programme',
    tagline: 'Where food comes from. How it grows. Why it matters.',
    duration: '5 hours (full-day)',
    groupSize: '20–60 students',
    price: '₹600 / student (min 20)',
    bestFor: 'Schools, colleges, educational institutions, Grades 4–12',
    icon: '🎒',
    color: BRAND.blueDeep,
    description: `Designed with curriculum objectives in mind for Biology, Environmental Science, and Economics teachers. Students follow a complete food systems journey — from soil and seed to cow and calf to milk and market.

Programme modules are adapted by grade level. Junior groups (Grades 4–7) focus on animal husbandry and dairy basics. Senior groups (Grades 8–12) go deeper into organic certification, soil science, cold chain logistics, and food safety testing. The programme concludes with a Q&A with our farm manager and a farm lunch.`,
    includes: [
      'Structured 5-module educational programme with worksheets',
      'Guided farm and dairy tour (4:30 AM option for boarding schools)',
      'Hands-on lab activities: fat test, protein test, pH measurement',
      'Tea plucking demonstration and garden walk',
      'Farm lunch (vegetarian): dal, rice, vegetables, farm curd, buttermilk',
      'Take-home activity kit: seed, soil sample, milk testing strip',
      'Certificate of participation for each student',
      'Teacher resource pack with lesson plan alignment',
    ],
    schedule: 'Monday to Saturday. 8:00 AM – 1:00 PM. Minimum 20 students. 30-day advance booking.',
    reviews: [
      { name: 'Ms. Deepa R., PSBB School', city: 'Chennai', stars: 5, text: 'We have taken students to farms before, but the structured curriculum and the hands-on lab made this genuinely educational. Teachers were as engaged as students.' },
      { name: 'Mr. Ganesh A., Ooty Public School', city: 'Ooty', stars: 5, text: 'The 4:30 AM milking for our boarding students was transformative. They talk about it months later.' },
    ],
  },
  {
    id: 'medicinal-walk',
    title: 'Medicinal Garden Walk',
    tagline: 'Walk the plants that heal. Smell them. Learn their names.',
    duration: '2.5 hours (9:00 AM – 11:30 AM)',
    groupSize: '2–20 guests',
    price: '₹1,200 / person',
    bestFor: 'Nature lovers, Ayurveda practitioners, herbalists, curious minds',
    icon: '🌿',
    color: BRAND.green,
    description: `A guided walk through our 4-acre medicinal and aromatic plant garden with our resident botanist, who has been cataloguing Nilgiri medicinal plants for fifteen years. Every plant has a sign in three languages — English, Tamil, and its botanical name — but the walk goes far beyond names.

You will learn to identify eucalyptus from lemon eucalyptus by crushing a leaf. You will smell the camphor in rosemary and the citronellal in lemon grass. You will see wintergreen in fruit and understand why the British used Nilgiri wintergreen oil to synthesise aspirin alternatives. You will taste gotu kola fresh from the garden and understand its Ayurvedic context.`,
    includes: [
      'Guided walk with our resident botanist',
      'Hands-on sensory identification — touch, smell, taste (safe species)',
      'Essential oil steam distillation demonstration (10 ml oil extraction live)',
      'Herbal tea tasting: 4 varieties prepared from fresh garden herbs',
      'Printed botanical reference card for 15 Nilgiri medicinal plants',
      '30 ml eucalyptus essential oil to take home',
    ],
    schedule: 'Wednesday, Friday, Sunday. 9:00 AM – 11:30 AM. Maximum 20 guests.',
    reviews: [
      { name: 'Dr. Sujatha P.', city: 'Coimbatore', stars: 5, text: 'As an Ayurveda practitioner, I have read about these plants for twenty years. Smelling them growing in situ is completely different. An extraordinary programme.' },
    ],
  },
];

export default function EcotourismPage() {
  const [selected, setSelected] = useState('dairy-tour');
  const current = EXPERIENCES.find(e => e.id === selected)!;

  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <SiteNav active="/ecotourism" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, #1B4A2E 0%, #0C2415 100%)`, padding: '80px 48px 64px', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', marginBottom: 28, fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' }}>
            🏡 OOTY · NILGIRI HILLS · OPEN YEAR-ROUND
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            Come see where<br /><em style={{ fontStyle: 'italic', color: '#A8E6B5' }}>breakfast is born.</em>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 18, lineHeight: 1.65, opacity: 0.85, maxWidth: 680, margin: 0 }}>
            Five curated experiences across our dairy farm, tea estate, coffee plantation, and medicinal garden.
            From sunrise milking tours to 2-night farmhouse stays — all designed to reconnect you
            with where food actually comes from.
          </p>
        </div>
      </section>

      {/* Experience tabs */}
      <section style={{ background: BRAND.creamSoft, borderBottom: `1px solid ${BRAND.creamDeep}`, padding: '0 48px', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 0, whiteSpace: 'nowrap' }}>
          {EXPERIENCES.map(exp => (
            <button
              key={exp.id}
              onClick={() => setSelected(exp.id)}
              style={{
                fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600,
                padding: '18px 24px', border: 'none', background: 'transparent',
                color: selected === exp.id ? exp.color : BRAND.inkMuted,
                borderBottom: `3px solid ${selected === exp.id ? exp.color : 'transparent'}`,
                cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}
            >
              {exp.icon} {exp.title.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      </section>

      {/* Detail */}
      <section style={{ padding: '64px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 56 }}
        >
          {/* Main content */}
          <div>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>{current.bestFor}</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: '0 0 12px' }}>
              {current.icon} {current.title}
            </h2>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontStyle: 'italic', color: current.color, margin: '0 0 28px', letterSpacing: '-0.01em' }}>{current.tagline}</p>

            {/* Meta */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
              {[
                { icon: <Clock size={14} />, label: current.duration },
                { icon: <Users size={14} />, label: current.groupSize },
                { icon: <Calendar size={14} />, label: current.schedule.split('.')[0] },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted }}>
                  <span style={{ color: current.color }}>{m.icon}</span>
                  {m.label}
                </div>
              ))}
            </div>

            {current.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: BRAND.inkMuted, margin: '0 0 16px' }}>{para}</p>
            ))}

            {/* What's included */}
            <div style={{ background: BRAND.creamSoft, borderRadius: 20, padding: '28px 32px', border: `1px solid ${BRAND.creamDeep}`, marginTop: 32 }}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 600, color: BRAND.ink, margin: '0 0 20px' }}>What's included</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {current.includes.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: i < current.includes.length - 1 ? `1px solid ${BRAND.creamDeep}` : 'none' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: current.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Check size={12} color="white" strokeWidth={3} />
                    </div>
                    <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.ink, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div style={{ marginTop: 40 }}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 500, color: BRAND.ink, margin: '0 0 20px' }}>What guests say</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {current.reviews.map((review, i) => (
                  <div key={i} style={{ padding: '20px 24px', background: 'white', borderRadius: 14, border: `1px solid ${BRAND.creamDeep}` }}>
                    <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
                      {Array.from({ length: review.stars }).map((_, j) => <Star key={j} size={13} fill={BRAND.pink} stroke="none" />)}
                    </div>
                    <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, lineHeight: 1.6, color: BRAND.inkMuted, margin: '0 0 12px', fontStyle: 'italic' }}>"{review.text}"</p>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.inkFaint }}>— {review.name}, {review.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div>
            <div style={{ position: 'sticky', top: 100, background: 'white', borderRadius: 24, padding: '32px 28px', border: `1px solid ${BRAND.creamDeep}`, boxShadow: '0 20px 60px rgba(27,47,142,0.08)' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 700, color: current.color, marginBottom: 4 }}>{current.price}</div>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted, marginBottom: 24 }}>{current.duration} · {current.groupSize}</div>

              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink, marginBottom: 16, padding: '12px 16px', background: BRAND.creamSoft, borderRadius: 10 }}>
                📅 <strong>Schedule:</strong> {current.schedule}
              </div>

              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '16px 24px',
                background: current.color, color: 'white', borderRadius: 999,
                fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, fontWeight: 600,
                textDecoration: 'none', marginBottom: 12,
              }}>
                Book This Experience <ArrowRight size={15} style={{ display: 'inline', marginLeft: 6 }} />
              </Link>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '14px 24px',
                background: 'transparent', color: BRAND.ink, borderRadius: 999,
                fontFamily: "'Instrument Sans', sans-serif", fontSize: 14,
                textDecoration: 'none', border: `1px solid ${BRAND.creamDeep}`,
              }}>
                Ask a Question
              </Link>

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${BRAND.creamDeep}` }}>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.inkFaint, marginBottom: 8 }}>Also available:</div>
                {EXPERIENCES.filter(e => e.id !== selected).slice(0, 3).map(e => (
                  <button
                    key={e.id}
                    onClick={() => setSelected(e.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
                      background: 'transparent', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
                      borderBottom: `1px solid ${BRAND.creamDeep}`,
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{e.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink, fontWeight: 500 }}>{e.title}</div>
                      <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: BRAND.inkFaint }}>{e.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Getting there */}
      <section style={{ background: BRAND.creamSoft, padding: '80px 48px', borderTop: `1px solid ${BRAND.creamDeep}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Getting here</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: '0 0 24px' }}>
              Hetheya Farm,<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>Ooty, Nilgiris.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { from: 'From Coimbatore', route: '86 km via Mettupalayam & Coonoor road · 2.5 hrs', note: 'Scenic mountain road. We recommend arriving a day early.' },
                { from: 'From Bangalore', route: '290 km via Mysore & Gudalur · 6 hrs', note: 'Overnight train to Mettupalayam + Toy Train to Ooty is the magical option.' },
                { from: 'From Chennai', route: '540 km via Coimbatore · 8–9 hrs by road or overnight train', note: 'Nilgiri Mountain Railway from Mettupalayam to Ooty — a UNESCO World Heritage route.' },
                { from: 'From Ooty Town', route: '5 km via Melkavatty road · 15 mins by car', note: 'We can arrange pick-up from Ooty bus stand or Mettupalayam railway station. Address: 5/14 Madhana Estate, Kundanatty, Melkavatty.' },
              ].map(r => (
                <div key={r.from} style={{ padding: '16px 20px', background: 'white', borderRadius: 12, border: `1px solid ${BRAND.creamDeep}` }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600, color: BRAND.blue, marginBottom: 4 }}>{r.from}</div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink, marginBottom: 4 }}>{r.route}</div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.inkMuted, fontStyle: 'italic' }}>{r.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.pink, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>— Plan your visit</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: '0 0 24px' }}>
              Best times to<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>visit the farm.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { period: 'Oct – Jan', rating: '★★★★★', note: 'Clearest skies, frost mornings, peak tea quality, Nilgiri flower bloom. Most popular season.' },
                { period: 'Apr – May', rating: '★★★★☆', note: 'Pre-monsoon warmth, cardamom in bloom, excellent coffee harvest begins.' },
                { period: 'Jun – Sep', rating: '★★★☆☆', note: 'Monsoon — lush green but misty and wet. Farm is operational but outdoor tours depend on rain.' },
                { period: 'Feb – Mar', rating: '★★★★☆', note: 'Wattles in bloom, migratory birds, and the best time for school programmes and family stays.' },
              ].map(t => (
                <div key={t.period} style={{ padding: '14px 18px', background: 'white', borderRadius: 12, border: `1px solid ${BRAND.creamDeep}`, display: 'flex', gap: 16 }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: BRAND.blue, minWidth: 80 }}>{t.period}</div>
                  <div>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.gold, marginBottom: 4 }}>{t.rating}</div>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.inkMuted }}>{t.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.blue, color: 'white', textAlign: 'center', padding: '80px 48px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
          Every visit starts<br /><em style={{ color: BRAND.pinkSoft }}>with a conversation.</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.75, marginBottom: 36 }}>
          Tell us your group size, preferred dates, and the experience you're interested in. We'll build your Hetheya day.
        </p>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND.pink, color: 'white', padding: '18px 36px', borderRadius: 999, fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
          Book Your Visit <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
