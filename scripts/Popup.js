export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._selector.classList.add(".popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._selector.classList.remove(".popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key == "Escape") {
      this.close()
    };
  }

  setEventListeners(selector) {
     this._selector.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup_opened") || e.target.classList.contains("popup__close-button")) {
        this.close();
      }
    });
  }
}