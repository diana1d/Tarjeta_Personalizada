// 
//  DEFINICION DE TEMAS  cada uno con colores + SVG propio
// 
const THEMES = {

  //  1. OCEANO PROFUNDO  ondas fluidas, azul marino
  ocean: {
    name:'Oceano Profundo',
    accent:'#29b6f6', accent2:'#0288d1',
    back1:'#f8faff', back2:'#eef4ff', back3:'#e0ecff',
    titleColor:'#0d2347', itemColor:'#0d2347', borderColor:'#29b6f6',
    bodyBg:'#c8d4e3',
    frontBg: (a,a2) => `
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a1628"/>
          <stop offset="45%" stop-color="#0d2347"/>
          <stop offset="75%" stop-color="#0e3a6e"/>
          <stop offset="100%" stop-color="#1565c0"/>
        </linearGradient>
        <linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${a}"/>
          <stop offset="100%" stop-color="#01579b"/>
        </linearGradient>
        <radialGradient id="glow" cx="82%" cy="20%" r="40%">
          <stop offset="0%" stop-color="#1565c0" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#1565c0" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="540" height="300" fill="url(#bg)"/>
      <rect width="4" height="300" fill="url(#bar)"/>
      <ellipse cx="430" cy="60" rx="160" ry="160" fill="url(#glow)"/>
      <path d="M0,0 L540,0 L540,90 Q425,130 310,100 Q195,70 0,110 Z" fill="${a}" fill-opacity="0.07"/>
      <path d="M0,300 L540,300 L540,210 Q415,180 300,200 Q185,220 0,190 Z" fill="#1565c0" fill-opacity="0.1"/>
      <path d="M0,150 Q135,120 268,140 Q400,160 540,130" stroke="${a}" stroke-opacity="0.15" stroke-width="1" fill="none"/>
      <path d="M0,170 Q135,145 268,162 Q400,180 540,152" stroke="${a}" stroke-opacity="0.07" stroke-width="1" fill="none"/>
      <text x="240" y="220" font-size="200" font-weight="900" fill="white" fill-opacity="0.03" font-family="Arial">+</text>`,
    backBg: (a,a2) => `
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a1628"/>
          <stop offset="100%" stop-color="#1565c0"/>
        </linearGradient>
      </defs>
      <polygon points="0,0 184,0 210,150 184,300 0,300" fill="url(#panel)"/>
      <polygon points="0,0 180,0 206,150 180,300 0,300" fill="${a}" fill-opacity="0.08"/>`,
    backRight: '#f8faff',
    backRightGrad: 'linear-gradient(135deg,#f8faff 0%,#eef4ff 60%,#e0ecff 100%)',
    previewFront: (a) => `
      <defs><linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1628"/><stop offset="100%" stop-color="#1565c0"/>
      </linearGradient></defs>
      <rect width="80" height="46" fill="url(#p1)"/>
      <path d="M0,0 L80,0 L80,14 Q60,20 46,15 Q29,10 0,17 Z" fill="${a}" fill-opacity="0.15"/>
      <path d="M0,46 L80,46 L80,32 Q60,27 44,30 Q28,34 0,29 Z" fill="#1565c0" fill-opacity="0.2"/>
      <rect width="2" height="46" fill="${a}"/>`
  },

  //  2. GEOMETRICO  rombos y lineas diagonales, negro y lila
  geo: {
    name:'Geometrico',
    accent:'#d4b8f0', accent2:'#9c6fd6',
    back1:'#faf5ff', back2:'#f2e8ff', back3:'#e8d8ff',
    titleColor:'#1e0a38', itemColor:'#1e0a38', borderColor:'#9c6fd6',
    bodyBg:'#c8bcd8',
    frontBg: (a,a2) => `
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0e0818"/>
          <stop offset="50%" stop-color="#1a1028"/>
          <stop offset="100%" stop-color="#281838"/>
        </linearGradient>
        <linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${a}"/>
          <stop offset="100%" stop-color="${a2}"/>
        </linearGradient>
      </defs>
      <rect width="540" height="300" fill="url(#bg)"/>
      <rect width="4" height="300" fill="url(#bar)"/>
      <!-- Rombos decorativos -->
      <polygon points="480,10 510,50 480,90 450,50" fill="none" stroke="${a}" stroke-opacity="0.25" stroke-width="1"/>
      <polygon points="490,30 510,50 490,70 470,50" fill="${a}" fill-opacity="0.06"/>
      <polygon points="430,160 470,200 430,240 390,200" fill="none" stroke="${a}" stroke-opacity="0.12" stroke-width="1"/>
      <polygon points="30,200 60,240 30,280 0,240" fill="none" stroke="${a}" stroke-opacity="0.1" stroke-width="1"/>
      <!-- Lineas diagonales -->
      <line x1="0" y1="0" x2="540" y2="300" stroke="${a}" stroke-opacity="0.04" stroke-width="60"/>
      <line x1="-60" y1="0" x2="465" y2="300" stroke="${a}" stroke-opacity="0.03" stroke-width="40"/>
      <!-- Linea acento horizontal -->
      <line x1="26" y1="280" x2="260" y2="280" stroke="${a}" stroke-opacity="0.3" stroke-width="1"/>
      <!-- Cruz fantasma -->
      <text x="200" y="230" font-size="200" font-weight="900" fill="white" fill-opacity="0.025" font-family="Arial">+</text>`,
    backBg: (a,a2) => `
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0e0818"/>
          <stop offset="100%" stop-color="#281838"/>
        </linearGradient>
      </defs>
      <polygon points="0,0 184,0 210,150 184,300 0,300" fill="url(#panel)"/>
      <!-- Rombos en panel -->
      <polygon points="30,40 55,70 30,100 5,70" fill="none" stroke="${a}" stroke-opacity="0.2" stroke-width="1"/>
      <polygon points="100,180 120,205 100,230 80,205" fill="none" stroke="${a}" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="0" y1="290" x2="184" y2="290" stroke="${a}" stroke-opacity="0.2" stroke-width="1"/>`,
    backRight: '#faf5ff',
    backRightGrad: 'linear-gradient(135deg,#faf5ff 0%,#f2e8ff 60%,#e8d8ff 100%)',
    previewFront: (a) => `
      <defs><linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0e0818"/><stop offset="100%" stop-color="#281838"/>
      </linearGradient></defs>
      <rect width="80" height="46" fill="url(#p1)"/>
      <polygon points="62,2 74,12 62,22 50,12" fill="none" stroke="${a}" stroke-opacity="0.5" stroke-width="1"/>
      <polygon points="68,8 74,12 68,16 62,12" fill="${a}" fill-opacity="0.2"/>
      <line x1="0" y1="0" x2="80" y2="46" stroke="${a}" stroke-opacity="0.08" stroke-width="20"/>
      <rect width="2" height="46" fill="${a}"/>`
  },

  //  3. AZUL MARINO OSCURO  azul noche profundo con acentos celeste hielo
  rose: {
    name:'Azul Marino',
    accent:'#90caf9', accent2:'#1a237e',
    back1:'#f5f8ff', back2:'#e8f0fe', back3:'#d0e4ff',
    titleColor:'#0a1040', itemColor:'#0a1040', borderColor:'#1a237e',
    bodyBg:'#b8c4d8',
    frontBg: (a,a2) => `
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#060d18"/>
          <stop offset="35%" stop-color="#091525"/>
          <stop offset="70%" stop-color="#0d1e35"/>
          <stop offset="100%" stop-color="#112540"/>
        </linearGradient>
        <linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${a}"/>
          <stop offset="100%" stop-color="${a2}"/>
        </linearGradient>
        <radialGradient id="glow" cx="80%" cy="15%" r="45%">
          <stop offset="0%" stop-color="#112540" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#112540" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="540" height="300" fill="url(#bg)"/>
      <rect width="4" height="300" fill="url(#bar)"/>
      <ellipse cx="440" cy="50" rx="150" ry="150" fill="url(#glow)"/>
      <circle cx="460" cy="150" r="120" fill="none" stroke="${a}" stroke-opacity="0.08" stroke-width="1"/>
      <circle cx="460" cy="150" r="80" fill="none" stroke="${a}" stroke-opacity="0.06" stroke-width="1"/>
      <circle cx="460" cy="150" r="40" fill="${a}" fill-opacity="0.04"/>
      <path d="M0,80 Q200,40 400,80 Q495,100 540,70 L540,0 L0,0 Z" fill="${a}" fill-opacity="0.05"/>
      <path d="M0,220 Q200,260 400,220 Q495,200 540,230 L540,300 L0,300 Z" fill="${a2}" fill-opacity="0.1"/>
      <path d="M26,270 Q150,260 280,270" stroke="${a}" stroke-opacity="0.2" stroke-width="1" fill="none"/>
      <text x="200" y="230" font-size="200" font-weight="900" fill="white" fill-opacity="0.025" font-family="Arial">+</text>`,
    backBg: (a,a2) => `
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#060d18"/>
          <stop offset="100%" stop-color="#112540"/>
        </linearGradient>
      </defs>
      <polygon points="0,0 184,0 210,150 184,300 0,300" fill="url(#panel)"/>
      <circle cx="97" cy="60" r="50" fill="none" stroke="${a}" stroke-opacity="0.12" stroke-width="1"/>
      <circle cx="97" cy="60" r="30" fill="none" stroke="${a}" stroke-opacity="0.08" stroke-width="1"/>`,
    backRight: '#f5f8ff',
    backRightGrad: 'linear-gradient(135deg,#f5f8ff 0%,#e8f0fe 60%,#d0e4ff 100%)',
    previewFront: (a) => `
      <defs><linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#060d18"/><stop offset="100%" stop-color="#112540"/>
      </linearGradient></defs>
      <rect width="80" height="46" fill="url(#p1)"/>
      <circle cx="68" cy="10" r="18" fill="none" stroke="${a}" stroke-opacity="0.3" stroke-width="1"/>
      <circle cx="68" cy="10" r="10" fill="none" stroke="${a}" stroke-opacity="0.2" stroke-width="1"/>
      <path d="M0,12 Q40,6 80,12 L80,0 L0,0 Z" fill="${a}" fill-opacity="0.1"/>
      <rect width="2" height="46" fill="${a}"/>`
  },

  //  4. TURQUESA ESMERALDA  teal claro elegante con fondo oscuro
  night: {
    name:'Turquesa',
    accent:'#7dd8d0', accent2:'#4db6ac',
    back1:'#f2fffe', back2:'#e0f7f5', back3:'#c8f0ec',
    titleColor:'#00302e', itemColor:'#00302e', borderColor:'#4db6ac',
    bodyBg:'#b8d0ce',
    frontBg: (a,a2) => `
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041414"/>
          <stop offset="40%" stop-color="#082020"/>
          <stop offset="75%" stop-color="#0d3030"/>
          <stop offset="100%" stop-color="#124040"/>
        </linearGradient>
        <linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${a}"/>
          <stop offset="100%" stop-color="${a2}"/>
        </linearGradient>
        <radialGradient id="glow" cx="75%" cy="25%" r="40%">
          <stop offset="0%" stop-color="#124040" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#124040" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="540" height="300" fill="url(#bg)"/>
      <rect width="4" height="300" fill="url(#bar)"/>
      <ellipse cx="420" cy="70" rx="150" ry="150" fill="url(#glow)"/>
      <!-- Triangulos angulares -->
      <polygon points="540,0 540,120 395,0" fill="${a}" fill-opacity="0.07"/>
      <polygon points="540,300 540,180 395,300" fill="${a2}" fill-opacity="0.09"/>
      <!-- Lineas angulares -->
      <line x1="300" y1="0" x2="540" y2="180" stroke="${a}" stroke-opacity="0.1" stroke-width="1"/>
      <line x1="320" y1="0" x2="540" y2="160" stroke="${a}" stroke-opacity="0.06" stroke-width="1"/>
      <line x1="0" y1="200" x2="200" y2="300" stroke="${a}" stroke-opacity="0.07" stroke-width="1"/>
      <!-- Hexagono sutil -->
      <polygon points="470,80 495,95 495,125 470,140 445,125 445,95" fill="none" stroke="${a}" stroke-opacity="0.22" stroke-width="1"/>
      <circle cx="480" cy="110" r="3" fill="${a}" fill-opacity="0.6"/>
      <text x="200" y="230" font-size="200" font-weight="900" fill="white" fill-opacity="0.02" font-family="Arial">+</text>`,
    backBg: (a,a2) => `
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#041414"/>
          <stop offset="100%" stop-color="#124040"/>
        </linearGradient>
      </defs>
      <polygon points="0,0 184,0 210,150 184,300 0,300" fill="url(#panel)"/>
      <polygon points="0,0 184,0 100,80" fill="${a}" fill-opacity="0.07"/>
      <polygon points="0,300 184,300 100,220" fill="${a2}" fill-opacity="0.07"/>
      <line x1="0" y1="150" x2="184" y2="150" stroke="${a}" stroke-opacity="0.15" stroke-width="1"/>`,
    backRight: '#f2fffe',
    backRightGrad: 'linear-gradient(135deg,#f2fffe 0%,#e0f7f5 60%,#c8f0ec 100%)',
    previewFront: (a) => `
      <defs><linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#041414"/><stop offset="100%" stop-color="#124040"/>
      </linearGradient></defs>
      <rect width="80" height="46" fill="url(#p1)"/>
      <polygon points="80,0 80,28 50,0" fill="${a}" fill-opacity="0.2"/>
      <polygon points="80,46 80,18 50,46" fill="${a}" fill-opacity="0.12"/>
      <line x1="48" y1="0" x2="80" y2="28" stroke="${a}" stroke-opacity="0.3" stroke-width="1"/>
      <circle cx="68" cy="14" r="2" fill="${a}" fill-opacity="0.7"/>
      <rect width="2" height="46" fill="${a}"/>`
  }
};

// 
//  APLICAR TEMA
// 
let currentTheme = 'ocean';

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '41,182,246';
}

function setTheme(key) {
  currentTheme = key;
  const t = THEMES[key];

  // CSS vars
  const r = document.documentElement.style;
  r.setProperty('--accent', t.accent);
  r.setProperty('--accent2', t.accent2);
  r.setProperty('--back1', t.back1);
  r.setProperty('--back2', t.back2);
  r.setProperty('--back3', t.back3);
  r.setProperty('--title-color', t.titleColor);
  r.setProperty('--item-color', t.itemColor);
  r.setProperty('--border-color', t.borderColor);
  r.setProperty('--body-bg', t.bodyBg);

  // SVG fondos
  document.getElementById('svg-front').innerHTML = t.frontBg(t.accent, t.accent2);
  document.getElementById('svg-back').innerHTML  = t.backBg(t.accent, t.accent2);

  // Fondo reverso lado derecho
  document.getElementById('bg-back-el').style.background = t.backRightGrad;

  // Iconos de acento en frente
  ['wa-f','pin-f','globe-f','qrpin-f'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.setAttribute('fill', t.accent);
  });

  // Gradientes SVG inline (icon box y logo ring)
  const pairs = [['ig2a','ig2b','igf2'],['lg2a','lg2b','lgf2']];
  pairs.forEach(([a,b,f]) => {
    const ea = document.getElementById(a); if(ea) ea.setAttribute('stop-color', t.accent);
    const eb = document.getElementById(b); if(eb) eb.setAttribute('stop-color', t.accent2);
    const ef = document.getElementById(f); if(ef) ef.setAttribute('flood-color', t.accent);
  });

  // Iconos c-icon
  document.querySelectorAll('.c-icon').forEach(el => {
    el.style.background = `rgba(${hexToRgb(t.accent)},0.18)`;
    el.style.border = `1px solid rgba(${hexToRgb(t.accent)},0.35)`;
  });

  // Boton activo
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`btn-${key}`).classList.add('active');
}

// Generar previews miniatura
function buildPreviews() {
  Object.entries(THEMES).forEach(([key, t]) => {
    const el = document.getElementById(`prev-${key}`);
    if(!el) return;
    el.innerHTML = `<svg viewBox="0 0 80 46" xmlns="http://www.w3.org/2000/svg">${t.previewFront(t.accent)}</svg>`;
  });
}

// 
//  QR
// 
new QRCode(document.getElementById("qr-front"), {
  text: "https://maps.app.goo.gl/qAJXXNxBcCg4BSVW7",
  width: 62, height: 62, colorDark: "#0a1628", colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
new QRCode(document.getElementById("qr-back"), {
  text: "https://wa.me/59164002307",
  width: 50, height: 50, colorDark: "#0a1628", colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// Inicializar
buildPreviews();
setTheme('ocean');

// 
//  PDF
// 
async function descargarPDF() {
  const btn = document.getElementById("btn-pdf");
  btn.disabled = true;
  btn.textContent = "Generando...";
  await new Promise(r => setTimeout(r, 500));

  const { jsPDF } = window.jspdf;
  // Tamaño exacto 9 x 5 cm
  const W_mm = 90, H_mm = 50;

  // Capturar a escala alta para calidad de impresion
  const cardEl = document.querySelector(".card-front");
  const cardW = cardEl.offsetWidth;   // 540px
  const cardH = cardEl.offsetHeight;  // 300px

  // scale = pixeles necesarios para 300dpi / pixeles actuales
  // 90mm a 300dpi = 90/25.4*300 = 1063px → scale = 1063/540 ≈ 1.97 → usamos 2
  const opts = {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    logging: false,
    imageTimeout: 0,
    foreignObjectRendering: false,
    width: cardW,
    height: cardH
  };

  const pdf = new jsPDF({ orientation:"landscape", unit:"mm", format:[W_mm, H_mm] });

  // Pagina 1: Frente
  const c1 = await html2canvas(document.querySelector(".card-front"), opts);
  pdf.addImage(c1.toDataURL("image/png", 1.0), "PNG", 0, 0, W_mm, H_mm);

  // Pagina 2: Reverso
  pdf.addPage([W_mm, H_mm], "landscape");
  const c2 = await html2canvas(document.querySelector(".card-back"), opts);
  pdf.addImage(c2.toDataURL("image/png", 1.0), "PNG", 0, 0, W_mm, H_mm);

  const name = THEMES[currentTheme].name.toLowerCase().replace(/ /g,'-');
  pdf.save(`tarjeta-${name}.pdf`);
  btn.disabled = false;
  btn.textContent = "Descargar PDF";
}



