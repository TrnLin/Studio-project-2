fetch("../../js/store/test.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let games = data.features;
    let trendingGames = data.trending;
    let listGames = data.list;
    let mainGame = data.main;

    console.log(games);
    // You can now use the 'games' array to display the game information in your application.
    // For example, you can loop through the array and create HTML elements dynamically to display the game details.

    let sliderContainer = document.querySelector(".slider-wrapper");
    let trendingContainer = document.querySelector(".trending-wrapper");
    let listContainer = document.querySelector(".list-wrapper");
    let counter = 0;

    let priceFunc = (salePer, originalPrice, finalPrice) => {
      let price = "";
      if (salePer > 0) {
        price = `<p class="w-fit rounded-sm bg-black p-1 text-xs text-white h-fit">
                    -${salePer}%
                  </p>
                  <div class="flex flex-wrap justify-end gap-2 w-full items-center ">
                    <p class="text-black
                    /70 line-through leading-[100%]">
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
        price = `<p class="text-black
                    ">
                    ${finalPrice}
                  </p>`;
        return price;
      }
    };

    let sliderCardFunc = (games) => {
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

        if (counter > 18) {
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
            <p class="text-3xl ipad:text-xl">
              Explore More
            </p>
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

    let featuredCardFunc = () => {
      listGames.forEach((game) => {
        let gameCard = `
        <a href="${game.url}" class="card group
        ">
                  <div>
                    <img src="${game.poster}"
                      class="aspect-[3/4] h-full w-full rounded-[10px] object-cover group-hover:grayscale  transition duration-200" alt="" />
                  </div>
                  <div class="flex flex-col gap-4">
                    <div>
                      <p class="content-type text-xs text-black/70">${game.type}</p>
                      <p class="name-des text-base text-black">
                        ${game.name}
                      </p>
                    </div>
                    <div class="flex flex-row gap-4">
                      ${priceFunc(game.salePercentage, game.originalPrice, game.finalPrice)}
                    </div>
                  </div>
                </a>
        `;
        listContainer.innerHTML += gameCard;
      });
    };
    sliderCardFunc(games);
    counter = 0;
    trendingCardFunc();
    counter = 0;
    featuredCardFunc();

    let sliders = document.querySelectorAll(".slider");
    let sliderContainerWidth =
      document.querySelector(".slider-container").offsetWidth;
    let screenWidth = window.innerWidth;

    //start check
    let sliderSpacing = 32;
    if (sliderContainerWidth <= 1024) {
      sliderSpacing = 24;
    }
    if (sliderContainerWidth <= 768) {
      sliderSpacing = 16;
    }

    sliders.forEach((slider) => {
      if (screenWidth > 1030) {
        slider.style.width = `${sliderContainerWidth / 6 + sliderSpacing / 6 - sliderSpacing}px`;
      } else if (screenWidth < 1030 && screenWidth >= 768) {
        slider.style.width = `${sliderContainerWidth / 4 + sliderSpacing / 4 - sliderSpacing}px`;
      } else if (screenWidth < 768) {
        slider.style.width = `${sliderContainerWidth / 2 + sliderSpacing / 2 - sliderSpacing}px`;
      }

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
  })
  .catch((err) => {
    console.log(err);
  });

//resize image

window.addEventListener("resize", () => {
  let sliderContainer = document.querySelector(".slider-wrapper");
  let screenWidth = window.innerWidth;

  let sliders = document.querySelectorAll(".slider");
  let sliderContainerWidth =
    document.querySelector(".slider-container").offsetWidth;

  //start check
  let sliderSpacing = 32;
  if (sliderContainerWidth <= 1024) {
    sliderSpacing = 24;
  }
  if (sliderContainerWidth <= 768) {
    sliderSpacing = 16;
  }

  sliders.forEach((slider) => {
    if (screenWidth > 1030) {
      slider.style.width = `${sliderContainerWidth / 6 + sliderSpacing / 6 - sliderSpacing}px`;
    } else if (screenWidth < 1030 && screenWidth >= 768) {
      slider.style.width = `${sliderContainerWidth / 4 + sliderSpacing / 4 - sliderSpacing}px`;
    }

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
});

let cart = JSON.parse(localStorage.getItem("cart"));
let cartLength = cart ? cart.length : 0;
console.log(cartLength);

let cardCount = document.querySelector("#cart-count");
cardCount.textContent = cartLength;
