const adminUserAPI = "";
const userNameContainer = "userContainer";

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
      contentHtml += `<div class='flex flex-row border-b-[1px] border-solidblack justify-between mt-5'>
          <div class='my-auto'>${data[key].userName}</div>
          <div class='flex flex-row gap-5'>
            <div class='min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center'>Delete User<ion-icon name='trash-outline'></ion-icon></div>
            <div class='bg-red-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center'>Ban User<ion-icon name='ban-outline'></ion-icon></div>
            <div class='bg-blue-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center'>Unban User<ion-icon name='ban-outline'></ion-icon></div>
          </div>
        </div>`;
    }

    document.getElementById(userNameContainer).innerHTML = contentHtml;
  } catch (error) {
    console.log("Error Occurred: ", error);
    return null; // return null in case of error
  }
}

//Pseudo Data Test

data = {
  result1: {
    userName: "User1",
  },

  result2: {
    userName: "User2",
  },

  result3: {
    userName: "User3",
  },
};
let contentHtml = "";

for (let key in data) {
  contentHtml += `<div class='flex flex-row border-b-[1px] border-solidblack justify-between mt-5'>
      <div class='my-auto'>${data[key].userName}</div>
      <div class='flex flex-row gap-5'>
        <div class='min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center'>Delete User<ion-icon name='trash-outline'></ion-icon></div>
        <div class='bg-red-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center'>Ban User<ion-icon name='ban-outline'></ion-icon></div>
        <div class='bg-blue-500 text-white min-w-[150px] cursor-pointer border-solidblack border-[1px] m-2 p-2 rounded-lg flex flex-row gap-2 justify-center items-center'>Unban User<ion-icon name='ban-outline'></ion-icon></div>
      </div>
    </div>`;
}

document.getElementById(userNameContainer).innerHTML = contentHtml;
