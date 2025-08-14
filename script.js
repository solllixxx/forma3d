document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    // Click on links - active tab
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Scroll - activate section in menu + animation of section scaling
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Add scale effect
                entry.target.classList.add("scale-up");

                // Highlight current link in menu
                links.forEach(link => link.classList.remove("active"));
                if (correspondingLink) correspondingLink.classList.add("active");
            } else {
                entry.target.classList.remove("scale-up");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => observer.observe(section));
});
function openContact() {
    const bar = document.getElementById('contactBar');
    const label = document.getElementById('horizontalContact');
  
    bar.classList.add('active');
    label.style.display = 'none';
  }
  
  function closeContact() {
    const bar = document.getElementById('contactBar');
    const label = document.getElementById('horizontalContact');
  
    bar.classList.remove('active');
  
    // Показати "Зв'язок" після завершення transition (через 400мс)
    setTimeout(() => {
      label.style.display = 'block';
    }, 400); // 400ms = transition duration from CSS
  }
  function sendMail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent("Повідомлення з сайту Форма3D");
    const body = encodeURIComponent(message);
  
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
  function openContact() {
    document.getElementById("contactBar").classList.add("active");
    document.getElementById("contactOverlay").classList.add("active");
  }
  
  function closeContact() {
    document.getElementById("contactBar").classList.remove("active");
    document.getElementById("contactOverlay").classList.remove("active");
  }
  
  document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star-icon');
  const favoritesCount = document.getElementById('favoritesCount');
  const favoritesIcon = document.getElementById('favoritesIcon');

  // Завантажити список улюблених з localStorage
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Функція оновлення відображення зірочок та лічильника
  function updateUI() {
    stars.forEach(star => {
      const card = star.closest('.product-card');
      const id = card.dataset.id;
      if (favorites.includes(id)) {
        star.classList.add('active');
        star.textContent = '★'; // заповнена зірочка
      } else {
        star.classList.remove('active');
        star.textContent = '☆'; // порожня зірочка
      }
    });

    if (favorites.length > 0) {
      favoritesCount.style.display = 'inline-block';
      favoritesCount.textContent = favorites.length;
    } else {
      favoritesCount.style.display = 'none';
    }
  }

  updateUI();

  // Обробник кліку на зірочку
  stars.forEach(star => {
    star.addEventListener('click', e => {
      e.stopPropagation();
      const card = star.closest('.product-card');
      const id = card.dataset.id;

      if (favorites.includes(id)) {
        // Видалити з улюблених
        favorites = favorites.filter(favId => favId !== id);
      } else {
        // Додати в улюблені
        favorites.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      updateUI();
    });
  });

  // Клік по іконці улюблених
  favoritesIcon.addEventListener('click', () => {
    window.location.href = 'favorites.html';
  });
});

  const burger = document.getElementById('burger');
  const navbar = document.getElementById('navbar');
  const navLinks = navbar.querySelectorAll('a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  // Закривати меню після вибору пункту
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navbar.classList.remove('active');
    });
  });


  // COOKIE BANNER
const COOKIE_POLICY_VERSION = "1.0"; // Змінюй при оновленні політики

function checkCookieConsent() {
  const savedVersion = localStorage.getItem("cookiePolicyAcceptedVersion");
  if (savedVersion !== COOKIE_POLICY_VERSION) {
    document.getElementById("cookieBanner").style.display = "flex";
  }
}

function acceptCookies() {
  localStorage.setItem("cookiePolicyAcceptedVersion", COOKIE_POLICY_VERSION);
  document.getElementById("cookieBanner").style.display = "none";
}

document.addEventListener("DOMContentLoaded", checkCookieConsent);
