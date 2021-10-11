function validateName() {
    let x = document.forms["myForm"]["fname"].value;
    console.log(
        `me llego como variable: ${x}`
    )
    setTimeout(()=> {}, 5000)
    if (x == "") {
      alert("Debe completar su Nombre");
      return false;
    }
  }

  function validateSurname() {
    let x = document.forms["myForm1"]["fname"].value;
    console.log(
        `me llego como variable: ${x}`
    )
    setTimeout(()=> {}, 5000)
    if (x == "") {
      alert("Debe completar su Apellido");
      return false;
    }
  }

  function validateAddress() {
    let x = document.forms["myForm2"]["fname"].value;
    console.log(
        `me llego como variable: ${x}`
    )
    setTimeout(()=> {}, 5000)
    if (x == "") {
      alert("Debe completar su Direccion");
      return false;
    }
  }

  function validatePhone() {
    let x = document.forms["myForm3"]["fname"].value;
    var re = /^[0-9]{10}$/im;
    console.log(
        `me llego como variable: ${x}`
    )
    setTimeout(()=> {}, 5000)
    if (x === "" || !re.test(x)) 
    {
      alert("Debe completar su Telefono");
      return false;
    }
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
      return false;
    }
  }