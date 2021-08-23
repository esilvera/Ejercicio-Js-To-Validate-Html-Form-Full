let form = document.querySelector('form');
form.addEventListener('submit', function(evento){ 
    evento.preventDefault();
    console.log(evento.target);

    let { card, cvc, amount, firstname, lastname, city, state, postalcode } = form;

    /* card.classList.remove(); */
    if(card.value === ''){
        card.classList.add('is-invalid');
        
    }else {
        card.classList.remove('is-invalid');
        card.classList.add('is-valid');
        } 






});
