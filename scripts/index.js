import Card from "./Card.js";
import { validationSelectors, FormValidator } from "./FormValidator.js";
import { initialCards } from "./init-cards.js";

// Добавляем карточки из массива 
const cardsContainer = document.querySelector('.cards');
function createCard(card) {
  const newCard = new Card(card.name, card.link, "#card")
  return newCard.generateCard();
};
initialCards.forEach((item) => {
  const newItem = createCard(item);
  cardsContainer.append(newItem);
});

// Открыть попап с карточкой [инит в классе Card]
export const popupLightbox = document.querySelector(".popup_type_lightbox");
export const popupImage = popupLightbox.querySelector(".popup__img");
export const popupCaption = popupLightbox.querySelector(".popup__img-caption");

// Поведение попапа
const popupList = document.querySelectorAll(".popup");
popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});
function quitOnEscape(evt) {
  if (evt.key == "Escape" && document.querySelector(".popup_opened")) {
    closePopup(document.querySelector(".popup_opened"));
  }
};
function closePopup(target) {
  target.classList.remove("popup_opened");
  document.removeEventListener("keydown", quitOnEscape)
}
export function openPopup(target) {
  target.classList.add("popup_opened");
  document.addEventListener("keydown", quitOnEscape)
}

// Инициировать валидацию "Редактировать профиль"
const validateEditProfile = new FormValidator(validationSelectors, document.querySelector(".form_type_edit"));
validateEditProfile.enableValidation();

// Валидация формы «Новое место»
const validateNewCard = new FormValidator(validationSelectors, document.querySelector(".form_type_add"));
validateNewCard.enableValidation();

// "Редактировать профиль"
// modals [edit] + buttons [edit] + get inputs [edit] + profile desc [edit]
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = document.querySelector('.form_type_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameInput = formEditProfile.querySelector('.form__input_type_name');
const descriptionInput = formEditProfile.querySelector('.form__input_type_desc');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
function updateProfileInfo(e) {
  e.preventDefault();
  const newNameValue = nameInput.value;
  const newDescriptionValue = descriptionInput.value;
  profileTitle.textContent = newNameValue;
  profileSubtitle.textContent = newDescriptionValue;
  closePopup(popupEditProfile);
}

// «Новое место»
// modals [add] + buttons [add] + get inputs [add] + main [add]
const popupAddPlace = document.querySelector('.popup_type_add');
const formAddPlace = document.querySelector('.form_type_add');
const placeAddButton = document.querySelector('.profile__add-button');
const titleInput = formAddPlace.querySelector('.form__input_type_title');
const linkInput = formAddPlace.querySelector('.form__input_type_link');
function submitAddCardForm(e) {
  e.preventDefault();
  const newCard = createCard({ name: titleInput.value, link: linkInput.value });
  cardsContainer.prepend(newCard);
  closePopup(popupAddPlace);
  titleInput.value = "";
  linkInput.value = "";
}

// Слушатели [edit] + [add]
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});
formEditProfile.addEventListener('submit', updateProfileInfo);
placeAddButton.addEventListener('click', () => {
  openPopup(popupAddPlace);
});
formAddPlace.addEventListener('submit', submitAddCardForm);