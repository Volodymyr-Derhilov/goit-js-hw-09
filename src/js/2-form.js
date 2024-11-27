'use strict';

const formData = {
  email: '',
  message: '',
};

const key = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  const email = parsedData.email.toString();
  input.value = email;

  const message = parsedData.message.toString();
  textArea.value = message;

  formData.email = [email];
  formData.message = [message];
}

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);

function inputHandler(event) {
  if (event.target.tagName === 'INPUT') {
    formData.email = [event.target.value];
  } else if (event.target.tagName === 'TEXTAREA') {
    formData.message = [event.target.value];
  }

  localStorage.setItem(key, JSON.stringify(formData));
}

function submitHandler(event) {
  event.preventDefault();

  if (input.value === '' || textArea.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(key);
  form.reset();
}
