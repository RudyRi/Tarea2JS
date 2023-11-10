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
    examen = examen*0.2
    let tareas = parseInt(document.getElementById('tareas').value,10);
    console.log(tareas);
    tareas = tareas*0.4
    let asistencia = parseInt(document.getElementById('asistencia').value,10);
    console.log(asistencia);
    asistencia = asistencia*0.1
    let investigacion = parseInt(document.getElementById('investigacion').value,10);
    console.log(investigacion);
    investigacion = investigacion*0.3
    let suma = examen+tareas+asistencia+investigacion;
    console.log(suma);
    suma = suma.toFixed(1);
    respuesta2 = 'Nombre : '+nombre+"<br>"+'Carnet: '+carnet+"<br>"+'Nota Final: '+suma;
    console.log(respuesta2);
    document.getElementById("respuesta2").innerHTML = respuesta2;
  };

  const aumentoSalarial = () => {
    let nombre = document.getElementById('nombre3').value;
    console.log(nombre);
    let salario = parseFloat(document.getElementById('salario').value,10);
    console.log(salario);
    let categoria = document.getElementById('categoria').value;
    console.log(categoria);
    let aumento = 0;
    switch(categoria) {
      case "A":
        aumento = salario*1.15
        break;
      case "B":
        aumento = salario*1.3
        break;
      case "C":
        aumento = salario*1.1
        break;
      case "D":
        aumento = salario*1.2
        break;
      default:
        console.log("Opcion no reconocida")
        document.getElementById("respuesta3").innerHTML = "Opcion no reconocida";
    }
    aumento = aumento.toFixed(2)
    document.getElementById("respuesta3").innerHTML = "Nombre del empleado: "+nombre+"<br>"+"Salario actual: "+salario+"<br>"+"Categoria: "+categoria+"<br>"+"Salario mas aumento: "+aumento;
  };