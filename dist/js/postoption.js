let userInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#commentButton");
let commentList = document.querySelector(".comment-list");

let imgSrc = "#"; //Todo: Add user profile picture url
let username = "User Name"; // Todo: Add user name
let timePost = "8 hours ago"; //Todo: Add date
let userCommentContent = userInput.value;
let userReplyContent = userInput.value;

//create comment card func
let userWrapperFunc = (imgSrc, username, timePost) => {
  let userWrapper = `
    <div class="comment-header">
        <div class="user-profile-holder">
            <img src="${imgSrc}" alt="User profile picture" class="user-profile-picture" />
            <div class="flex flex-col gap-1">
                <h3 class="user-profile-name" id="username">
                    ${username}
                </h3>
                <h4 class="user-profile-date" id="timePost">${timePost}</h4>
            </div>
        </div>

        <div data-popover-target="comment-popover" data-popover-trigger="click" data-popover-placement="left"
        class="popover">
            <ion-icon name="ellipsis-vertical" class="text-[25px]"></ion-icon>
        </div>
    </div>`;

  return userWrapper;
};

let userCommentFunc = (userCommentContent) => {
  let userComment = `
    <p class="w-full text-base text-black xl:text-sm" id="user-comment">
        ${userCommentContent}
    </p>`;

  return userComment;
};

let replyInputFunc = () => {
  let replyForm = `
    <form action="" class="reply-form flex flex-row gap-5 sm:flex-col">
        <div class="group flex w-full flex-row items-center justify-center rounded-[10px] text-black/50 ring-2 ring-inset ring-black/50 transition duration-200 hover:text-black hover:ring-black">
            <input type="text" name="reply" class="input-box reply-input sm:text-sm" placeholder="Reply to..."required />
        </div>
        <div class="shadow-box reply-btn flex items-center justify-center sm:w-full" onclick="javascript:replyFunc(this)">
            <ion-icon name="send" class="-translate-y-[2px] -rotate-45"></ion-icon>Reply
        </div>
    </form>`;

  return replyForm;
};

let replyCardFunc = (imgSrc, username, timePost, userReplyContent) => {
  let replyCard = `
        <div class="reply-card">
            <div class="reply-header">
                <div class="user-profile-holder">
                    <img src="${imgSrc}" alt="User profile picture" class="user-profile-picture" />
                    <div class="flex flex-col gap-1">
                        <h3 class="user-profile-name" id="username">
                            ${username}
                        </h3>
                        <h4 class="user-profile-date" id="timePost">${timePost}</h4>
                    </div>
                </div>
                <div data-popover-target="comment-popover" data-popover-trigger="click" data-popover-placement="left" class="popover">
                    <ion-icon name="ellipsis-vertical" class="text-[25px]"></ion-icon>
                </div>
            </div>
            <p class="w-full text-base text-black xl:text-sm" id="user-comment">
                ${userReplyfunc}
            </p>
        </div>
    `;
  return replyCard;
};

let commentCardFunc = () => {
  let commentCard = `
    <div class="comment-holder">
        <div class="comment-card">
            ${userWrapperFunc(imgSrc, username, timePost)}
            ${userCommentFunc(userCommentContent)}
        /div>
        <div class="reply-container">
            <div class=class="reply-holder">
                <div class="reply-list hidden">
                    ${replyInputFunc()}
                    ${replyCardFunc(imgSrc, username, timePost, userReplyContent)}
                </div>
                <div class="readmore" onclick="javascript:readMoreFunc(this)">
                    Show Comments
                </div>
            </div>
    </div>
`;
  return commentCard;
};

//need modify this
submitButton.addEventListener("click", function (event) {
  commentCardFunc();

  event.preventDefault();
});

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
