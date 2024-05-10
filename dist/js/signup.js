const errorBorder = "ring-error";
const errorText = "text-error";
const successText = "text-success";
const successBorder = "border-success";

//Username validation
const userNameInput = document.querySelector("#username");
const userValidText = document.querySelector(".user-valid");
const userNameHolder = document.querySelector("#username-holder");

//Email validation
const emailInput = document.querySelector("#email");
const emailValidText = document.querySelector(".email-valid");
const emailHolder = document.querySelector("#email-holder");
let emailValidRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Password validation
const passwordInput = document.querySelector("#password");
const passUpperValid = document.querySelector(".pass-upper-valid");
const passNumValid = document.querySelector(".pass-number-valid");
const passLengthValid = document.querySelector(".pass-length-valid");
const passValidText = document.querySelector(".pass-valid");
const passHolder = document.querySelector("#password-holder");
let passUpperRegex = /[A-Z]/;
let passNumRegex = /[0-9]/;
let passLengthRegex = /^.{8,20}$/;

//Confirm password validation
const confirmPasswordInput = document.querySelector("#confirm");
const confirmValidText = document.querySelector(".confirm-valid");
const confirmPasswordHolder = document.querySelector("#confirm-holder");

//Submit button
const registerBtn = document.querySelector("#submitRegistration");
const loginBtn = document.querySelector("#submitLogin");
const form = document.querySelector("#sign-up-form");

let userNameValid = (name) => {
  if (name === "") {
    userNameHolder.classList.add(errorBorder);
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
    emailHolder.classList.add(errorBorder);
    emailValidText.innerHTML = "Email cannot be empty";
    return false;
  } else if (!emailValidRegex.test(email)) {
    emailHolder.classList.add(errorBorder);
    emailValidText.innerHTML = "Invalid email format";
    return false;
  } else {
    emailValidText.innerHTML = "";
    emailHolder.classList.remove(errorBorder);
    return true;
  }
};

let passwordValid = (password) => {
  let passwordValid = false;

  //Password validation
  //check if password is empty
  if (password === "") {
    passHolder.classList.add(errorBorder);
    passValidText.innerHTML = "Password cannot be empty";

    return false;
  } else {
    passValidText.innerHTML = "";
  }

  //check if password has uppercase letter
  if (!passUpperRegex.test(password[0])) {
    passHolder.classList.add(errorBorder);
    passUpperValid.classList.add(errorText);
    passUpperValid.classList.remove(successText);

    passwordValid = false;
  } else {
    passHolder.classList.remove(errorText);
    passUpperValid.classList.add(successText);
    passwordInput.classList.remove(errorBorder);

    // passwordValid = true;
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

    // passwordValid = true;
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

    // passwordValid = true;
  }

  passwordValid =
    passUpperRegex.test(password[0]) &&
    passNumRegex.test(password) &&
    passLengthRegex.test(password);
  return passwordValid;
};

//Confirm password validation
let confirmPasswordValid = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    confirmPasswordHolder.classList.add(errorBorder);
    confirmPasswordHolder.classList.remove(successBorder);
    confirmValidText.innerHTML = "Passwords do not match";
    return false;
  } else if (confirmPassword === "") {
    confirmPasswordHolder.classList.add(errorBorder);
    confirmValidText.innerHTML = "Confirm password cannot be empty";
    return false;
  } else {
    confirmValidText.innerHTML = "";
    confirmPasswordHolder.classList.remove(errorBorder);
    confirmPasswordHolder.classList.add(successBorder);
    return true;
  }
};

//show password
const showPassword = document.querySelector("#show-password");
const showConfirmPassword = document.querySelector("#show-confirm");

console.log(showPassword);

if (showPassword) {
  showPassword.addEventListener("click", (event) => {
    let password = passwordInput;
    if (password.type === "password") {
      password.type = "text";
      showPassword.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`;
    } else {
      password.type = "password";
      showPassword.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
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
//Event listener for submit button
if (registerBtn) {
  registerBtn.addEventListener("click", async (event) => {
    let userNameVal = userNameInput.value;
    let emailVal = emailInput.value;
    let passwordVal = passwordInput.value;
    let confirmPasswordVal = confirmPasswordInput.value;

    let valid;
    let userTemp = userNameValid(userNameVal);
    let emailTemp = emailValid(emailVal);
    let passwordTemp = passwordValid(passwordVal);
    let confirmTemp = confirmPasswordValid(passwordVal, confirmPasswordVal);

    valid = userTemp && emailTemp && passwordTemp && confirmTemp;

    event.preventDefault();

    //Create post request to register user
    if (valid) {
      try {
        // Create post request to register user
        const res = await fetch("/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userNameVal,
            email: emailVal,
            password: passwordVal,
          }),
        });

        // Check the status code of the response
        switch (res.status) {
          case 200:
            // If the user is registered successfully, redirect to login page
            alert("User registered successfully");
            window.location.href = "/user/login";
            break;
          default:
            // If the user is not registered successfully, alert the user
            const data = await res.json();
            console.log(`Code ${res.status}: ${data.message}`);
            alert(data.message);
            break;
        }
      } catch (error) {
        // If there is an error, it will print the error
        console.log("Fetch error: ", error);
      }
    }
  });
}

// Event listener for login button
if (loginBtn) {
  loginBtn.addEventListener("click", async (event) => {
    let userNameVal = userNameInput.value;
    let passwordVal = passwordInput.value;
    event.preventDefault();

    try {
      // Create post request to login user
      const res = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameVal,
          password: passwordVal,
        }),
      });

      // Check the status code of the response
      switch (res.status) {
        case 200:
          // If the user is registered successfully, redirect to login page
          alert("User logged in successfully");
          window.location.href = "/";
          break;
        default:
          // If the user is not registered successfully, alert the user
          const data = await res.json();
          console.log(`Code ${res.status}: ${data.message}`);
          alert(data.message);
          break;
      }
    } catch (err) {
      // If there is an error, it will print the error
      console.log("Fetch error: ", err);
    }
  });
}
