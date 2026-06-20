export const BRAND = {
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
  green: '#3A7D44',
  greenSoft: '#E8F5EA',
  gold: '#C89B3C',
  goldPale: '#FBF3E0',
};

export const FONTS = {
  serif: "'Fraunces', 'Playfair Display', Georgia, serif",
  sans: "'Instrument Sans', system-ui, sans-serif",
  script: "'Dancing Script', cursive",
};

export const GOOGLE_FONTS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Dancing+Script:wght@400..700&display=swap');`;

export const BASE_STYLES = `
  ${GOOGLE_FONTS}
  * { box-sizing: border-box; }
  body { margin: 0; }
  ::selection { background: #D8379B; color: white; }
  html { scroll-behavior: smooth; }
  * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  a { text-decoration: none; }
`;
