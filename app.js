const flashcards = [
{
pregunta: "¿Qué es un tríptico?",
respuesta: "Es un folleto informativo elaborado en una sola hoja que se dobla en tres partes."
},
{
pregunta: "¿Qué es una línea de tiempo?",
respuesta: "Es una representación gráfica que organiza hechos en orden cronológico."
},
{
pregunta: "¿Qué es un isotipo?",
respuesta: "Es la parte gráfica o símbolo de una marca sin incluir nombre."
},
{
pregunta: "¿Qué es Microsoft Excel?",
respuesta: "Es un programa de hoja de cálculo desarrollado por Microsoft."
},
{
pregunta: "¿Qué es una fila?",
respuesta: "Es una línea horizontal identificada por números."
},
{
pregunta: "¿Qué es una columna?",
respuesta: "Es una línea vertical identificada por letras."
},
{
pregunta: "¿Qué es una celda?",
respuesta: "Es la intersección entre una fila y una columna."
},
{
pregunta: "¿Qué es una fórmula lógica?",
respuesta: "Permite evaluar condiciones y devolver resultados."
},
{
pregunta: "¿Qué son las cookies?",
respuesta: "Son pequeños archivos que almacenan información de navegación."
},
{
pregunta: "¿Qué es hardware?",
respuesta: "Es la parte física de una computadora."
}
];

let indice = 0;

function mostrarFlashcard(){
document.getElementById("pregunta").textContent =
flashcards[indice].pregunta;

document.getElementById("respuesta").textContent =
flashcards[indice].respuesta;

document.getElementById("respuesta").style.display="none";
}

function revelarRespuesta(){
document.getElementById("respuesta").style.display="block";
}

function siguiente(){
indice++;
if(indice >= flashcards.length){
indice = 0;
}
mostrarFlashcard();
}

window.onload = mostrarFlashcard;
