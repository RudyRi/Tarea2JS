/*let button =
document.getElementById("boton");
button.addEventListener("click", edad);*/

const edad = () => {
    //let num = 0;
    //let num = prompt("Introduzca la edad a consultar: ");
    let num = document.getElementById('num').value;
    console.log(num);
    const respuesta = num <18 ? "Esta persona es menor de edad" : "Esta persona es mayor de edad.";
    console.log(respuesta);
    document.getElementById("respuesta").innerHTML = respuesta;
  };