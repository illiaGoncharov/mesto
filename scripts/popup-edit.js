// modals
const popupE = document.querySelector('#popup-edit'),
      formE = document.querySelector('#form-edit');

// buttons
const editB = document.querySelector('.profile__edit-button'),
      closeE = popupE.querySelector('.popup__close-button');

// profile desc
const profT = document.querySelector('.profile__title'),
      profS = document.querySelector('.profile__subtitle');

// inputs
let nameI = document.querySelector('.form__input_type_name'),
    descI = document.querySelector('.form__input_type_desc');

// behavior
function closePopup() {
  popupE.classList.remove("popup_opened");
}
function openPopup() {
  popupE.classList.add("popup_opened");
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
closeE.addEventListener('click', closePopup);
editB.addEventListener('click', openPopup);
formE.addEventListener('submit', updProfile);

