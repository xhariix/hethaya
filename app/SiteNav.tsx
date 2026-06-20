'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { BRAND } from './brand';

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

const Logo = ({ height = 42 }: { height?: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/logo.png" alt="Hetheya Dairy" style={{ height, width: 'auto', display: 'block' }} />
);

export default function SiteNav({ active, overlay = false }: { active?: string; overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  // In overlay mode the bar is transparent over the hero until scrolled.
  const solid = !overlay || scrolled;

  return (
    <nav
      className="site-nav"
      style={{
        position: overlay ? 'fixed' : 'sticky',
        top: 0, left: 0, right: 0, zIndex: 50,
        padding: '14px 48px',
        background: solid ? 'rgba(250, 245, 234, 0.94)' : 'transparent',
        backdropFilter: solid ? 'blur(16px) saturate(140%)' : 'none',
        borderBottom: solid ? `1px solid ${BRAND.creamDeep}` : '1px solid transparent',
        transition: 'background 0.3s, padding 0.3s, border-color 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
        <Logo />
      </Link>

      {/* Desktop links */}
      <div className="site-nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {NAV_LINKS.map((item) => (
          <Link key={item.label} href={item.href} style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13, fontWeight: item.href === active ? 600 : 500,
            color: item.href === active ? BRAND.pink : BRAND.ink,
            letterSpacing: '0.02em', textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = BRAND.pink}
          onMouseLeave={(e) => e.currentTarget.style.color = item.href === active ? BRAND.pink : BRAND.ink}
          >{item.label}</Link>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Link href="/contact" className="site-nav-order" style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 13, fontWeight: 500, color: BRAND.blue,
          background: 'transparent', border: `1px solid ${BRAND.blue}`,
          padding: '9px 18px', borderRadius: 999, cursor: 'pointer',
          letterSpacing: '0.02em', transition: 'all 0.2s', textDecoration: 'none',
          display: 'inline-block', whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
        >Order Now</Link>
        <button aria-label="Cart" style={{
          background: BRAND.blue, color: 'white', border: 'none',
          width: 42, height: 42, borderRadius: 999, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <ShoppingBag size={17} />
        </button>
        {/* Mobile hamburger */}
        <button
          className="site-nav-burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: 'transparent', color: BRAND.ink, border: `1px solid ${BRAND.creamDeep}`,
            width: 42, height: 42, borderRadius: 12, cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="site-nav-mobile" style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(250, 245, 234, 0.98)', backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${BRAND.creamDeep}`,
          padding: '12px 20px 24px', display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: '0 16px 40px rgba(13, 20, 39, 0.12)',
        }}>
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 16, fontWeight: item.href === active ? 700 : 500,
              color: item.href === active ? BRAND.pink : BRAND.ink,
              textDecoration: 'none', padding: '12px 4px',
              borderBottom: `1px solid ${BRAND.creamDeep}`,
            }}>{item.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 15, fontWeight: 600, color: 'white', background: BRAND.blue,
            padding: '14px 18px', borderRadius: 999, textAlign: 'center',
            textDecoration: 'none', marginTop: 14,
          }}>Order Now</Link>
        </div>
      )}
    </nav>
  );
}
