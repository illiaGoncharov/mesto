// Часть правок не до конца понял. Надеюсь, что я приблизился к сути. 

// behavior [popup]
function closePopup(target) {
  target.classList.remove("popup_opened");
}
function openPopup(target) {
  target.classList.add("popup_opened");
}

const popupList = document.querySelectorAll(".popup");

popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

// delete card
function deleteCard(e) {
  e.target.closest(".card").remove();
}
// add card
function perpendCard(target, package) {
  target.prepend(package);
}

// insert card [add]
function initCard(name, link) {
  // get template & clone it 
  const template = document.querySelector('#card').content;
  const templateNew = template.cloneNode(true);

  const cardsContainer = document.querySelector('.cards');

  // apply vals
  templateNew.querySelector('.card__title').textContent = name;
  templateNew.querySelector('.card__image').src = link;
  templateNew.querySelector('.card__image').alt = "На картинке изображен регион " + name;

  // init like
  const likeButton = templateNew.querySelector(".card__like-icon");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-icon_liked");
  });

  // init delete
  const deleteButton = templateNew.querySelector(".card__delete-icon");
  deleteButton.addEventListener("click", deleteCard);

  // listen [lightbox]
  templateNew.querySelector('.card__image').
  addEventListener('click', () => {
    openLB(link, name);
  });

  // gogogo
  perpendCard(cardsContainer, templateNew);
}

// modal [lightbox] 
const popupLB = document.querySelector(".popup_type_lightbox");
const popupFig = popupLB.querySelector(".popup__img-figure");
const popupImg = popupFig.querySelector(".popup__img");
const popupCap = popupFig.querySelector(".popup__img-caption");

// init & open [lightbox]
function openLB(link, desc) {
  popupImg.src = link;
  popupImg.alt = desc;
  popupCap.textContent = desc;
  openPopup(popupLB);
}

// modals [edit]
const popupE = document.querySelector('.popup_type_edit');
const formE = document.querySelector('.form_type_edit');

// buttons [edit]
const editB = document.querySelector('.profile__edit-button');
const closeE = popupE.querySelector('.popup__close-button');

// get inputs [edit]
const nameI = formE.querySelector('.form__input_type_name');
const descI = formE.querySelector('.form__input_type_desc');

// profile desc [edit]
const profT = document.querySelector('.profile__title');
const profS = document.querySelector('.profile__subtitle');

// main [edit]  
function updProfile(e) {
  e.preventDefault();
  e.stopPropagation();
  const nv = nameI.value;
  const dv = descI.value;
  if(nv.length <= 2 || dv.length <= 2) {
    // alert('Имя или описание слишком коротки. Может быть попробовать что-то подлинее? :)');
  } else {
    profT.textContent = nv;
    profS.textContent = dv;
    closePopup(popupE);
  }
}

// listen edit
closeE.addEventListener('click', () => {
  closePopup(popupE);
});
editB.addEventListener('click', () => {
  nameI.placeholder = profT.textContent;
  descI.placeholder = profS.textContent;
  openPopup(popupE);
});
formE.addEventListener('submit', updProfile);

// buttons [add]
const popupA = document.querySelector('.popup_type_add');
const formA = document.querySelector('.form_type_add');

// buttons [add]
const addB = document.querySelector('.profile__add-button');
const closeA = popupA.querySelector('.popup__close-button');

// get inputs [add]
const titleI = formA.querySelector('.form__input_type_title');
const linkI = formA.querySelector('.form__input_type_link');

// main [add]
function getCard(e) {
  e.preventDefault();
  e.stopPropagation();
  const tv = titleI.value;
  const lv = linkI.value;
  if(tv.length <= 2 || lv.length <= 5) {
    // alert('Название региона или ссылка слишком коротки. Уверены, что не допустили ошибку? :)');
  } else {
    initCard(tv, lv);
    closePopup(popupA);
  } 
}
// Москва https://www.planete-energies.com/sites/default/files/thumbnails/image/moscou.jpg

// listen add
closeA.addEventListener('click', () => {
  closePopup(popupA);
});
addB.addEventListener('click', () => {
  openPopup(popupA);
});
formA.addEventListener('submit', getCard);





