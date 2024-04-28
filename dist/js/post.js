let userInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#commentButton");
let commentList = document.querySelector(".comment-list");
const errorBorder = "border-error";

//create comment card func
let userProfileImgFunc = () => {
  let userProfileImg = document.createElement("img");
  userProfileImg = document.createElement("img");
  userProfileImg.classList.add("user-profile-picture");

  userProfileImg.setAttribute("src", "#");
  userProfileImg.setAttribute("alt", "User Profile Picture");

  return userProfileImg;
};

let userProfileNameFunc = () => {
  let userProfileNameHolder = document.createElement("div");
  let style = ["flex", "flex-col", "gap-1"];
  userProfileNameHolder.classList.add(...style);

  let userProfileName = document.createElement("h3");
  userProfileName.classList.add("user-profile-name");
  userProfileName.textContent = "User Name";

  let userProfileDate = document.createElement("h4");
  userProfileDate.classList.add("user-profile-date");
  userProfileDate.textContent = "8 hours ago";

  userProfileNameHolder.appendChild(userProfileName);
  userProfileNameHolder.appendChild(userProfileDate);

  return userProfileNameHolder;
};

let userProfileHolderFunc = () => {
  let userProfile = document.createElement("div");
  userProfile.classList.add("user-profile-holder");

  userProfile.appendChild(userProfileImgFunc());
  userProfile.appendChild(userProfileNameFunc());

  return userProfile;
};

let postCommentFunc = () => {
  let style = ["text-black", "text-base", "w-full", "break-words"];
  let postComment = document.createElement("p");
  postComment.classList.add(...style);

  postComment.innerText = userInput.value;
  return postComment;
};

let commentLikeButtonFunc = () => {
  let commentLikeButton = document.createElement("button");
  let likeCount = 0;

  commentLikeButton.classList.add("likeButton");
  commentLikeButton.innerHTML = '<ion-icon name="heart"></ion-icon>';
  commentLikeButton.innerHTML += likeCount;

  return commentLikeButton;
};

submitButton.addEventListener("click", function (event) {
  if (userInput.value === "") {
    userInput.classList.add(errorBorder);
    return;
  } else {
    userInput.classList.remove(errorBorder);
  }

  let newComment = document.createElement("div");
  newComment.classList.add("comment-card");

  newComment.appendChild(userProfileHolderFunc());
  newComment.appendChild(postCommentFunc());
  newComment.appendChild(commentLikeButtonFunc());

  commentList.appendChild(newComment);

  event.preventDefault();
});

//Like button functionality
let likeButton = document.querySelectorAll(".likeButton");
console.log(likeButton);

likeButton.forEach((button) => {
  let likeCount = 0;
  button.addEventListener("click", function () {
    likeCount++;
    button.innerHTML = '<ion-icon name="heart"></ion-icon>';
    button.innerHTML += likeCount;
  });
});

//comment function
let commentCount = document.querySelector(".comment-count");

setInterval(() => {
  let commentCountNumber = document.querySelectorAll(".comment-card").length;
  commentCount.innerHTML = commentCountNumber;
}, 60000);
