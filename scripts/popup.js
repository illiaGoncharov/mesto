// modals
let popup = document.querySelector('.popup');
let form = document.querySelector('.form');

// buttons
let editB = document.querySelector('.profile__edit-button'),
    closeB = document.querySelector('.popup__close-button');

// profile desc
let profT = document.querySelector('.profile__title'),
    profS = document.querySelector('.profile__subtitle');

// inputs
let nameI = document.querySelector('#name'),
    descI = document.querySelector('#desc');

// behavior
function closePopup() {
  popup.classList.remove("popup_opened");
}
function openPopup() {
  popup.classList.toggle("popup_opened");
  nameI.placeholder = profT.textContent;
  descI.placeholder = profS.textContent;
}
function updProfile(e) {
  e.preventDefault();
  e.stopPropagation();
  let nv = nameI.value;
  let dv = descI.value;
  if(nv.length <= 1 || dv.length <= 1) {
    alert('Имя или описание слишком коротки. Может быть попробовать что-то подлинее? :)');
  } else {
    profT.textContent = nv;
    profS.textContent = dv;
    closePopup();
    // console.log('success');
  }
}

// listen
closeB.addEventListener('click', closePopup);
editB.addEventListener('click', openPopup);
form.addEventListener('submit', updProfile);
