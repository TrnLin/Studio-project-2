const errorBorder = "border-error";
const errorText = "text-error";

//Username validation
const userNameInput = document.querySelector("#username");
const userValidText = document.querySelector(".user-valid");

//Email validation
const emailInput = document.querySelector("#email");
const emailValidText = document.querySelector(".email-valid");
let emailValidRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

submitBtn.addEventListener("click", (event) => {
  let userNameVal = userNameInput.value;
  let emailVal = emailInput.value;

  let valid;

  valid = userNameValid(userNameVal);
  valid = emailValid(emailVal);

  event.preventDefault();
});

// let emailValid = (email) => {
//   if (email === "") {
//     emailInput.classList.add(errorBorder);
//     emailValid.innerHTML = "Email cannot be empty";
//     return false;
//   } else if (!emailValidRegex.test(email)) {
//     emailInput.classList.add(errorBorder);
//     emailValid.innerHTML = "Invalid email format";
//     return false;
//   } else {
//     emailValid.innerHTML = "";
//     emailInput.classList.remove(errorBorder);
//     return true;
//   }
// };

// submitBtn.addEventListener("click", (event) => {
//   let emailVal = emailInput.value;

//   emailValid(emailVal);

//   event.preventDefault();
// });
