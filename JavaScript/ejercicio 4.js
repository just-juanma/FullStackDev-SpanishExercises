let nombre = "Juan Manuel";
let apellido = "González";

let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let nLetras = estudiante.length;

let primeraLetraN = nombre[0];
let primeraLetraA = apellido.charAt(0);

let estSinEspacios = estudiante.replace(/ /g, "");

let isNombre = estudiante.includes(nombre);
