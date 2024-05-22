let userInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#commentButton");
let commentList = document.querySelector(".comment-list");
const errorBorder = "ring-error";

//create comment card func
let userProfileImgFunc = () => {
  let userProfileImg = document.createElement("img");
  userProfileImg.classList.add("user-profile-picture");

  userProfileImg.setAttribute("src", "#"); //Todo: Add user profile picture url
  userProfileImg.setAttribute("alt", "User Profile Picture");

  return userProfileImg;
};

let userProfileNameFunc = () => {
  let userProfileNameHolder = document.createElement("div");
  let style = ["flex", "flex-col", "gap-1"];
  userProfileNameHolder.classList.add(...style);

  let userProfileName = document.createElement("h3");
  userProfileName.classList.add("user-profile-name");
  userProfileName.textContent = "User Name"; // Todo: Add user name

  let userProfileDate = document.createElement("h4");
  userProfileDate.classList.add("user-profile-date");
  userProfileDate.textContent = "8 hours ago"; //Todo: Add date

  userProfileNameHolder.appendChild(userProfileName);
  userProfileNameHolder.appendChild(userProfileDate);

  return userProfileNameHolder;
};

//dont need to modify this
let userProfileHolderFunc = () => {
  let userProfile = document.createElement("div");
  userProfile.classList.add("user-profile-holder");

  userProfile.appendChild(userProfileImgFunc());
  userProfile.appendChild(userProfileNameFunc());

  return userProfile;
};

//dont need to modify this
let commentHeaderFunc = () => {
  let commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");

  commentHeader.appendChild(userProfileHolderFunc());
  // commentHeader.appendChild(popoverFunc());

  return commentHeader;
};

// let popoverFunc = () => {
//   let popover = document.createElement("div");
//   popover.classList.add("popover");
//   popover.setAttribute("data-popover-target", "comment-popover");
//   popover.setAttribute("data-popover-trigger", "click");
//   popover.setAttribute("data-popover-placement", "left");

//   popover.innerHTML =
//     '<ion-icon name="ellipsis-vertical" class="text-[25px]"></ion-icon>';

//   return popover;
// };

let postCommentFunc = () => {
  let style = [
    "text-black",
    "text-base",
    "w-full",
    "break-words",
    "xl:text-sm",
  ];
  let postComment = document.createElement("p");
  postComment.classList.add(...style);

  // or can be load with json fetch

  postComment.innerText = userInput.value;
  return postComment;
};

//dont need to modify this
let replyButtonFunc = () => {
  let replyHolder = `<form action="" class="reply-form flex flex-row gap-5 sm:flex-col">
  <div
    class="group flex w-full flex-row items-center justify-center rounded-[10px] text-black/50 ring-2 ring-inset ring-black/50 transition duration-200 hover:text-black hover:ring-black">
    <input type="text" name="reply" class="input-box reply-input sm:text-sm" placeholder="Reply to..."
      required />
  </div>
  <div class="shadow-box reply-btn flex justify-center items-center sm:w-full "
    onclick="javascript:replyFunc(this)">
    <ion-icon name="send" class="-rotate-45 -translate-y-[2px]"></ion-icon>Reply
  </div>
</form>`;

  return replyHolder;
};

//create reply card func
//dont need to modify this
let replyContainerFunc = () => {
  let replyContainer = document.createElement("div");
  replyContainer.classList.add("reply-container");

  let replyHolder = document.createElement("div");
  replyHolder.classList.add("reply-holder");

  let replyList = document.createElement("div");
  replyList.classList.add("reply-list");
  replyList.style.display = "none";

  replyList.innerHTML = replyButtonFunc();

  let readmore = document.createElement("div");
  readmore.classList.add("readmore");
  readmore.setAttribute("onclick", "javascript:readMoreFunc(this)");
  readmore.textContent = "Show Comments";

  replyHolder.appendChild(replyList);
  replyHolder.appendChild(readmore);

  replyContainer.appendChild(replyHolder);

  return replyContainer;
};

//need modify this
submitButton.addEventListener("click", function (event) {
  if (userInput.value === "") {
    userInput.classList.add(errorBorder);
    return;
  } else {
    userInput.classList.remove(errorBorder);
  }

  let commentHolder = document.createElement("div");
  commentHolder.classList.add("comment-holder");

  let newComment = document.createElement("div");
  newComment.classList.add("comment-card");

  //create comment card
  newComment.appendChild(commentHeaderFunc());
  newComment.appendChild(postCommentFunc());

  //add comment card to comment list
  commentHolder.appendChild(newComment);
  commentHolder.appendChild(replyContainerFunc());

  commentList.appendChild(commentHolder);

  console.log(commentHolder);
  event.preventDefault();
});

//Like button functionality
let likeButton = document.querySelectorAll(".likeButton");

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
}, 6000);

//edit post function front end

let title = document.querySelector("#post-title");
let content = document.querySelector("#post-content");
let titleEdit = document.getElementById("edit-post-title");
let contentEdit = document.getElementById("edit-post-content");
let editButton = document.querySelector("#edit-post-button");

let contentDetail = content.textContent.trim();

let removeExtraSpaces = (text) => {
  return text.replace(/\s{2,}/g, " ");
};

editButton.addEventListener("click", function () {
  titleEdit.value = title.textContent.trim();
  contentEdit.value = removeExtraSpaces(contentDetail);
});

//submit edit post function
let submitEditButton = document.querySelector("#submit-edit-button");

submitEditButton.addEventListener("click", function (event) {
  title.textContent = titleEdit.value;
  content.textContent = contentEdit.value;

  event.preventDefault();
});

let replyList = document.querySelectorAll(".reply-list");

replyList.forEach((reply) => {
  reply.style.display = "none";
});

function readMoreFunc(element) {
  let replyList = element.parentNode.querySelector(".reply-list");

  if (replyList.style.display === "none") {
    replyList.style.display = "flex";
    element.textContent = "Hide Comments";
  } else if ((replyList.style.display = "flex")) {
    replyList.style.display = "none";
    element.textContent = "Show Comments";
  } else {
    replyList.style.display = "none";
    element.textContent = "Show Comments";
  }
}

//create reply card header

let replyCardHeader = () => {
  let replyHeader = document.createElement("div");
  replyHeader.classList.add("comment-header");

  replyHeader.appendChild(userProfileHolderFunc());

  return replyHeader;
};

//create reply card func
let userProfileImgReplyFunc = () => {
  let userProfileImg = document.createElement("img");
  userProfileImg = document.createElement("img");
  userProfileImg.classList.add("user-profile-picture");

  userProfileImg.setAttribute("src", "#"); //Todo: Add user profile picture url
  userProfileImg.setAttribute("alt", "User Profile Picture");

  return userProfileImg;
};

let userProfileNameReplyFunc = () => {
  let userProfileNameHolder = document.createElement("div");
  let style = ["flex", "flex-col", "gap-1"];
  userProfileNameHolder.classList.add(...style);

  let userProfileName = document.createElement("h3");
  userProfileName.classList.add("user-profile-name");
  userProfileName.textContent = "User Name"; // Todo: Add user name

  let userProfileDate = document.createElement("h4");
  userProfileDate.classList.add("user-profile-date");
  userProfileDate.textContent = "8 hours ago"; //Todo: Add date

  userProfileNameHolder.appendChild(userProfileName);
  userProfileNameHolder.appendChild(userProfileDate);

  return userProfileNameHolder;
};

//dont need to modify this
let userProfileHolderReplyFunc = () => {
  let userProfile = document.createElement("div");
  userProfile.classList.add("user-profile-holder");

  userProfile.appendChild(userProfileImgReplyFunc());
  userProfile.appendChild(userProfileNameReplyFunc());

  return userProfile;
};

let userReplyfunc = (userInput) => {
  let style = [
    "text-black",
    "text-base",
    "w-full",
    "break-words",
    "xl:text-sm",
  ];
  let replyComment = document.createElement("p");
  replyComment.classList.add(...style);

  // or can be load with json fetch

  replyComment.innerText = userInput.value;
  return replyComment;
};

function replyFunc(element) {
  let replyInput = element.parentNode.querySelector(".reply-input");
  let replyList =
    element.parentNode.parentNode.parentNode.querySelector(".reply-list");

  if (replyInput.value === "") {
    replyInput.classList.add(errorBorder);
    return;
  } else {
    replyInput.classList.remove(errorBorder);
  }
  let replyCard = document.createElement("div");
  replyCard.classList.add("reply-card");

  replyCard.appendChild(replyCardHeader());
  replyCard.appendChild(userReplyfunc(replyInput));

  replyList.appendChild(replyCard);

  replyInput.value = "";
}
