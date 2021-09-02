`use strict `;

// HTML Elements
const form = document.querySelector(`#registration_form`);
const firstName = document.querySelector(`#firstname`);
const surName = document.querySelector(`#surname`);
const email = document.querySelector(`#email`);
const confirmEmail = document.querySelector(`#confirmemail`);
const phone = document.querySelector(`#phone`);
const age = document.querySelector(`#age`);
const ageValue = document.querySelector(`.ageValue`);
const stdyes = document.querySelector(`#student_yes`);
const stdno = document.querySelector(`#student_no`);
const empyes = document.querySelector(`#emp_yes`);
const empno = document.querySelector(`#emp_no`);

// Display General Error Statement
const displayError = function (el, err = `is required`) {
  const markup = `<div class='error'>${el.name} ${err}</div>`;
  el.insertAdjacentHTML("afterend", markup);
};

// Validates Email Data
function emailRegex() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return;
  } else {
    displayError(email, `format invalid`);
  }
}

//Validates phone data
function phoneRegex() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(phone.value)) {
    return;
  } else {
    displayError(phone, `format invalid`);
  }
}

//Checking each field
const checkForm = function () {
  if (firstName.value === "") {
    displayError(firstName);
  }
  if (surName.value === "") {
    displayError(surName);
  }
  if (email.value === "") {
    displayError(email);
  } else if (email.value !== "") {
    emailRegex(email);
  }
  if (confirmEmail.value === "") {
    displayError(confirmEmail);
  }
  if (confirmEmail.value !== email.value) {
    displayError(confirmEmail, `does not match Email address.`);
  }
  if (phone.value === "") {
    displayError(phone);
  }

  if (age.value < 16) {
    displayError(age, `must be greater than 16`);
  }
  if (empyes.checked === false && empno.checked === false) {
    displayError(empno);
  }
  if (stdyes.checked === false && stdno.checked === false) {
    displayError(stdno);
  } else console.log(`Form Submitted`);
};

// Event Listner for different false conditions

confirmEmail.addEventListener(`paste`, (e) => {
  e.preventDefault();
});

age.addEventListener(`input`, () => {
  ageValue.innerHTML = age.value;
});

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  checkForm;
});
