let themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  themeToggle.innerHTML =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? '<ion-icon name="sunny" class="text-[20px]"></ion-icon>Light'
      : '<ion-icon name="moon" class="text-[20px]"></ion-icon>Dark';
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};
