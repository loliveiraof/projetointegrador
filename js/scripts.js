const menuHamburguer = document.querySelector(".menu-hamburguer");
const mainMenu = document.querySelector(".main-menu");
menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle('active');
    mainMenu.classList.toggle('active');
});

let slides = document.querySelectorAll('.background-container');
let counter = 0;
function next() {
    slides[counter].classList.remove('active');
    counter = (counter + 1) % slides.length;
    slides[counter].classList.add('active');
}
function prev() {
    slides[counter].classList.remove('active');
    counter = (counter - 1 + slides.length) % slides.length;
    slides[counter].classList.add('active');
}
setInterval(next, 7000)