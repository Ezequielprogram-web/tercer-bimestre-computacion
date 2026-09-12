const flashcards = [

{
pregunta:"¿Qué es un tríptico?",
respuesta:"Es un folleto informativo elaborado en una sola hoja que se dobla en tres partes."
},

{
pregunta:"¿Qué es una línea de tiempo?",
respuesta:"Es una representación gráfica que organiza hechos o eventos en orden cronológico."
},

{
pregunta:"¿Qué es un logotipo?",
respuesta:"Es un símbolo, imagen, palabra o combinación que representa una marca."
},

{
pregunta:"¿Qué es un isotipo?",
respuesta:"Es la parte gráfica o símbolo de una marca sin incluir texto."
},

{
pregunta:"¿Qué es un imagotipo?",
respuesta:"Es la combinación de símbolo y nombre que pueden separarse."
},

{
pregunta:"¿Qué es un isologo?",
respuesta:"Es la unión del símbolo y el texto en un solo diseño."
},

{
pregunta:"¿Qué es Microsoft Excel?",
respuesta:"Es un programa de hoja de cálculo desarrollado por Microsoft."
},

{
pregunta:"¿Qué es una hoja de cálculo?",
respuesta:"Documento electrónico formado por filas y columnas."
},

{
pregunta:"¿Qué es una fila?",
respuesta:"Es una línea horizontal identificada con números."
},

{
pregunta:"¿Qué es una columna?",
respuesta:"Es una línea vertical identificada con letras."
},

{
pregunta:"¿Qué es una celda?",
respuesta:"Es la intersección entre una fila y una columna."
},

{
pregunta:"¿Qué es una celda activa?",
respuesta:"Es la celda seleccionada donde el usuario puede escribir."
},

{
pregunta:"¿Qué hace el signo + ?",
respuesta:"Realiza una suma."
},

{
pregunta:"¿Qué hace el signo - ?",
respuesta:"Realiza una resta."
},

{
pregunta:"¿Qué hace el signo * ?",
respuesta:"Realiza una multiplicación."
},

{
pregunta:"¿Qué hace el signo / ?",
respuesta:"Realiza una división."
},

{
pregunta:"¿Qué son los datos numéricos?",
respuesta:"Datos representados mediante números."
},

{
pregunta:"¿Qué son los datos alfabéticos?",
respuesta:"Datos formados únicamente por letras."
},

{
pregunta:"¿Qué son los datos alfanuméricos?",
respuesta:"Combinación de letras y números."
},

{
pregunta:"¿Qué es una fórmula lógica?",
respuesta:"Permite evaluar condiciones y devolver resultados."
},

{
pregunta:"¿Qué significa > ?",
respuesta:"Mayor que."
},

{
pregunta:"¿Qué significa < ?",
respuesta:"Menor que."
},

{
pregunta:"¿Qué significa >= ?",
respuesta:"Mayor o igual que."
},

{
pregunta:"¿Qué significa <= ?",
respuesta:"Menor o igual que."
},

{
pregunta:"¿Qué significa <> ?",
respuesta:"Distinto a."
},

{
pregunta:"¿Para qué sirve la función SI?",
respuesta:"Para tomar decisiones según una condición."
},

{
pregunta:"¿Para qué sirve la función Y?",
respuesta:"Exige que todas las condiciones se cumplan."
},

{
pregunta:"¿Para qué sirve la función O?",
respuesta:"Necesita que al menos una condición se cumpla."
},

{
pregunta:"¿Qué es una función anidada?",
respuesta:"Una función colocada dentro de otra función."
},

{
pregunta:"¿Qué es hardware?",
respuesta:"Son las partes físicas de una computadora."
},

{
pregunta:"¿Qué es software?",
respuesta:"Son los programas que utiliza una computadora."
},

{
pregunta:"¿Qué es un sistema operativo?",
respuesta:"Es el software principal que administra el equipo."
},

{
pregunta:"¿Qué es Windows?",
respuesta:"Un sistema operativo desarrollado por Microsoft."
},

{
pregunta:"¿Qué es Internet?",
respuesta:"Una red mundial de computadoras conectadas."
},

{
pregunta:"¿Qué es una página web?",
respuesta:"Documento accesible mediante un navegador."
},

{
pregunta:"¿Qué es HTML?",
respuesta:"Lenguaje utilizado para crear páginas web."
},

{
pregunta:"¿Qué es CSS?",
respuesta:"Lenguaje utilizado para diseñar páginas web."
},

{
pregunta:"¿Qué es JavaScript?",
respuesta:"Lenguaje que agrega interactividad a una página web."
},

{
pregunta:"¿Qué es una cookie?",
respuesta:"Pequeño archivo que almacena información del usuario."
},

{
pregunta:"¿Qué es Wi-Fi?",
respuesta:"Tecnología que permite conectarse a Internet sin cables."
},

{
pregunta:"¿Qué es RAM?",
respuesta:"Memoria temporal utilizada por la computadora."
},

{
pregunta:"¿Qué es un SSD?",
respuesta:"Unidad de almacenamiento rápida basada en memoria flash."
},

{
pregunta:"¿Qué es un disco duro?",
respuesta:"Dispositivo utilizado para almacenar información."
},

{
pregunta:"¿Qué es un virus informático?",
respuesta:"Programa malicioso que puede dañar un sistema."
},

{
pregunta:"¿Qué es la ciberseguridad?",
respuesta:"Conjunto de prácticas para proteger sistemas y datos."
}

];

let actual = 0;

function mostrarPregunta(){
document.getElementById("pregunta").textContent =
flashcards[actual].pregunta;

document.getElementById("respuesta").textContent =
flashcards[actual].respuesta;

document.getElementById("respuesta").style.display="none";
}

function revelarRespuesta(){
document.getElementById("respuesta").style.display="block";
}

function siguiente(){

  actual++;

  if(actual >= flashcards.length){
    actual = 0;
  }

  mostrarPregunta();
}

mostrarPregunta();

function mostrarSeccion(id){

  document.getElementById("inicio").style.display = "none";
  document.getElementById("flashcards").style.display = "none";
  document.getElementById("glosario").style.display = "none";
  document.getElementById("acerca").style.display = "none";

  document.getElementById(id).style.display = "block";
}
