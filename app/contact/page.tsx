'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Check, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import SiteNav from '../SiteNav';

const BRAND = {
  cream: '#FAF5EA', creamDeep: '#F2EBD6', creamSoft: '#FDFAF3',
  blue: '#1B2F8E', blueDeep: '#131F63', blueSoft: '#4258B8',
  pink: '#D8379B', pinkSoft: '#F5C5DF', pinkPale: '#FCE9F3',
  ink: '#0D1427', inkMuted: '#57617A', inkFaint: '#9AA1B4',
  green: '#3A7D44',
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
      <button style={{ background: BRAND.blue, color: 'white', border: 'none', width: 42, height: 42, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingBag size={17} /></button>
    </div>
  </nav>
);

const INPUT_STYLE: React.CSSProperties = {
  width: '100%', padding: '14px 18px', borderRadius: 12,
  border: `1px solid ${BRAND.creamDeep}`, background: 'white',
  fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.ink,
  outline: 'none', transition: 'border-color 0.2s',
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  inquiry: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', city: '', inquiry: 'subscription', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputProps = (field: keyof FormData) => ({
    value: form[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value })),
    onFocus: () => setFocused(field),
    onBlur: () => setFocused(''),
    style: { ...INPUT_STYLE, borderColor: focused === field ? BRAND.blue : BRAND.creamDeep },
  });

  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
        textarea { resize: vertical; }
        select { appearance: none; }
      `}</style>

      <SiteNav active="/contact" />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.ink} 0%, #1A2240 100%)`, padding: '72px 48px 56px', color: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 20px' }}>
            Let's talk.<br /><em style={{ fontStyle: 'italic', color: BRAND.pinkSoft }}>We're farmers —<br />we reply fast.</em>
          </h1>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 17, lineHeight: 1.65, opacity: 0.8, maxWidth: 560, margin: 0 }}>
            Whether you're starting a subscription, booking a farm visit, placing a bulk order,
            or just curious — we respond to every message within 4 hours on weekdays.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 48px 100px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64 }}>
        {/* Contact Form */}
        <div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: '0 0 32px' }}>
            Send us a message
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '56px 32px', background: BRAND.creamSoft, borderRadius: 24, border: `1px solid ${BRAND.creamDeep}` }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: BRAND.green, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <Check size={28} color="white" strokeWidth={3} />
              </div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 400, color: BRAND.ink, margin: '0 0 12px' }}>Message received!</h3>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, color: BRAND.inkMuted, margin: '0 0 24px' }}>
                We'll get back to {form.name.split(' ')[0] || 'you'} within 4 hours. Check your inbox at {form.email}.
              </p>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: BRAND.inkFaint }}>
                Meanwhile — <Link href="/products" style={{ color: BRAND.blue }}>browse our full product range →</Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Full Name *</label>
                  <input type="text" placeholder="Priya Ramanathan" required {...inputProps('name')} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email Address *</label>
                  <input type="email" placeholder="priya@example.com" required {...inputProps('email')} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" {...inputProps('phone')} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Your City</label>
                  <input type="text" placeholder="Coimbatore, Chennai, Bangalore…" {...inputProps('city')} />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Type of Inquiry *</label>
                <select required {...inputProps('inquiry')} style={{ ...INPUT_STYLE, borderColor: focused === 'inquiry' ? BRAND.blue : BRAND.creamDeep, cursor: 'pointer' }}>
                  <option value="subscription">Start a Milk / Dairy Subscription</option>
                  <option value="one-time">Place a One-Time Order</option>
                  <option value="bulk">Bulk / Institutional / B2B Order</option>
                  <option value="farm-visit">Book a Farm Visit or Ecotourism Experience</option>
                  <option value="school">School / College Educational Programme</option>
                  <option value="plantation">Tea / Coffee / Spice Purchase (Plantation Products)</option>
                  <option value="medicinal">Medicinal & Aromatic Plants / Essential Oils</option>
                  <option value="export">Export / International Inquiry</option>
                  <option value="media">Press / Media / Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, color: BRAND.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Your Message *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us what you need. The more detail you give, the faster we can help. For subscriptions, mention which products and your delivery area. For farm visits, mention your preferred date and group size."
                  {...inputProps('message')}
                  style={{ ...INPUT_STYLE, borderColor: focused === 'message' ? BRAND.blue : BRAND.creamDeep, minHeight: 140 }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: BRAND.blue, color: 'white', border: 'none',
                  fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, fontWeight: 600,
                  padding: '18px 32px', borderRadius: 999, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  alignSelf: 'flex-start', transition: 'all 0.2s',
                  boxShadow: '0 8px 24px rgba(27,47,142,0.22)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = BRAND.blueDeep; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = BRAND.blue; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                Send Message <ArrowRight size={16} />
              </button>
              <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.inkFaint, margin: 0 }}>
                We respond to every message within 4 hours (Mon–Sat, 7 AM – 8 PM IST).
              </p>
            </form>
          )}
        </div>

        {/* Sidebar: Contact Info + Delivery Zones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Contact details */}
          <div style={{ background: BRAND.blue, borderRadius: 24, padding: 32, color: 'white' }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 500, margin: '0 0 24px' }}>
              Reach us directly
            </h3>
            {[
              { Icon: Phone, label: 'Call / WhatsApp', value: '+91 98651 30184', sub: 'Mon–Sat, 7 AM – 8 PM IST' },
              { Icon: Mail, label: 'Email', value: 'hethayadairy@gmail.com', sub: 'Response within 4 hours' },
              { Icon: MapPin, label: 'Farm Address', value: '5/14 Madhana Estate, Kundanatty, Melkavatty, Ooty. The Nilgiris – 643 004', sub: 'Visits by appointment' },
              { Icon: Clock, label: 'Order Cutoff', value: 'Midnight for next-day delivery', sub: 'Modify or skip any day\'s order till 11:59 PM' },
            ].map(({ Icon, label, value, sub }) => (
              <div key={label} style={{ display: 'flex', gap: 16, paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>{value}</div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, opacity: 0.65, marginTop: 2 }}>{sub}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, opacity: 0.65, marginBottom: 8 }}>Managing Partners: K.K. Visakan & K.C. Jagadesh</div>
            {['WhatsApp', 'Instagram', 'Facebook'].map(s => (
                <a key={s} href="#" style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Delivery Zones */}
          <div style={{ background: BRAND.creamSoft, borderRadius: 24, padding: 28, border: `1px solid ${BRAND.creamDeep}` }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 500, color: BRAND.ink, margin: '0 0 20px' }}>
              Delivery zones
            </h3>
            {[
              { city: 'Ooty & Coonoor', time: 'By 6:00 AM', status: 'Available', icon: '✅' },
              { city: 'Coimbatore', time: 'By 7:00 AM', status: 'Available', icon: '✅' },
              { city: 'Chennai', time: 'By 7:00 AM', status: 'Available', icon: '✅' },
              { city: 'Bangalore', time: 'By 7:00 AM', status: 'Available', icon: '✅' },
              { city: 'Mysore', time: 'By 7:30 AM', status: 'New Zone', icon: '🔵' },
              { city: 'Tiruppur', time: 'By 7:00 AM', status: 'Pilot', icon: '🔵' },
              { city: 'Erode', time: 'By 7:00 AM', status: 'Coming Soon', icon: '⏳' },
              { city: 'Hyderabad', time: '—', status: 'Waitlist Open', icon: '📋' },
            ].map(zone => (
              <div key={zone.city} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${BRAND.creamDeep}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 16 }}>{zone.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 500, color: BRAND.ink }}>{zone.city}</div>
                    <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, color: BRAND.inkFaint }}>{zone.time}</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, background: zone.status === 'Available' ? BRAND.green + '20' : zone.status === 'Waitlist Open' ? BRAND.pink + '15' : BRAND.blue + '15', color: zone.status === 'Available' ? BRAND.green : zone.status === 'Waitlist Open' ? BRAND.pink : BRAND.blue }}>{zone.status}</div>
              </div>
            ))}
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.inkFaint, marginTop: 12, margin: '12px 0 0' }}>
              Not in a delivery zone? Contact us — we ship selected products (ghee, tea, coffee, spices, chocolates) pan-India via courier.
            </p>
          </div>

          {/* FAQs */}
          <div style={{ background: 'white', borderRadius: 24, padding: 28, border: `1px solid ${BRAND.creamDeep}` }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 500, color: BRAND.ink, margin: '0 0 20px' }}>Quick answers</h3>
            {[
              { q: 'What is the minimum subscription commitment?', a: 'None. Start, pause, or stop anytime. No lock-in, no cancellation fee.' },
              { q: 'Can I get delivery to my apartment complex?', a: 'Yes. We deliver to societies and apartment complexes with security — coordinate with your security desk once.' },
              { q: 'How do I return the glass bottles?', a: 'Leave empty bottles at your doorstep on the next delivery day. Our delivery partner collects them automatically.' },
              { q: 'Do you supply to restaurants and hotels?', a: 'Yes. We have institutional supply arrangements. Contact us for bulk pricing and logistics.' },
              { q: 'Is the milk pasteurised?', a: 'Yes, HTST-pasteurised at 72°C for 15 seconds. Not UHT or homogenised. Fat globules are intact.' },
            ].map((faq, i) => (
              <div key={i} style={{ paddingBottom: 14, marginBottom: 14, borderBottom: i < 4 ? `1px solid ${BRAND.creamDeep}` : 'none' }}>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600, color: BRAND.ink, marginBottom: 6 }}>{faq.q}</div>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, lineHeight: 1.55, color: BRAND.inkMuted }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section style={{ background: BRAND.creamDeep, padding: '64px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 36, fontWeight: 400, letterSpacing: '-0.03em', color: BRAND.ink, margin: '0 0 12px', textAlign: 'center' }}>
            Find us on the<br /><em style={{ fontStyle: 'italic', color: BRAND.blue }}>Nilgiri plateau.</em>
          </h2>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: BRAND.inkMuted, textAlign: 'center', margin: '0 0 32px' }}>
            5/14 Madhana Estate, Kundanatty, Melkavatty, Ooty. The Nilgiris – 643 004
          </p>
          <div style={{ borderRadius: 24, overflow: 'hidden', border: `1px solid ${BRAND.creamDeep}`, boxShadow: '0 20px 60px rgba(27,47,142,0.08)' }}>
            <iframe
              title="Hetheya Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5!2d76.7!3d11.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzM2LjAiTiA3NsKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
            <a
              href="https://www.google.com/maps/search/Kundanatty+Melkavatty+Ooty+Nilgiris+643004"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 999, background: BRAND.blue, color: 'white', fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: 'none' }}
            >
              <MapPin size={14} /> Open in Google Maps
            </a>
            <a
              href="tel:+919865130184"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 999, background: BRAND.pink, color: 'white', fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: 'none' }}
            >
              <Phone size={14} /> Call +91 98651 30184
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
