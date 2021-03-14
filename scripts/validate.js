// DOM selectors 
const validationConfig = {
  formContainer: ".form",
  formInput: ".form__input",
  formSubmitButton: ".form__submit-button",
  formInputNoValid: "form__input_type_no-valid",
  formInputErrorActive: "form__input-error_type_active"
};

// show / close error message + styles
const showError = (form, input, message, validationConfig) => {
	const error = form.querySelector(`#${input.id}-error`);
	error.textContent = message;
	error.classList.add(validationConfig.formInputErrorActive);
	input.classList.add(validationConfig.formInputNoValid);
};
const hideError = (form, input, validationConfig) => {
	const error = form.querySelector(`#${input.id}-error`);
	error.textContent = "";
	error.classList.remove(validationConfig.formInputErrorActive);
	input.classList.remove(validationConfig.formInputNoValid);
};

// check + validate inputs
const checkValidity = (form, input, validationConfig) => {
	const notValid = !input.validity.valid;
	const message = input.validationMessage;
	notValid ? showError(form, input, message, validationConfig) : hideError(form, input, validationConfig);
};

// check + toggles button states
const toggleButtonState = (inputs, button) => {
	const notValidInput = inputs.some((input) => !input.validity.valid);
	notValidInput ? button.setAttribute("disabled", true) : button.removeAttribute("disabled");
};

// set toggles + validity checks 4 inputs
const setEventListeners = (form, validationConfig) => {
	// prevent def avtion on submit
	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	// get inputs & but-s 
	const inputs = Array.from(form.querySelectorAll(validationConfig.formInput));
	const button = form.querySelector(validationConfig.formSubmitButton);

	// listen 4 but-s & imputs
	inputs.forEach((input) => {
		input.addEventListener("input", () => {
			checkValidity(form, input, validationConfig);
			toggleButtonState(inputs, button);
		});
	});

	// init toggle
	toggleButtonState(inputs, button);
};

// init whole stuff
const enableValidation = (validationConfig) => {
	const forms = Array.from(document.querySelectorAll(validationConfig.formContainer));
	forms.forEach((form) => {
		setEventListeners(form, validationConfig);
	});
};
enableValidation(validationConfig);