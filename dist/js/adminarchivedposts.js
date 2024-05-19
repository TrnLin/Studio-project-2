const adminDeletedPostsApi = "";
const postsContainer = "postContainer";
const postForm = "postSearch";
const postSearchInput = "postSearchInput";

//Declair function to restore post
function restorePost(postIdIn) {
  console.log("Restore Post: ", postIdIn);
}

//Declair function to delete post
function deletePost(postIdIn) {
  console.log("Delete Post: ", postIdIn);
}

//Declair handler function for restore post
function restorePostHandler(event) {
  let postId = event.target.dataset.postID;
  restorePost(postId);
}

//Declair handler function for delete post
function deletePostHandler(event) {
  let postId = event.target.dataset.postID;
  deletePost(postId);
}

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("restorePostButton")) {
    restorePostHandler(event);
  } else if (event.target.classList.contains("deletePostButton")) {
    deletePostHandler(event);
  };
});


//Declair function to return the searched post
async function returnPostSearch(postInput) {
  try {
    // Clear any dataset attached to the divs
    let divs = document.querySelectorAll("div");

    divs.forEach((div) => {
      for (let key in div.dataset) {
        delete div.dataset[key];
      }
    });

    //Refresh the innerHTML
    document.getElementById(postsContainer).innerHTML = "";

    // Construct the URL with the userName parameter
    let url = `${adminUserAPI}?postSearch=${encodeURIComponent(postInput)}`;

    // Make the API call with the constructed URL
    let res = await fetch(url);

    // Parse the response JSON
    let data = await res.json();

    let contentHtml = "";



    for (let key in data){

      if (data[key].archived) {
        contentHtml += `<div class="postItem">
        <div class="flex flex-col gap-4 lg:gap-2">
          <h1 class="post-title" id="">
            ${data[key].title} - ${data[key].author}:
          </h1>
          <p class="post-body" id="">
          ${data[key].body}
          </p>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row gap-4">
            <div
            class="flex flex-row items-center justify-center gap-2 text-lg text-black"
          >
            <ion-icon name="heart"></ion-icon
            ><span class="like-count">${data[key].likeCount}</span>
          </div>
          <div
            class="flex flex-row items-center justify-center gap-2 text-lg text-black"
          >
            <ion-icon name="chatbubble"></ion-icon
            ><span class="comment-count">${data[key].commentCount}</span>
          </div>
          </div>

          <div class="buttonContainer flex flex-row gap-4">
            <div
              class="restorePostButton m-1 flex min-w-[150px] cursor-pointer flex-row items-center justify-center rounded-lg border-[1px] border-black p-2"
              id="${data[key].postId}Restore"
            >
              Restore Post
            </div>
            <div
              class="deletePostButton m-1 flex min-w-[150px] cursor-pointer flex-row items-center justify-center rounded-lg border-[1px] border-black p-2"
              id="${data[key].postId}Delete"
            >
              Delete Post
            </div>
          </div>
        </div>
      </div>`;
      };

      //Display the innerHTML
      document.getElementById(postsContainer).innerHTML = contentHtml;

      //attach postID into divs
      for (let key in data) {
        let elemIdPrefix = data[key].postId;

        let restoreElement = document.getElementById(elemIdPrefix + "Restore");
        restoreElement.dataset.postID = elemIdPrefix;


        let archiveElement = document.getElementById(elemIdPrefix + "Delete");
        archiveElement.dataset.postID = elemIdPrefix;
      };
        

    };


    } catch(error){
        console.log("Error Occurred: ", error);
        return null;
    };

};


// Return the post search
document.getElementById(postForm).addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the text input
  let userInput = document.getElementById(postSearchInput).value;

  // Call the function to make the API call
  returnPostSearch(userInput);
});
