/*let button =
document.getElementById("boton");
button.addEventListener("click", edad);*/

const edad = () => {
    //let num = 0;
    //let num = prompt("Introduzca la edad a consultar: ");
    let num = document.getElementById('num').valueGIT;
    console.log(num);
    const respuesta = num <18 ? "Esta persona es menor de edad" : "Esta persona es mayor de edad.";
    console.log(respuesta);
    document.getElementById("respuesta").innerHTML = respuesta;
  };

  const notaFinal = () => {
    let nombre = document.getElementById('nombre').value;
    console.log(nombre);
    let carnet = document.getElementById('carnet').value;
    console.log(carnet);
    let examen = parseInt(document.getElementById('examen').value,10);
    console.log(examen);
    let tareas = parseInt(document.getElementById('tareas').value,10);
    console.log(tareas);
    let asistencia = parseInt(document.getElementById('asistencia').value,10);
    console.log(asistencia);
    let investigacion = parseInt(document.getElementById('investigacion').value,10);
    console.log(investigacion);
    const suma = examen+tareas+asistencia+investigacion;
    console.log(suma);
    const promedio = suma/4;
    console.log(promedio);
    respuesta2 = 'Nombre : '+nombre+"<br>"+'Carnet: '+carnet+"<br>"+'Nota Final: '+promedio;
    console.log(respuesta2);
    document.getElementById("respuesta2").innerHTML = respuesta2;
  };