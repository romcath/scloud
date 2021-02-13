/* eslint-disable no-use-before-define */
import './index.css';

const cardTextOrangeButton = document.querySelector('.card__btn-text_color_orange');
const cardTextOrangeContairer = document.querySelector('.card__text-content_color_orange');
const cardTextGreenButton = document.querySelector('.card__btn-text_color_green');
const cardTextGreenContairer = document.querySelector('.card__text-content_color_green');

const handleEnableTextOrange = () => {
  cardTextOrangeContairer.classList.remove('card__text-content_hide');
  cardTextOrangeButton.textContent = 'Подробнее';
  cardTextOrangeButton.removeEventListener('click', handleEnableTextOrange);
  cardTextOrangeButton.addEventListener('click', handleDisableTextOrange);
};

const handleDisableTextOrange = () => {
  cardTextOrangeContairer.classList.add('card__text-content_hide');
  cardTextOrangeButton.textContent = 'Скрыть';
  cardTextOrangeButton.removeEventListener('click', handleDisableTextOrange);
  cardTextOrangeButton.addEventListener('click', handleEnableTextOrange);
};

const handleEnableTextGreen = () => {
  cardTextGreenContairer.classList.remove('card__text-content_hide');
  cardTextGreenButton.textContent = 'Подробнее';
  cardTextGreenButton.removeEventListener('click', handleEnableTextGreen);
  cardTextGreenButton.addEventListener('click', handleDisableTextGreen);
};

const handleDisableTextGreen = () => {
  cardTextGreenContairer.classList.add('card__text-content_hide');
  cardTextGreenButton.textContent = 'Скрыть';
  cardTextGreenButton.removeEventListener('click', handleDisableTextGreen);
  cardTextGreenButton.addEventListener('click', handleEnableTextGreen);
};

cardTextOrangeButton.addEventListener('click', handleDisableTextOrange);
cardTextGreenButton.addEventListener('click', handleDisableTextGreen);
