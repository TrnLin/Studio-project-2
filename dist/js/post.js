let userInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#commentButton");
let commentList = document.querySelector(".comment-list");
const errorBorder = "border-error";

const userarr = {
  user: {
    username: "Cara56",
    profileimage: "https://picsum.photos/seed/FQMyFM/640/480",
    comments:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    date: "2022-06-27T18:26:15.934Z",
  },
  user: {
    username: "Cara56",
    profileimage: "https://picsum.photos/seed/FQMyFM/640/480",
    comments:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    date: "2022-06-27T18:26:15.934Z",
  },
  user: {
    username: "Kian_Berge38",
    profileimage: "https://loremflickr.com/640/480?lock=5217706299097088",
    comments:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    date: "2022-02-27T18:05:14.618Z",
  },
};

submitButton.addEventListener("click", function (event) {
  if (userInput.value === "") {
    userInput.classList.add(errorBorder);
    return;
  } else {
    userInput.classList.remove(errorBorder);
  }

  event.preventDefault();
});
