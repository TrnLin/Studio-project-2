const errorBorder = "border-error";
const errorText = "text-error";
const successText = "text-success";
const successBorder = "border-success";

//Username validation
const userNameInput = document.querySelector("#username");
const userValidText = document.querySelector(".user-valid");

//Email validation
const emailInput = document.querySelector("#email");
const emailValidText = document.querySelector(".email-valid");
let emailValidRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Password validation
const passwordInput = document.querySelector("#password");
const passUpperValid = document.querySelector(".pass-upper-valid");
const passNumValid = document.querySelector(".pass-number-valid");
const passLengthValid = document.querySelector(".pass-length-valid");
const passValidText = document.querySelector(".pass-valid");
let passUpperRegex = /[A-Z]/;
let passNumRegex = /[0-9]/;
let passLengthRegex = /^.{8,20}$/;

//Confirm password validation
const confirmPasswordInput = document.querySelector("#confirm");
const confirmValidText = document.querySelector(".confirm-valid");
//Submit button
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#sign-up-form");

let userNameValid = (name) => {
  if (name === "") {
    userNameInput.classList.add(errorBorder);
    userValidText.innerHTML = "Username cannot be empty";
    return false;
  } else {
    userValidText.innerHTML = "";
    userNameInput.classList.remove(errorBorder);
    return true;
  }
};

let emailValid = (email) => {
  if (email === "") {
    emailInput.classList.add(errorBorder);
    emailValidText.innerHTML = "Email cannot be empty";
    return false;
  } else if (!emailValidRegex.test(email)) {
    emailInput.classList.add(errorBorder);
    emailValidText.innerHTML = "Invalid email format";
    return false;
  } else {
    emailValidText.innerHTML = "";
    emailInput.classList.remove(errorBorder);
    return true;
  }
};

let passwordValid = (password) => {
  let passwordValid = false;

  //Password validation
  //check if password is empty
  if (password === "") {
    passwordInput.classList.add(errorBorder);
    passValidText.innerHTML = "Password cannot be empty";

    return false;
  } else {
    passValidText.innerHTML = "";
  }

  //check if password has uppercase letter
  if (!passUpperRegex.test(password[0])) {
    passwordInput.classList.add(errorBorder);
    passUpperValid.classList.add(errorText);
    passUpperValid.classList.remove(successText);

    passwordValid = false;
  } else {
    passUpperValid.classList.remove(errorText);
    passUpperValid.classList.add(successText);
    passwordInput.classList.remove(errorBorder);

    passwordValid = true;
  }

  //check if password has a number
  if (!passNumRegex.test(password)) {
    passwordInput.classList.add(errorBorder);
    passNumValid.classList.add(errorText);
    passNumValid.classList.remove(successText);

    passwordValid = false;
  } else {
    passNumValid.classList.remove(errorText);
    passwordInput.classList.remove(errorBorder);
    passNumValid.classList.add(successText);

    passwordValid = true;
  }

  //check if password length is between 8 and 20
  if (!passLengthRegex.test(password)) {
    passwordInput.classList.add(errorBorder);
    passLengthValid.classList.add(errorText);
    passLengthValid.classList.remove(successText);

    passwordValid = false;
  } else {
    passLengthValid.classList.remove(errorText);
    passwordInput.classList.remove(errorBorder);
    passLengthValid.classList.add(successText);

    passwordValid = true;
  }

  return passwordValid;
};

//Confirm password validation
let confirmPasswordValid = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    confirmPasswordInput.classList.add(errorBorder);
    confirmPasswordInput.classList.remove(successBorder);
    confirmValidText.innerHTML = "Passwords do not match";
    return false;
  } else if (confirmPassword === "") {
    confirmPasswordInput.classList.add(errorBorder);
    confirmValidText.innerHTML = "Confirm password cannot be empty";
    return false;
  } else {
    confirmValidText.innerHTML = "";
    confirmPasswordInput.classList.remove(errorBorder);
    confirmPasswordInput.classList.add(successBorder);
    return true;
  }
};

submitBtn.addEventListener("click", (event) => {
  let userNameVal = userNameInput.value;
  let emailVal = emailInput.value;
  let passwordVal = passwordInput.value;
  let confirmPasswordVal = confirmPasswordInput.value;

  let valid;

  valid = userNameValid(userNameVal);
  valid = emailValid(emailVal);
  valid = passwordValid(passwordVal);
  valid = confirmPasswordValid(passwordVal, confirmPasswordVal);

  event.preventDefault();
});
