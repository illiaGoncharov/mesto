import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
	constructor(selector, {submitForm}) {
		super(selector);
		this._submitForm = submitForm;
		this._form = this._selector.querySelector('.popup__form');
	}

	_getInputValues() {
		this._inputList = this._form.querySelectorAll('.popup__input');
		this._inputValues = {};
		this._inputList.forEach(input => {
			this._inputValues[input.name] = input.value;
		});
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitForm(this._getInputValues());
		});
	}

	close() {
		super.close();
		this._form.reset();
	}
}