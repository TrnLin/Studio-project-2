fetch("../../js/store/test.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let games = data.features;
    console.log(games);
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
      return test;
    });

    listContainer.innerHTML = storeList.join("");
  })
  .catch(function (err) {
    console.log(err);
  });

let cart = JSON.parse(localStorage.getItem("cart"));
let cartLength = cart ? cart.length : 0;
console.log(cartLength);

let cardCount = document.querySelector("#cart-count");
cardCount.textContent = cartLength;
