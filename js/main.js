const edad = () => {
    let num = prompt("Introduzca la edad a consultar: ");
    num = parseInt(num);
    const respuesta = num <18 ? "Esta persona es menor de edad" : "Esta persona es mayor de edad.";
    console.log(respuesta);
  };

  edad();