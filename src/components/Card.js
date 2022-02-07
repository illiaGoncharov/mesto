import { popupLightbox, popupImage, popupCaption, openPopup} from '../index.js';

export default class Card {
	constructor(name, link, selector) {
		this._name = name;
		this._link = link;
		this._selector = selector;
	}

	_getTemplate() {
		const cardTemplate = document.querySelector(this._selector).content.cloneNode(true);
		return cardTemplate;
	}

	_setEventListeners() {
		this._card.querySelector('.card__image').addEventListener('click', () => {
			this._openLightbox();
		});

		this._card.querySelector('.card__like-icon').addEventListener('click', (e) => {
			e.target.classList.toggle("card__like-icon_liked");
		});

		this._card.querySelector('.card__delete-icon').addEventListener('click', (e) => {
			e.target.closest(".card").remove();
		});
	}

	_openLightbox() {
		popupImage.src = this._link;
		popupImage.alt = this._name;
		popupCaption.textContent = this._name;
		openPopup(popupLightbox);
	}

	generateCard() {
		this._card = this._getTemplate();
		this._setEventListeners();

		const image = this._card.querySelector('.card__image');
		const title = this._card.querySelector('.card__title');

		image.src = this._link;
		image.alt = this._name;
		title.textContent = this._name;

		return this._card;
	}
}