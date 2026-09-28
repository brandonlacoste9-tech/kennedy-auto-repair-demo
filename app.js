const I18N = {
en: {
  "contact.addr": "Address",
  "contact.cta": "Call now to book",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:30 PM<br>Sat – Sun: closed",
  "contact.kicker": "Come see us",
  "contact.phone": "Phone",
  "contact.title": "Book your repair",
  "faq.a1": "Monday to Friday, 8:00 AM to 5:30 PM. Closed on weekends.",
  "faq.a2": "Yes — automatic transmission repair and custom rebuilding is our specialty, for domestic cars, light trucks, high-performance and some foreign models.",
  "faq.a3": "Yes — towing is available when needed. Call (970) 530-2497 and we'll help.",
  "faq.a4": "Call ahead at (970) 530-2497 or drop by during opening hours.",
  "faq.kicker": "Good to know",
  "faq.q1": "What are your opening hours?",
  "faq.q2": "Do you specialize in transmissions?",
  "faq.q3": "Do you offer towing?",
  "faq.q4": "Do I need an appointment?",
  "faq.title": "Frequently asked questions",
  "footer.tag": "Auto repair & transmissions · Fort Collins, Colorado",
  "gallery.c1": "Transmission rebuilds, our specialty",
  "gallery.c2": "Under every car, careful work",
  "gallery.c3": "Tires and maintenance, done right",
  "gallery.kicker": "The shop in action",
  "gallery.title": "A tidy shop, careful work",
  "hero.cta1": "Book a repair",
  "hero.cta2": "See services",
  "hero.kicker": "Fort Collins, Colorado · Serving the community since 1964",
  "hero.sub": "Kennedy Auto Repair is a locally owned Fort Collins shop — transmission specialists with the experience to repair almost any car or light truck, at fair prices.",
  "hero.title": "Honest repairs,<br>since 1964.",
  "nav.call": "(970) 530-2497",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.services": "Services",
  "nav.why": "Why us",
  "reviews.kicker": "What drivers say",
  "reviews.more": "4.8 out of 5 from 27 reviews — see what Fort Collins drivers say about us",
  "reviews.title": "Rated 4.8 on Birdeye",
  "services.kicker": "What we do",
  "services.s1d": "Automatic transmission repair and custom rebuilding — our specialty since 1964.",
  "services.s1t": "Transmission Repair & Rebuild",
  "services.s2d": "Diagnosis and repair for domestic cars, light trucks and high-performance vehicles.",
  "services.s2t": "General Auto Repair",
  "services.s3d": "We find the real problem with modern diagnostic equipment instead of guessing.",
  "services.s3t": "Engine Diagnostics",
  "services.s4d": "Regular maintenance to keep your engine running strong.",
  "services.s4t": "Oil Changes & Maintenance",
  "services.s5d": "Pads, rotors and full brake system inspection — your safety first.",
  "services.s5t": "Brake Service",
  "services.s6d": "Towing available when you need it — call and we'll help you get here.",
  "services.s6t": "Towing Assistance",
  "services.title": "Full-service auto care under one roof",
  "stats.diag": "electronic diagnostics",
  "stats.diagNum": "100%",
  "stats.hours": "8am to 5:30pm, weekdays",
  "stats.hoursNum": "Mon – Fri",
  "stats.makes": "makes & models serviced",
  "stats.makesNum": "All",
  "stats.quote": "quote before every repair",
  "stats.quoteNum": "Clear",
  "walkin.w1d": "Weekends closed",
  "walkin.w1t": "Mon – Fri 8am – 5:30pm",
  "walkin.w2d": "Custom rebuilding & repair",
  "walkin.w2t": "Transmission experts",
  "walkin.w3d": "Domestic, trucks & more",
  "walkin.w3t": "All makes",
  "why.intro": "Kennedy Auto Repair has served Fort Collins since 1964 — a locally owned shop where honesty comes first. Only the repairs you actually need, at fair prices, done right.",
  "why.kicker": "Why choose us",
  "why.l1d": "Only the repairs you actually need — nothing more.",
  "why.l1t": "Honest, always",
  "why.l2d": "Deep experience with automatic transmissions, including custom rebuilds.",
  "why.l2t": "Transmission specialists",
  "why.l3d": "Quick, fair and clearly explained before any work begins.",
  "why.l3t": "Fair prices",
  "why.l4d": "A Fort Collins fixture on Maple St for over 60 years.",
  "why.l4t": "Local since 1964",
  "why.title": "The shop Fort Collins trusts"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Kennedy Auto Repair — Auto Repair in Fort Collins, CO | Trusted Mechanics";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
