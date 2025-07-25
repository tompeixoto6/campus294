//Animação do navbar
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

//residencia fotos
  const images = [
    'images/quarto1.jpg',
    'images/quarto2.jpg',
    'images/quarto3.jpg'
  ];

  let currentIndex = 0;
  const galleryImage = document.getElementById('galleryImage');
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('lightboxClose');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxPrev = document.getElementById('lightboxPrev');

  function updateImage() {
    galleryImage.src = images[currentIndex];
  }

  function updateLightboxImage() {
    lightboxImage.src = images[currentIndex];
  }

  galleryImage.addEventListener('click', () => {
    updateLightboxImage();
    lightbox.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
  });

  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  updateImage();







//Form para Contact Us
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const status = document.getElementById("formStatus");

  try {
    const res = await fetch("https://formspree.io/f/mvgqzkgv", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      status.textContent = "Mensagem enviada com sucesso!";
      status.style.color = "lightgreen";
      form.reset();
    } else {
      status.textContent = "Erro ao enviar. Tente novamente.";
      status.style.color = "salmon";
    }
  } catch (err) {
    status.textContent = "Erro de conexão.";
    status.style.color = "salmon";
  }
});
