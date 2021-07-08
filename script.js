const menuMobileIcon = document.querySelector('.menu-mobile-icon');
const navMobile = document.querySelector('.nav-mobile');
menuMobileIcon.addEventListener('click', () => {
  menuMobileIcon.classList.toggle('active');
  navMobile.classList.toggle('hidden');
})