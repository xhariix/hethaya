'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, Filter, Star, Leaf, Check, X } from 'lucide-react';
import Link from 'next/link';

const BRAND = {
  cream: '#FAF5EA', creamDeep: '#F2EBD6', creamSoft: '#FDFAF3',
  blue: '#1B2F8E', blueDeep: '#131F63', blueSoft: '#4258B8',
  pink: '#D8379B', pinkSoft: '#F5C5DF', pinkPale: '#FCE9F3',
  ink: '#0D1427', inkMuted: '#57617A', inkFaint: '#9AA1B4',
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
    <path d="M 30 70 Q 160 25, 300 55 Q 355 62, 395 50"
      stroke={BRAND.pink} strokeWidth="3" fill="none" strokeLinecap="round" />
    <g transform="translate(285, 12)">
      <path d="M 0 52 L 30 18 L 52 38 L 72 6 L 112 52 Z" fill={BRAND.blue} />
      <path d="M 52 38 L 72 6 L 84 18 Z" fill={BRAND.cream} />
    </g>
    <text x="30" y="135" fontFamily="'Fraunces', Georgia, serif" fontSize="76" fontWeight="700" fill={BRAND.blue} letterSpacing="-2">Hetheya</text>
    <text x="155" y="178" fontFamily="'Dancing Script', cursive" fontSize="36" fontStyle="italic" fontWeight="600" fill={BRAND.pink}>Dairy</text>
    <line x1="105" y1="188" x2="315" y2="188" stroke={BRAND.pink} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [cartCount] = useState(0);
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '14px 48px',
      background: 'rgba(250, 245, 234, 0.96)',
      backdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: `1px solid ${BRAND.creamDeep}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <HetheyaLogo height={40} />
      </Link>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {NAV_LINKS.map((item) => (
          <Link key={item.label} href={item.href} style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13, fontWeight: item.href === '/products' ? 600 : 500,
            color: item.href === '/products' ? BRAND.pink : BRAND.ink,
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = BRAND.pink}
          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = item.href === '/products' ? BRAND.pink : BRAND.ink}
          >{item.label}</Link>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Link href="/contact" style={{
          fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 500,
          color: BRAND.blue, border: `1px solid ${BRAND.blue}`,
          padding: '9px 18px', borderRadius: 999, textDecoration: 'none',
          transition: 'all 0.2s', display: 'inline-block',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = BRAND.blue; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = BRAND.blue; }}
        >Order Now</Link>
        <button style={{
          background: BRAND.blue, color: 'white', border: 'none',
          width: 42, height: 42, borderRadius: 999, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        }}>
          <ShoppingBag size={17} />
          <span style={{
            position: 'absolute', top: -4, right: -4,
            background: BRAND.pink, color: 'white', fontSize: 10, fontWeight: 700,
            width: 18, height: 18, borderRadius: 999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

const ALL_PRODUCTS = [
  // ── PANEER & KHOVA ──
  { id: 1, cat: 'Paneer & Khova', name: 'Fresh Soft Paneer', desc: 'Hand-pressed daily from full-fat A2 milk. Crumbles perfectly in curries, holds firm on the tawa.', price: 95, unit: '200 g', tags: ['Bestseller', 'A2'], icon: '🧀' },
  { id: 2, cat: 'Paneer & Khova', name: 'Malai Paneer', desc: 'Richer, creamier block made with extra cream. Melt-in-mouth texture for restaurant-style gravies.', price: 130, unit: '200 g', tags: ['Premium'], icon: '🧀' },
  { id: 3, cat: 'Paneer & Khova', name: 'Smoked Paneer', desc: 'Cold-smoked over Nilgiri wood chips. Adds depth to bhurjis, wraps, and BBQ platters.', price: 155, unit: '200 g', tags: ['Chef\'s Pick'], icon: '🧀' },
  { id: 4, cat: 'Paneer & Khova', name: 'Khova (Mawa)', desc: 'Slow-reduced A2 milk solids, just like the halwai makes it. Base for all festival sweets.', price: 220, unit: '250 g', tags: ['Festive'], icon: '🍯' },
  { id: 5, cat: 'Paneer & Khova', name: 'Danedar Khova', desc: 'Grainy-textured mawa ideal for peda, burfi, and ladoos. Authentic Nilgiri farmhouse style.', price: 240, unit: '250 g', tags: [], icon: '🍯' },
  { id: 6, cat: 'Paneer & Khova', name: 'Chena (Wet Curd Cheese)', desc: 'Freshly made soft curd cheese for rasgulla and sandesh. Delivered same morning it is made.', price: 110, unit: '200 g', tags: ['Fresh'], icon: '🧀' },

  // ── CHEESE ──
  { id: 7, cat: 'Cheese', name: 'Mozzarella Block', desc: 'Low-moisture mozzarella — stretchy, golden, and bubbly on pizza. Made from buffalo milk.', price: 210, unit: '200 g', tags: ['Pizza-Ready'], icon: '🍕' },
  { id: 8, cat: 'Cheese', name: 'Cheddar Slices', desc: 'Aged 60 days, sharp and tangy. Perfect for sandwiches, burgers, and grilled cheese.', price: 260, unit: '200 g', tags: ['Premium', 'Aged'], icon: '🧀' },
  { id: 9, cat: 'Cheese', name: 'Processed Cheese Spread', desc: 'Smooth, spreadable, mildly salty. Slather it on toast, dosas, or crackers.', price: 145, unit: '200 g', tags: ['Kids\' Fave'], icon: '🧀' },
  { id: 10, cat: 'Cheese', name: 'Cottage Cheese (Queso Blanco)', desc: 'Mild, fresh, unaged. Pairs with fruit, honey, or salads. High protein, low fat option.', price: 180, unit: '200 g', tags: ['High Protein'], icon: '🧀' },
  { id: 11, cat: 'Cheese', name: 'Gouda Round', desc: 'Semi-hard Dutch-style cheese aged on our Nilgiri farm. Nutty, sweet, and fudgy inside.', price: 380, unit: '250 g', tags: ['Artisan', 'Aged'], icon: '🧀' },
  { id: 12, cat: 'Cheese', name: 'Cream Cheese', desc: 'Velvety, slightly tangy. Spread on bagels, use in cheesecakes, or fold into pasta sauces.', price: 195, unit: '200 g', tags: ['Versatile'], icon: '🧀' },
  { id: 13, cat: 'Cheese', name: 'Ricotta', desc: 'Delicate whey-based cheese — light, fluffy, mildly sweet. Italian lasagne and cannoli staple.', price: 220, unit: '200 g', tags: ['Import Style'], icon: '🧀' },

  // ── BUTTER & GHEE ──
  { id: 14, cat: 'Butter & Ghee', name: 'A2 Bilona Cow Ghee', desc: 'Slow-churned from hand-set curd of desi Gir cow milk. Grainy, aromatic, golden — the real deal.', price: 780, unit: '500 ml', tags: ['Bestseller', 'A2', 'Premium'], icon: '🫙' },
  { id: 15, cat: 'Butter & Ghee', name: 'Buffalo Ghee', desc: 'Rich, white ghee from Murrah buffalo milk. High fat, intense flavour for dal-tadka and halwa.', price: 640, unit: '500 ml', tags: ['Rich'], icon: '🫙' },
  { id: 16, cat: 'Butter & Ghee', name: 'White Butter (Makhan)', desc: 'Unsalted, hand-churned butter just like Nani made — soft, cool, and pure.', price: 140, unit: '200 g', tags: ['Traditional'], icon: '🧈' },
  { id: 17, cat: 'Butter & Ghee', name: 'Salted Butter', desc: 'Lightly salted cultured butter, European-style. Beautiful on hot toast and croissants.', price: 120, unit: '200 g', tags: [], icon: '🧈' },
  { id: 18, cat: 'Butter & Ghee', name: 'Garlic Herb Butter', desc: 'Roasted garlic, parsley, and sea salt in farm butter. Melt over steaks, pasta, or warm bread.', price: 160, unit: '150 g', tags: ['Chef\'s Pick'], icon: '🧈' },
  { id: 19, cat: 'Butter & Ghee', name: 'Ghee with Turmeric', desc: 'Golden milk ghee — A2 bilona ghee infused with Nilgiri turmeric. Ayurvedic and delicious.', price: 420, unit: '250 ml', tags: ['Ayurvedic'], icon: '🫙' },
  { id: 20, cat: 'Butter & Ghee', name: 'Flavoured Ghee – Cardamom', desc: 'A2 ghee slow-simmered with green cardamom pods. Perfect finishing touch on kheer and biryani.', price: 440, unit: '250 ml', tags: ['Festive'], icon: '🫙' },

  // ── CURD & YOGURTS ──
  { id: 21, cat: 'Curd & Yogurts', name: 'Set Curd', desc: 'Naturally set overnight in earthen pots. Thick, slightly sour, a perfect match for rice and roti.', price: 65, unit: '400 g', tags: ['Bestseller'], icon: '🥛' },
  { id: 22, cat: 'Curd & Yogurts', name: 'Greek Yogurt – Plain', desc: 'Strained three times for maximum thickness. 18 g protein per serving. No thickeners added.', price: 95, unit: '150 g', tags: ['High Protein'], icon: '🥛' },
  { id: 23, cat: 'Curd & Yogurts', name: 'Greek Yogurt – Honey', desc: 'Our plain Greek yogurt drizzled with raw Nilgiri forest honey. Breakfast perfection.', price: 110, unit: '150 g', tags: ['New'], icon: '🍯' },
  { id: 24, cat: 'Curd & Yogurts', name: 'Mango Yogurt', desc: 'Alphonso mango pulp swirled into creamy set yogurt. Summer in every spoonful.', price: 55, unit: '150 g', tags: ['Seasonal'], icon: '🥭' },
  { id: 25, cat: 'Curd & Yogurts', name: 'Blueberry Yogurt', desc: 'Antioxidant-rich wild blueberry compote layered on thick farm yogurt.', price: 65, unit: '150 g', tags: [], icon: '🫐' },
  { id: 26, cat: 'Curd & Yogurts', name: 'Mishti Doi', desc: 'Bengali-style jaggery-sweetened curd, baked until caramelised. Creamy, caramel, comforting.', price: 75, unit: '200 g', tags: ['Traditional'], icon: '🥛' },
  { id: 27, cat: 'Curd & Yogurts', name: 'Sweet Lassi', desc: 'Churned from thick curd, sweetened with raw cane sugar. Cool and frothy.', price: 45, unit: '250 ml', tags: [], icon: '🥛' },
  { id: 28, cat: 'Curd & Yogurts', name: 'Salted Lassi', desc: 'Chaas-style, lightly spiced with cumin and black salt. The perfect post-meal digestive.', price: 42, unit: '250 ml', tags: [], icon: '🥛' },
  { id: 29, cat: 'Curd & Yogurts', name: 'Rose Lassi', desc: 'Chilled curd, Rajasthani rose syrup, and a pinch of cardamom. Elegant and floral.', price: 55, unit: '250 ml', tags: ['New'], icon: '🌹' },

  // ── UHT MILK ──
  { id: 30, cat: 'UHT Milk', name: 'A2 Full Cream UHT Milk', desc: 'UHT-processed desi cow milk. 6-month ambient shelf life. Tastes as close to fresh as UHT can.', price: 85, unit: '1 L', tags: ['A2'], icon: '🥛' },
  { id: 31, cat: 'UHT Milk', name: 'Toned UHT Milk', desc: '3% fat, 8.5% SNF. For everyday chai, baking, and cereals without refrigeration.', price: 62, unit: '1 L', tags: [], icon: '🥛' },
  { id: 32, cat: 'UHT Milk', name: 'Double Toned UHT Milk', desc: '1.5% fat — ideal for weight-watchers and diabetic diets. Clean and light taste.', price: 58, unit: '1 L', tags: ['Low Fat'], icon: '🥛' },
  { id: 33, cat: 'UHT Milk', name: 'Buffalo UHT Milk', desc: 'Rich 6% fat from Murrah buffalo. Thick, creamy, perfect for making homemade paneer and khoa.', price: 92, unit: '1 L', tags: ['Rich'], icon: '🥛' },
  { id: 34, cat: 'UHT Milk', name: 'Kids UHT Milk (200 ml)', desc: 'School-lunch-sized tetra pack. Full cream A2, lightly sweetened. No artificial flavours.', price: 28, unit: '200 ml', tags: ['Kids\' Fave'], icon: '🥛' },

  // ── BEVERAGES ──
  { id: 35, cat: 'Beverages', name: 'Masala Buttermilk', desc: 'Chaas spiced with fresh ginger, curry leaves, roasted cumin, and black salt. Probiotic powerhouse.', price: 22, unit: '200 ml', tags: ['Probiotic'], icon: '🥤' },
  { id: 36, cat: 'Beverages', name: 'Chocolate Milk', desc: 'Rich Belgian cocoa stirred into warm whole milk and chilled. Kids go absolutely crazy for it.', price: 38, unit: '200 ml', tags: ['Kids\' Fave'], icon: '🍫' },
  { id: 37, cat: 'Beverages', name: 'Strawberry Milk', desc: 'Farm strawberry pulp mixed into chilled A2 milk. Light, refreshing, naturally pink.', price: 38, unit: '200 ml', tags: [], icon: '🍓' },
  { id: 38, cat: 'Beverages', name: 'Badam Milk', desc: 'Whole almonds soaked, blanched, and blended into hot milk with saffron and cardamom.', price: 42, unit: '200 ml', tags: ['Nutritious'], icon: '🌰' },
  { id: 39, cat: 'Beverages', name: 'Elaichi Milk', desc: 'Subtly sweetened milk infused with green cardamom. Warm and soothing before bed.', price: 40, unit: '200 ml', tags: ['New'], icon: '🌿' },
  { id: 40, cat: 'Beverages', name: 'Haldi Milk (Golden Milk)', desc: 'Warm turmeric milk with black pepper, cinnamon, and ginger. Anti-inflammatory and healing.', price: 45, unit: '200 ml', tags: ['Ayurvedic'], icon: '🌟' },
  { id: 41, cat: 'Beverages', name: 'Banana Milk Shake', desc: 'Farm banana blended with full-cream milk and a spoon of honey. Energy for the morning rush.', price: 50, unit: '250 ml', tags: ['Energy'], icon: '🍌' },
  { id: 42, cat: 'Beverages', name: 'Nilgiri Tea Latte', desc: 'Brewed from our estate Nilgiri dust, mixed with steamed farm milk and organic cane sugar.', price: 55, unit: '250 ml', tags: ['Signature'], icon: '🍵' },
  { id: 43, cat: 'Beverages', name: 'Cold Coffee (Farm Milk)', desc: 'Coorg arabica espresso poured over chilled Hetheya farm milk with jaggery syrup.', price: 60, unit: '250 ml', tags: ['New'], icon: '☕' },

  // ── DESSERTS ──
  { id: 44, cat: 'Desserts', name: 'Rasmalai (6 pcs)', desc: 'Spongy chena discs simmered in reduced saffron milk with pistachios. Festival-grade texture.', price: 280, unit: '6 pc', tags: ['Festive', 'New'], icon: '🍮' },
  { id: 45, cat: 'Desserts', name: 'Gulab Jamun (8 pcs)', desc: 'Khova-based soft rounds, deep-fried and soaked in rose-cardamom syrup overnight.', price: 190, unit: '8 pc', tags: ['Classic'], icon: '🍮' },
  { id: 46, cat: 'Desserts', name: 'Doodh Peda (500 g)', desc: 'Soft A2 milk peda flavoured with cardamom and saffron. Traditional Mathura style.', price: 380, unit: '500 g', tags: ['Traditional'], icon: '🍬' },
  { id: 47, cat: 'Desserts', name: 'Milk Burfi (500 g)', desc: 'Mawa and sugar compressed into fudge slabs, garnished with edible silver and pistachio.', price: 420, unit: '500 g', tags: ['Festive'], icon: '🍬' },
  { id: 48, cat: 'Desserts', name: 'Assorted Mithai Box', desc: 'Eight varieties of traditional sweets packed in a gift-worthy wooden box. Ships anywhere in India.', price: 540, unit: '500 g', tags: ['Gift Ready'], icon: '🎁' },
  { id: 49, cat: 'Desserts', name: 'Rasgulla (6 pcs)', desc: 'Light spongy balls in light sugar syrup. West Bengal GI-tagged recipe. No essence added.', price: 160, unit: '6 pc', tags: [], icon: '🍮' },
  { id: 50, cat: 'Desserts', name: 'Phirni (Clay Pot)', desc: 'Coarsely ground rice cooked in A2 milk with saffron, served chilled in a traditional clay saucer.', price: 120, unit: '200 g', tags: ['Clay Pot'], icon: '🍮' },
  { id: 51, cat: 'Desserts', name: 'Basundi', desc: 'Thickened sweetened milk with saffron and cardamom. Serve warm or cold — divine either way.', price: 110, unit: '200 ml', tags: [], icon: '🥛' },
  { id: 52, cat: 'Desserts', name: 'Kheer (Rice Pudding)', desc: 'Basmati rice slow-cooked in A2 milk for 3 hours. Sweetened with cane sugar, topped with dried fruits.', price: 130, unit: '250 g', tags: [], icon: '🍚' },

  // ── ICE CREAM & CHOCOLATES ──
  { id: 53, cat: 'Ice Cream & Chocolates', name: 'Vanilla Bean Ice Cream', desc: 'Tahitian vanilla beans churned into double-cream A2 farm ice cream. The benchmark of good.', price: 260, unit: '500 ml', tags: ['Classic'], icon: '🍦' },
  { id: 54, cat: 'Ice Cream & Chocolates', name: 'Nilgiri Tea Ice Cream', desc: 'Our estate Nilgiri orange pekoe infused into custard ice cream. Floral, brisk, one-of-a-kind.', price: 320, unit: '500 ml', tags: ['Signature'], icon: '🍦' },
  { id: 55, cat: 'Ice Cream & Chocolates', name: 'Mango Kulfi', desc: 'Dense Alphonso mango kulfi on a stick — made the slow old way, no emulsifiers, no shortcuts.', price: 65, unit: '1 pc', tags: ['Summer'], icon: '🍧' },
  { id: 56, cat: 'Ice Cream & Chocolates', name: 'Kulfi Box (6 pcs)', desc: 'Assorted kulfis — malai, mango, kesar-pista, rose, tender coconut, and chocolate.', price: 340, unit: '6 pc', tags: ['Party Pack'], icon: '🍧' },
  { id: 57, cat: 'Ice Cream & Chocolates', name: 'Chocolate Ice Cream', desc: 'Single-origin dark chocolate from our Nilgiri estate churned into A2 cream. Intense and velvety.', price: 290, unit: '500 ml', tags: [], icon: '🍫' },
  { id: 58, cat: 'Ice Cream & Chocolates', name: 'Strawberry Swirl Ice Cream', desc: 'Fresh hill strawberry compote ribboned through clotted cream ice cream. Pink, tart, stunning.', price: 275, unit: '500 ml', tags: ['New'], icon: '🍓' },
  { id: 59, cat: 'Ice Cream & Chocolates', name: 'Milk Chocolate Bar', desc: 'Single-estate Nilgiri cocoa, 45% milk chocolate. Creamy, melts at body temperature.', price: 95, unit: '80 g', tags: ['Artisan'], icon: '🍫' },
  { id: 60, cat: 'Ice Cream & Chocolates', name: 'Dark Chocolate Bar (70%)', desc: 'Nilgiri single-origin dark chocolate, 70% cocoa. Fruity, bright, fermented 7 days on our farm.', price: 110, unit: '80 g', tags: ['Premium', 'Artisan'], icon: '🍫' },

  // ── FROZEN SNACKS – SMART CHEF ──
  { id: 61, cat: 'Frozen Snacks – Smart Chef', name: 'Paneer Tikka Cubes (Ready-to-Cook)', desc: 'Marinated fresh paneer in tandoori masala. Straight from freezer to pan in 10 minutes.', price: 180, unit: '250 g', tags: ['Quick Cook'], icon: '🥘' },
  { id: 62, cat: 'Frozen Snacks – Smart Chef', name: 'Cheese Stuffed Paratha', desc: 'Whole wheat paratha filled with a cheddar-herbs stuffing. Crisp from the tawa in 6 minutes.', price: 130, unit: '3 pc', tags: ['Quick Cook'], icon: '🫓' },
  { id: 63, cat: 'Frozen Snacks – Smart Chef', name: 'Paneer Frankie Rolls', desc: 'Spiced paneer bhurji rolled in soft chapati, frozen and sealed fresh. Ready in 5 minutes.', price: 160, unit: '4 pc', tags: ['Kids\' Fave'], icon: '🌯' },
  { id: 64, cat: 'Frozen Snacks – Smart Chef', name: 'Butter Chicken (Starter Pack)', desc: 'Chef-marinated farm chicken in butter-cream sauce. Add your own milk/cream and serve.', price: 240, unit: '300 g', tags: ['Bestseller'], icon: '🍗' },
  { id: 65, cat: 'Frozen Snacks – Smart Chef', name: 'Cheese Corn Nuggets', desc: 'Golden-crumbed nuggets stuffed with mozzarella and sweet corn. Kids and adults both obsessed.', price: 145, unit: '12 pc', tags: ['Kids\' Fave'], icon: '🌽' },
  { id: 66, cat: 'Frozen Snacks – Smart Chef', name: 'Ghee Roast Masala (Paste)', desc: 'Authentic Mangalorean ghee roast masala in our farm ghee. Just add protein and cook.', price: 120, unit: '150 g', tags: ['Gourmet'], icon: '🌶️' },
];

const CATEGORIES = ['All', 'Paneer & Khova', 'Cheese', 'Butter & Ghee', 'Curd & Yogurts', 'UHT Milk', 'Beverages', 'Desserts', 'Ice Cream & Chocolates', 'Frozen Snacks – Smart Chef'];

const TAG_COLORS: Record<string, string> = {
  'Bestseller': BRAND.pink,
  'Premium': BRAND.blue,
  'New': '#3A7D44',
  'A2': BRAND.blue,
  'Signature': BRAND.blueDeep,
  'Festive': '#C89B3C',
  'Artisan': '#5C4B8F',
  'Kids\' Fave': '#E8609A',
  'Ayurvedic': '#3A7D44',
  'Chef\'s Pick': BRAND.ink,
  'Gift Ready': '#C89B3C',
  default: BRAND.inkMuted,
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] || TAG_COLORS.default;
}

function ProductCard({ product, onAdd }: { product: typeof ALL_PRODUCTS[0]; onAdd: () => void }) {
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    setAdded(true);
    onAdd();
    setTimeout(() => setAdded(false), 1800);
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(27,47,142,0.12)' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'white', borderRadius: 20, overflow: 'hidden',
        border: `1px solid ${BRAND.creamDeep}`, cursor: 'pointer',
      }}
    >
      <div style={{
        height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `linear-gradient(160deg, ${BRAND.cream} 0%, white 100%)`,
        fontSize: 72, position: 'relative',
      }}>
        {product.icon}
        {product.tags[0] && (
          <div style={{
            position: 'absolute', top: 12, left: 12,
            padding: '4px 10px', borderRadius: 999,
            background: tagColor(product.tags[0]), color: 'white',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
            fontFamily: "'Instrument Sans', sans-serif",
          }}>{product.tags[0]}</div>
        )}
      </div>
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{
          fontSize: 10, color: BRAND.inkFaint, letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: 6,
          fontFamily: "'Instrument Sans', sans-serif",
        }}>{product.cat}</div>
        <h3 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em',
          color: BRAND.ink, margin: '0 0 8px',
        }}>{product.name}</h3>
        <p style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 13, lineHeight: 1.5, color: BRAND.inkMuted,
          margin: '0 0 16px',
        }}>{product.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, color: BRAND.blue }}>₹{product.price}</span>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: BRAND.inkMuted, marginLeft: 5 }}>/ {product.unit}</span>
          </div>
          <button
            onClick={handleAdd}
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12, fontWeight: 600, padding: '9px 16px', borderRadius: 999,
              border: added ? 'none' : `1px solid ${BRAND.ink}`,
              background: added ? BRAND.pink : 'transparent',
              color: added ? 'white' : BRAND.ink,
              cursor: 'pointer', transition: 'all 0.25s',
              display: 'flex', alignItems: 'center', gap: 5,
            }}
          >
            {added ? <><Check size={13} /> Added</> : 'Add +'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(0);

  const filtered = ALL_PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.cat === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: BRAND.cream, minHeight: '100vh', fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${BRAND.cream}; }
        ::selection { background: ${BRAND.pink}; color: white; }
        * { -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 0; }
      `}</style>

      <Navbar />

      {/* Hero Banner */}
      <section style={{
        background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)`,
        padding: '72px 48px 56px', color: 'white', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            background: 'rgba(255,255,255,0.12)', marginBottom: 24,
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
          }}>
            <Leaf size={12} /> 66 PRODUCTS · 9 CATEGORIES · ALL FROM THE NILGIRIS
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 400, lineHeight: 1.0, letterSpacing: '-0.03em',
            margin: '0 0 20px',
          }}>
            The complete<br />
            <em style={{ fontStyle: 'italic', color: BRAND.pinkSoft }}>Hetheya pantry.</em>
          </h1>
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 17, lineHeight: 1.6, opacity: 0.8, margin: 0,
          }}>
            Every product made at our farms in Ooty and the Nilgiris — bottled,
            set, churned, or crafted before sunrise and delivered by dawn.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section style={{
        position: 'sticky', top: 62, zIndex: 40,
        background: 'rgba(253,250,243,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${BRAND.creamDeep}`,
        padding: '16px 48px',
      }}>
        <div style={{ maxWidth: 1600, margin: '0 auto', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '0 0 260px' }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products…"
              style={{
                width: '100%', padding: '10px 16px 10px 40px', borderRadius: 999,
                border: `1px solid ${BRAND.creamDeep}`, background: 'white',
                fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: BRAND.ink,
                outline: 'none',
              }}
            />
            <Filter size={14} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: BRAND.inkFaint }} />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 12, fontWeight: 500, padding: '8px 16px', borderRadius: 999,
                  border: `1px solid ${activeCategory === cat ? BRAND.ink : BRAND.inkFaint + '50'}`,
                  background: activeCategory === cat ? BRAND.ink : 'transparent',
                  color: activeCategory === cat ? 'white' : BRAND.ink,
                  cursor: 'pointer', transition: 'all 0.18s', whiteSpace: 'nowrap',
                }}
              >{cat}</button>
            ))}
          </div>
          <div style={{
            marginLeft: 'auto',
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13, color: BRAND.inkMuted,
          }}>
            {filtered.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '40px 48px 100px', maxWidth: 1600, margin: '0 auto' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: BRAND.inkMuted }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24 }}>No products found</div>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }} style={{
              marginTop: 16, padding: '10px 24px', borderRadius: 999,
              background: BRAND.blue, color: 'white', border: 'none', cursor: 'pointer',
              fontFamily: "'Instrument Sans', sans-serif",
            }}>Clear filters</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} onAdd={() => setCart(c => c + 1)} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section style={{
        background: BRAND.blue, color: 'white', textAlign: 'center',
        padding: '80px 48px',
      }}>
        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400, letterSpacing: '-0.03em', margin: '0 0 16px',
        }}>
          Subscribe and save <em style={{ color: BRAND.pinkSoft }}>15%</em>
        </h2>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, opacity: 0.75, marginBottom: 32 }}>
          Set your weekly delivery schedule once. Edit any day's order till midnight.
        </p>
        <Link href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: BRAND.pink, color: 'white', padding: '18px 36px', borderRadius: 999,
          fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, fontWeight: 600,
          textDecoration: 'none',
        }}>
          Build my subscription <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
