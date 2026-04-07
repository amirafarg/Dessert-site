const clickAdd = document.querySelector(".btn-cart");
const show = document.querySelector(".alright");
const added = document.querySelector(".abslt-add");
const none = document.querySelector(".added-items");
const card = document.getElementById("added-items");
const btnConfirm = document.querySelector(".Confirm")
const sec = document.querySelector(".sec");
const popup = document.querySelector(".card-js");
const removeCard = document.querySelector(".card");
const getNewOrder = document.querySelector(".now-order");
const btnPlus = document.querySelector(".plus");
const plusInput = document.querySelector(".no-spinner");

clickAdd.addEventListener('click', clickToConvirt);
btnConfirm.addEventListener('click', clickToConfirm);
removeCard.addEventListener('click', clickToRemove);
getNewOrder.addEventListener('click', removeByBtn);
btnPlus.addEventListener('click', increase);


function clickToConvirt() {
    clickAdd.classList.add('show');
    show.classList.add('show');
    added.classList.add('show');
    none.classList.add('show');
    card.classList.add('show');
}

function clickToConfirm() {
    sec.classList.add('show');
    popup.classList.add('show');
}

function clickToRemove() {
    sec.classList.remove('show');
    popup.classList.remove('show');
}

function removeByBtn() {
    sec.classList.remove('show');
    popup.classList.remove('show');
}

function increase() {
    document.querySelector(".no-spinner").innerHTML;
}
