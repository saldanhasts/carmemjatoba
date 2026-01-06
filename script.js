document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     SMOOTH SCROLL
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* =========================
     MARQUEE INFINITO
  ========================= */
  const services = document.querySelector('.services');
  if (services) {
    services.innerHTML += services.innerHTML;
  }

  /* =========================
     PLANOS → WHATSAPP
  ========================= */
  const phone = '5531973318300';
  document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      const msg = encodeURIComponent(`Olá! Quero assinar o ${plan}.`);
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    });
  });

  /* =========================
     CARROSSEL DE AVALIAÇÕES
  ========================= */
  const reviewsContainer = document.querySelector('.reviews');
  if (reviewsContainer) {
    const reviews = Array.from(reviewsContainer.children);
    const gap = 30;
    const itemWidth = reviews[0].offsetWidth + gap;

    reviews.forEach(review => {
      reviewsContainer.appendChild(review.cloneNode(true));
    });

    let index = 0;

    setInterval(() => {
      index++;
      reviewsContainer.style.transition = 'transform 0.8s ease';
      reviewsContainer.style.transform = `translateX(-${index * itemWidth}px)`;

      if (index === reviews.length) {
        setTimeout(() => {
          reviewsContainer.style.transition = 'none';
          reviewsContainer.style.transform = 'translateX(0)';
          index = 0;
        }, 800);
      }
    }, 2500);
  }

  /* =========================
     MENU ATIVO POR SEÇÃO (CORRETO)
  ========================= */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-140px 0px -50% 0px', // compensa header sticky
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

});