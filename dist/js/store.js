let sliders = document.querySelectorAll(".slider");
let sliderContainerWidth =
  document.querySelector(".slider-container").offsetWidth;

//start check
sliderContainerWidth = document.querySelector(".slider-container").offsetWidth;

let sliderSpacing = 32;
if (sliderContainerWidth <= 1024) {
  sliderSpacing = 24;
} else if (sliderContainerWidth <= 768) {
  sliderSpacing = 16;
}

sliders.forEach((slider) => {
  slider.style.width = `${sliderContainerWidth / 6 + sliderSpacing / 6 - sliderSpacing}px`;
  slider.style.marginRight = `${sliderSpacing}px`;

  if (slider == sliders[sliders.length - 1]) {
    slider.style.marginRight = 0;
  }
});

//slider
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let sliderContainer = document.querySelector(".slider-wrapper");
let sliderWrapper = document.querySelector(".slider-container").offsetWidth;
let sw = document.querySelectorAll(".slider");

let track = 0;
let sliderWidth = sliderWrapper + sliderSpacing;

let total = sw[0].offsetWidth * sw.length;

nextBtn.addEventListener("click", () => {
  if (track <= total - sliderWidth) {
    sliderContainer.style.transform = `translate3d(-${sliderWidth + track}px, 0, 0)`;
    track += sliderWidth;
  } else {
    return;
  }

  console.log(track);
});

prevBtn.addEventListener("click", () => {
  if (!track < 0 || !track == 0) {
    sliderContainer.style.transform = `translate3d(${sliderWidth - track}px, 0, 0)`;
    track -= sliderWidth;
  } else {
    return;
  }

  console.log(track);
});

setInterval(() => {
  if (track < 0 || track == 0) {
    prevBtn.style.opacity = 0.5;
    prevBtn.style.cursor = "default";
    prevBtn.classList.remove("hover:bg-black/70");
  } else {
    prevBtn.style.opacity = 1;
    prevBtn.style.cursor = "pointer";
    prevBtn.classList.add("hover:bg-black/70");
  }

  if (track >= total - sliderWidth) {
    nextBtn.style.opacity = 0.5;
    nextBtn.style.cursor = "default";
    nextBtn.classList.remove("hover:bg-black/70");
  } else {
    nextBtn.style.opacity = 1;
    nextBtn.style.cursor = "pointer";
    nextBtn.classList.add("hover:bg-black/70");
  }
}, 100);

//resize image
window.addEventListener("resize", () => {
  sliderContainerWidth =
    document.querySelector(".slider-container").offsetWidth;

  let sliderSpacing = 32;

  if (sliderContainerWidth <= 1024) {
    sliderSpacing = 24;
  } else if (sliderContainerWidth <= 768) {
    sliderSpacing = 16;
  }

  sliders.forEach((slider) => {
    slider.style.width = `${sliderContainerWidth / 6 + sliderSpacing / 6 - sliderSpacing}px`;
    slider.style.marginRight = `${sliderSpacing}px`;

    if (slider == sliders[sliders.length - 1]) {
      slider.style.marginRight = 0;
    }
  });

  //slider
  let nextBtn = document.querySelector("#next");
  let prevBtn = document.querySelector("#prev");
  let sliderContainer = document.querySelector(".slider-wrapper");
  let sliderWrapper = document.querySelector(".slider-container").offsetWidth;
  let sw = document.querySelectorAll(".slider");

  let track = 0;
  let sliderWidth = sliderWrapper + sliderSpacing;

  let total = sw[0].offsetWidth * sw.length;

  nextBtn.addEventListener("click", () => {
    if (track <= total - sliderWidth) {
      sliderContainer.style.transform = `translate3d(-${sliderWidth + track}px, 0, 0)`;
      track += sliderWidth;
    } else {
      return;
    }

    console.log(track);
  });

  prevBtn.addEventListener("click", () => {
    if (!track < 0 || !track == 0) {
      sliderContainer.style.transform = `translate3d(${sliderWidth - track}px, 0, 0)`;
      track -= sliderWidth;
    } else {
      return;
    }

    console.log(track);
  });
});
