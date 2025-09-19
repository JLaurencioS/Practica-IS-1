document.addEventListener('DOMContentLoaded', function() {
  // Gradientes para el fondo animado
  const gradients = [
    "linear-gradient(120deg, #fff, #000, #fff)",
    "linear-gradient(120deg, #0f2027, #2c5364, #00ffe7, #ff00ea, #0f2027)",
    "linear-gradient(120deg, #ff9966, #ff5e62, #ff00cc, #333399, #ff9966)",
    "linear-gradient(120deg, #43cea2, #185a9d, #43cea2)",
    "linear-gradient(120deg, #1ef7e1ff, #ffd200, #f7971e)",
    "linear-gradient(120deg, #00c3ff, #ffff1c, #00c3ff)"
  ];
  // Colores de texto que combinan con cada gradiente
  const textColors = [
    "#ffffffff",    // Para el gradiente blanco/negro
    "#fff",    // Para fondo oscuro/neón
    "#fff",    // Para fondo naranja/rosado
    "#fff",    // Para fondo verde/azul
    "#222",    // Para fondo claro/amarillo
    "#222"     // Para fondo celeste/amarillo
  ];
  // Colores de botón para cada fondo
  const buttonBgColors = [
    "#222",      // para fondo blanco/negro
    "#00ffe7",   // para fondo neón
    "#ff5e62",   // para fondo naranja/rosado
    "#185a9d",   // para fondo verde/azul
    "#ffd200",   // para fondo amarillo
    "#00c3ff"    // para fondo celeste
  ];
  const buttonTextColors = [
    "#fff", "#222", "#fff", "#fff", "#222", "#222"
  ];
  let gradientIndex = 0; 
   
  // Datos de los integrantes 
  const members = [ 
    { photo: "images/alumno1.png", desc: "Sanchéz Rojas Jorge Laurencio - Programador en JAVAFX." }, 
    { photo: "images/alumno2.png", desc: "Cuevas Torres José Elias - Alumno 7mo semestre." } 
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
    // Cambia el gradiente de fondo y reinicia la animación
    document.body.style.background = gradients[gradientIndex];
    document.body.style.backgroundSize = "800% 800%";
    document.body.style.animation = "waveBG 12s ease-in-out infinite";
    // Cambia el color del texto principal
    document.body.style.color = textColors[gradientIndex];
    document.querySelector("h1").style.color = textColors[gradientIndex];
    document.querySelector("#team-name").style.color = textColors[gradientIndex];
    // Cambia los colores de los botones
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.style.backgroundColor = buttonBgColors[gradientIndex];
      btn.style.color = buttonTextColors[gradientIndex];
      btn.style.boxShadow = `0 4px 24px 0 ${buttonBgColors[gradientIndex]}55`;
    });
    // Toast opcional
    showToast(`Se ha cambiado el fondo a gradiente ${gradientIndex + 1} a la hora ${document.getElementById('clock').textContent}`);
    gradientIndex = (gradientIndex + 1) % gradients.length;
  }); 
   
  // Al cargar la página, pon el color de texto y botones inicial
  document.body.style.color = textColors[gradientIndex];
  document.querySelector("h1").style.color = textColors[gradientIndex];
  document.querySelector("#team-name").style.color = textColors[gradientIndex];
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.style.backgroundColor = buttonBgColors[gradientIndex];
    btn.style.color = buttonTextColors[gradientIndex];
    btn.style.boxShadow = `0 4px 24px 0 ${buttonBgColors[gradientIndex]}55`;
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
      modalExtra.textContent = "Estudiante de la materia de Ingeniería de Software. Un apasionado Laurencio que siempre ve el camino del programador";
    } else if (memberIndex === 1) {
      modalExtra.textContent = "Estudiante de 7mo semestre de la Ing. En Sistemas Computacionales. Fiel seguidor de las bases de datos y  páginas web.";
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