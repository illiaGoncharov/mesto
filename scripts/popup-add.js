// modals
const popupA = document.querySelector('#popup-add'),
      formA = document.querySelector('#form-add');

// buttons
const addB = document.querySelector('.profile__add-button'),
      closeA = popupA.querySelector('.popup__close-button');

// inputs
const titleI = formA.querySelector('.form__input_name'),
      linkI = formA.querySelector('.form__input_desc');

// behavior
function closePopup() {
  popupA.classList.remove("popup_opened");
}
function openPopup() {
  popupA.classList.add("popup_opened");
}
function getCard(e) {
  e.preventDefault();
  e.stopPropagation();
  const tv = titleI.value;
  const lv = linkI.value;
  if(tv.length <= 3 || lv.length <= 10) {
    alert('Название региона или ссылка слишком коротки. Уверены, что не допустили ошибку? :)');
  } else {
    addCard(tv, lv);
    closePopup();
  }
}

// listen
closeA.addEventListener('click', closePopup);
addB.addEventListener('click', openPopup);
formA.addEventListener('submit', getCard);

// Москва
// https://www.planete-energies.com/sites/default/files/thumbnails/image/moscou.jpg
// test