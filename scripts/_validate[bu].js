// show / close error message + styles
const showError = (form, input, message, validationSelectors) => {
	const error = form.querySelector(`#${input.id}-error`);
	error.textContent = message;
	error.classList.add(validationSelectors.formInputErrorActive);
	input.classList.add(validationSelectors.formInputNoValid);
};
const hideError = (form, input, validationSelectors) => {
	const error = form.querySelector(`#${input.id}-error`);
	error.textContent = "";
	error.classList.remove(validationSelectors.formInputErrorActive);
	input.classList.remove(validationSelectors.formInputNoValid);
};

// check + validate inputs
const checkValidity = (form, input, validationSelectors) => {
	const notValid = !input.validity.valid;
	const message = input.validationMessage;
	notValid ? showError(form, input, message, validationSelectors) : hideError(form, input, validationSelectors);
};

// check + toggles button states
const toggleButtonState = (inputs, button) => {
	const notValidInput = inputs.some((input) => !input.validity.valid);
	notValidInput ? button.setAttribute("disabled", true) : button.removeAttribute("disabled");
};

// set toggles + validity checks 4 inputs
const setEventListeners = (form, validationSelectors) => {
	// get inputs & but-s 
	const inputs = Array.from(form.querySelectorAll(validationSelectors.formInput));
	const button = form.querySelector(validationSelectors.formSubmitButton);

	// prevent page reload + empty card creation on after first submit
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		button.setAttribute("disabled", true);
	});

	// listen 4 but-s & imputs
	inputs.forEach((input) => {
		input.addEventListener("input", () => {
			checkValidity(form, input, validationSelectors);
			toggleButtonState(inputs, button);
		});
	});

	// init toggle
	toggleButtonState(inputs, button);
};

// init whole stuff
const enableValidation = (validationSelectors) => {
	const forms = Array.from(document.querySelectorAll(validationSelectors.formContainer));
	forms.forEach((form) => {
		setEventListeners(form, validationSelectors);
	});
};
enableValidation(validationSelectors);