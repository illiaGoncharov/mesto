// popup behavior
function closePopup(target) {
  target.classList.remove("popup_opened");
}
function openPopup(target) {
  target.classList.add("popup_opened");
}

// modals [edit & add]
const popupE = document.querySelector('.popup_type_edit'),
      formE = document.querySelector('.form_type_edit'),
      popupA = document.querySelector('.popup_type_add'),
      formA = document.querySelector('.form_type_add');

// buttons [edit & add]
const editB = document.querySelector('.profile__edit-button'),
      closeE = popupE.querySelector('.popup__close-button'),
      addB = document.querySelector('.profile__add-button'),
      closeA = popupA.querySelector('.popup__close-button');

// get inputs [edit & add]
const nameI = formE.querySelector('.form__input_type_name'),
      descI = formE.querySelector('.form__input_type_desc'),
      titleI = formA.querySelector('.form__input_type_title'),
      linkI = formA.querySelector('.form__input_type_link');

// profile desc
const profT = document.querySelector('.profile__title'),
      profS = document.querySelector('.profile__subtitle');

// main edit  
function updProfile(e) {
  e.preventDefault();
  e.stopPropagation();
  const nv = nameI.value;
  const dv = descI.value;
  if(nv.length <= 2 || dv.length <= 2) {
    alert('Имя или описание слишком коротки. Может быть попробовать что-то подлинее? :)');
  } else {
    profT.textContent = nv;
    profS.textContent = dv;
    closePopup(popupE);
  }
}

// listen edit
closeE.addEventListener('click', function() {
  closePopup(popupE);
});
editB.addEventListener('click', function() {
  nameI.placeholder = profT.textContent;
  descI.placeholder = profS.textContent;
  openPopup(popupE);
});
formE.addEventListener('submit', updProfile);

// main add
function getCard(e) {
  e.preventDefault();
  e.stopPropagation();
  const tv = titleI.value;
  const lv = linkI.value;
  if(tv.length <= 2 || lv.length <= 5) {
    alert('Название региона или ссылка слишком коротки. Уверены, что не допустили ошибку? :)');
  } else {
    addCard(tv, lv);
    closePopup(popupA);
    // Москва https://www.planete-energies.com/sites/default/files/thumbnails/image/moscou.jpg
  }
}

// listen add
closeA.addEventListener('click', function() {
  closePopup(popupA);
});
addB.addEventListener('click', function() {
  openPopup(popupA);
});
formA.addEventListener('submit', getCard);

