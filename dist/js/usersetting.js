function previewProfilePic(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById("profile-pic-preview");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
