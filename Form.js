window.onload = iniciar;

function iniciar() {
  document.getElementById ('submit').addEventListener('click', validate, false)
}

function validateName() {
    var x = document.getElementById ('nombre');
    console.log(
        `me llego como variable: ${x}`
    )
    if (x.value == "") {
      alert("Debe completar su Nombre");
      return false
    }
    return true;
  }

  function validateSurname() {
    var x = document.getElementById('apellido');
    console.log(
        `me llego como variable: ${x}`
    )
    setTimeout(()=> {}, 5000)
    if (x == "") {
      alert("Debe completar su Apellido");
      return false
    }
    return true;
  }

  function validateAddress() {
    var x = document.getElementById('dir');
    console.log(
        `me llego como variable: ${x}`
    )
    if (x == "") {
      alert("Debe completar su Direccion");
      return false
    }
    return true;
  }

  function validatePhone() {
    var x = document.getElementById('telefono');
    if (isNaN(elemento.value)){
      alert('El campo teléfono debe ser un número');
      return false
    }
    return true;
  }

  function validateCard() {
    let x = document.getElementById("number").textContent;
    var re = /^[0-9]{16}$/im;
    console.log(
        `me llego como variable: ${x}`
    )
    setTimeout(()=> {}, 5000)
    if (x === "" || !re.test(x)) 
    {
      alert("Debe completar el Numero de Tarjeta");
      return false
    }
    return true;
  }

  function validate(e){
    if (validateName() && validateSurname() && validatePhone() && validateAddress() && confirm ('Desea enviar?')){
    return true;
    } else {
  e.preventDefault();
  return false;
    }
  }