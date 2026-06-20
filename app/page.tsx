'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, User, Check, Calendar, Truck, Leaf, ArrowRight, Star, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// ═══════════════════════════════════════════════════════════════════
// BRAND SYSTEM — colors pulled directly from the Hetheya logo
// ═══════════════════════════════════════════════════════════════════
const BRAND = {
  cream: '#FAF5EA',
  creamDeep: '#F2EBD6',
  creamSoft: '#FDFAF3',
  blue: '#1B2F8E',
  blueDeep: '#131F63',
  blueSoft: '#4258B8',
  pink: '#D8379B',
  pinkSoft: '#F5C5DF',
  pinkPale: '#FCE9F3',
  ink: '#0D1427',
  inkMuted: '#57617A',
  inkFaint: '#9AA1B4',
};

// ═══════════════════════════════════════════════════════════════════
// LOGO — recreated as SVG (drop in the real logo file for production)
// ═══════════════════════════════════════════════════════════════════
const HetheyaLogo = ({ height = 52, mono = false }) => (
  <svg viewBox="0 0 420 200" height={height} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M 30 70 Q 160 25, 300 55 Q 355 62, 395 50" 
      stroke={mono ? BRAND.blue : BRAND.pink} strokeWidth="3" fill="none" strokeLinecap="round" />
    <g transform="translate(285, 12)">
      <path d="M 0 52 L 30 18 L 52 38 L 72 6 L 112 52 Z" fill={BRAND.blue} />
      <path d="M 52 38 L 72 6 L 84 18 Z" fill={BRAND.cream} />
      <path d="M 0 52 L 20 32 L 34 46 L 50 30 Z" fill={BRAND.blueSoft} opacity="0.7" />
    </g>
    <text x="30" y="135" fontFamily="'Fraunces', 'Playfair Display', Georgia, serif" fontSize="76" fontWeight="700" fill={BRAND.blue} letterSpacing="-2">Hetheya</text>
    <text x="155" y="178" fontFamily="'Dancing Script', 'Brush Script MT', cursive" fontSize="36" fontStyle="italic" fontWeight="600" fill={mono ? BRAND.blue : BRAND.pink}>Dairy</text>
    <line x1="105" y1="188" x2="315" y2="188" stroke={mono ? BRAND.blue : BRAND.pink} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════
// PRODUCT ILLUSTRATIONS
// ═══════════════════════════════════════════════════════════════════
const MilkBottle = ({ size = 130 }) => (
  <svg viewBox="0 0 100 160" height={size} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="milkGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E8EBF2" />
      </linearGradient>
    </defs>
    <rect x="38" y="6" width="24" height="18" fill={BRAND.blue} rx="2" />
    <rect x="40" y="10" width="20" height="2" fill={BRAND.blueSoft} rx="1" />
    <path d="M 35 26 L 35 42 L 26 56 L 26 150 Q 26 155, 31 155 L 69 155 Q 74 155, 74 150 L 74 56 L 65 42 L 65 26 Z" 
      fill="url(#milkGrad)" stroke="#D4D7E0" strokeWidth="0.5" />
    <rect x="30" y="80" width="40" height="38" fill={BRAND.pinkSoft} rx="2" />
    <text x="50" y="96" textAnchor="middle" fontSize="7" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif">HETHEYA</text>
    <text x="50" y="108" textAnchor="middle" fontSize="5" fill={BRAND.blue} fontFamily="'Instrument Sans', sans-serif" letterSpacing="1">FARM MILK</text>
    <text x="50" y="116" textAnchor="middle" fontSize="3" fill={BRAND.pink} fontFamily="'Instrument Sans', sans-serif">1 LITRE</text>
    <path d="M 33 40 Q 36 80, 33 130" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
  </svg>
);

const PaneerBlock = ({ size = 120 }) => (
  <svg viewBox="0 0 140 110" height={size * 0.85} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="16" width="128" height="86" fill="#FDFAF3" rx="5" stroke="#E8DCB8" strokeWidth="1" />
    <rect x="6" y="30" width="128" height="22" fill={BRAND.blue} rx="0" />
    <text x="70" y="45" textAnchor="middle" fontSize="11" fill="white" fontWeight="800" fontFamily="'Fraunces', serif" letterSpacing="1">PANEER</text>
    <text x="70" y="75" textAnchor="middle" fontSize="6" fill={BRAND.blue} fontFamily="'Instrument Sans', sans-serif" letterSpacing="2">FRESH · FIRM · HOMESTYLE</text>
    <line x1="40" y1="85" x2="100" y2="85" stroke={BRAND.pink} strokeWidth="1" />
    <text x="70" y="95" textAnchor="middle" fontSize="5" fill={BRAND.pink} fontFamily="'Instrument Sans', sans-serif">200 G</text>
  </svg>
);

const GheeJar = ({ size = 130 }) => (
  <svg viewBox="0 0 100 130" height={size} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gheeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F2C65C" />
        <stop offset="100%" stopColor="#E8A937" />
      </linearGradient>
    </defs>
    <rect x="22" y="4" width="56" height="14" fill={BRAND.blue} rx="2" />
    <rect x="20" y="16" width="60" height="6" fill={BRAND.blueDeep} />
    <path d="M 18 24 L 82 24 L 80 118 Q 80 124, 74 124 L 26 124 Q 20 124, 20 118 Z" fill="url(#gheeGrad)" />
    <rect x="26" y="48" width="48" height="48" fill="#FDFAF3" rx="2" />
    <text x="50" y="65" textAnchor="middle" fontSize="9" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif">GHEE</text>
    <text x="50" y="77" textAnchor="middle" fontSize="4" fill={BRAND.blue} fontFamily="'Instrument Sans', sans-serif" letterSpacing="1">DESI DANEDAR</text>
    <text x="50" y="88" textAnchor="middle" fontSize="3.5" fill={BRAND.pink} fontFamily="'Instrument Sans', sans-serif">A2 COW</text>
    <path d="M 25 30 Q 27 70, 25 110" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" />
  </svg>
);

const CurdCup = ({ size = 120 }) => (
  <svg viewBox="0 0 100 120" height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M 14 18 L 86 18 L 80 112 Q 80 117, 75 117 L 25 117 Q 20 117, 20 112 Z" fill="#FDFAF3" stroke="#D4D7E0" strokeWidth="0.5" />
    <rect x="14" y="10" width="72" height="12" fill={BRAND.pink} rx="1" />
    <text x="50" y="19" textAnchor="middle" fontSize="7" fill="white" fontWeight="800" fontFamily="'Fraunces', serif" letterSpacing="2">HETHEYA</text>
    <text x="50" y="65" textAnchor="middle" fontSize="12" fill={BRAND.blue} fontWeight="700" fontFamily="'Fraunces', serif">Curd</text>
    <text x="50" y="80" textAnchor="middle" fontSize="4" fill={BRAND.inkMuted} fontFamily="'Instrument Sans', sans-serif" letterSpacing="2">NATURALLY SET</text>
    <line x1="35" y1="88" x2="65" y2="88" stroke={BRAND.pink} strokeWidth="0.8" />
    <text x="50" y="98" textAnchor="middle" fontSize="4" fill={BRAND.pink} fontFamily="'Instrument Sans', sans-serif">400 G</text>
  </svg>
);

const ButterStick = ({ size = 130 }) => (
  <svg viewBox="0 0 150 80" height={size * 0.55} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="142" height="48" fill="#F2D665" rx="4" />
    <rect x="8" y="24" width="134" height="32" fill="#FDFAF3" rx="2" />
    <text x="75" y="40" textAnchor="middle" fontSize="11" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif" letterSpacing="1">BUTTER</text>
    <text x="75" y="50" textAnchor="middle" fontSize="4" fill={BRAND.blue} fontFamily="'Instrument Sans', sans-serif" letterSpacing="2">CHURNED DAILY · UNSALTED</text>
  </svg>
);

const CheeseWedge = ({ size = 120 }) => (
  <svg viewBox="0 0 130 110" height={size * 0.85} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cheeseGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5CD62" />
        <stop offset="100%" stopColor="#E6B644" />
      </linearGradient>
    </defs>
    <polygon points="12,88 118,88 75,14" fill="url(#cheeseGrad)" />
    <polygon points="12,88 118,88 115,94 15,94" fill="#D4A238" />
    <circle cx="50" cy="60" r="4" fill="#E6B644" />
    <circle cx="75" cy="70" r="3" fill="#E6B644" />
    <circle cx="88" cy="55" r="3.5" fill="#E6B644" />
    <circle cx="60" cy="75" r="2.5" fill="#E6B644" />
  </svg>
);

const LassiBottle = ({ size = 130 }) => (
  <svg viewBox="0 0 90 150" height={size} xmlns="http://www.w3.org/2000/svg">
    <rect x="34" y="4" width="22" height="12" fill={BRAND.pink} rx="2" />
    <path d="M 30 18 L 60 18 L 60 30 Q 70 35, 70 48 L 70 140 Q 70 145, 65 145 L 25 145 Q 20 145, 20 140 L 20 48 Q 20 35, 30 30 Z" fill="#FDFAF3" stroke="#E4D8C0" strokeWidth="0.5" />
    <rect x="22" y="65" width="46" height="50" fill={BRAND.pink} rx="2" />
    <text x="45" y="82" textAnchor="middle" fontSize="8" fill="white" fontWeight="800" fontFamily="'Fraunces', serif">LASSI</text>
    <text x="45" y="95" textAnchor="middle" fontSize="4" fill="white" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1">SWEET</text>
    <text x="45" y="107" textAnchor="middle" fontSize="3.5" fill="white" fontFamily="'Instrument Sans', sans-serif">250 ML</text>
  </svg>
);

const FlavouredMilk = ({ size = 130, color = BRAND.pink, label = 'STRAWBERRY' }) => (
  <svg viewBox="0 0 80 140" height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M 14 10 L 66 10 L 66 18 L 14 18 Z" fill={color} />
    <path d="M 10 22 L 70 22 L 68 130 Q 68 134, 64 134 L 16 134 Q 12 134, 12 130 Z" fill="#FDFAF3" stroke="#D4D7E0" strokeWidth="0.5"/>
    <path d="M 10 22 L 14 18 L 66 18 L 70 22 Z" fill={color} opacity="0.85"/>
    <rect x="16" y="52" width="48" height="56" fill={color} rx="2"/>
    <text x="40" y="70" textAnchor="middle" fontSize="6" fill="white" fontWeight="800" fontFamily="'Fraunces', serif">HETHEYA</text>
    <text x="40" y="86" textAnchor="middle" fontSize="5" fill="white" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1">{label}</text>
    <text x="40" y="100" textAnchor="middle" fontSize="4" fill="white" fontFamily="'Instrument Sans', sans-serif">200 ML</text>
  </svg>
);

const Buttermilk = ({ size = 130 }) => (
  <svg viewBox="0 0 80 140" height={size} xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="6" width="52" height="14" fill="#7FB88B" rx="2"/>
    <path d="M 12 22 L 68 22 L 68 132 Q 68 136, 64 136 L 16 136 Q 12 136, 12 132 Z" fill="#FDFAF3" stroke="#D4D7E0" strokeWidth="0.5"/>
    <rect x="16" y="56" width="48" height="52" fill="#7FB88B" rx="2"/>
    <text x="40" y="73" textAnchor="middle" fontSize="6" fill="white" fontWeight="800" fontFamily="'Fraunces', serif">BUTTERMILK</text>
    <text x="40" y="86" textAnchor="middle" fontSize="4" fill="white" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1">MASALA · CHAAS</text>
    <text x="40" y="100" textAnchor="middle" fontSize="4" fill="white" fontFamily="'Instrument Sans', sans-serif">200 ML</text>
  </svg>
);

const IceCreamTub = ({ size = 130 }) => (
  <svg viewBox="0 0 130 110" height={size * 0.82} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="65" cy="22" rx="51" ry="8" fill="#E8DCB8"/>
    <path d="M 14 22 L 116 22 L 110 100 Q 110 104, 106 104 L 24 104 Q 20 104, 20 100 Z" fill="#FDFAF3" stroke="#D4D7E0" strokeWidth="0.5"/>
    <rect x="26" y="34" width="78" height="44" fill={BRAND.pink} rx="3"/>
    <text x="65" y="52" textAnchor="middle" fontSize="10" fill="white" fontWeight="800" fontFamily="'Fraunces', serif" letterSpacing="1">ICE CREAM</text>
    <text x="65" y="66" textAnchor="middle" fontSize="5" fill="white" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1">VANILLA</text>
    <text x="65" y="75" textAnchor="middle" fontSize="4" fill="white" fontFamily="'Instrument Sans', sans-serif">500 ML</text>
  </svg>
);

const MilkPowderTin = ({ size = 130 }) => (
  <svg viewBox="0 0 90 140" height={size} xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="8" width="66" height="14" fill={BRAND.blueDeep} rx="1"/>
    <path d="M 10 22 L 80 22 L 78 130 Q 78 134, 74 134 L 16 134 Q 12 134, 12 130 Z" fill={BRAND.blueSoft}/>
    <rect x="20" y="48" width="50" height="58" fill="#FDFAF3" rx="2"/>
    <text x="45" y="68" textAnchor="middle" fontSize="9" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif">MILK</text>
    <text x="45" y="80" textAnchor="middle" fontSize="9" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif">POWDER</text>
    <line x1="32" y1="86" x2="58" y2="86" stroke={BRAND.pink} strokeWidth="0.8"/>
    <text x="45" y="97" textAnchor="middle" fontSize="4" fill={BRAND.pink} fontFamily="'Instrument Sans', sans-serif">500 G</text>
  </svg>
);

const CreamTub = ({ size = 120 }) => (
  <svg viewBox="0 0 110 90" height={size * 0.75} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="16" rx="43" ry="7" fill="#F5E8C0"/>
    <path d="M 12 16 L 98 16 L 94 82 Q 94 86, 90 86 L 20 86 Q 16 86, 16 82 Z" fill="#FDFAF3" stroke="#D4D7E0" strokeWidth="0.5"/>
    <rect x="22" y="30" width="66" height="40" fill="#F5CD62" rx="2"/>
    <text x="55" y="48" textAnchor="middle" fontSize="9" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif">FRESH CREAM</text>
    <text x="55" y="60" textAnchor="middle" fontSize="4" fill={BRAND.blue} fontFamily="'Instrument Sans', sans-serif">DAIRY · 200 G</text>
  </svg>
);

const SweetBox = ({ size = 120 }) => (
  <svg viewBox="0 0 130 90" height={size * 0.75} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="14" width="114" height="68" fill="#FDFAF3" stroke="#E8DCB8" strokeWidth="1" rx="4"/>
    <rect x="8" y="14" width="114" height="20" fill={BRAND.pink}/>
    <text x="65" y="28" textAnchor="middle" fontSize="9" fill="white" fontWeight="800" fontFamily="'Fraunces', serif" letterSpacing="1">MITHAI BOX</text>
    <circle cx="28" cy="56" r="8" fill="#F2C65C"/>
    <circle cx="50" cy="56" r="8" fill="#FDF3E0"/>
    <circle cx="72" cy="56" r="8" fill="#F2C65C"/>
    <circle cx="94" cy="56" r="8" fill="#FDF3E0"/>
    <text x="65" y="76" textAnchor="middle" fontSize="5" fill={BRAND.blue} fontFamily="'Instrument Sans', sans-serif">ASSORTED · 500 G</text>
  </svg>
);

const Khoa = ({ size = 120 }) => (
  <svg viewBox="0 0 120 100" height={size * 0.8} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="82" rx="50" ry="10" fill="#E8DCB8"/>
    <path d="M 18 82 Q 22 40, 60 36 Q 98 40, 102 82 Z" fill="#F5E8C0"/>
    <path d="M 30 60 Q 45 52, 60 58 Q 75 52, 90 60" stroke="#D4BC80" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M 35 72 Q 50 64, 65 70 Q 78 64, 88 72" stroke="#D4BC80" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <text x="60" y="94" textAnchor="middle" fontSize="7" fill={BRAND.blue} fontWeight="800" fontFamily="'Fraunces', serif">KHOA · MAWA</text>
  </svg>
);

const YogurtCup = ({ size = 120, color = BRAND.pink, label = 'Greek' }) => (
  <svg viewBox="0 0 100 120" height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M 16 22 L 84 22 L 78 112 Q 78 117, 73 117 L 27 117 Q 22 117, 22 112 Z" fill="#FDFAF3" stroke="#D4D7E0" strokeWidth="0.5"/>
    <rect x="16" y="14" width="68" height="12" fill={color} rx="1"/>
    <text x="50" y="23" textAnchor="middle" fontSize="7" fill="white" fontWeight="800" fontFamily="'Fraunces', serif" letterSpacing="2">HETHEYA</text>
    <text x="50" y="68" textAnchor="middle" fontSize="14" fill={BRAND.blue} fontWeight="700" fontFamily="'Fraunces', serif">{label}</text>
    <text x="50" y="82" textAnchor="middle" fontSize="4" fill={BRAND.inkMuted} fontFamily="'Instrument Sans', sans-serif" letterSpacing="2">YOGURT</text>
    <line x1="36" y1="90" x2="64" y2="90" stroke={color} strokeWidth="0.8"/>
    <text x="50" y="100" textAnchor="middle" fontSize="4" fill={color} fontFamily="'Instrument Sans', sans-serif">150 G</text>
  </svg>
);

// The falling hero drop
const MilkDrop = ({ scale = 1 }) => (
  <svg viewBox="0 0 120 160" width={100 * scale} height={130 * scale} xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 20px 30px rgba(27, 47, 142, 0.25))' }}>
    <defs>
      <radialGradient id="dropGrad" cx="0.35" cy="0.3" r="0.8">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="55%" stopColor="#F8FAFF" />
        <stop offset="100%" stopColor="#D8DEF0" />
      </radialGradient>
      <linearGradient id="dropInner" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={BRAND.blueSoft} stopOpacity="0.1" />
        <stop offset="100%" stopColor={BRAND.blue} stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <path d="M 60 10 C 60 10, 20 70, 20 110 C 20 135, 38 152, 60 152 C 82 152, 100 135, 100 110 C 100 70, 60 10, 60 10 Z" fill="url(#dropGrad)" />
    <path d="M 60 10 C 60 10, 20 70, 20 110 C 20 135, 38 152, 60 152 C 82 152, 100 135, 100 110 C 100 70, 60 10, 60 10 Z" fill="url(#dropInner)" />
    <ellipse cx="42" cy="95" rx="10" ry="22" fill="white" opacity="0.7" />
    <ellipse cx="38" cy="85" rx="4" ry="8" fill="white" opacity="0.95" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════
const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Why Ooty', href: '/why-ooty' },
  { label: 'Farms', href: '/organic-farming' },
  { label: 'Plantations', href: '/plantations' },
  { label: 'Medicinal Plants', href: '/medicinal-plants' },
  { label: 'Ecotourism', href: '/ecotourism' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '12px 48px' : '20px 48px',
      background: scrolled ? 'rgba(250, 245, 234, 0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
      borderBottom: scrolled ? `1px solid ${BRAND.creamDeep}` : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <HetheyaLogo height={scrolled ? 40 : 46} />
      </Link>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_LINKS.map((item) => (
          <Link key={item.label} href={item.href} style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13, fontWeight: 500, color: BRAND.ink,
            letterSpacing: '0.02em', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = BRAND.pink}
          onMouseLeave={(e) => e.currentTarget.style.color = BRAND.ink}
          >{item.label}</Link>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Link href="/contact" style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 13, fontWeight: 500, color: BRAND.blue,
          background: 'transparent', border: `1px solid ${BRAND.blue}`,
          padding: '9px 18px', borderRadius: 999, cursor: 'pointer',
          letterSpacing: '0.02em', transition: 'all 0.2s', textDecoration: 'none',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
        >Order Now</Link>
        <button style={{
          background: BRAND.blue, color: 'white', border: 'none',
          width: 42, height: 42, borderRadius: 999, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <ShoppingBag size={17} />
          <span style={{
            position: 'absolute', top: -4, right: -4,
            background: BRAND.pink, color: 'white', fontSize: 10, fontWeight: 700,
            width: 18, height: 18, borderRadius: 999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Instrument Sans', sans-serif",
          }}>0</span>
        </button>
      </div>
    </nav>
  );
};

// ═══════════════════════════════════════════════════════════════════
// HERO — scroll-driven drop → splash → products
// ═══════════════════════════════════════════════════════════════════
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Drop falls from top to middle, then shrinks into the splash
  const dropY = useTransform(scrollYProgress, [0, 0.38], ['-5vh', '32vh']);
  const dropScale = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.42], [1, 1.05, 1.1, 0]);
  const dropStretch = useTransform(scrollYProgress, [0, 0.2, 0.38], [1, 1.15, 1.3]);
  const dropOpacity = useTransform(scrollYProgress, [0, 0.4, 0.42], [1, 1, 0]);

  // Splash ring expands
  const splashScale = useTransform(scrollYProgress, [0.38, 0.55], [0, 4]);
  const splashOpacity = useTransform(scrollYProgress, [0.38, 0.45, 0.6], [0, 1, 0]);
  
  // Ripple rings
  const ripple1Scale = useTransform(scrollYProgress, [0.4, 0.65], [0, 5]);
  const ripple1Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [0, 0.6, 0]);
  const ripple2Scale = useTransform(scrollYProgress, [0.44, 0.7], [0, 6]);
  const ripple2Opacity = useTransform(scrollYProgress, [0.44, 0.55, 0.7], [0, 0.4, 0]);

  // Products emerge from splash center
  const productsOpacity = useTransform(scrollYProgress, [0.48, 0.65], [0, 1]);
  const productsScale = useTransform(scrollYProgress, [0.48, 0.68], [0.3, 1]);
  const productsY = useTransform(scrollYProgress, [0.48, 0.72], ['15vh', '0vh']);

  // Headline fades slightly when products arrive
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4, 0.55], [1, 1, 0.35]);
  const subheadOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  // Small droplets during splash
  const dropletY = useTransform(scrollYProgress, [0.38, 0.55], [0, -80]);
  const dropletOpacity = useTransform(scrollYProgress, [0.38, 0.42, 0.58], [0, 1, 0]);

  const products = [
    { Component: MilkBottle, angle: -70, distance: 280 },
    { Component: PaneerBlock, angle: -35, distance: 220 },
    { Component: GheeJar, angle: 0, distance: 240 },
    { Component: CurdCup, angle: 35, distance: 220 },
    { Component: ButterStick, angle: 70, distance: 280 },
    { Component: CheeseWedge, angle: 110, distance: 250 },
    { Component: LassiBottle, angle: -110, distance: 250 },
  ];

  return (
    <section ref={heroRef} style={{ position: 'relative', height: '280vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#EDE6D3' }}>
        {/* Ambient background */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '-20%', right: '-15%',
            width: '60vw', height: '60vw', borderRadius: '50%',
            background: `radial-gradient(circle, ${BRAND.pinkSoft}80 0%, transparent 60%)`,
            filter: 'blur(40px)', opacity: 0.7,
          }} />
          <div style={{
            position: 'absolute', bottom: '-30%', left: '-10%',
            width: '50vw', height: '50vw', borderRadius: '50%',
            background: `radial-gradient(circle, rgba(27, 47, 142, 0.18) 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }} />
          {/* Darker overlay on the right animation panel to make milk drop visible */}
          <div style={{
            position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
            background: 'linear-gradient(160deg, rgba(200,185,155,0.35) 0%, rgba(180,165,135,0.25) 100%)',
          }} />
        </div>

        {/* Grain texture */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035, pointerEvents: 'none', mixBlendMode: 'multiply' }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Content grid */}
        <div style={{
          position: 'relative', height: '100vh', display: 'grid',
          gridTemplateColumns: '1.15fr 1fr', gap: 40,
          padding: '120px 80px 60px', maxWidth: 1600, margin: '0 auto', alignItems: 'center',
        }}>
          {/* LEFT: Headline */}
          <motion.div style={{ opacity: headlineOpacity, zIndex: 2 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: BRAND.pinkPale, color: BRAND.pink,
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: BRAND.pink }} />
              Sourced from the Nilgiris
            </div>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(56px, 7.5vw, 116px)',
              fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.04em',
              color: BRAND.ink, margin: 0,
              fontVariationSettings: "'opsz' 144, 'SOFT' 50",
            }}>
              From the hills.<br />
              <em style={{
                fontStyle: 'italic', fontWeight: 300,
                color: BRAND.blue,
                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
              }}>By sunrise.</em>
            </h1>
            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 18, lineHeight: 1.55, color: BRAND.inkMuted,
              maxWidth: 480, marginTop: 32, marginBottom: 40,
              letterSpacing: '-0.005em',
            }}>
              Farm-fresh dairy, hand-bottled at dawn in the Nilgiris and 
              delivered to your doorstep before 7 AM. No middlemen, no preservatives, 
              no compromises.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <button style={{
                background: BRAND.blue, color: 'white', border: 'none',
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 15, fontWeight: 500, letterSpacing: '0.01em',
                padding: '18px 32px', borderRadius: 999, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
                transition: 'all 0.25s', boxShadow: '0 4px 20px rgba(27, 47, 142, 0.25)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.blueDeep; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = BRAND.blue; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Start Subscription
                <ArrowRight size={16} />
              </button>
              <button style={{
                background: 'transparent', color: BRAND.ink, 
                border: `1px solid ${BRAND.ink}`,
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 15, fontWeight: 500, letterSpacing: '0.01em',
                padding: '18px 32px', borderRadius: 999, cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.ink; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = BRAND.ink; }}
              >Browse Products</button>
            </div>

            {/* Trust row */}
            <div style={{ display: 'flex', gap: 32, marginTop: 56, alignItems: 'center' }}>
              {[
                { label: 'Happy homes', value: '12,000+' },
                { label: 'Daily delivery', value: 'Before 7 AM' },
                { label: 'Chemical-free', value: '100%' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 22, fontWeight: 600, color: BRAND.ink,
                    letterSpacing: '-0.02em',
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 12, color: BRAND.inkFaint,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    marginTop: 4,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Animation stage */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Drop */}
            <motion.div
              style={{
                position: 'absolute',
                top: '10%', left: '50%',
                translateX: '-50%',
                y: dropY,
                scale: dropScale,
                scaleY: dropStretch,
                opacity: dropOpacity,
                transformOrigin: 'center bottom',
                zIndex: 3,
              }}
            >
              <MilkDrop />
            </motion.div>

            {/* Splash center */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', zIndex: 1,
            }}>
              {/* Splash core */}
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0,
                  transform: 'translate(-50%, -50%)',
                  width: 100, height: 100, borderRadius: '50%',
                  background: `radial-gradient(circle, white 0%, ${BRAND.pinkPale} 70%, transparent 100%)`,
                  scale: splashScale, opacity: splashOpacity,
                }}
              />
              {/* Ripple 1 */}
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0,
                  transform: 'translate(-50%, -50%)',
                  width: 80, height: 80, borderRadius: '50%',
                  border: `2px solid ${BRAND.pink}`,
                  scale: ripple1Scale, opacity: ripple1Opacity,
                }}
              />
              {/* Ripple 2 */}
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0,
                  transform: 'translate(-50%, -50%)',
                  width: 80, height: 80, borderRadius: '50%',
                  border: `1.5px solid ${BRAND.blueSoft}`,
                  scale: ripple2Scale, opacity: ripple2Opacity,
                }}
              />

              {/* Flying droplets */}
              {[
                { x: -100, y: -40, size: 12 },
                { x: 110, y: -50, size: 16 },
                { x: -70, y: -90, size: 10 },
                { x: 80, y: -100, size: 14 },
                { x: -140, y: -20, size: 8 },
                { x: 150, y: -30, size: 10 },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    width: d.size, height: d.size * 1.3, borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    background: `radial-gradient(circle at 30% 30%, white, ${BRAND.blueSoft})`,
                    x: d.x, y: useTransform(scrollYProgress, [0.38, 0.5, 0.58], [0, d.y, d.y - 30]),
                    opacity: dropletOpacity,
                    boxShadow: `0 4px 12px rgba(27, 47, 142, 0.2)`,
                  }}
                />
              ))}
            </div>

            {/* Products emerging */}
            <motion.div
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 0, height: 0,
                opacity: productsOpacity,
                scale: productsScale,
                y: productsY,
                zIndex: 2,
              }}
            >
              {products.map(({ Component, angle, distance }, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = Math.round(Math.cos(rad - Math.PI / 2) * distance * 0.7 * 100) / 100;
                const y = Math.round(Math.sin(rad - Math.PI / 2) * distance * 0.5 * 100) / 100;
                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute', top: 0, left: 0,
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      filter: 'drop-shadow(0 20px 40px rgba(27, 47, 142, 0.2))',
                    }}
                  >
                    <Component size={90 + (i % 3) * 15} />
                  </div>
                );
              })}
              
              {/* Center message */}
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0,
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  opacity: subheadOpacity,
                  width: 280,
                }}
              >
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 32, fontWeight: 400, fontStyle: 'italic',
                  color: BRAND.blue, lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}>
                  Meet the<br />collection.
                </div>
                <div style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 13, color: BRAND.inkMuted, marginTop: 10,
                  letterSpacing: '0.04em',
                }}>30+ dairy essentials</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{
            position: 'absolute', bottom: 32, left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
          }}
        >
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 11, color: BRAND.inkFaint,
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>Scroll to pour</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} color={BRAND.inkFaint} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// FEATURES — three pillars
// ═══════════════════════════════════════════════════════════════════
const Features = () => {
  const pillars = [
    {
      num: '01',
      title: 'Farm to doorstep in 6 hours',
      desc: 'Milked before dawn, tested 140+ ways, and at your door before you wake. No warehouse detours.',
      Icon: Truck,
    },
    {
      num: '02',
      title: 'Zero preservatives. Ever.',
      desc: 'No A1-to-A2 swaps. No adulterants. No shelf-life additives. Just dairy — the way your grandmother knew it.',
      Icon: Leaf,
    },
    {
      num: '03',
      title: 'Skip, pause, modify',
      desc: 'Edit tomorrow’s delivery till midnight tonight. A subscription that bends to your week.',
      Icon: Calendar,
    },
  ];

  return (
    <section style={{
      position: 'relative', padding: '140px 80px',
      maxWidth: 1600, margin: '0 auto',
    }}>
      <div style={{ maxWidth: 720, marginBottom: 80 }}>
        <div style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 12, fontWeight: 600, color: BRAND.pink,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          marginBottom: 20,
        }}>— Why Hetheya</div>
        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(36px, 4vw, 64px)',
          fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em',
          color: BRAND.ink, margin: 0,
        }}>
          Three promises,<br />
          <em style={{ fontStyle: 'italic', color: BRAND.blue }}>kept every morning.</em>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
        {pillars.map(({ num, title, desc, Icon }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: 40, borderRadius: 20,
              background: BRAND.creamSoft,
              border: `1px solid ${BRAND.creamDeep}`,
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 14, fontWeight: 600, color: BRAND.pink,
              letterSpacing: '0.08em',
            }}>{num}</div>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: BRAND.blue, color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: 28, marginBottom: 28,
            }}>
              <Icon size={22} />
            </div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 26, fontWeight: 500, lineHeight: 1.15,
              letterSpacing: '-0.02em', color: BRAND.ink,
              margin: 0, marginBottom: 14,
            }}>{title}</h3>
            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 15, lineHeight: 1.6, color: BRAND.inkMuted,
              margin: 0,
            }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// DAILY ESSENTIALS — horizontal scrolling strip (Hatsun/Country Delight style)
// ═══════════════════════════════════════════════════════════════════
const DailyEssentials = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const featured = [
    { name: 'A2 Cow Milk', tagline: 'Daily staple', price: 124, unit: '1 L', accent: BRAND.blue, Component: MilkBottle },
    { name: 'Fresh Paneer', tagline: 'Soft & firm', price: 95, unit: '200 g', accent: BRAND.pink, Component: PaneerBlock },
    { name: 'A2 Cow Ghee', tagline: 'Bilona-churned', price: 780, unit: '500 ml', accent: '#C89B3C', Component: GheeJar },
    { name: 'Homestyle Curd', tagline: 'Naturally set', price: 65, unit: '400 g', accent: BRAND.pink, Component: CurdCup },
    { name: 'White Butter', tagline: 'Churned at dawn', price: 140, unit: '200 g', accent: '#F2D665', Component: ButterStick },
    { name: 'Chocolate Milk', tagline: 'Kid favourite', price: 38, unit: '200 ml', accent: '#6B4423', Component: (p: { size?: number }) => <FlavouredMilk {...p} color="#6B4423" label="CHOCOLATE" /> },
    { name: 'Masala Buttermilk', tagline: 'Cool & spiced', price: 22, unit: '200 ml', accent: '#7FB88B', Component: Buttermilk },
    { name: 'Greek Yogurt', tagline: 'Thick, protein-rich', price: 85, unit: '150 g', accent: BRAND.blueSoft, Component: (p: { size?: number }) => <YogurtCup {...p} color={BRAND.blueSoft} label="Greek" /> },
    { name: 'Fresh Cream', tagline: 'For your chai', price: 95, unit: '200 g', accent: '#F5CD62', Component: CreamTub },
    { name: 'Mozzarella', tagline: 'Pizza-ready', price: 210, unit: '200 g', accent: '#E6B644', Component: CheeseWedge },
    { name: 'Sweet Lassi', tagline: 'Summer classic', price: 45, unit: '250 ml', accent: BRAND.pink, Component: LassiBottle },
    { name: 'Mithai Box', tagline: 'Festive ready', price: 540, unit: '500 g', accent: BRAND.pink, Component: SweetBox },
  ];

  const scrollBy = (dir: number) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section style={{
      padding: '100px 0 80px', background: BRAND.creamSoft,
      borderTop: `1px solid ${BRAND.creamDeep}`,
      borderBottom: `1px solid ${BRAND.creamDeep}`,
    }}>
      <div style={{
        maxWidth: 1600, margin: '0 auto', padding: '0 80px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        gap: 32, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 12, fontWeight: 600, color: BRAND.pink,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 18,
          }}>— Daily Essentials</div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(32px, 3.6vw, 54px)',
            fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em',
            color: BRAND.ink, margin: 0, maxWidth: 620,
          }}>
            The shortlist —<br />
            <em style={{ fontStyle: 'italic', color: BRAND.blue }}>what families order most.</em>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => scrollBy(-1)} aria-label="Scroll left" style={{
            width: 48, height: 48, borderRadius: '50%',
            border: `1px solid ${BRAND.ink}`, background: 'transparent', color: BRAND.ink,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.ink; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = BRAND.ink; }}
          ><ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /></button>
          <button onClick={() => scrollBy(1)} aria-label="Scroll right" style={{
            width: 48, height: 48, borderRadius: '50%',
            border: 'none', background: BRAND.ink, color: 'white',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.blue; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = BRAND.ink; }}
          ><ArrowRight size={18} /></button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        style={{
          display: 'flex', gap: 20, overflowX: 'auto', overflowY: 'hidden',
          padding: '12px 80px 32px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {featured.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.4), ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            style={{
              flex: '0 0 auto', width: 280, scrollSnapAlign: 'start',
              background: 'white', borderRadius: 20,
              border: `1px solid ${BRAND.creamDeep}`,
              overflow: 'hidden', cursor: 'pointer',
              transition: 'box-shadow 0.3s',
            }}
          >
            <div style={{
              height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(160deg, ${BRAND.cream} 0%, white 100%)`,
              position: 'relative', borderBottom: `1px solid ${BRAND.creamDeep}`,
            }}>
              <div style={{
                position: 'absolute', top: 14, left: 14,
                padding: '4px 10px', borderRadius: 999,
                background: item.accent, color: 'white',
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 10, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{item.tagline}</div>
              <item.Component size={130} />
            </div>
            <div style={{ padding: '20px 22px 22px' }}>
              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em',
                color: BRAND.ink, margin: 0, marginBottom: 14,
              }}>{item.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 22, fontWeight: 600, color: BRAND.blue,
                  }}>₹{item.price}</span>
                  <span style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 12, color: BRAND.inkMuted, marginLeft: 6,
                  }}>/ {item.unit}</span>
                </div>
                <button style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
                  padding: '10px 16px', borderRadius: 999,
                  border: `1px solid ${BRAND.ink}`, background: 'transparent', color: BRAND.ink,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = BRAND.ink; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = BRAND.ink; }}
                >ADD +</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// PRODUCT GRID
// ═══════════════════════════════════════════════════════════════════
const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Milk', 'Flavoured Milk', 'Curd & Yogurt', 'Paneer & Cheese', 'Ghee & Butter', 'Cream & Powder', 'Sweets'];

  const productList = [
    // Milk
    { name: 'A2 Cow Milk', price: 124, unit: '1 L', category: 'Milk', tag: 'Bestseller', Component: MilkBottle },
    { name: 'Buffalo Milk', price: 82, unit: '1 L', category: 'Milk', tag: null, Component: MilkBottle },
    { name: 'Toned Milk', price: 58, unit: '1 L', category: 'Milk', tag: null, Component: MilkBottle },
    { name: 'Full Cream Milk', price: 72, unit: '1 L', category: 'Milk', tag: null, Component: MilkBottle },
    { name: 'Skimmed Milk', price: 54, unit: '1 L', category: 'Milk', tag: null, Component: MilkBottle },
    { name: 'Double Toned Milk', price: 56, unit: '1 L', category: 'Milk', tag: null, Component: MilkBottle },

    // Flavoured Milk
    { name: 'Chocolate Milk', price: 38, unit: '200 ml', category: 'Flavoured Milk', tag: 'Kids', Component: (p: { size?: number }) => <FlavouredMilk {...p} color="#6B4423" label="CHOCOLATE" /> },
    { name: 'Strawberry Milk', price: 38, unit: '200 ml', category: 'Flavoured Milk', tag: null, Component: (p: { size?: number }) => <FlavouredMilk {...p} color="#E8609A" label="STRAWBERRY" /> },
    { name: 'Badam Milk', price: 42, unit: '200 ml', category: 'Flavoured Milk', tag: null, Component: (p: { size?: number }) => <FlavouredMilk {...p} color="#D4A862" label="BADAM" /> },
    { name: 'Elaichi Milk', price: 40, unit: '200 ml', category: 'Flavoured Milk', tag: 'New', Component: (p: { size?: number }) => <FlavouredMilk {...p} color="#B8CC4E" label="ELAICHI" /> },

    // Curd & Yogurt
    { name: 'Homestyle Curd', price: 65, unit: '400 g', category: 'Curd & Yogurt', tag: null, Component: CurdCup },
    { name: 'Greek Yogurt', price: 85, unit: '150 g', category: 'Curd & Yogurt', tag: 'New', Component: (p: { size?: number }) => <YogurtCup {...p} color={BRAND.blueSoft} label="Greek" /> },
    { name: 'Mango Yogurt', price: 55, unit: '150 g', category: 'Curd & Yogurt', tag: null, Component: (p: { size?: number }) => <YogurtCup {...p} color="#F2A83C" label="Mango" /> },
    { name: 'Blueberry Yogurt', price: 65, unit: '150 g', category: 'Curd & Yogurt', tag: null, Component: (p: { size?: number }) => <YogurtCup {...p} color="#5C4B8F" label="Berry" /> },
    { name: 'Masala Buttermilk', price: 22, unit: '200 ml', category: 'Curd & Yogurt', tag: null, Component: Buttermilk },
    { name: 'Sweet Lassi', price: 45, unit: '250 ml', category: 'Curd & Yogurt', tag: null, Component: LassiBottle },
    { name: 'Salted Lassi', price: 42, unit: '250 ml', category: 'Curd & Yogurt', tag: null, Component: LassiBottle },

    // Paneer & Cheese
    { name: 'Fresh Paneer', price: 95, unit: '200 g', category: 'Paneer & Cheese', tag: 'Bestseller', Component: PaneerBlock },
    { name: 'Malai Paneer', price: 115, unit: '200 g', category: 'Paneer & Cheese', tag: null, Component: PaneerBlock },
    { name: 'Mozzarella Cheese', price: 210, unit: '200 g', category: 'Paneer & Cheese', tag: null, Component: CheeseWedge },
    { name: 'Cheddar Cheese', price: 260, unit: '200 g', category: 'Paneer & Cheese', tag: 'Premium', Component: CheeseWedge },
    { name: 'Cottage Cheese', price: 180, unit: '200 g', category: 'Paneer & Cheese', tag: null, Component: PaneerBlock },

    // Ghee & Butter
    { name: 'A2 Cow Ghee', price: 780, unit: '500 ml', category: 'Ghee & Butter', tag: 'Premium', Component: GheeJar },
    { name: 'Buffalo Ghee', price: 640, unit: '500 ml', category: 'Ghee & Butter', tag: null, Component: GheeJar },
    { name: 'White Butter', price: 140, unit: '200 g', category: 'Ghee & Butter', tag: null, Component: ButterStick },
    { name: 'Salted Butter', price: 120, unit: '200 g', category: 'Ghee & Butter', tag: null, Component: ButterStick },

    // Cream & Powder
    { name: 'Fresh Cream', price: 95, unit: '200 g', category: 'Cream & Powder', tag: null, Component: CreamTub },
    { name: 'Whipping Cream', price: 185, unit: '250 ml', category: 'Cream & Powder', tag: null, Component: CreamTub },
    { name: 'Milk Powder', price: 425, unit: '500 g', category: 'Cream & Powder', tag: null, Component: MilkPowderTin },
    { name: 'Condensed Milk', price: 165, unit: '400 g', category: 'Cream & Powder', tag: null, Component: MilkPowderTin },

    // Sweets
    { name: 'Assorted Mithai', price: 540, unit: '500 g', category: 'Sweets', tag: 'Festive', Component: SweetBox },
    { name: 'Doodh Peda', price: 380, unit: '400 g', category: 'Sweets', tag: null, Component: SweetBox },
    { name: 'Rasmalai', price: 280, unit: '6 pc', category: 'Sweets', tag: 'New', Component: SweetBox },
    { name: 'Khoa · Mawa', price: 220, unit: '250 g', category: 'Sweets', tag: null, Component: Khoa },
    { name: 'Vanilla Ice Cream', price: 260, unit: '500 ml', category: 'Sweets', tag: null, Component: IceCreamTub },
    { name: 'Kulfi Box', price: 180, unit: '6 pc', category: 'Sweets', tag: null, Component: IceCreamTub },
  ];

  const filtered = activeCategory === 'All' ? productList : productList.filter(p => p.category === activeCategory);

  return (
    <section style={{
      position: 'relative', padding: '120px 80px 140px',
      background: BRAND.creamDeep,
    }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 56, flexWrap: 'wrap', gap: 32,
        }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12, fontWeight: 600, color: BRAND.pink,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>— The Collection</div>
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em',
              color: BRAND.ink, margin: 0,
            }}>
              Everything dairy,<br />
              <em style={{ fontStyle: 'italic', color: BRAND.blue }}>nothing else.</em>
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 14, fontWeight: 500, color: BRAND.ink,
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
            letterSpacing: '0.02em',
            borderBottom: `1px solid ${BRAND.ink}`, paddingBottom: 4,
          }}>
            View all 30+ products <ArrowRight size={14} />
          </a>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 13, fontWeight: 500, letterSpacing: '0.01em',
                padding: '12px 22px', borderRadius: 999, cursor: 'pointer',
                border: `1px solid ${activeCategory === cat ? BRAND.ink : BRAND.inkFaint + '40'}`,
                background: activeCategory === cat ? BRAND.ink : 'transparent',
                color: activeCategory === cat ? 'white' : BRAND.ink,
                transition: 'all 0.2s',
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Product cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  background: BRAND.creamSoft, borderRadius: 20,
                  overflow: 'hidden', cursor: 'pointer',
                  border: `1px solid ${BRAND.creamDeep}`,
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(27, 47, 142, 0.12)' }}
              >
                <div style={{
                  height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(180deg, ${BRAND.cream} 0%, ${BRAND.creamSoft} 100%)`,
                  position: 'relative',
                }}>
                  {product.tag && (
                    <div style={{
                      position: 'absolute', top: 14, left: 14,
                      padding: '5px 10px', borderRadius: 999,
                      background: product.tag === 'Bestseller' ? BRAND.pink : 
                                  product.tag === 'Premium' ? BRAND.blue : BRAND.ink,
                      color: 'white', fontSize: 10, fontWeight: 600,
                      fontFamily: "'Instrument Sans', sans-serif",
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{product.tag}</div>
                  )}
                  <product.Component size={140} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 10, color: BRAND.inkFaint,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>{product.category}</div>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em',
                    color: BRAND.ink, margin: 0, marginBottom: 16,
                  }}>{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: 22, fontWeight: 600, color: BRAND.blue,
                      }}>₹{product.price}</span>
                      <span style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 13, color: BRAND.inkMuted, marginLeft: 8,
                      }}>/ {product.unit}</span>
                    </div>
                    <button style={{
                      width: 38, height: 38, borderRadius: '50%',
                      background: BRAND.ink, color: 'white', border: 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}>+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// SUBSCRIPTION — the daily delivery pitch
// ═══════════════════════════════════════════════════════════════════
const Subscription = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const items = [
    { day: 'M', products: ['Milk 1L', 'Curd'] },
    { day: 'T', products: ['Milk 1L'] },
    { day: 'W', products: ['Milk 1L', 'Paneer', 'Ghee'] },
    { day: 'T', products: ['Milk 1L'] },
    { day: 'F', products: ['Milk 1L', 'Butter'] },
    { day: 'S', products: ['Milk 1L', 'Curd', 'Cheese'] },
    { day: 'S', products: [] },
  ];

  return (
    <section style={{
      padding: '140px 80px', maxWidth: 1600, margin: '0 auto',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 12, fontWeight: 600, color: BRAND.pink,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>— Subscription</div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(40px, 4.5vw, 72px)',
            fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.03em',
            color: BRAND.ink, margin: 0, marginBottom: 28,
          }}>
            Your week,<br />
            <em style={{ fontStyle: 'italic', color: BRAND.blue }}>planned once.</em>
          </h2>
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 18, lineHeight: 1.55, color: BRAND.inkMuted,
            maxWidth: 480, marginBottom: 40,
          }}>
            Set your weekly rhythm. Heavier on weekends, skip Sundays, 
            add paneer on Wednesdays. Modify any day's delivery until midnight the night before.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0' }}>
            {[
              'Free delivery before 7 AM, every day',
              'Edit or skip tomorrow\'s order till 11:59 PM',
              'Pause anytime for travel or holidays',
              'Monthly billing, no lock-in',
            ].map((item) => (
              <li key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '14px 0', borderBottom: `1px solid ${BRAND.creamDeep}`,
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: BRAND.blue,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 2,
                }}>
                  <Check size={12} color="white" strokeWidth={3} />
                </div>
                <span style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 15, color: BRAND.ink,
                }}>{item}</span>
              </li>
            ))}
          </ul>

          <button style={{
            background: BRAND.blue, color: 'white', border: 'none',
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 15, fontWeight: 500, letterSpacing: '0.01em',
            padding: '18px 36px', borderRadius: 999, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            boxShadow: '0 8px 24px rgba(27, 47, 142, 0.22)',
          }}>
            Build my plan <ArrowRight size={16} />
          </button>
        </div>

        {/* Calendar mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: BRAND.creamSoft, borderRadius: 28, padding: 36,
            border: `1px solid ${BRAND.creamDeep}`,
            boxShadow: '0 30px 80px rgba(27, 47, 142, 0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <div>
              <div style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 22, fontWeight: 500, color: BRAND.ink,
                letterSpacing: '-0.02em',
              }}>This week</div>
              <div style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 13, color: BRAND.inkMuted, marginTop: 4,
              }}>Apr 20 — Apr 26, 2026</div>
            </div>
            <div style={{
              padding: '6px 14px', borderRadius: 999,
              background: BRAND.pinkPale, color: BRAND.pink,
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
            }}>6 DELIVERIES</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
            {items.map((item, i) => (
              <div key={i} style={{
                padding: 12, borderRadius: 12,
                background: item.products.length ? BRAND.cream : 'transparent',
                border: item.products.length ? `1px solid ${BRAND.creamDeep}` : `1px dashed ${BRAND.inkFaint + '40'}`,
                minHeight: 120,
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 11, fontWeight: 600, color: BRAND.inkFaint,
                  letterSpacing: '0.12em', marginBottom: 10,
                }}>{days[i]}</div>
                {item.products.length === 0 ? (
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 10, color: BRAND.inkFaint, marginTop: 'auto',
                    fontStyle: 'italic',
                  }}>skipped</div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {item.products.map((p, j) => (
                      <div key={j} style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 10, color: BRAND.blue, fontWeight: 500,
                        padding: '3px 6px', borderRadius: 4,
                        background: 'white',
                      }}>{p}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 24, padding: 16, borderRadius: 12,
            background: BRAND.pinkPale,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 11, color: BRAND.pink, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Weekly total</div>
              <div style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 28, fontWeight: 600, color: BRAND.blue,
                letterSpacing: '-0.02em', marginTop: 2,
              }}>₹1,248</div>
            </div>
            <div style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12, color: BRAND.inkMuted, textAlign: 'right',
            }}>Save 15% vs.<br />one-time orders</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// TESTIMONIAL
// ═══════════════════════════════════════════════════════════════════
const Testimonial = () => (
  <section style={{
    padding: '120px 80px', background: BRAND.blue, color: 'white',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '-20%', right: '-10%',
      width: '50vw', height: '50vw', borderRadius: '50%',
      background: `radial-gradient(circle, ${BRAND.pink}22 0%, transparent 70%)`,
      filter: 'blur(40px)',
    }} />
    <div style={{
      maxWidth: 900, margin: '0 auto', textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{
        display: 'inline-flex', gap: 4, marginBottom: 32,
      }}>
        {[1,2,3,4,5].map(i => <Star key={i} size={18} fill={BRAND.pink} stroke="none" />)}
      </div>
      <blockquote style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 'clamp(28px, 3.2vw, 48px)',
        fontWeight: 300, lineHeight: 1.25, letterSpacing: '-0.02em',
        margin: 0, fontStyle: 'italic',
      }}>
        "It tastes like the milk my grandmother used to buy in brass pots — 
        thick, sweet, and actually smells like milk. The best part? It's at my 
        door before my kettle's even warm."
      </blockquote>
      <div style={{
        marginTop: 40, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 16,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: BRAND.pink,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600,
        }}>P</div>
        <div style={{ textAlign: 'left' }}>
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 15, fontWeight: 600,
          }}>Priya Ramanathan</div>
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13, opacity: 0.7,
          }}>Subscriber since 2024 · Coimbatore</div>
        </div>
      </div>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════
const Footer = () => (
  <footer style={{
    background: BRAND.creamDeep, padding: '80px 80px 40px',
  }}>
    <div style={{ maxWidth: 1600, margin: '0 auto' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
        gap: 48, paddingBottom: 56,
        borderBottom: `1px solid ${BRAND.inkFaint}30`,
      }}>
        <div>
          <HetheyaLogo height={56} mono />
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 14, lineHeight: 1.6, color: BRAND.inkMuted,
            maxWidth: 320, marginTop: 24,
          }}>
            Farm-fresh dairy from the Nilgiris, delivered daily across
            Coimbatore, Chennai, Bangalore, and Ooty.<br /><br />
            <span style={{ fontSize: 13 }}>📍 5/14 Madhana Estate, Kundanatty, Melkavatty, Ooty – 643 004</span><br />
            <span style={{ fontSize: 13 }}>📞 +91 98651 30184 &nbsp;·&nbsp; ✉️ hethayadairy@gmail.com</span><br />
            <span style={{ fontSize: 13 }}>Managing Partners: K.K. Visakan & K.C. Jagadesh</span>
          </p>
        </div>
        {[
          { title: 'Shop', links: ['All Products', 'Milk', 'Curd & Paneer', 'Ghee & Butter', 'Sweets'] },
          { title: 'Company', links: ['Our Story', 'Farms', 'Sustainability', 'Careers', 'Press'] },
          { title: 'Help', links: ['Delivery Zones', 'FAQs', 'Returns', 'Contact', 'Track Order'] },
          { title: 'Connect', links: ['Instagram', 'Facebook', 'YouTube', 'WhatsApp', 'Newsletter'] },
        ].map((col) => (
          <div key={col.title}>
            <div style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12, fontWeight: 600, color: BRAND.ink,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map(link => (
                <a key={link} href="#" style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 14, color: BRAND.inkMuted, textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = BRAND.pink}
                onMouseLeave={(e) => e.currentTarget.style.color = BRAND.inkMuted}
                >{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 32, flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 13, color: BRAND.inkFaint,
        }}>© 2026 Hetheya Dairy. Born in the hills.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy', 'Terms', 'Cookies'].map(l => (
            <a key={l} href="#" style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 13, color: BRAND.inkFaint, textDecoration: 'none',
            }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ═══════════════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════════════
export default function HetheyaLanding() {
  return (
    <div style={{
      background: BRAND.cream,
      color: BRAND.ink,
      minHeight: '100vh',
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        
        html { scroll-behavior: smooth; }
        
        /* Smooth scroll feel */
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>
      
      <Navbar />
      <Hero />
      <Features />
      <DailyEssentials />
      <ProductGrid />
      <Subscription />
      <Testimonial />
      <Footer />
    </div>
  );
}
