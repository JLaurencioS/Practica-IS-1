

// Colores para el fondo 
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccffff", "#ffccff","#ffffff"]; 
let colorIndex = 0; 
 
// Datos de los integrantes 
const members = [ 
  { photo: "../images/alumno1.png", desc: "Sanchez Laurencio - Laurencio." }, 
  { photo: "images/alumno2.jpg", desc: "Elias Cuevas - El Product Owner." } 
]; 
let memberIndex = 0; 
 
// Botón cambio de color 
document.getElementById("colorButton").addEventListener("click", () => { 
  document.body.style.backgroundColor = colors[colorIndex]; 
  colorIndex = (colorIndex + 1) % colors.length; 
}); 
 
// Botón cambio de integrante 
document.getElementById("switchButton").addEventListener("click", () => { 
  memberIndex = (memberIndex + 1) % members.length; 
  document.getElementById("member-photo").src = members[memberIndex].photo; 
  document.getElementById("member-desc").textContent = members[memberIndex].desc; 
});