const adminUserAPI = "";
const userNameContainer = "userContainer";
const userFormContainer = "userNameSearch";
const textFieldForm = "userNameSearchInput";

//Declare delete users function
function deleteUsersFunction(userIDInput) {
    console.log("Delete User: ", userIDInput);
};

//Declare ban users function
function banUsersFunction(userIDInput) {
    console.log("Ban User: ", userIDInput);
};
//Declare unban users function
function unbanUsersFunction(userIDInput) {
    console.log("Unban User: ", userIDInput);
};

//Declaire handler functions
function handleUnbanUser(event) {
    let userID = event.target.dataset.userId;
    unbanUsersFunction(userID);
};

function handleBanUser(event) {
    let userID = event.target.dataset.userId;
    banUsersFunction(userID);
};

function handleDeleteUser(event) {
    let userID = event.target.dataset.userId;
    deleteUsersFunction(userID);
};

//Add Global Event Listener to listen for dynamic buttons.

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteUserButton')) {
      handleDeleteUser(event);
    } else if (event.target.classList.contains('banUserButton')) {
      handleBanUser(event);
    } else if (event.target.classList.contains('unbanUserButton')) {
      handleUnbanUser(event);
    };

  });

async function returnUserSearch(userName) {

    try {
      
      //Refresh the innerHTML
      document.getElementById(userNameContainer).innerHTML = "";
      
      // Construct the URL with the userName parameter
      let url = `${adminUserAPI}?userName=${encodeURIComponent(userName)}`;
      
      // Make the API call with the constructed URL
      let res = await fetch(url);
  
      // Parse the response JSON
      let data = await res.json();

      let contentHtml = "";

    // Loop through the data and construct the innerHTML

    for (let key in data) {
        if (data[key].banned) {
          contentHtml += `<div class='bg-red-400 flex flex-row border-b-1 border-solid black justify-between mt-5'>
            <div id='${data[key].userId}' class='my-auto'>${data[key].username}</div>
            <div class='flex flex-row gap-5'>
      
      
                <div id="${data[key].userId}DeleteUser" class="deleteUserButton cursor-pointer min-w-[150px] border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Delete User</div>
      
      
                <div id="${data[key].userId}UnbanUser" class="unbanUserButton bg-blue-500 text-white min-w-[150px] cursor-pointer border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Unban User</div>
      
            </div>
          </div>`;
        } else {
          contentHtml += `<div class='flex flex-row border-b-1 border-solid black justify-between mt-5'>
            <div id='${data[key].userId}' class='my-auto'>${data[key].username}</div>
            <div class='flex flex-row gap-5'>
             
              <div id="${data[key].userId}DeleteUser" class="deleteUserButton cursor-pointer min-w-[150px] border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Delete User</div>
      
      
              <div id="${data[key].userId}BanUser" class="banUserButton bg-red-500 text-white min-w-[150px] cursor-pointer border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Ban User</div>
      
            </div>
          </div>`;
        }
      };
      
      //Display the innerHTML
      document.getElementById(userNameContainer).innerHTML = contentHtml;

      //attach userID into divs
      for (let key in data){
        
        let elemIdPrefix = data[key].userId;

      if (data[key].banned) {
        let unbanElement = document.getElementById(elemIdPrefix + 'UnbanUser');
        unbanElement.dataset.userId = elemIdPrefix;
      } else {
        let banElement = document.getElementById(elemIdPrefix + 'BanUser');
        banElement.dataset.userId = elemIdPrefix;
      };

      let deleteElement = document.getElementById(elemIdPrefix + 'DeleteUser');
      deleteElement.dataset.userId = elemIdPrefix;
      };

    } catch (error) {
      console.log("Error Occurred: ", error);
      return null; // return null in case of error
    };
  };
  


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

  
  });





// Pseudo Data Test


(async () => {



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
  if (data[key].banned) {
    contentHtml += `<div class='bg-red-400 flex flex-row border-b-1 border-solid black justify-between mt-5'>
      <div id='${data[key].userId}' class='my-auto'>${data[key].username}</div>
      <div class='flex flex-row gap-5'>


          <div id="${data[key].userId}DeleteUser" class="deleteUserButton cursor-pointer min-w-[150px] border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Delete User</div>


          <div id="${data[key].userId}UnbanUser" class="unbanUserButton bg-blue-500 text-white min-w-[150px] cursor-pointer border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Unban User</div>

      </div>
    </div>`;
  } else {
    contentHtml += `<div class='flex flex-row border-b-1 border-solid black justify-between mt-5'>
      <div id='${data[key].userId}' class='my-auto'>${data[key].username}</div>
      <div class='flex flex-row gap-5'>
       
        <div id="${data[key].userId}DeleteUser" class="deleteUserButton cursor-pointer min-w-[150px] border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Delete User</div>


        <div id="${data[key].userId}BanUser" class="banUserButton bg-red-500 text-white min-w-[150px] cursor-pointer border-solid black border-1 m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center">Ban User</div>

      </div>
    </div>`;
  }
};




document.getElementById(userNameContainer).innerHTML = contentHtml;


//attach userID into divs
for (let key in data){
        
    let elemIdPrefix = data[key].userId;

    if (data[key].banned) {
        let unbanElement = document.getElementById(elemIdPrefix + 'UnbanUser');
        unbanElement.dataset.userId = elemIdPrefix;
    } else {
        let banElement = document.getElementById(elemIdPrefix + 'BanUser');
        banElement.dataset.userId = elemIdPrefix;
    };
    let deleteElement = document.getElementById(elemIdPrefix + 'DeleteUser');
    deleteElement.dataset.userId = elemIdPrefix;

};
})();