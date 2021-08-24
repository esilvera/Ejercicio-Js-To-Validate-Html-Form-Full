let form = document.querySelector('form');
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log(evento.target);

    let { alerta, card, cvc, amount, firstname, lastname, city, state, postalcode, mensaje} = form;

    let huboerror = false;
    let regexvalidaname = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,20}$/;
  
    if (card.value === '' || parseInt(card.value.length) < 16) {
        card.classList.add('is-invalid');
        huboerror = true;
    } else {
        card.classList.remove('is-invalid');
        card.classList.add('is-valid');
        huboerror = false;
    }
    if (cvc.value === '' || parseInt(cvc.value.length) < 4) {
        cvc.classList.add('is-invalid');
        huboerror = true;
    } else {
        cvc.classList.remove('is-invalid');
        cvc.classList.add('is-valid');
        huboerror = false;
    }
    if (amount.value === '' || parseInt(amount.value.length) > 1000) {
        amount.classList.add('is-invalid');
        huboerror = true;
    } else {
        amount.classList.remove('is-invalid');
        amount.classList.add('is-valid');
        huboerror = false;
    }
    if (firstname.value === '' || !regexvalidaname.test(firstname.value)){
        firstname.classList.add('is-invalid');
        huboerror = true;
    } else {
        firstname.classList.remove('is-invalid');
        firstname.classList.add('is-valid');
        huboerror = false;
    }
    if (lastname.value === '' || !regexvalidaname.test(lastname.value)){
        lastname.classList.add('is-invalid');
        huboerror = true;
    } else {
        lastname.classList.remove('is-invalid');
        lastname.classList.add('is-valid');
        huboerror = false;
    }
    if (city.value === '' || !regexvalidaname.test(city.value)){
        city.classList.add('is-invalid');
        huboerror = true;
    } else {
        city.classList.remove('is-invalid');
        city.classList.add('is-valid');
        huboerror = false;
    }
    if (state.value === '' || !regexvalidaname.test(state.value)){
        state.classList.add('is-invalid');
        huboerror = true;
    } else {
        state.classList.remove('is-invalid');
        state.classList.add('is-valid');
        huboerror = false;
    }
    if (postalcode.value === '' || parseInt(postalcode.value.length) < 7) {
        postalcode.classList.add('is-invalid');
        huboerror = true;
    } else {
        postalcode.classList.remove('is-invalid');
        postalcode.classList.add('is-valid');
        huboerror = false;
    }
    if (mensaje.value === '') {
        mensaje.classList.add('is-invalid');
        huboerror = true;
    } else {
        mensaje.classList.remove('is-invalid');
        mensaje.classList.add('is-valid');
        huboerror = false;
    }

    if (huboerror) {
        document.getElementById("alerta").hidden = false;  // Coloca hidden en false para mostrar el mensaje de error oculto
    } else {
        document.getElementById("alerta").hidden = true;    // Coloca hidden en true para ocutar de nuevo el mensaje de error
    }
});
