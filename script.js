// Textos em múltiplos idiomas
const translations = {
  pt: {
    home: "Início",
    about: "Sobre Nós",
    work: "Trabalhos",
    founders: "Fundadores",
    contact: "Contato",
    hero_title: "Transformamos ideias em soluções digitais",
    hero_subtitle: "Desenvolvimento de sites, softwares, apps e automações com tecnologia de ponta.",
    cta: "Vamos conversar?",
    about_title: "Sobre a Duo Studio",
    about_text: "Somos uma agência de tecnologia focada em entregar soluções personalizadas, modernas e eficientes. Combinamos design intuitivo, código limpo e performance para garantir o sucesso do seu projeto digital.",
    reason1: "Tecnologia de Ponta",
    reason1_desc: "Usamos as melhores ferramentas e linguagens do mercado.",
    reason2: "Foco no Cliente",
    reason2_desc: "Entregamos exatamente o que você precisa, sem surpresas.",
    reason3: "Resultados Reais",
    reason3_desc: "Nossos projetos geram valor e crescimento para seu negócio.",
    work_title: "Nossos Trabalhos",
    work_text: "Confira alguns dos projetos que desenvolvemos com dedicação e excelência.",
    project: "Projeto",
    founders_title: "Nossos Fundadores",
    caio_desc: "Programador apaixonado por tecnologia e soluções inovadoras. Formado em Ciência da Computação e especialista em desenvolvimento web e automações.",
    vinicius_desc: "Designer e desenvolvedor com olhar estratégico para negócios digitais. Focado em experiência do usuário e estética moderna.",
    contact_title: "Entre em Contato",
    contact_text: "Preencha o formulário e enviaremos sua mensagem diretamente via WhatsApp.",
    send: "Enviar via WhatsApp"
  },
  en: {
    home: "Home",
    about: "About Us",
    work: "Work",
    founders: "Founders",
    contact: "Contact",
    hero_title: "We turn ideas into digital solutions",
    hero_subtitle: "Web, software, app, and automation development with cutting-edge technology.",
    cta: "Let's talk?",
    about_title: "About Duo Studio",
    about_text: "We are a tech agency focused on delivering custom, modern, and efficient solutions. We combine intuitive design, clean code, and performance to ensure your digital project's success.",
    reason1: "Cutting-Edge Tech",
    reason1_desc: "We use the best tools and languages on the market.",
    reason2: "Client-Centric",
    reason2_desc: "We deliver exactly what you need—no surprises.",
    reason3: "Real Results",
    reason3_desc: "Our projects create real value and growth for your business.",
    work_title: "Our Work",
    work_text: "Check out some of the projects we’ve built with dedication and excellence.",
    project: "Project",
    founders_title: "Our Founders",
    caio_desc: "A programmer passionate about technology and innovative solutions. Computer Science graduate and expert in web development and automations.",
    vinicius_desc: "Designer and developer with a strategic eye for digital businesses. Focused on user experience and modern aesthetics.",
    contact_title: "Get in Touch",
    contact_text: "Fill out the form and we’ll send your message directly via WhatsApp.",
    send: "Send via WhatsApp"
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    work: "Trabajos",
    founders: "Fundadores",
    contact: "Contacto",
    hero_title: "Transformamos ideas en soluciones digitales",
    hero_subtitle: "Desarrollo de sitios web, software, apps y automatizaciones con tecnología de vanguardia.",
    cta: "¿Hablamos?",
    about_title: "Sobre Duo Studio",
    about_text: "Somos una agencia tecnológica enfocada en entregar soluciones personalizadas, modernas y eficientes. Combinamos diseño intuitivo, código limpio y rendimiento para garantizar el éxito de tu proyecto digital.",
    reason1: "Tecnología de Vanguardia",
    reason1_desc: "Usamos las mejores herramientas y lenguajes del mercado.",
    reason2: "Enfoque en el Cliente",
    reason2_desc: "Entregamos exactamente lo que necesitas, sin sorpresas.",
    reason3: "Resultados Reales",
    reason3_desc: "Nuestros proyectos generan valor y crecimiento para tu negocio.",
    work_title: "Nuestros Trabajos",
    work_text: "Consulta algunos de los proyectos que hemos desarrollado con dedicación y excelencia.",
    project: "Proyecto",
    founders_title: "Nuestros Fundadores",
    caio_desc: "Programador apasionado por la tecnología y soluciones innovadoras. Graduado en Ciencia de la Computación y experto en desarrollo web y automatizaciones.",
    vinicius_desc: "Diseñador y desarrollador con visión estratégica para negocios digitales. Enfocado en la experiencia del usuario y estética moderna.",
    contact_title: "Contáctanos",
    contact_text: "Completa el formulario y enviaremos tu mensaje directamente por WhatsApp.",
    send: "Enviar por WhatsApp"
  }
};

let currentLang = 'pt';

// Atualiza todo o texto do site
function updateText(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Atualiza TODOS os botões de idioma (inclusive os do menu mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Aplica o listener a TODOS os botões .lang-btn (delegação não é necessária aqui)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    updateText(btn.dataset.lang);
  });
});

// Formulário de WhatsApp
document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('user-name').value.trim();
  const message = document.getElementById('user-message').value.trim();
  
  // Mensagem personalizada
  const text = encodeURIComponent(
    `Olá, Duo Studio! Meu nome é ${name} e gostaria de falar sobre: ${message}`
  );

  // Substitua pelo número real da agência (com código do país)
  const phoneNumber = '5581991945676'; 
  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});

// Carousel de projetos
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // Atualiza indicadores
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentIndex);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

// Clique nos indicadores
indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});

// Menu Hamburger
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
  });
});

// Inicializa em português
updateText('pt');