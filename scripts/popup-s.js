// initial array
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

function delCard(e) {
  const elt = e.target.closest(".card");
  elt.remove();
}

function addCard(name, link) {
  // get template & clone it 
  const template = document.querySelector('#card').content;
  let templateNew = template.cloneNode(true);

  // apply vals
  templateNew.querySelector('.card__title').innerText = name;
  templateNew.querySelector('.card__image').src = link;
  templateNew.querySelector('.card__image').alt = "На картинке изображен регион " + name;

  // like button 
  const likeB = templateNew.querySelector(".card__like-icon");
  likeB.addEventListener("click", () => {
    likeB.classList.toggle("card__like-icon_liked");
  });

  // delete
  const delB = templateNew.querySelector(".card__delete-icon");
  delB.addEventListener("click", delCard);

  // lightbox
  templateNew.querySelector('.card__image').addEventListener('click', () => {
    openLB(link, name);
  });

  // add to document
  document.querySelector('.cards').prepend(templateNew);
}

// init
for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].name, initialCards[i].link);
}

// popup behavior
function closePopup(target) {
  target.classList.remove("popup_opened");
}
function openPopup(target) {
  target.classList.add("popup_opened");
}

const popupList = document.querySelectorAll(".popup");

popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

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

// modal + elements [lightbox] 
const popupLB = document.querySelector(".popup_type_lightbox"),
      popupFig = popupLB.querySelector(".popup__img-figure"),
      popupImg = popupFig.querySelector(".popup__img"),
      popupCap = popupFig.querySelector(".popup__img-caption");

function openLB(link, desc) {
  openPopup(popupLB);
  popupImg.src = link;
  popupImg.alt = desc;
  popupCap.textContent = desc;
}




