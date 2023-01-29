'use strict';

/* ========== Id's =========== */
const toggleOn = document.getElementById('toggle-on-calendar');
const toggleOff = document.getElementById('toggle-off-calendar');
const addItem = document.getElementById('add-item');
const createModal = document.getElementById('create');
const createCard = document.getElementById('card');
const closeModal = document.getElementById('close-modal');
const popUp = document.getElementById('popup');
const popUpCard = document.getElementById('popup-card');
const closePopUpOne = document.getElementById('close-popup-1');
const closePopUpTwo = document.getElementById('close-popup-2');

/* ========== Classes =========== */
const sideItems = document.querySelectorAll('li');
const calendarSection = document.querySelector('.calendar');

sideItems.forEach((filter) => {
  filter.addEventListener('click', function () {
    sideItems.forEach((item) => item.classList.remove('active'));

    this.classList.add('active');
  });
});

toggleOn.addEventListener('click', () => {
  calendarSection.classList.add('active');
  toggleOn.style.display = 'none';
});

toggleOff.addEventListener('click', () => {
  calendarSection.classList.remove('active');
  toggleOn.style.display = 'grid';
});

addItem.addEventListener('click', () => {
  createModal.classList.add('active');
  createCard.classList.add('active');
});

closeModal.addEventListener('click', () => {
  createModal.classList.remove('active');
  createCard.classList.remove('active');
});

window.onload = function () {
  popUp.classList.add('active');
  popUpCard.classList.add('active');
};

closePopUpOne.addEventListener('click', () => {
  popUp.classList.remove('active');
  popUpCard.classList.remove('active');
});

closePopUpTwo.addEventListener('click', () => {
  popUp.classList.remove('active');
  popUpCard.classList.remove('active');
});
