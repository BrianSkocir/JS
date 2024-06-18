console.log("Archivo cargado con exito");
alert("Bienvenido a la calculadora de promedio para alumnos");

let nombreAlumno= prompt("Por favor ingrese el nombre del alumno")
let apellidoAlumno= prompt("Por favor ingrese el apellido del alumno")

function ingresarMateria(parametro1, parametro2){
    parametro2= prompt ("Por favor ingrese la nota de " + parametro1)
    while ((parametro2<1) | (parametro2>10) | NaN){
        parametro2= prompt("Nota invalida, ingrese una nota entre el 1 y el 10")
    } 
    alert ("Su nota ingresada para "+ parametro1 +" es "+ parametro2)
    return Number(parametro2)
}

let notaMatematica = ingresarMateria("Matematica")
let notaHistoria = ingresarMateria("Historia")
let notaCienciasSociales = ingresarMateria("Ciencias Sociales")
let notaCienciasNaturales = ingresarMateria("Ciencias Naturales")
let notaLenguaYLiteratura = ingresarMateria("Lengua y Literatura")

const suma= parseInt(notaMatematica + notaHistoria + notaCienciasSociales + notaCienciasNaturales + notaLenguaYLiteratura)

alert ("La suma es "+ suma)

const promedio = suma/5

alert ("El promedio de "+ nombreAlumno+" "+apellidoAlumno+" es de "+promedio)

if (promedio >= 7) {
    document.write(
      "El promedio es de " +
        promedio +
        " por lo tanto tiene todas las materias APROBADAS."
    );
  } else {
    document.write(
      "El promedio es de " +
        promedio +
        " por lo tanto tiene una o mas materia/s DESAPROBADA/S."
    );
  }
  