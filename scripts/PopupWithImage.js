import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupImg) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__img')
    this._popupImg = popupImg;
    this._popupText = document.querySelector('.popup__figcaption')
  }


  open(data) {
    this._popupImage.src = data.link;
    this._popupText.src = data.title;
    this._popupText.textContent = data.title;
    super.open();
    super.setEventListeners();
  }

  // open(title, link) {
  //   super.open()
  //   this._title = title;
  //   this._link = link;
  //   this._popupImg.querySelector('.popup__figcaption').textContent = this.title;
  //   this._popupImg.querySelector('.popup__img').src = this._link;
  // }

  // close() {
  //   super.close();
  //   this._popupImg.src = '';
  //   this._popupImg.alt = '';
  //   this._popupText.textContent = '';
  // }
}

