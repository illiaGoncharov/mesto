// ODM selectors 
const selectors = {
  formContainer: ".form",
  formInput: ".form__input",
  formSubmitButton: ".form__submit-button",
  formInputNoValid: "form__input_type_no-valid",
  formInputErrorActive: "form__input-error_type_active"
};

// show / close error message + styles
const showError = (form, input, message, selectors) => {
	const error = form.querySelector(`#${input.id}-error`);
	error.textContent = message;
	error.classList.add(selectors.formInputErrorActive);
	input.classList.add(selectors.formInputNoValid);
};
const hideError = (form, input, selectors) => {
	const error = form.querySelector(`#${input.id}-error`);
	error.textContent = "";
	error.classList.remove(selectors.formInputErrorActive);
	input.classList.remove(selectors.formInputNoValid);
};

// check + validate inputs
const checkValidity = (form, input, selectors) => {
	const notValid = !input.validity.valid;
	const message = input.validationMessage;
	notValid ? showError(form, input, message, selectors) : hideError(form, input, selectors);
};

// check + toggles button states
const toggleButtonState = (inputs, button) => {
	const notValidInput = inputs.some((input) => !input.validity.valid);
	notValidInput ? button.setAttribute("disabled", true) : button.removeAttribute("disabled");
};

// set toggles + validity checks 4 inputs
const setEventListeners = (form, selectors) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	const inputs = Array.from(form.querySelectorAll(selectors.formInput));
	const button = form.querySelector(selectors.formSubmitButton);

	inputs.forEach((input) => {
		input.addEventListener("input", () => {
			checkValidity(form, input, selectors);
			toggleButtonState(inputs, button);
		});
	});
	toggleButtonState(inputs, button);
};

// init whole stuff
const enableValidation = (selectors) => {
	const forms = Array.from(document.querySelectorAll(selectors.formContainer));
	forms.forEach((form) => {

		setEventListeners(form, selectors);
	});
};
enableValidation(selectors);