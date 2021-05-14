import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructior(selector) {
        super(selector);
    }

    open({name, link}) {
        const popupImage = this._selector.querySelector(".popup__img");
        const popupImageCaption = this._selector.querySelector('.popup__img-caption');
        popupImage.alt = name;
        popupImage.src = link;
        popupImageCaption.textContent = name;
        super.open();
    }
}