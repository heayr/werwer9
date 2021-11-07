import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit, popupSelector }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = document.querySelectorAll(".popup__input");
    this._formPopup = document.querySelectorAll(".popup__form");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.title] = input.value)
    );

    return this._formValues;
  }

  close() {
    this._formPopup.reset();
    super.close();

  }

  setEventListeners() {
    super.setEventListeners();

    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}



