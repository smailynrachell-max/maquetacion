// Pequeño efecto: mostrar alerta de bienvenida
window.addEventListener('load', () => {
    console.log("Página cargada correctamente.");
});

// Carrusel automático
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrusel-slide');
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 5000);
});
