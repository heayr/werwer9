
import { initialCards } from "./initialCards.js";


import { FormValidator } from "./FormValidator.js";

import Card from "./Card.js";
import Section from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
// import UserInfo from "./UserInfo.js";

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

// переменные для валидации!!!
const formElement = document.querySelector('.popup__form');
const editFormModalWindow = document.getElementById('popup');
const cardFormModalWindow = document.getElementById('popup_cards');


// попап для редакции
const popupEdit = document.querySelector('.profile__edit-button');
const closingButtons = document.querySelectorAll('.popup__close');
const popupProfile = document.querySelector('.popup');
const nameInput = formElement.querySelector('.popup__input_text-name');
const statusInput = formElement.querySelector('.popup__input_text-status');
const profileName = document.querySelector('.profile__title');
const statusChange = document.querySelector('.profile__subtitle');

// попап для создания новых карточек
const openCardFormButton = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('.popup_cards');
const popupBigPic = document.querySelector('.popup-big');
// const templateId = document.getElementById('template');
// const container = document.querySelector('.elements');
const cardListSelector = document.querySelector('.elements');

const pictureForm = document.querySelector('.popup__form-pic');
const newPictureUrlInput = popupPictures.querySelector('[name="input-picture-link"]');
const newPictureNameInput = popupPictures.querySelector('[name="input-picture-name"]');
const imgNameInput = popupPictures.querySelector('.input-picture-name');
const imgUrlInput = popupPictures.querySelector('.input-picture-link');

// попап больших картинок
const bigImg = document.querySelector('.popup__img');
const figcaption = document.querySelector('.popup__figcaption');
// const closeBig = document.querySelector('.popup__close-big')

// закрытие попапов мышкой
const allPopups = document.querySelectorAll('.popup');
const allPopupContainers = document.querySelectorAll('.popup__container');

// переменная кнопки для отключения её в форме т.к. найти её нужно 1 раз!
const disabledButton = popupPictures.querySelector('.popup__submit');



// константы
const editFormValidator = new FormValidator(selectors, editFormModalWindow);
editFormValidator.enableValidation();

const cardFormValidator = new FormValidator(selectors, cardFormModalWindow);
cardFormValidator.enableValidation();
// const template = document.querySelector('.template-cards'); это не работает в коде заместо  '.template-cards'

const newCardImg = new PopupWithImage(".popup-big");
// функции
function handleCardClick(title, link) {
  newCardImg.open(title, link);
}
const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, handleCardClick, '.template-cards');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  },
}, cardListSelector);

// title: cardName,
// link: cardUrl,
// alt: cardName
const form = new PopupWithForm({
  popupSelector: '.popup_cards',
  formSubmitHandler: (item) => {
    const imgCard = new Card({ title: item["input-picture-name"], link: item["input-picture-link"] }, handleCardClick, '.template-cards');
    const cardElement = imgCard.generateCard();
    defaultCardList.addItem(cardElement);
    form.close();
  },
}, cardListSelector /* похоже этот селектор не влияет ни на что */);

defaultCardList.rendererItems();

openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  /*form2.open()*/
  form.open()
});
//  листенеры
newCardImg.setEventListeners();
form.setEventListeners();


// const defaultCardList = new Section({
//   data: initialCards,
//   renderer: (item) => {
//     const card = new Card({
//       data: item,
//       handleCardClick: () => {
//         newCardImg.open(item);
//       }
//     }, '.template-cards');
//     const cardElement = card.generateCard();
//     defaultCardList.addItem(cardElement);
//   }
// },
//   cardListSelector);


// const form2 = new PopupWithForm({
//   popupSelector: '.popup_cards',
//   formSubmitHandler: (item) => {
//     const imgCard = new Card({
//       data: item,
//       handleCardClick
//     }, '.template-cards');
//     const cardElement = imgCard.generateCard();
//     defaultCardList.addItem(cardElement);
//     form2.close();
//   }
// });



// form2.setEventListeners();








// const popupCardName = document.querySelector('.popup__input_picture-name');
// const popupURL = document.querySelector('.popup__input_picture-link');

// const inputListCreate = Array.from(editFormModalWindow.querySelectorAll('.popup__input'));







// <-------- новый функционал через Class Card --------->
// function createCard(item) {
//   return (new Card(item, '#template')).generateCard();
// }


// cardFormValidator.addEventListener('submit', formSubmitHandler);

// <-------- новый функционал через Class Card --------->













// eventListener'Ы

// popupEdit.addEventListener('click', onClickEdit);
// openCardFormButton.addEventListener('click', () => {
//   cardFormValidator.updateErrorsAndButtonState(cardFormModalWindow);
//   form2.open()
// });

// formElement.addEventListener('submit', handleFormSubmitHandler);






