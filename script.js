//simple email validation
const firstNameInput = document.querySelector("#first-name-input");
const submitBtn = document.querySelector("#submit-btn");
const lastname = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastname.onkeyup = () => {
  lastname.classList.remove("is-valid");
  lastname.classList.remove("is-invalid");
};
email.onkeyup = () => {
  email.classList.remove("is-valid");
  email.classList.remove("is-invalid");
};
password.onkeyup = () => {
  password.classList.remove("is-valid");
  password.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isfristNameOk = false;
  let islastNameOK = false;
  let emailOK = false;
  let passwordOK = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isfristNameOk = true;
  }
  if (lastname.value === "") {
    lastname.classList.add("is-invalid");
  } else {
    lastname.classList.add("is-valid");
    islastNameOK = true;
  }
  if (!validateEmail(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.add("is-valid");
    emailOK = true;
  }
  if (password.value === "" || password.value.length < 6) {
    password.classList.add("is-invalid");
  } else {
    password.classList.add("is-valid");
    passwordOK = true;
  }

  if (isfristNameOk && islastNameOK && emailOK && passwordOK) {
    alert("Registered successfully");
  }
};
