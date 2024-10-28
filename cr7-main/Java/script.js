// Alternância de tema claro/escuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle("dark-theme");

    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Mudar para Tema Claro';
    } else {
        themeToggleBtn.textContent = 'Mudar para Tema Escuro';
    }
});


const images = [
    'imagem/messi.png',
    'imagem/cristiano.png'
];
const descriptions = [
    'Este é o livro de Messi, que explora sua carreira e trajetória no futebol, com grandes conquistas e histórias inspiradoras.',
    'Este é o livro de Cristiano Ronaldo, focado em sua jornada de superação, títulos e o impacto global de sua carreira.'
];

let currentImageIndex = 0;
const carouselImage = document.getElementById('carousel-image');
const carouselDescription = document.getElementById('carousel-description');

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
    carouselDescription.textContent = descriptions[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentImageIndex];
    carouselDescription.textContent = descriptions[currentImageIndex];
}
