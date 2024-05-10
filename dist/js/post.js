let userInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#commentButton");
let commentList = document.querySelector(".comment-list");
const errorBorder = "border-error";

//create comment card func
let userProfileImgFunc = () => {
  let userProfileImg = document.createElement("img");
  userProfileImg = document.createElement("img");
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

let userProfileHolderFunc = () => {
  let userProfile = document.createElement("div");
  userProfile.classList.add("user-profile-holder");

  userProfile.appendChild(userProfileImgFunc());
  userProfile.appendChild(userProfileNameFunc());

  return userProfile;
};

let commentHeaderFunc = () => {
  let commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");

  commentHeader.appendChild(userProfileHolderFunc());
  commentHeader.appendChild(popoverFunc());

  return commentHeader;
};

let popoverFunc = () => {
  let popover = document.createElement("div");
  popover.classList.add("popover");
  popover.setAttribute("data-popover-target", "comment-popover");
  popover.setAttribute("data-popover-trigger", "click");
  popover.setAttribute("data-popover-placement", "left");

  popover.innerHTML =
    '<ion-icon name="ellipsis-vertical" class="text-[25px]"></ion-icon>';

  return popover;
};

let postCommentFunc = () => {
  let style = ["text-black", "text-base", "w-full", "break-words"];
  let postComment = document.createElement("p");
  postComment.classList.add(...style);

  // or can be load with json fetch

  postComment.innerText = userInput.value;
  return postComment;
};

let replyButtonFunc = () => {
  let replyHolder = `<form action="" class="reply-form flex flex-row gap-5">
  <div
    class="w-full flex flex-row justify-center items-center rounded-[10px] ring-2 ring-inset ring-black/50 hover:ring-black text-black/50 hover:text-black transition duration-200 grou">

    <input type="text" name="reply"
      class="input-box reply-input h-full text-black ring-black/50 transition duration-200 focus:border-black/70 focus:ring-0 group-hover:placeholder:text-black"
      placeholder="Reply to..." required />
  </div>
  <div id="replytButton"
    class="shadow-box flex h-12 w-fit -translate-y-1 flex-row items-center justify-center gap-2 rounded-[10px] bg-solidblack px-6 text-base text-[#fff] transition duration-200 hover:-translate-y-0 hover:bg-blue-100 hover:text-blue-200 cursor-pointer">
    <ion-icon name="chatbubbles"></ion-icon>Reply
  </div>
</form>`;

  return replyHolder;
};

//create reply card func

let replyContainerFunc = () => {
  let replyContainer = document.createElement("div");
  replyContainer.classList.add("reply-container");

  let replyHolder = document.createElement("div");
  replyHolder.classList.add("reply-holder");

  let replyList = document.createElement("div");
  replyList.classList.add("reply-list");
  replyList.style.display = "none";

  let readmore = document.createElement("div");
  readmore.classList.add("readmore");
  readmore.textContent = "Read More";

  replyHolder.appendChild(replyList);
  replyHolder.appendChild(readmore);

  replyContainer.appendChild(replyHolder);

  return replyContainer;
};

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
  newComment.innerHTML += replyButtonFunc();

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

//readmore button functionality
//some how not working probaly because of the querySelectorAll

let commentHolder = document.querySelectorAll(".comment-holder");

commentHolder.forEach((comment) => {
  //Read More Button
  let readMoreButton = comment.querySelector(".readmore");
  let replyList = comment.querySelector(".reply-list");
  replyList.style.display = "none";

  readMoreButton.addEventListener("click", function () {
    if (replyList.style.display === "none") {
      replyList.style.display = "flex";
      readMoreButton.textContent = "Read Less";
    } else if ((replyList.style.display = "block")) {
      replyList.style.display = "none";
      readMoreButton.textContent = "Read More";
    } else {
      replyList.style.display = "none";
      readMoreButton.textContent = "Read More";
    }
  });
});
