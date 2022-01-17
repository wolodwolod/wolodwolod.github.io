import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input[type="email"] '),
      textarea: document.querySelector('.feedback-form  textarea'),
};
populateTextarea();

const formStateValue = {
    email: refs.input.value,
    message: refs.textarea.value
};

// console.log(formStateValue);

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));


function onEmailInput(e) {
    formStateValue.email = e.target.value;
    // console.log(formStateValue);

  localStorage.setItem("feedback-form-state", JSON.stringify(formStateValue));
};

function onTextareaInput(e) {
    formStateValue.message = e.target.value;
    // console.log(formStateValue);

  localStorage.setItem("feedback-form-state", JSON.stringify(formStateValue));
};

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formStateValue);
  e.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
};

function populateTextarea() {
    const savedFormStateValue = localStorage.getItem("feedback-form-state");

    // console.log(savedFormStateValue);

    const parsedSavedFormStateValue = JSON.parse(savedFormStateValue);

// console.log(parsedSavedFormStateValue);

        if (savedFormStateValue) {
        refs.input.value = parsedSavedFormStateValue.email;
        refs.textarea.value = parsedSavedFormStateValue.message
           }
};
