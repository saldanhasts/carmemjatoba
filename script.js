document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const el = document.querySelector(this.getAttribute('href'));
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Marquee duplicado para infinito
  const services = document.querySelector('.services');
  if (services) services.innerHTML += services.innerHTML;

  // Planos: abre WhatsApp com mensagem personalizada
  const phone = '5531973318300';
  const btns = document.querySelectorAll('.btn-plan');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      const msg = encodeURIComponent(`Olá! Quero assinar o ${plan}.`);
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    });
  });

  // Ano do footer atualizado automaticamente
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Alternar avaliações de 3 em 3
document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.querySelector('.reviews');
  if (!reviewsContainer) return;

  const reviews = document.querySelectorAll('.review');
  const total = reviews.length;
  let index = 0;

  function showNext() {
    index += 3;
    if (index >= total) index = 0;
    const offset = -index * (reviews[0].offsetWidth + 30); // largura + gap
    reviewsContainer.style.transform = `translateX(${offset}px)`;
  }

  setInterval(showNext, 4000); // troca a cada 4s
});
