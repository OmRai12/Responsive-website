let menuIcon = document.querySelector('.icon-change');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
});