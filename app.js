let isModalOpen = false;
let contrastToggle = true;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Cursor position relative to center of screen
  const offsetX = (event.clientX - centerX) * scaleFactor;
  const offsetY = (event.clientY - centerY) * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;

    shapes[i].style.transform = `
      translate(${offsetX * boolInt}px, ${offsetY * boolInt}px)
      rotate(${offsetX * boolInt * 15}deg)
    `;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_ok1zgng",
      "template_ucqlztw",
      event.target,
      "dAv9S0dKr0B80aB2M"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at lucashpro17@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}
