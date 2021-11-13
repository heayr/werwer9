import { Popup } from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    // this._inputList = inputList;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input')
    this._inputValues = {};

    this.inputList.forEach(input =>
      this.inputValues[input.name] = input.value
    );
    return this._inputValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit(this._getInputValues);
    });
  }

}


