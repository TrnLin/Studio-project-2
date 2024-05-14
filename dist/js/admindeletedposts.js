const adminDeletedPostsApi = "";
const postsContainer = "postContainer";
const postForm = "postSearch";
const postSearchInput = "postSearchInput";

//Declair function to restore post
function restorePost(postIdIn) {
  console.log("Restore Post: ", postIdIn);
}

//Declair function to archive post
function archivePost(postIdIn) {
  console.log("Archive Post: ", postIdIn);
}

//Declair handler function for restore post
function restorePostHandler(event) {
  let postId = event.target.dataset.postId;
  restorePost(postId);
}

//Declair handler function for archive post
function archivePostHandler(event) {
  let postId = event.target.dataset.postId;
  archivePost(postId);
}

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

    for (let key in data) {
    }
  } catch (error) {
    console.log("Error Occurred: ", error);
    return null;
  }
}

// Return the user search
document.getElementById(postForm).addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the text input
  let userInput = document.getElementById(postSearchInput).value;

  // Call the function to make the API call
  returnPostSearch(userInput);
});
