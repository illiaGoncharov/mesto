export const validationSelectors = {
	formContainer: ".form",
	formInput: ".form__input",
	formSubmitButton: ".form__submit-button",
	formInputNoValid: "form__input_type_no-valid",
	formInputErrorActive: "form__input-error_type_active"
};

export class FormValidator {
	constructor(selectors, form) {
		this._formContainer = selectors.formContainer;
		this._formInput = selectors.formInput;
		this._formSubmitButton = selectors.formSubmitButton;
		this._formInputNoValid = selectors.formInputNoValid;
		this._formInputErrorActive = selectors.formInputErrorActive;

		this._form = form;
		this._inputs = Array.from(this._form.querySelectorAll(this._formInput));
		this._button = this._form.querySelector(this._formSubmitButton);
	}

	_showError(input, message) {
		const error = this._form.querySelector(`#${input.id}-error`);
		error.textContent = message;
		error.classList.add(this._formInputErrorActive);
		input.classList.add(this._formInputNoValid);
	};

	_hideError(input) {
		const error = this._form.querySelector(`#${input.id}-error`);
		error.textContent = "";
		error.classList.remove(this._formInputErrorActive);
		input.classList.remove(this._formInputNoValid);
	};

	_checkValidity (input) {
		const notValid = !input.validity.valid;
		const message = input.validationMessage;
		notValid ? this._showError(input, message) : this._hideError(input);
	};

	// check + toggles button states
	_toggleButtonState (inputs, button) {
		const notValidInput = inputs.some((input) => !input.validity.valid);
		notValidInput ? button.setAttribute("disabled", true) : button.removeAttribute("disabled");
	};

	_setEventListeners () {
		this._form.addEventListener("submit", (e) => {
			e.preventDefault();
			this._button.setAttribute("disabled", true);
		});
		this._inputs.forEach((input) => {
			input.addEventListener("input", () => {
				this._checkValidity(input);
				this._toggleButtonState(this._inputs, this._button);
			});
		});
		this._toggleButtonState(this._inputs, this._button);
	};

	enableValidation() {
		this._setEventListeners();
	};
}