function previewProfilePic(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById("profile-pic-preview");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

const showPassword = document.querySelector("#show-password");
const showNewPassword = document.querySelector("#show-new-password");
const showConfirmPassword = document.querySelector("#show-confirm");

const oldPasswordInput = document.querySelector("#old-pass-input");
const newPasswordInput = document.querySelector("#new-pass-input");
const confirmPasswordInput = document.querySelector("#confirm-pass-input");

console.log(showPassword);
console.log(showNewPassword);
console.log(showConfirmPassword);

if (showPassword) {
  showPassword.addEventListener("click", (event) => {
    let password = oldPasswordInput;
    if (password.type === "password") {
      password.type = "text";
      showPassword.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`;
    } else {
      password.type = "password";
      showPassword.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
    }
  });
}

if (showNewPassword) {
  showNewPassword.addEventListener("click", (event) => {
    let password = newPasswordInput;
    if (password.type === "password") {
      password.type = "text";
      showNewPassword.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`;
    } else {
      password.type = "password";
      showNewPassword.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
    }
  });
}

if (showConfirmPassword) {
  showConfirmPassword.addEventListener("click", (event) => {
    let password = confirmPasswordInput;
    if (password.type === "password") {
      password.type = "text";
      showConfirmPassword.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`;
    } else {
      password.type = "password";
      showConfirmPassword.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
    }
  });
}

//Edit information
let username = document.querySelector("#username");
let email = document.querySelector("#email");

let usernameInput = document.querySelector("#username-setting");
let emailInput = document.querySelector("#email-setting");

let editInforBtn = document.querySelector("#edit-info-btn");
let submitEditInfoBtn = document.querySelector("#submit-edit-info-btn");

let ringErr = "ring-error";

editInforBtn.addEventListener("click", (event) => {
  usernameInput.value = username.textContent.trim();
  emailInput.value = email.textContent.trim();

  event.preventDefault();
});

let mailValid = (email) => {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

submitEditInfoBtn.addEventListener("click", (event) => {
  username.textContent = usernameInput.value;

  if (!mailValid(emailInput.value)) {
    email.textContent = "";
    return;
  } else {
    email.textContent = emailInput.value;
  }

  event.preventDefault();
});

//need to add password change functionality
