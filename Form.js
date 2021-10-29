const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const direccion = document.querySelector('#dir');
const telefono = document.querySelector('#phone');
const pedido = document.querySelector('#pedido');

const isRequired = value => value === '' ? false : true;

const checkField = (field) => {
  return isRequired(field.value.trim());
}

const isTelefonoValido = value => isNaN(value);

const checkTelefono = (field) => {
  return isTelefonoValido(field.value);
}

document.querySelector('#form1').addEventListener('submit', (e) => {
  let isNameValid = checkField(nombre);
  let isApellidoValid = checkField(apellido);
  let isDireccionValid = checkField(direccion);
  let isTelefonoValid = checkTelefono(telefono);
  let isPedidoValid = checkField(pedido);

  let isFormValid = isNameValid && isApellidoValid && isDireccionValid && isTelefonoValid && isPedidoValid;

  if (isFormValid) {
    return true;
  } else {
    e.preventDefault();
    if (!isNameValid) alert("Debe completar Nombre");
    if (!isApellidoValid) alert("Debe completar Apellido");
    if (!isDireccionValid) alert("Debe completar Direccion");
    if (!isTelefonoValid) alert("Debe completar Telefono");
    if (!isPedidoValid) alert("Debe completar Pedido");
  }
});

const card = document.querySelector('#cardNumber')

document.querySelector('#form2').addEventListener('submit', (e) => {
  let isCardNumber = isNumber(card);
  let isNotEmpty = checkField(card)

  if (isCardNumber && isNotEmpty) {
    return true;
  } else {
    e.preventDefault()
    if (!isCardNumber) alert("Debe introducir su numero de tarjeta");
    if (!isNotEmpty) alert("El campo debe completarse");
  }
});

function isNumber(card) {
  if (isNaN(card.value)) {
    return false
  }
  return true;
}