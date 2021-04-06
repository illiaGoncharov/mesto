// import popup sets 

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

	// listen handlers

	generateCard() {
		this._card = this._getTemplate();
		// event listeners

		const image = this._card.querySelector('.card__image');
		const title = this._card.querySelector('.card__title');

		image.src = this._link;
		image.alt = this._title;
		title.textContent = this._title;

		return this._card;
	}
}