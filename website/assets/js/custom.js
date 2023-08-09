//this js file will only work with content that isnt loaded by the span tag. 
//therefore native html require is being used instead on the contact file

let validForm = false;

let checkEmail = () => {
  let emailElement = document.getElementById("invalid-feedback-email");
  let email = document.getElementById("input-email");

  //check email
  if (checkValidEmail(email.value)) {
    emailElement.classList.add("is-valid");
    emailElement.classList.remove("is-invalid");
    return true;
  }

  else {
    emailElement.classList.add("is-invalid");
    emailElement.classList.remove("is-valid");
    return false;
  }
};

let checkValidEmail = (text) => {

  let regName = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (text === null || text.length <= 0 || !regName.test(text)) {
    return false;
  }

  return true;
}

let checkMessage = () => {
  let messageElement = document.getElementById("invalid-feedback-message");
  let message = document.getElementById("input-message");

  //check email
  if (message.value !== null && message.value !== undefined && message.value.length > 5)
  {
    messageElement.classList.add("is-valid");
    messageElement.classList.remove("is-invalid");
    return true;
  }

  else {
    messageElement.classList.add("is-invalid");
    messageElement.classList.remove("is-valid");
    return false;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("contact-form");
  console.log(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkEmail() && checkMessage()) {
      //if all good, send the request
      form.submit();
    }
  });
});
