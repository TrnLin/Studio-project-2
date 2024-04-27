let themeToggle = document.querySelector("#theme-toggle");

window.onload = async () => {
  const res = await fetch("/user/style", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    document.documentElement.setAttribute("data-theme", data.theme);
    themeToggle.innerHTML =
      data.theme === "dark"
        ? '<ion-icon name="moon" class="text-[20px]"></ion-icon>Dark'
        : '<ion-icon name="sunny" class="text-[20px]"></ion-icon>Light';
  }
};

themeToggle.addEventListener("click", async () => {
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

  const res = await fetch("/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      theme: document.documentElement.getAttribute("data-theme"),
    }),
  });

  if (!res.ok) {
    console.log(await res.json().message);
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

//smoth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
