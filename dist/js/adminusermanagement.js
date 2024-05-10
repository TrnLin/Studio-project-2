const adminUserAPI = "";
const userNameContainer = "userContainer";
const userFormContainer = "userNameSearch";
const textFieldForm = "userNameSearchInput";

async function returnUserSearch(userName) {
  try {
    //Refresh the innerHTML
    document.getElementById(userNameContainer).innerHTML = "";

    // Construct the URL with the userName parameter
    const url = `${adminUserAPI}?userName=${encodeURIComponent(userName)}`;

    // Make the API call with the constructed URL
    const res = await fetch(url);

    // Parse the response JSON
    const data = await res.json();

    let contentHtml = "";

    // Loop through the data and construct the innerHTML

    for (let key in data) {
      if (data[key].banned == true) {
        contentHtml += `<div class='bg-red-400 flex flex-row border-b-[1px] border-solidblack justify-between mt-5'>
            <div id='${data[key].userId}' class='my-auto'>${data[key].userName}</div>
            <div class='flex flex-row gap-5'>
            <form id="" class="deleteUser">
              <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
              <input type="submit" value="Delete User" class="cursor-pointer min-w-[150px] border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
            </form>
                <form id="" class="unBanButton">
              <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
              <input type="submit" value="Unban User" class="bg-blue-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
            </form>
            </div>
            </div>`;
      } else {
        contentHtml += `<div class='flex flex-row border-b-[1px] border-solidblack justify-between mt-5'>
            <div id='${data[key].userId}' class='my-auto'>${data[key].userName}</div>
            <div class='flex flex-row gap-5'>
            <form id="" class="deleteUser">
            <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
            <input type="submit" value="Delete User" class="cursor-pointer min-w-[150px] border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
          </form>
                <form id="" class="banButton">
              <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
              <input type="submit" value="Ban User" class="bg-red-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
            </form>
            </div>
            </div>`;
      }
    }

    document.getElementById(userNameContainer).innerHTML = contentHtml;
  } catch (error) {
    console.log("Error Occurred: ", error);
    return null; // return null in case of error
  }
}

// Return the user search
document
  .getElementById(userFormContainer)
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the text input
    let userInput = document.getElementById(textFieldForm).value;

    // Call the function to make the API call
    returnUserSearch(userInput);

    //Attach listeners to results
    let banButtonsVar = document.getElementsByClassName("banButton");
    let unBanButtonsVar = document.getElementsByClassName("unBanButton");
    let deleteUserButtonsVar = document.getElementsByClassName("deleteUser");

    for (let i = 0; i < banButtonsVar.length; i++) {
      banButtonsVar[i].addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }

    for (let i = 0; i < unBanButtonsVar.length; i++) {
      unBanButtonsVar[i].addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }

    for (let i = 0; i < deleteUserButtonsVar.length; i++) {
      deleteUserButtonsVar[i].addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }
  });

//Pseudo Data Test

data = {
  result1: {
    username: "User1",
    userId: "1",
    banned: true,
  },

  result2: {
    username: "User2",
    userId: "2",
    banned: false,
  },

  result3: {
    username: "User3",
    userId: "3",
    banned: true,
  },
};
let contentHtml = "";

for (let key in data) {
  if (data[key].banned == true) {
    contentHtml += `<div class='bg-red-400 flex flex-row border-b-[1px] border-solidblack justify-between mt-5'>
        <div id='${data[key].userId}' class='my-auto'>${data[key].username}</div>
        <div class='flex flex-row gap-5'>
        <form id="" class="deleteUser">
        <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
        <input type="submit" value="Delete User" class="cursor-pointer min-w-[150px] border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
      </form>
            <form id="" class="unBanButton">
          <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
          <input type="submit" value="Unban User" class="bg-blue-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
        </form>
        </div>
        </div>`;
  } else {
    contentHtml += `<div class='flex flex-row border-b-[1px] border-solidblack justify-between mt-5'>
        <div id='${data[key].userId}' class='my-auto'>${data[key].username}</div>
        <div class='flex flex-row gap-5'>
        <form id="" class="deleteUser">
        <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
        <input type="submit" value="Delete User" class="cursor-pointer min-w-[150px] border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
      </form>
            <form id="" class="banButton">
          <input type="text" class="hidden" id="${data[key].userId}" name="${data[key].userId}" value="${data[key].userId}">
          <input type="submit" value="Ban User" class="bg-red-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">
        </form>
        </div>
        </div>`;
  }
}

document.getElementById(userNameContainer).innerHTML = contentHtml;

//Attach listeners to results
let banButtonsVar = document.getElementsByClassName("banButton");
let unBanButtonsVar = document.getElementsByClassName("unBanButton");
let deleteUserButtonsVar = document.getElementsByClassName("deleteUser");

for (let i = 0; i < banButtonsVar.length; i++) {
  banButtonsVar[i].addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

for (let i = 0; i < unBanButtonsVar.length; i++) {
  unBanButtonsVar[i].addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

for (let i = 0; i < deleteUserButtonsVar.length; i++) {
  deleteUserButtonsVar[i].addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
