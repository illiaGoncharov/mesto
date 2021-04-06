// init cards
function renderIntialCards(cardArray) {
  const html = cardArray.map(initCard);
  cardsContainer.append(...html);
}

// add esc event listener
function quitOnEscape(evt) {
  if (evt.key == "Escape" && document.querySelector(".popup_opened")) {
    closePopup(document.querySelector(".popup_opened"));
  }
};

// behavior [popup]
function closePopup(target) {
  target.classList.remove("popup_opened");
  document.removeEventListener("keydown", quitOnEscape)
}
function openPopup(target) {
  target.classList.add("popup_opened");
  document.addEventListener("keydown", quitOnEscape)
}

// close popoup
const popupList = document.querySelectorAll(".popup");

popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

// toggle _liked 
function handleLikeIcon() {
  this.classList.toggle("card__like-icon_liked");
}

// get template 
const cardsContainer = document.querySelector('.cards');
const cardsTemplate = document.querySelector('#card');

// insert card [add]
function initCard(data) {

  //  clone it 
  const templateNew = cardsTemplate.content.cloneNode(true);

  // get image template element
  const templateNewImage = templateNew.querySelector('.card__image');

  // apply vals
  templateNew.querySelector('.card__title').textContent = data.name;
  templateNewImage.src = data.link;
  templateNewImage.alt = "На картинке изображен регион " + name;

  // init like
  const likeButton = templateNew.querySelector(".card__like-icon");
  likeButton.addEventListener("click", handleLikeIcon); 

  // init delete
  const deleteButton = templateNew.querySelector(".card__delete-icon");
  deleteButton.addEventListener("click", deleteCard);

  // listen [lightbox]
  templateNew.querySelector('.card__image').addEventListener('click', () => {
    openLightbox(data.link, data.name);
  });

  return templateNew;
}

// delete card
function deleteCard(e) {
  e.target.closest(".card").remove();
}

// modal [lightbox] 
const popupLightbox = document.querySelector(".popup_type_lightbox");
const popupFigure = popupLightbox.querySelector(".popup__img-figure");
const popupImage = popupFigure.querySelector(".popup__img");
const popupCaption = popupFigure.querySelector(".popup__img-caption");

// init & open [lightbox]
function openLightbox(link, desc) {
  popupImage.src = link;
  popupImage.alt = desc;
  popupCaption.textContent = desc;
  openPopup(popupLightbox);
}

// modals [edit]
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = document.querySelector('.form_type_edit');

// buttons [edit]
const buttonEditProfile = document.querySelector('.profile__edit-button');
const closeEditPrifile = popupEditProfile.querySelector('.popup__close-button');

// get inputs [edit]
const nameInput = formEditProfile.querySelector('.form__input_type_name');
const descriptionInput = formEditProfile.querySelector('.form__input_type_desc');

// profile desc [edit]
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// main [edit]  
function updateProfileInfo(e) {
  e.preventDefault();
  const newNameValue = nameInput.value;
  const newDescriptionValue = descriptionInput.value;
  profileTitle.textContent = newNameValue;
  profileSubtitle.textContent = newDescriptionValue;
  closePopup(popupEditProfile);
}

// listen edit
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});
formEditProfile.addEventListener('submit', updateProfileInfo);

// buttons [add]
const popupAddPlace = document.querySelector('.popup_type_add');
const formAddPlace = document.querySelector('.form_type_add');

// buttons [add]
const placeAddButton = document.querySelector('.profile__add-button');
const closeAddPlace = popupAddPlace.querySelector('.popup__close-button');

// get inputs [add]
const titleInput = formAddPlace.querySelector('.form__input_type_title');
const linkInput = formAddPlace.querySelector('.form__input_type_link');

// main [add]
function submitAddCardForm(e) {
  e.preventDefault();
  const newCard = initCard({ name: titleInput.value, link: linkInput.value });
  cardsContainer.prepend(newCard);
  closePopup(popupAddPlace);
  titleInput.value = "";
  linkInput.value = "";
}

// listen add
placeAddButton.addEventListener('click', () => {
  openPopup(popupAddPlace);
});

formAddPlace.addEventListener('submit', submitAddCardForm);