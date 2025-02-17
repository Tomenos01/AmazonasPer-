/*function loadFauna() {
    
    document.getElementById('gallery').innerHTML = `
        <h1>Fauna del Amazonas</h1>
        <p>El Amazonas alberga una increíble diversidad de especies. Aquí te mostramos algunas de ellas:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.jpg" alt="Jaguar del Amazonas">
        <p><strong>Jaguar</strong>: El mayor felino de América y un excelente nadador.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ara_ararauna_Luc_Viatour.jpg" alt="Guacamayo">
        <p><strong>Guacamayo</strong>: Ave colorida y símbolo de la selva tropical.</p>
    `;

    document.getElementById('back-button').style.display = 'block';
}

function loadFlora() {
    document.getElementById('gallery').innerHTML = `
        <h1>Flora del Amazonas</h1>
        <p>El Amazonas alberga una increíble diversidad de especies. Aquí te mostramos algunas de ellas:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.jpg" alt="Jaguar del Amazonas">
        <p><strong>Jaguar</strong>: El mayor felino de América y un excelente nadador.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ara_ararauna_Luc_Viatour.jpg" alt="Guacamayo">
        <p><strong>Guacamayo</strong>: Ave colorida y símbolo de la selva tropical.</p>
    `;

    document.getElementById('back-button').style.display = 'block';
}

function loadConservacion() {
    document.getElementById('gallery').innerHTML = `
        <h1>Conservación del Amazonas</h1>
        <p>El Amazonas alberga una increíble diversidad de especies. Aquí te mostramos algunas de ellas:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.jpg" alt="Jaguar del Amazonas">
        <p><strong>Jaguar</strong>: El mayor felino de América y un excelente nadador.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ara_ararauna_Luc_Viatour.jpg" alt="Guacamayo">
        <p><strong>Guacamayo</strong>: Ave colorida y símbolo de la selva tropical.</p>
    `;

    document.getElementById('back-button').style.display = 'block';
}

function goBack() {
    location.reload();
}
*/

// Función que cambia la imagen al pasar el ratón sobre ella
function changeImage(element) {
    const img = element.querySelector('img');
    const newImageSrc = img.getAttribute('data-hover');
    img.setAttribute('data-original', img.src); // Guardamos la imagen original
    img.src = newImageSrc; // Cambiamos a la imagen del hover
}

// Función que restaura la imagen original cuando el ratón sale
function resetImage(element) {
    const img = element.querySelector('img');
    const originalImageSrc = img.getAttribute('data-original'); // Recuperamos la imagen original
    img.src = originalImageSrc; // Restauramos la imagen original
}

// Función para cargar el contenido cuando se hace clic
function loadFauna(section) {
    document.getElementById('gallery').innerHTML = `
        <h1>Fauna del Amazonas</h1>
        <p>El Amazonas alberga una increíble diversidad de especies. Aquí te mostramos algunas de ellas:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.jpg" alt="Jaguar del Amazonas">
        <p><strong>Jaguar</strong>: El mayor felino de América y un excelente nadador.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ara_ararauna_Luc_Viatour.jpg" alt="Guacamayo">
        <p><strong>Guacamayo</strong>: Ave colorida y símbolo de la selva tropical.</p>
    `;
    document.getElementById('back-button').style.display = 'block';
}

function loadFlora(section) {
    document.getElementById('gallery').innerHTML = `
        <h1>Flora del Amazonas</h1>
        <p>El Amazonas alberga una increíble diversidad de especies vegetales. Aquí te mostramos algunas de las más destacadas:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Orchidaceae_-_Orchidaceae_%28flower_plant%29.jpg" alt="Orquídea Amazonas">
        <p><strong>Orquídea del Amazonas</strong>: Esta flor es símbolo de la biodiversidad en la selva tropical del Amazonas.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Ceiba_pentandra_%28Kapok_tree%29.jpg" alt="Árbol de Ceiba">
        <p><strong>Ceiba</strong>: Uno de los árboles más grandes y emblemáticos de la selva amazónica.</p>
    `;
    document.getElementById('back-button').style.display = 'block';
}

function loadConservacion(section) {
    document.getElementById('gallery').innerHTML = `
        <h1>Conservación del Amazonas</h1>
        <p>El Amazonas alberga una increíble diversidad de especies. Aquí te mostramos algunas de ellas:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Jaguar_%28Panthera_onca_palustris%29_female_Piquiri_River_2.jpg" alt="Jaguar del Amazonas">
        <p><strong>Jaguar</strong>: El mayor felino de América y un excelente nadador.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ara_ararauna_Luc_Viatour.jpg" alt="Guacamayo">
        <p><strong>Guacamayo</strong>: Ave colorida y símbolo de la selva tropical.</p>
    `;
    document.getElementById('back-button').style.display = 'block';
}

function goBack() {
    location.reload();
}

