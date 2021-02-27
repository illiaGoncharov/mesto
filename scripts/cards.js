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
  likeB.addEventListener("click", function () {
    likeB.classList.toggle("card__like-icon_liked");
  });

  // delete
  const delB = templateNew.querySelector(".card__delete-icon");
  delB.addEventListener("click", delCard);

  // add to document
  document.querySelector('.cards').prepend(templateNew);
}

// init
for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].name, initialCards[i].link);
}


