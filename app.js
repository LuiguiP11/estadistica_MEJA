document.addEventListener('DOMContentLoaded', () => {

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
        "Muestreo Estratificado": {
            title: "Muestreo Estratificado",
            definition: "Se divide la población en grupos o 'estratos' en función de un carácter determinado y después se muestrea cada grupo aleatoriamente, para obtener la parte proporcional de la muestra.",
            example: "Para evaluar habilidades digitales en adultos, se divide a los participantes en estratos de edad (18-30, 31-50, 51+). Luego, se realiza un muestreo aleatorio simple dentro de cada grupo de edad para asegurar la representación de todos.",
            advantages: [
                "Asegura la representación de subgrupos clave de la población.",
                "Ofrece resultados más precisos que el muestreo aleatorio simple.",
                "Facilita el análisis comparativo entre los diferentes estratos."
            ],
            disadvantages: [
                "Requiere conocimiento previo de las características de la población para definir los estratos.",
                "Es más complejo de diseñar y ejecutar.",
                "Necesita un listado de individuos dentro de cada estrato."
            ]
        },
        "Muestreo por Conglomerados": {
            title: "Muestreo por Conglomerados",
            definition: "La unidad muestral es un grupo de elementos de la población que forman una unidad, a la que se llama conglomerado. Se seleccionan aleatoriamente algunos de esos conglomerados y se investigan todos los elementos de los conglomerados elegidos.",
            example: "Para estudiar las necesidades de los estudiantes de programas nocturnos en una ciudad, se hace una lista de todos los centros educativos (conglomerados), se seleccionan 15 centros al azar y se entrevista a TODOS los estudiantes de esos 15 centros.",
            advantages: [
                "Muy eficiente en costos y tiempo para poblaciones grandes y dispersas.",
                "No requiere un listado de todos los miembros de la población, solo de los conglomerados.",
                "Es muy factible de realizar en estudios a gran escala."
            ],
            disadvantages: [
                "Es el método probabilístico menos preciso y con mayor error de muestreo.",
                "Los individuos de un conglomerado suelen parecerse, reduciendo la variabilidad de la muestra.",
                "El análisis de datos es más complejo."
            ]
        },
        "Muestreo Sistemático": {
            title: "Muestreo Sistemático",
            definition: "Consiste en seleccionar a los individuos de una lista según un orden determinado, a partir de un punto de inicio aleatorio y un intervalo constante (k).",
            example: "En una biblioteca con 1,000 usuarios, para obtener una muestra de 100, se calcula k=10. Se elige un número al azar del 1 al 10 (ej. 7) y se selecciona al usuario 7, 17, 27, 37, y así sucesivamente.",
            advantages: [
                "Más fácil y rápido de ejecutar que el muestreo aleatorio simple.",
                "Asegura una distribución uniforme de la muestra a lo largo de la lista.",
                "Si la lista no tiene patrones ocultos, es casi tan bueno como el muestreo aleatorio simple."
            ],
            disadvantages: [
                "El mayor riesgo es que un patrón oculto en la lista coincida con el intervalo k, sesgando la muestra.",
                "Requiere un listado completo de la población.",
                "Es menos 'aleatorio' que el muestreo simple, pues solo la primera selección es al azar."
            ]
        },
        "Muestreo por Conveniencia": {
            title: "Muestreo por Conveniencia",
            definition: "El investigador selecciona a los individuos de la población que tiene más a mano o que son más accesibles en un momento dado.",
            example: "Un docente que necesita hacer una encuesta rápida para una tarea, decide entrevistar únicamente a los estudiantes de su propia clase porque son los que tiene más cerca.",
            advantages: [
                "Extremadamente rápido, fácil y barato.",
                "No requiere ninguna planificación compleja.",
                "Útil para estudios piloto o para generar hipótesis iniciales."
            ],
            disadvantages: [
                "No es representativo de la población.",
                "Los resultados no se pueden generalizar de ninguna manera.",
                "Tiene un altísimo riesgo de sesgo."
            ]
        },
        "Muestreo por Cuotas": {
            title: "Muestreo por Cuotas",
            definition: "Es una forma de muestreo no probabilístico en la que los investigadores pueden formar una muestra que involucre a individuos que representan a una población y que se eligen de acuerdo con sus rasgos o cualidades.",
            example: "Un encuestador necesita 100 participantes (50% hombres, 50% mujeres). Fija una cuota de 50 hombres y 50 mujeres y entrevista a los primeros que encuentra de cada grupo hasta llenar la cuota.",
            advantages: [
                "Asegura la inclusión de subgrupos clave en la muestra.",
                "Es un método rápido y de bajo costo.",
                "No requiere un listado de la población, solo conocer sus proporciones."
            ],
            disadvantages: [
                "La selección final dentro de la cuota es por conveniencia y está sujeta a sesgo.",
                "No se pueden generalizar los resultados estadísticamente.",
                "Puede dar una falsa sensación de representatividad."
            ]
        },
        "Muestreo Discrecional": {
            title: "Muestreo Discrecional (o por Juicio)",
            definition: "El investigador selecciona a los individuos a través de su criterio profesional. Puede basarse en la experiencia de otros estudios anteriores o en su conocimiento sobre la población.",
            example: "Una pedagoga que estudia la dislexia en adultos, elige a 5 estudiantes que, a su juicio, son 'casos ejemplares' y pueden ofrecer la información más rica y detallada para su investigación.",
            advantages: [
                "Ideal para estudios cualitativos que buscan profundidad.",
                "Eficiente para encontrar a los individuos con más conocimiento sobre un tema.",
                "Perfecto para estudiar fenómenos o poblaciones muy específicas."
            ],
            disadvantages: [
                "Es completamente subjetivo y depende del juicio del investigador.",
                "Los resultados no son generalizables.",
                "Es muy vulnerable a los sesgos y prejuicios del investigador."
            ]
        },
        "Muestreo de Bola de Nieve": {
            title: "Muestreo de Bola de Nieve",
            definition: "Se utiliza cuando los participantes potenciales son difíciles de encontrar. Se contacta a un individuo inicial, y este, a su vez, refiere a otros.",
            example: "Para estudiar a trabajadores indocumentados, un investigador contacta a dos a través de una ONG. Estos dos le presentan a otros compañeros, y estos a otros, haciendo que la muestra crezca como una bola de nieve.",
            advantages: [
                "Es el mejor método para acceder a poblaciones ocultas, marginadas o de difícil acceso.",
                "Se apoya en la confianza de las redes sociales existentes.",
                "Generalmente es de bajo costo."
            ],
            disadvantages: [
                "La muestra no es representativa y suele tener un fuerte sesgo comunitario.",
                "Los resultados no son generalizables.",
                "El investigador tiene poco control sobre la composición final de la muestra."
            ]
        }
    };

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
        if (document.querySelector('.modal-overlay')) {
            // Si ya hay un modal abierto, ciérralo antes de abrir uno nuevo
            const existingOverlay = document.querySelector('.modal-overlay');
            if (existingOverlay) {
                closeModal(existingOverlay);
            }
        }

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const modal = document.createElement('div');
        modal.className = modalClass;

        modal.innerHTML = `<button class="modal-close">&times;</button>${contentHTML}`;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Animación de entrada
        setTimeout(() => {
            overlay.classList.add('visible');
        }, 10);

        // Cerrar modal
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
