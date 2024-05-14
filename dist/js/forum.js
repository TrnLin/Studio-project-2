// var dropzone = document.getElementById("dropzone");

// dropzone.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   dropzone.classList.add("border-indigo-600");
// });

// dropzone.addEventListener("dragleave", (e) => {
//   e.preventDefault();
//   dropzone.classList.remove("border-indigo-600");
// });

// dropzone.addEventListener("drop", (e) => {
//   e.preventDefault();
//   dropzone.classList.remove("border-indigo-600");
//   var file = e.dataTransfer.files[0];
//   displayPreview(file);
// });

// var input = document.getElementById("file-upload");

// input.addEventListener("change", (e) => {
//   var file = e.target.files[0];
//   displayPreview(file);
// });

// function displayPreview(file) {
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     var preview = document.getElementById("preview");
//     preview.src = reader.result;
//     preview.classList.remove("hidden");
//   };
// }

let postList = document.querySelector("#post-list");
let newPost = document.querySelector("#new-post-button");
let alertSuccess = document.querySelector("#alert-success");
let errorBorder = "border-error";
let errorText = "text-error";

//Create new post card
let postHolderFunc = () => {
  let holder = document.createElement("div");
  let style = ["flex", "flex-col", "gap-4", "lg:gap-2"];

  holder.classList.add(...style);

  let header = document.createElement("div");
  let headerStyle = ["flex", "flex-row", "justify-between", "items-center"];

  header.classList.add(...headerStyle);

  header.appendChild(postTitleFunc());
  header.appendChild(postDateFunc());

  holder.appendChild(header);
  holder.appendChild(postContentFunc());

  return holder;
};

let postTitleFunc = () => {
  let userTitleInput = document.querySelector("#post-title-input");
  let title = document.createElement("h1");

  title.classList.add("post-title");

  title.innerText = userTitleInput.value;
  return title;
};

let postDateFunc = () => {
  let date = document.createElement("p");

  date.classList.add("post-date");

  date.innerText = new Date().toLocaleDateString();
  return date;
};

let postContentFunc = () => {
  let userContentInput = document.querySelector("#post-description-input");
  let content = document.createElement("p");

  content.classList.add("post-description");

  content.innerText = userContentInput.value;
  return content;
};

let postCounterFunc = () => {
  let holder = document.createElement("div");
  let style = ["flex", "flex-row", "gap-4"];
  let likeCount = 0;
  let commentCount = 0;

  holder.classList.add(...style);

  holder.innerHTML = `<div class="flex flex-row gap-2 justify-center items-center text-lg text-black">
                        <ion-icon name="heart"></ion-icon><span id="like-count"> ${likeCount} </span>
                      </div>

                      <div class="flex flex-row gap-2 justify-center items-center text-lg text-black">
                        <ion-icon name="chatbubble"></ion-icon><span id="comment-count">${commentCount}</span>
                      </div>`;

  return holder;
};

//Check if title and content is empty
let titleCheck = () => {
  let userTitleInput = document.querySelector("#post-title-input");
  let userTitleError = document.querySelector("#title-error");

  if (userTitleInput.value === "") {
    userTitleInput.classList.add(errorBorder);

    userTitleError.innerHTML = "Did u miss something?";

    return false;
  } else {
    userTitleInput.classList.remove(errorBorder);
    userTitleError.innerHTML = "";

    return true;
  }
};

let contentCheck = () => {
  let userContentInput = document.querySelector("#post-description-input");
  let userContentError = document.querySelector("#content-error");

  if (userContentInput.value === "") {
    userContentInput.classList.add(errorBorder);
    userContentError.innerHTML = "You are definitely missing something";

    return false;
  } else {
    userContentInput.classList.remove(errorBorder);
    userContentError.innerHTML = "";

    return true;
  }
};

newPost.addEventListener("click", function (event) {
  let newPostCard = document.createElement("a");
  newPostCard.href = "#";
  newPostCard.classList.add("post-card");

  //Check if title and content is empty
  let titleTemp = titleCheck();
  let contentTemp = contentCheck();

  let check = titleTemp && contentTemp;

  //Check if title and content is empty
  if (!check) {
    return;
  } else {
    //Create new post card
    newPostCard.appendChild(postHolderFunc());
    newPostCard.appendChild(postCounterFunc());

    postList.appendChild(newPostCard);

    //Clear input fields
    let userTitleInput = document.querySelector("#post-title-input");
    let userContentInput = document.querySelector("#post-description-input");

    userTitleInput.value = "";
    userContentInput.value = "";

    //Show success alert
    alertSuccess.style.display = "flex";

    setTimeout(() => {
      alertSuccess.style.display = "none";
    }, 3000);
  }
  console.log(postList);

  event.preventDefault();
});
