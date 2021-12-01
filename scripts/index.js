
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

function handleCardClick(title, link) {
  newCardImg.open(title, link);
}



const newCardImg = new PopupWithImage(".popup-big");
newCardImg.setEventListeners();

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: () => {
        newCardImg.open(item);
      }
    }, '.template-cards');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
},
  cardListSelector);

const template = document.querySelector('.template-cards');

const form2 = new PopupWithForm({
  popupSelector: '.popup_cards',
  formSubmitHandler: (item) => {
    const imgCard = new Card(item, handleCardClick, template);
    const cardElement = imgCard.generateCard();
    defaultCardList.addItem(cardElement);
    form2.close();
  }
});


// const form2 = new PopupWithForm({
//   popupSelector: '.popup_cards',
//   formSubmitHandler: (item) => {
//     const cardImg = new Card({
//       data: item,
//       handleCardClick: () => {
//         newCardImg.open(item);
//       }
//     }, '.template-cards');
//     const cardElement = cardImg.generateCard();
//     defaultCardList.addItem(cardElement);
//   }
// }, cardListSelector);

form2.setEventListeners();

// form2.setEventListeners();

// const form = new PopupWithForm({
//   popupSelector: ".popup_cards",
//   formSubmitHandler: (item) => {
//     const card = new Card(item, {
//       handleCardClick: () => {
//         newCardImg.open();
//       }
//     }, ".template-cards");
//     const cardElement = card.generateCard();
//     defaultCardList.addItem(cardElement);
//     form.close();
//   }
// });

/*
const form = new PopupWithForm({
  popupSelector: '.popup_cards',
  formSubmitHandler: () => {
    const cardObj = {};
    cardObj.title = imgNameInput.value;
    cardObj.link = imgUrlInput.value;
    const card = new Card({
      data: cardObj, handleCardClick: () => {
        newCardImg.open(cardObj);
      }
    }, '.template-cards');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
    form.close();
  }
});
*/

defaultCardList.rendererItems();






const popupCardName = document.querySelector('.popup__input_picture-name');
const popupURL = document.querySelector('.popup__input_picture-link');

const inputListCreate = Array.from(editFormModalWindow.querySelectorAll('.popup__input'));







// <-------- новый функционал через Class Card --------->
// function createCard(item) {
//   return (new Card(item, '#template')).generateCard();
// }

const editFormValidator = new FormValidator(selectors, editFormModalWindow);
editFormValidator.enableValidation();

const cardFormValidator = new FormValidator(selectors, cardFormModalWindow);
cardFormValidator.enableValidation();

openCardFormButton.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  // openModalWindow(cardFormModalWindow);
  form2.open()

});

// <-------- новый функционал через Class Card --------->













// eventListener'Ы

// popupEdit.addEventListener('click', onClickEdit);
// openCardFormButton.addEventListener('click', () => {
//   cardFormValidator.updateErrorsAndButtonState(cardFormModalWindow);
//   form2.open()
// });

// formElement.addEventListener('submit', handleFormSubmitHandler);






