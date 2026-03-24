/* Змінні та ініціалізація відкриті */
  const header = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const callBtn = document.getElementById('callButton'); // Додано для контролю кнопки
  let lastScroll = 0;
/* Змінні та ініціалізація закриті */


/* Поява хедера при завантаженні відкрита */
  window.addEventListener('load', () => {
    setTimeout(() => { header.classList.add('visible'); }, 300);
  });
/* Поява хедера при завантаженні закрита */


/* Логіка скролу та анімацій відкрита */
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Керування навігаційною панеллю
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.top = "-100px";
    } else {
      header.style.top = currentScroll > 50 ? "10px" : "20px";
      header.classList.toggle('scrolled', currentScroll > 50);
    }
    lastScroll = currentScroll;

    // Перевірка видимості секцій для анімації
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        sec.classList.add('show');
      }
    });
  });
/* Логіка скролу та анімацій закрита */


/* Функції модального вікна відкриті */
  function openContact() {
    document.getElementById("contactBar").classList.add("active");
    document.getElementById("contactOverlay").classList.add("active");
    document.getElementById("horizontalContact").style.opacity = "0";
  }

  function closeContact() {
    document.getElementById("contactBar").classList.remove("active");
    document.getElementById("contactOverlay").classList.remove("active");
    setTimeout(() => { document.getElementById("horizontalContact").style.opacity = "1"; }, 400);
  }
/* Функції модального вікна закриті */


/* Функція відправки форми відкрита */
  function sendMail() {
    const poshta = "forma3d.info.ua@gmail.com";
    const polePovidomlennya = document.getElementById("message");
    const tekstPovidomlennya = polePovidomlennya.value.trim();
    
    if (!tekstPovidomlennya) { 
      polePovidomlennya.classList.add("pomylka");
      polePovidomlennya.placeholder = "Введіть ваше повідомлення...";
      
      setTimeout(() => {
        polePovidomlennya.classList.remove("pomylka");
      }, 1500);
      return; 
    }

    const temaLista = encodeURIComponent("Замовлення Forma3D");
    const tekstEncoded = encodeURIComponent(tekstPovidomlennya);
    const platforma = navigator.platform.toLowerCase();
    const tseWindows = platforma.indexOf('win') !== -1;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${poshta}&su=${temaLista}&body=${tekstEncoded}`;
    const mailtoUrl = `mailto:${poshta}?subject=${temaLista}&body=${tekstEncoded}`;

    if (tseWindows) {
      window.open(gmailUrl, '_blank');
    } else {
      window.location.href = mailtoUrl;
    }

    closeContact();
  }
/* Функція відправки форми закрита */


/* Логіка Cookie-банера відкрита */
  const COOKIE_VERSION = "1.1"; 

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookieBanner');
    const savedVersion = localStorage.getItem('cookiesAcceptedVersion');

    if (banner && savedVersion !== COOKIE_VERSION) {
      setTimeout(() => {
        banner.classList.add('active');
        if (callBtn) callBtn.classList.add('shifted');
      }, 1500);
    }
  });

  function acceptCookies() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('active');
      if (callBtn) callBtn.classList.remove('shifted');
      localStorage.setItem('cookiesAcceptedVersion', COOKIE_VERSION);
    }
  }
/* Логіка Cookie-банера закрита */


/* Функція прямого контакту відкрита */
  function sendMailDirect(email, subjectText = "Питання щодо Forma3D") {
    const temaLista = encodeURIComponent(subjectText);
    const tekstEncoded = encodeURIComponent("Вітаю! У мене є питання щодо...");

    const platforma = navigator.platform.toLowerCase();
    const tseWindows = platforma.indexOf('win') !== -1;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${temaLista}&body=${tekstEncoded}`;
    const mailtoUrl = `mailto:${email}?subject=${temaLista}&body=${tekstEncoded}`;

    if (tseWindows) {
      window.open(gmailUrl, '_blank');
    } else {
      window.location.href = mailtoUrl;
    }
  }
/* Функція прямого контакту закрита */