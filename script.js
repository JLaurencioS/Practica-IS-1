document.addEventListener('DOMContentLoaded', function() {
  // Colores para el fondo 
  const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccffff", "#ffccff","#ffffff"]; 
  //Colores solidos en base a los colores del fondo
  const solidcolors = ["#303030ff", "#ff0000ff", "#00ff00ff", "#0000ffff", "#ffff00ff", "#00ffffff", "#ff00ffff","#cececeff"];
  //colores sombra para la sombra del boton
  const shadowcolors=["#030303ff", "#770000ff", "#006600ff", "#00006eff", "#7d7d00ff", "#008484ff", "#750075ff","#666666ff"];
  let colorIndex = 0; 
   
  // Datos de los integrantes 
  const members = [ 
    { photo: "images/alumno1.png", desc: "Sanchez Laurencio - Alumno de 7mo semestre." }, 
    { photo: "images/alumno2.png", desc: "Elias Cuevas - Alumno de 7mo semestre." } 
  ]; 
  let memberIndex = 0; 
  
  const switchButton = document.getElementById("switchButton");
  function updateSwitchButtonText() {
    switchButton.textContent = `Mostrar alumno ${((memberIndex + 1) % members.length) + 1}`;
  }
  updateSwitchButtonText();
  
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }
  
  // Botón cambio de color 
  document.getElementById("colorButton").addEventListener("click", () => { 
    document.body.style.backgroundColor = colors[colorIndex];

    //cambia el color de las variables css para los efectos hover, active y shadow de los botones en funcion del color de fondo
    //estas variables se encuentran en styles.css
    
    document.documentElement.style.setProperty('--bs-btn-hover-bg', colors[colorIndex]);
    document.documentElement.style.setProperty('--bs-btn-active-bg', solidcolors[colorIndex]);
    document.documentElement.style.setProperty('--bs-btn-active-shadow', shadowcolors[colorIndex]);
    
    
    // Nombre del color para el toast
    const colorNames = [
      "gris claro", "rosa", "verde claro", "azul claro", "amarillo claro", "celeste", "lila", "blanco"
    ];
    showToast(`Se ha cambiado el color a ${colorNames[colorIndex]} a la hora ${document.getElementById('clock').textContent}`);
    colorIndex = (colorIndex + 1) % colors.length; 
  }); 
   
  // Botón cambio de integrante 
  switchButton.addEventListener("click", () => { 
    const photo = document.getElementById("member-photo");
    photo.style.opacity = 0;
    setTimeout(() => {
      memberIndex = (memberIndex + 1) % members.length; 
      photo.src = members[memberIndex].photo; 
      document.getElementById("member-desc").textContent = members[memberIndex].desc; 
      updateSwitchButtonText();
      photo.style.opacity = 1;
      showToast(`Se ha cambiado al integrante a la hora ${document.getElementById('clock').textContent}`);
    }, 400);
  });
  
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // Modal de detalles del alumno
  const modal = document.getElementById('modal');
  const modalPhoto = document.getElementById('modal-photo');
  const modalDesc = document.getElementById('modal-desc');
  const modalExtra = document.getElementById('modal-extra');
  const closeModal = document.getElementById('close-modal');
  const memberPhoto = document.getElementById('member-photo');
  
  memberPhoto.addEventListener('click', () => {
    modalPhoto.src = members[memberIndex].photo;
    modalDesc.textContent = members[memberIndex].desc;
    // Puedes personalizar los detalles extra por alumno aquí:
    if (memberIndex === 0) {
      modalExtra.textContent = "Estudiante de Ingeniería de Estudiante de la materia de Ingeniería de Software. Un apasionado Laurencio que siempre ve el camino del programador. Intereses: Desarrollo web, IA.";
    } else if (memberIndex === 1) {
      modalExtra.textContent = "Estudiante de 7mo semestre de la Ing. En Sistemas Computacionales. Fiel seguidor de las bases de datos y páginas web.";
    } else {
      modalExtra.textContent = "";
    }
    modal.style.display = "block";
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });
  
  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});