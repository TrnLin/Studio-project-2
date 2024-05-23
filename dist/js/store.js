const games = [
  {
    poster: "../../img/store/slider/gtav.png",
    name: "Game 1",
    type: "Action",
    originalPrice: 49.99,
    salePercentage: 25,
    finalPrice: 37.49,
    url: "https://example.com/game1",
  },
  {
    poster: "../../img/store/slider/ac.png",
    name: "Game 2",
    type: "Adventure",
    originalPrice: 59.99,
    salePercentage: 0,
    finalPrice: 59.99,
    url: "https://example.com/game2",
  },
  {
    poster: "../../img/store/slider/hl.png",
    name: "Game 3",
    type: "RPG",
    originalPrice: 39.99,
    salePercentage: 10,
    finalPrice: 35.99,
    url: "https://example.com/game3",
  },
  {
    poster: "../../img/store/slider/gtav.png",
    name: "Game 4",
    type: "Action",
    originalPrice: 59.99,
    salePercentage: 50,
    finalPrice: 29.99,
    url: "https://example.com/game4",
  },
  {
    poster: "../../img/store/slider/ac.png",
    name: "Game 5",
    type: "Adventure",
    originalPrice: 19.99,
    salePercentage: 0,
    finalPrice: 19.99,
    url: "https://example.com/game5",
  },
  {
    poster: "../../img/store/slider/cp2077.png",
    name: "Game 6",
    type: "RPG",
    originalPrice: 49.99,
    salePercentage: 20,
    finalPrice: 39.99,
    url: "https://example.com/game6",
  },
  {
    poster: "../../img/store/slider/hl.png",
    name: "Game 7",
    type: "RPG",
    originalPrice: 29.99,
    salePercentage: 0,
    finalPrice: 29.99,
    url: "https://example.com/game7",
  },
  {
    poster: "../../img/store/slider/di2.png",
    name: "Game 8",
    type: "RPG",
    originalPrice: 39.99,
    salePercentage: 30,
    finalPrice: 27.99,
    url: "https://example.com/game8",
  },
];

const trendingGames = [
  {
    poster: "../../img/store/trending/karlson.png",
    name: "Game 1",
    type: "Action",
    originalPrice: 49.99,
    salePercentage: 25,
    finalPrice: 37.49,
    url: "https://example.com/game1",
  },
  {
    poster: "../../img/store/trending/muck.png",
    name: "Game 2",
    type: "Action",
    originalPrice: 0,
    salePercentage: 0,
    finalPrice: "Coming Soon",
    url: "https://example.com/game2",
  },
];

let sliderContainer = document.querySelector(".slider-wrapper");
let trendingContainer = document.querySelector(".trending-wrapper");
let counter = 0;

let priceFunc = (salePer, originalPrice, finalPrice) => {
  let price = "";
  if (salePer > 0) {
    price = `<p class="w-fit rounded-sm bg-black p-1 text-xs text-white h-fit">
                -${salePer}%
              </p>
              <div class="flex flex-wrap justify-end gap-2 w-full ">
                <p class="text-black/70 line-through leading-[100%]">
                  $${originalPrice}
                </p>
                <p class="text-base text-black leading-[100%]">
                  $${finalPrice}
                </p>
              </div>
              `;

    return price;
  } else if (typeof finalPrice === "number") {
    price = `<p class="text-black">
                $${finalPrice}
              </p>`;

    return price;
  } else {
    price = `<p class="text-black">
                ${finalPrice}
              </p>`;

    return price;
  }
};

let sliderCardFunc = () => {
  games.forEach((game) => {
    let gameCard = `
    <a href="${game.url}" class="slider group">
    <div>
      <img src=" ${game.poster}"
        class="aspect-[3/4] h-full w-full rounded-[10px] object-cover group-hover:grayscale  transition duration-200" alt="" />
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <p class="text-xs text-black/70">${game.type}</p>
        <p class="text-base text-black group-hover:underline">
          ${game.name}
        </p>
      </div>
      <div class="flex flex-row gap-4 items-center justify-between">
        ${priceFunc(game.salePercentage, game.originalPrice, game.finalPrice)}
      </div>
    </div>
  </a>
    `;
    counter++;

    if (counter > 16) {
      return;
    }
    sliderContainer.innerHTML += gameCard;
  });
};

let trendingCardFunc = () => {
  trendingGames.forEach((game) => {
    let gameCard = `
    <a href="${game.url}" class="trending-item flex flex-col gap-3 group">
      <div class="aspect-video min-h-24">
        <img src="${game.poster}" class="h-full w-full rounded-[10px] object-cover group-hover:grayscale  transition duration-200"  alt="" />
      </div>
      <div class="">
        <p class="text-xs text-black/70">${game.type}</p>
        <p class="test-base text-black group-hover:underline">
          ${game.name}
        </p>
      </div>
      <div class="flex flex-row gap-4">
        ${priceFunc(game.salePercentage, game.originalPrice, game.finalPrice)}
      </div>
    </a>`;
    counter++;
    if (counter > 2) {
      return;
    }
    trendingContainer.innerHTML += gameCard;
  });

  let exploreMore = `
  <a href="" class="flex flex-col gap-3">
      <div class="grid aspect-video min-h-24 place-items-center rounded-[10px] bg-black text-white">
        <p class="text-3xl">Explore More</p>
      </div>
      <div>
        <div class="mb-3">
          <p class="text-xs text-black/70">Explore</p>
          <p class="test-base text-black">
            Check out all of the lated trend
          </p>
        </div>
        <p class="text-base text-black">Browse</p>
      </div>
  </a>
  `;

  trendingContainer.innerHTML += exploreMore;
};

sliderCardFunc();
counter = 0;
trendingCardFunc();

let sliders = document.querySelectorAll(".slider");
let sliderContainerWidth =
  document.querySelector(".slider-container").offsetWidth;

//start check
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
let sw = document.querySelectorAll(".slider");

let track = 0;
let sliderWidth = sliderContainerWidth + sliderSpacing;

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
  let track = 0;
  let sliderWidth = sliderContainerWidth + sliderSpacing;

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

// You can now use the 'games' array to display the game information in your application.
// For example, you can loop through the array and create HTML elements dynamically to display the game details.
