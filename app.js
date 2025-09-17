// KKU Dormitory Reference Web App (Vanilla JS, no build step)

// External reference links (update as needed)
const EXTERNAL_LINKS = {
  application: 'https://dorm.kku.ac.kr/main.do?dormType=M',
};

// Slideshow images (served from ../image relative to public/index.html)
const SLIDESHOW_IMAGES = [
  './image/home-image2.jpg',
  './image/SE-82c900af-10d1-47f1-8e07-cf1a8e21a297.png',
  './image/72d4401f0d44467959c00d3110357946_FhQneDZXUpKAF4xfbooki7DDjPoQ.jpg',
];

function initSlideshow(images, intervalMs = 4500) {
  const root = document.getElementById('slideshow');
  if (!root || !images || images.length === 0) return;
  root.innerHTML = '';
  images.forEach((src, i) => {
    const img = new Image();
    img.src = src;
    img.alt = '';
    img.className = 'slide';
    img.style.opacity = i === 0 ? '1' : '0';
    img.setAttribute('aria-hidden', i === 0 ? 'false' : 'true');
    root.appendChild(img);
  });
  let idx = 0;
  setInterval(() => {
    const slides = root.querySelectorAll('.slide');
    if (slides.length <= 1) return;
    const prev = idx;
    idx = (idx + 1) % slides.length;
    slides[prev].style.opacity = '0';
    slides[prev].setAttribute('aria-hidden', 'true');
    slides[idx].style.opacity = '1';
    slides[idx].setAttribute('aria-hidden', 'false');
  }, intervalMs);
}

// Mock data: Announcements
const MOCK_NOTICES = [
  { id: 1, title: 'Spring Semester Check-in Schedule', date: '2025-02-20', tag: 'Schedule' },
  { id: 2, title: 'Maintenance Notice: Hot Water Interruption (East Hall)', date: '2025-02-12', tag: 'Maintenance' },
  { id: 3, title: 'Meal Plan Registration Guide (2025-1)', date: '2025-02-08', tag: 'Meal' },
  { id: 4, title: 'Dormitory Application Results Release', date: '2025-02-01', tag: 'Application' },
  { id: 5, title: 'Quiet Hours Enforcement Reminder', date: '2025-01-25', tag: 'Policy' },
];

// Mock data: Rooms
const MOCK_ROOMS = [
  { id: 'm2', name: 'Male Double (2-person)', size: 'Approx. 18㎡', fee: 920000, period: '16 weeks', building: 'Main Hall (M)', amenities: ['Bed', 'Desk', 'Wardrobe', 'Mini Fridge', 'LAN/Wi-Fi'], note: 'Shared bathroom on floor' },
  { id: 'm4', name: 'Male Quad (4-person)', size: 'Approx. 28㎡', fee: 780000, period: '16 weeks', building: 'Main Hall (M)', amenities: ['Bed', 'Desk', 'Wardrobe', 'LAN/Wi-Fi'], note: 'Shared bathroom on floor' },
  { id: 'f2', name: 'Female Double (2-person)', size: 'Approx. 18㎡', fee: 940000, period: '16 weeks', building: 'West Hall (F)', amenities: ['Bed', 'Desk', 'Wardrobe', 'Mini Fridge', 'LAN/Wi-Fi'], note: 'Shared bathroom on floor' },
];

// i18n
const I18N = {
  en: {
    brand: 'KKU Dormitory',
    nav: { announcements: 'Announcements', rooms: 'Rooms', application: 'Application', faq: 'FAQ', contact: 'Contact' },
    footer: {
      title: 'Unofficial Reference',
      desc1: 'This site is a reference UI and is not affiliated with KKU.',
      desc2: 'For official details and applications, visit',
      link: 'the KKU Dorm Portal',
      apply: 'Apply Now',
      latest: 'Latest News',
    },
    common: {
      search: 'Search',
      filterByTag: 'Filter by tag',
      tagPlaceholder: 'e.g., Application, Policy',
      titleTagDate: 'Title, tag, or date',
      noResults: 'No announcements found.',
      perSemester: ' per semester',
    },
    home: {
      title: 'Welcome to KKU Dormitory',
      subtitle: 'Find housing information, announcements, and apply for the semester.',
      applyNow: 'Apply Now',
      viewRooms: 'View Rooms',
      recent: '{count} recent announcement{plural}',
      quickSearch: 'Quick Search',
      searchPlaceholder: 'Search announcements...',
      latestAnnouncements: 'Latest Announcements',
      seeAll: 'See all',
      appOverview: 'Application Overview',
      step1: '1. Read announcements for timelines',
      step1Tag: 'Timeline',
      step2: '2. Prepare required documents',
      step2Tag: 'Docs',
      step3: '3. Submit on official portal',
      openPortal: 'Open Portal',
    },
    announcements: {
      title: 'Announcements',
      search: 'Search',
      listPlaceholder: 'Title, tag, or date',
      filterByTag: 'Filter by tag',
      tagPlaceholder: 'e.g., Application, Policy',
      empty: 'No announcements found.',
    },
    application: {
      title: 'Application',
      intro: 'Follow the steps below, then submit on the official KKU portal.',
      s1Title: '1. Eligibility & Timeline',
      s1Desc: 'Check dates and requirements in announcements',
      s2Title: '2. Required Documents',
      s2Desc: 'ID, health, enrollment status, etc.',
      s3Title: '3. Choose Room Type',
      s3Desc: 'Compare rooms & fees on the Rooms page',
      browseRooms: 'Browse Rooms',
      s4Title: '4. Submit Application',
      s4Desc: 'Complete submission on the official portal',
      openPortal: 'Open Official Portal',
      tip: 'Tip: Always verify deadlines and fees on the official portal.',
    },
    faq: { title: 'FAQ' },
    contact: {
      title: 'Contact',
      office: 'Dormitory Administration Office',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      map: 'Map',
      mapDesc: 'Map placeholder. Embed a map here (e.g., Google Maps or Kakao Maps) when network access is configured.',
      mapCard: 'Campus map integration goes here.',
    },
    notice: {
      detailPlaceholder: 'Detailed content placeholder. Replace with actual notice content when integrating with a real backend.',
    },
    toggles: {
      langEN: 'EN',
      langKO: 'KO',
      themeDark: '🌙',
      themeLight: '☀️',
    }
  },
  ko: {
    brand: 'KKU 기숙사',
    nav: { announcements: '공지사항', rooms: '생활관', application: '신청', faq: 'FAQ', contact: '문의' },
    footer: {
      title: '비공식 안내',
      desc1: '이 사이트는 참고용 UI이며 KKU와 관련이 없습니다.',
      desc2: '공식 안내 및 신청은 다음을 이용하세요:',
      link: 'KKU 기숙사 포털',
      apply: '바로 신청',
      latest: '최근 소식',
    },
    common: {
      search: '검색',
      filterByTag: '태그로 필터',
      tagPlaceholder: '예: 신청, 정책',
      titleTagDate: '제목, 태그 또는 날짜',
      noResults: '검색 결과가 없습니다.',
      perSemester: ' / 학기',
    },
    home: {
      title: 'KKU 기숙사에 오신 것을 환영합니다',
      subtitle: '주거 정보, 공지사항 확인 및 학기 신청이 가능합니다.',
      applyNow: '바로 신청',
      viewRooms: '방 종류 보기',
      recent: '최근 공지 {count}개',
      quickSearch: '빠른 검색',
      searchPlaceholder: '공지 검색...',
      latestAnnouncements: '최근 공지사항',
      seeAll: '전체 보기',
      appOverview: '신청 안내',
      step1: '1. 공지로 일정 확인',
      step1Tag: '일정',
      step2: '2. 필요 서류 준비',
      step2Tag: '서류',
      step3: '3. 공식 포털에서 제출',
      openPortal: '포털 열기',
    },
    announcements: {
      title: '공지사항',
      search: '검색',
      listPlaceholder: '제목, 태그 또는 날짜',
      filterByTag: '태그로 필터',
      tagPlaceholder: '예: 신청, 정책',
      empty: '공지사항이 없습니다.',
    },
    application: {
      title: '신청',
      intro: '아래 절차를 확인한 후 공식 KKU 포털에서 제출하세요.',
      s1Title: '1. 지원 자격 & 일정',
      s1Desc: '일정과 요건은 공지사항을 확인하세요',
      s2Title: '2. 필요 서류',
      s2Desc: '신분증, 건강, 재학 등',
      s3Title: '3. 방 유형 선택',
      s3Desc: '생활관 페이지에서 방과 비용을 비교',
      browseRooms: '방 보기',
      s4Title: '4. 신청서 제출',
      s4Desc: '공식 포털에서 제출 완료',
      openPortal: '공식 포털 열기',
      tip: '팁: 마감일과 비용은 공식 포털에서 반드시 확인하세요.',
    },
    faq: { title: 'FAQ' },
    contact: {
      title: '문의',
      office: '생활관 행정실',
      phone: '전화',
      email: '이메일',
      hours: '운영 시간',
      map: '지도',
      mapDesc: '지도를 여기에 임베드하세요. (예: 구글맵, 카카오맵)',
      mapCard: '캠퍼스 지도 영역',
    },
    notice: {
      detailPlaceholder: '상세 내용 자리표시자입니다. 실제 백엔드 연동 시 교체하세요.',
    },
    toggles: {
      langEN: 'EN',
      langKO: 'KO',
      themeDark: '🌙',
      themeLight: '☀️',
    }
  },
};

let APP_STATE = {
  lang: (localStorage.getItem('lang') || 'en'),
  theme: (localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')),
};

function t(path, vars = {}) {
  const dict = I18N[APP_STATE.lang] || I18N.en;
  const enDict = I18N.en;
  const resolve = (obj, p) => p.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);
  let str = resolve(dict, path);
  if (str == null) str = resolve(enDict, path) ?? path;
  if (typeof str !== 'string') return String(str);
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : ''));
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', APP_STATE.theme);
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.textContent = APP_STATE.theme === 'dark' ? t('toggles.themeDark') : t('toggles.themeLight');
}

function translateStatic() {
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (!key) return;
    node.textContent = t(key);
  });
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = APP_STATE.lang === 'en' ? t('toggles.langKO') : t('toggles.langEN');
}

function setLang(lang) {
  APP_STATE.lang = lang;
  localStorage.setItem('lang', lang);
  translateStatic();
  render();
}

function toggleLang() {
  setLang(APP_STATE.lang === 'en' ? 'ko' : 'en');
}

function toggleTheme() {
  APP_STATE.theme = APP_STATE.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', APP_STATE.theme);
  applyTheme();
}

// Utilities
const fmtKrw = n => `₩${n.toLocaleString('en-US')}`;
const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') node.className = v; else if (k === 'html') node.innerHTML = v; else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v); else if (k === 'href') node.setAttribute('href', v); else if (k === 'target') node.setAttribute('target', v); else if (v !== false && v != null) node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).filter(Boolean).forEach(c => node.append(c.nodeType ? c : document.createTextNode(c)));
  return node;
};

// Simple router
const routes = {};
function defineRoute(path, render) { routes[path] = render; }
function navigate(path) { window.location.hash = `#${path}`; }
function currentPath() { return window.location.hash.replace(/^#/, '') || '/'; }

function mount(render) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const node = render();
  app.append(node);
  // Update nav active state
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === `#${currentPath()}`);
  });
}

// Components
function Home() {
  const latest = [...MOCK_NOTICES].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 4);
  return el('div', {}, [
    el('section', { class: 'panel pad hero' }, [
      el('div', { class: 'cta' }, [
        el('h1', {}, t('home.title')),
        el('p', { class: 'muted' }, t('home.subtitle')),
        el('div', { class: 'actions' }, [
          el('a', { class: 'btn btn-primary', href: '#/application' }, t('home.applyNow')),
          el('a', { class: 'btn', href: '#/rooms' }, t('home.viewRooms')),
        ]),
        el('div', { class: 'stat' }, [
          el('span', { class: 'count' }, `${latest.length}`),
          el('span', {}, APP_STATE.lang === 'en'
            ? t('home.recent', { count: latest.length, plural: latest.length !== 1 ? 's' : '' })
            : t('home.recent', { count: latest.length })),
        ]),
      ]),
      el('div', { class: 'panel pad' }, [
        el('div', { class: 'field' }, [
          el('label', { for: 'searchHome' }, t('home.quickSearch')),
          el('input', { id: 'searchHome', placeholder: t('home.searchPlaceholder') , oninput: e => renderList(e.target.value) }),
        ]),
        el('div', { class: 'spacer-16' }),
        el('div', { id: 'homeList' }),
      ]),
    ]),
    el('section', { class: 'card-grid' }, [
      el('div', { class: 'col-6 panel pad' }, [
        el('h2', {}, t('home.latestAnnouncements')),
        el('ul', { class: 'list' }, latest.map(n => NoticeListItem(n))),
        el('div', { class: 'spacer-8' }),
        el('a', { href: '#/announcements', class: 'btn' }, t('home.seeAll')),
      ]),
      el('div', { class: 'col-6 panel pad' }, [
        el('h2', {}, t('home.appOverview')),
        el('p', { class: 'muted' }, t('home.subtitle')),
        el('div', { class: 'spacer-8' }),
        el('div', { class: 'list-item' }, [
          el('span', {}, t('home.step1')),
          el('span', { class: 'badge' }, t('home.step1Tag'))
        ]),
        el('div', { class: 'list-item' }, [
          el('span', {}, t('home.step2')),
          el('span', { class: 'badge' }, t('home.step2Tag'))
        ]),
        el('div', { class: 'list-item' }, [
          el('span', {}, t('home.step3')),
          el('a', { class: 'btn btn-primary', href: EXTERNAL_LINKS.application, target: '_blank' }, t('home.openPortal'))
        ]),
      ]),
    ]),
  ]);

  function renderList(q = '') {
    const wrap = document.getElementById('homeList');
    const filtered = latest.filter(n => `${n.title} ${n.tag}`.toLowerCase().includes(q.toLowerCase()));
    wrap.innerHTML = '';
    wrap.append(el('ul', { class: 'list' }, filtered.map(n => NoticeListItem(n))));
  }
}

function NoticeListItem(n) {
  return el('li', { class: 'list-item' }, [
    el('div', {}, [
      el('a', { href: `#/announcements?id=${n.id}` }, n.title),
      el('div', { class: 'meta' }, `${n.date}`),
    ]),
    el('span', { class: 'badge' }, n.tag),
  ]);
}

function Announcements() {
  const params = new URLSearchParams((currentPath().split('?')[1] || ''));
  const initialQuery = '';
  const root = el('section', { class: 'panel pad' }, [
    el('h1', {}, t('announcements.title')),
    el('div', { class: 'grid-2' }, [
      el('div', { class: 'field' }, [
        el('label', { for: 'search' }, t('announcements.search')),
        el('input', { id: 'search', placeholder: t('announcements.listPlaceholder'), value: initialQuery, oninput: e => renderList(e.target.value) }),
      ]),
      el('div', { class: 'field' }, [
        el('label', { for: 'tag' }, t('announcements.filterByTag')),
        el('input', { id: 'tag', placeholder: t('announcements.tagPlaceholder'), oninput: e => renderList(document.getElementById('search').value, e.target.value) }),
      ]),
    ]),
    el('div', { class: 'spacer-16' }),
    el('div', { id: 'list' }),
  ]);

  function renderList(q = '', tag = '') {
    const list = document.getElementById('list');
    const results = MOCK_NOTICES.filter(n => {
      const okQ = `${n.title} ${n.tag} ${n.date}`.toLowerCase().includes(q.toLowerCase());
      const okT = tag ? n.tag.toLowerCase().includes(tag.toLowerCase()) : true;
      return okQ && okT;
    }).sort((a,b) => b.date.localeCompare(a.date));

    list.innerHTML = '';
    if (results.length === 0) {
      list.append(el('div', { class: 'muted' }, t('announcements.empty')));
      return;
    }
    list.append(el('ul', { class: 'list' }, results.map(n => NoticeListItem(n))));
  }

  setTimeout(() => renderList(initialQuery), 0);
  const id = params.get('id');
  if (id) {
    const one = MOCK_NOTICES.find(n => String(n.id) === String(id));
    if (one) root.append(NoticeDetail(one));
  }
  return root;
}

function NoticeDetail(n) {
  return el('div', { class: 'panel pad', style: 'margin-top:16px' }, [
    el('h2', {}, n.title),
    el('div', { class: 'meta' }, `${n.date} • ${n.tag}`),
    el('div', { class: 'spacer-8' }),
    el('p', { class: 'muted' }, t('notice.detailPlaceholder')),
  ]);
}

function Rooms() {
  return el('section', { class: 'card-grid' }, MOCK_ROOMS.map(r => RoomCard(r)));
}

function RoomCard(r) {
  return el('div', { class: 'col-6 panel room-card' }, [
    el('div', { class: 'room-head' }, [
      el('h2', {}, r.name),
      el('span', { class: 'badge' }, r.building),
    ]),
    el('div', { class: 'muted' }, `${r.size} • ${r.period}`),
    el('div', { class: 'amenities' }, r.amenities.map(a => el('span', { class: 'badge' }, a))),
    el('div', {}, [
      el('span', { class: 'price' }, fmtKrw(r.fee)),
      t('common.perSemester')
    ]),
    r.note ? el('div', { class: 'muted' }, r.note) : null,
  ]);
}

function Application() {
  return el('section', { class: 'panel pad' }, [
    el('h1', {}, t('application.title')),
    el('p', { class: 'muted' }, t('application.intro')),
    el('div', { class: 'spacer-8' }),
    el('div', { class: 'list-item' }, [
      el('div', {}, [ el('strong', {}, t('application.s1Title')), el('div', { class: 'meta' }, t('application.s1Desc')) ]),
      el('span', { class: 'badge' }, 'Info')
    ]),
    el('div', { class: 'list-item' }, [
      el('div', {}, [ el('strong', {}, t('application.s2Title')), el('div', { class: 'meta' }, t('application.s2Desc')) ]),
      el('span', { class: 'badge' }, 'Docs')
    ]),
    el('div', { class: 'list-item' }, [
      el('div', {}, [ el('strong', {}, t('application.s3Title')), el('div', { class: 'meta' }, t('application.s3Desc')) ]),
      el('a', { class: 'btn', href: '#/rooms' }, t('application.browseRooms'))
    ]),
    el('div', { class: 'list-item' }, [
      el('div', {}, [ el('strong', {}, t('application.s4Title')), el('div', { class: 'meta' }, t('application.s4Desc')) ]),
      el('a', { class: 'btn btn-primary', href: EXTERNAL_LINKS.application, target: '_blank' }, t('application.openPortal'))
    ]),
    el('div', { class: 'spacer-16' }),
    el('div', { class: 'muted' }, t('application.tip')),
  ]);
}

function FAQ() {
  const faqs = [
    { q: 'Who is eligible to apply?', a: 'Current and newly admitted students. Exchange and international students may have specific procedures; check announcements.' },
    { q: 'How do I pay the dorm fee?', a: 'Refer to the official payment notice on the portal. Typically via designated bank transfer or online payment within the deadline.' },
    { q: 'Can I request a roommate?', a: 'Requests may be considered subject to availability and policy. Submit the required form within the specified period.' },
    { q: 'What should I bring?', a: 'Bedding, personal toiletries, power strip, and study materials. Check the room amenities for provided furniture and appliances.' },
  ];
  return el('section', { class: 'panel pad' }, [
    el('h1', {}, t('faq.title')),
    el('div', { class: 'accordion' }, faqs.map(f => el('details', {}, [
      el('summary', {}, f.q),
      el('div', { class: 'content' }, f.a),
    ]))),
  ]);
}

function Contact() {
  return el('section', { class: 'card-grid' }, [
    el('div', { class: 'col-6 panel pad' }, [
      el('h2', {}, t('contact.title')),
      el('p', {}, t('contact.office')),
      el('div', { class: 'list' }, [
        el('div', { class: 'list-item' }, [ el('span', {}, t('contact.phone')), el('span', { class: 'badge' }, '+82-2-000-0000') ]),
        el('div', { class: 'list-item' }, [ el('span', {}, t('contact.email')), el('span', { class: 'badge' }, 'dorm@kku.ac.kr') ]),
        el('div', { class: 'list-item' }, [ el('span', {}, t('contact.hours')), el('span', { class: 'badge' }, 'Mon–Fri 09:00–17:00') ]),
      ]),
    ]),
    el('div', { class: 'col-6 panel pad' }, [
      el('h2', {}, t('contact.map')),
      el('p', { class: 'muted' }, t('contact.mapDesc')),
      el('div', { class: 'spacer-8' }),
      el('div', { class: 'panel pad' }, t('contact.mapCard')),
    ]),
  ]);
}

// Register routes
defineRoute('/', Home);
defineRoute('/announcements', Announcements);
defineRoute('/rooms', Rooms);
defineRoute('/application', Application);
defineRoute('/faq', FAQ);
defineRoute('/contact', Contact);

// Router wiring
function render() {
  const path = currentPath();
  const [pathname] = path.split('?');
  const renderFn = routes[pathname] || routes['/'];
  mount(renderFn);
}
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  // Init toggles
  document.getElementById('langToggle')?.addEventListener('click', toggleLang);
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  // Init slideshow (top of page)
  initSlideshow(SLIDESHOW_IMAGES);
  applyTheme();
  translateStatic();
  render();
});
