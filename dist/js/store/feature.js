const games = [
  {
    id: 1,
    poster: "../../img/store/slider/gtav.png",
    name: "Game 1",
    type: "Action",
    originalPrice: 49.99,
    salePercentage: 25,
    finalPrice: 37.49,
    url: "https://example.com/game1",
  },
  {
    id: 2,
    poster: "../../img/store/slider/ac.png",
    name: "Game 2",
    type: "Adventure",
    originalPrice: 59.99,
    salePercentage: 0,
    finalPrice: 59.99,
    url: "https://example.com/game2",
  },
  {
    id: 3,
    poster: "../../img/store/slider/hl.png",
    name: "Game 3",
    type: "RPG",
    originalPrice: 39.99,
    salePercentage: 10,
    finalPrice: 35.99,
    url: "https://example.com/game3",
  },
  {
    id: 4,
    poster: "../../img/store/slider/gtav.png",
    name: "Game 4",
    type: "Action",
    originalPrice: 59.99,
    salePercentage: 50,
    finalPrice: 29.99,
    url: "https://example.com/game4",
  },
  {
    id: 5,
    poster: "../../img/store/slider/ac.png",
    name: "Game 5",
    type: "Adventure",
    originalPrice: 19.99,
    salePercentage: 0,
    finalPrice: 19.99,
    url: "https://example.com/game5",
  },
  {
    id: 6,
    poster: "../../img/store/slider/cp2077.png",
    name: "Game 6",
    type: "RPG",
    originalPrice: 49.99,
    salePercentage: 20,
    finalPrice: 39.99,
    url: "https://example.com/game6",
  },
  {
    id: 7,
    poster: "../../img/store/slider/hl.png",
    name: "Game 7",
    type: "RPG",
    originalPrice: 29.99,
    salePercentage: 0,
    finalPrice: 29.99,
    url: "https://example.com/game7",
  },
  {
    id: 8,
    poster: "../../img/store/slider/di2.png",
    name: "Game 8",
    type: "RPG",
    originalPrice: 39.99,
    salePercentage: 30,
    finalPrice: 27.99,
    url: "https://example.com/game8",
  },
];

let listContainer = document.querySelector(".store-list");

let priceFunc = (salePer, originalPrice, finalPrice) => {
  let price = "";
  if (salePer > 0) {
    price = `
    <p class="w-fit rounded-sm bg-black p-1 text-xs text-white h-fit">
        -${salePer}%
    </p>
    <div class="flex flex-wrap justify-end gap-2 w-full items-center ">
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

let storeList = games.map((game) => {
  let test = `
    <a href="" class="card group">
    <div>
        <img src="${game.poster}"
            class="aspect-[3/4] h-full w-full rounded-[10px] object-cover group-hover:grayscale transition-all duration-200"
            alt="" />
    </div>
    <div class="flex flex-col gap-4">
        <div>
            <p class="text-xs text-black/70">Base game</p>
            <p class="text-base text-black underline">
                ${game.name}
            </p>
        </div>
        <div class="flex flex-row gap-4 items-center justify-between">
            ${priceFunc(game.salePercentage, game.originalPrice, game.finalPrice)}
        </div>
    </div>
</a>

    `;

  return test;
});

console.log(storeList);

listContainer.innerHTML = storeList.join("");
