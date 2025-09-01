document.addEventListener('DOMContentLoaded', () => {

    // --- Objeto con toda la información de las tarjetas ---
    const samplingData = {
        "Muestreo Aleatorio Simple": {
            title: "Muestreo Aleatorio Simple",
            definition: "Se caracteriza porque cada elemento de la población tiene la misma probabilidad de ser elegido. Si se dispone de una lista de los elementos de la población, la selección de una muestra aleatoria simple es muy sencilla.",
            example: "El Ministerio de Educación tiene una lista completa y numerada de los 5,000 estudiantes inscritos en el programa nacional de bachillerato por madurez. Para hacer una evaluación de satisfacción, se utiliza un software para generar 250 números al azar. Los estudiantes que correspondan a esos números formarán la muestra.",
            advantages: [
                "Es el método más fácil de comprender y aplicar.",
                "Garantiza la equidad al dar a todos la misma probabilidad de ser seleccionados.",
                "Permite el uso de estadística inferencial para generalizar resultados."
            ],
            disadvantages: [
                "Requiere un listado completo y actualizado de toda la población, lo cual es a menudo imposible.",
                "Puede ser muy costoso y lento en poblaciones grandes y dispersas.",
                "Por puro azar, podría no representar adecuadamente a subgrupos minoritarios."
            ]
        },
        // ... (resto de los datos de muestreo) ...
    };

    // --- Lógica para las tarjetas de texto ---
    const cards = document.querySelectorAll('.menu-card:not(#play-video-card)');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.dataset.title;
            const data = samplingData[title];
            if (data) {
                createTextModal(data);
            }
        });
    });

    // --- Lógica para el Podcast ---
    const podcastBtn = document.getElementById('play-podcast-btn');
    const podcastAudio = document.getElementById('podcast-audio');
    if (podcastBtn && podcastAudio) {
        podcastBtn.addEventListener('click', () => {
            if (podcastAudio.paused) {
                podcastAudio.play();
                podcastBtn.innerHTML = '<i class="fas fa-pause"></i> Pausar Guía';
                podcastBtn.classList.add('playing');
            } else {
                podcastAudio.pause();
                podcastBtn.innerHTML = '<i class="fas fa-headphones"></i> Escuchar Guía en Audio';
                podcastBtn.classList.remove('playing');
            }
        });
    }

    // --- Lógica para la tarjeta de Video ---
    const videoCard = document.getElementById('play-video-card');
    if (videoCard) {
        videoCard.addEventListener('click', (e) => {
            e.preventDefault();
            createVideoModal();
        });
    }

    // --- Función para crear el Modal de Texto ---
    function createTextModal(data) {
        const advantagesHTML = data.advantages.map(item => `<li>${item}</li>`).join('');
        const disadvantagesHTML = data.disadvantages.map(item => `<li>${item}</li>`).join('');
        const modalHTML = `
            <h2>${data.title}</h2>
            <div class="modal-section">
                <h3>Definición</h3>
                <p>${data.definition}</p>
            </div>
            <div class="modal-section">
                <h3>Ejemplo en EJA</h3>
                <p>${data.example}</p>
            </div>
            <div class="modal-grid">
                <div class="modal-section">
                    <h3>Ventajas</h3>
                    <ul>${advantagesHTML}</ul>
                </div>
                <div class="modal-section">
                    <h3>Desventajas</h3>
                    <ul>${disadvantagesHTML}</ul>
                </div>
            </div>
        `;
        openModal(modalHTML, 'modal-content');
    }

    // --- Función para crear el Modal de Video ---
    function createVideoModal() {
        const modalHTML = `
            <video src="recursos/video_muestreo.mp4" controls autoplay></video>
        `;
        openModal(modalHTML, 'video-modal-content');
    }

    // --- Función Genérica para Abrir un Modal ---
    function openModal(contentHTML, modalClass) {
        if (document.querySelector('.modal-overlay')) return;

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const modal = document.createElement('div');
        modal.className = modalClass;

        modal.innerHTML = `<button class="modal-close">&times;</button>${contentHTML}`;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        setTimeout(() => overlay.classList.add('visible'), 10);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.classList.contains('modal-close')) {
                closeModal(overlay);
            }
        });
    }

    // --- Función para Cerrar el Modal ---
    function closeModal(overlay) {
        overlay.classList.remove('visible');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 400);
    }
});
