// fetch("../../js/store/test.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}

let gameInfo = {
  id: "4",
  name: "Assassin's Creed Syndicate",
  originalPrice: 59.99,
  salePercentage: 10,
  finalPrice: 53.99,
  logo: "img/cyberpunk2077/logo.png",
  url: "img/cyberpunk2077/main.jpg",
  releaseDate: "2020-12-10",
  platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
  publisher: "CD Projekt",
  developer: "CD Projekt",
  smallDesc:
    "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
  genres: "Action, RPG",
  type: "base game", // Add the type property
};

let priceWrapper = document.querySelector(".price-wrapper");
let saleDes = document.querySelector(".sale-val");
let salePrice = document.querySelector(".sale-price");
let saleOri = document.querySelector(".sale-ori");

let logo = document.querySelector(".logo");
let mainImg = document.querySelector(".main-img");

let releaseDate = document.querySelector(".release-date");
let platform = document.querySelector(".platform");
let publisher = document.querySelector(".publisher");
let developer = document.querySelector(".developer");
let gameTitle = document.querySelector(".game-title");
let smallDesc = document.querySelector(".small-desc");
let genres = document.querySelector(".genres");
let gameType = document.querySelector(".game-type");

let alertSuccess = document.querySelector("#alert-success");
let alertError = document.querySelector("#alert-error");
let alertScMsg = document.querySelector(".alert-sc-msg");
let alertErMsg = document.querySelector(".alert-er-msg");

alertSuccess.style.display = "none";
alertError.style.display = "none";

let priceFunc = (salePer, originalPrice, finalPrice) => {
  let price = "";
  if (salePer > 0) {
    price = `
    <p class="sale-val w-fit rounded-sm bg-black p-1 text-xs text-white h-fit">
        -${salePer}%
    </p>
    <div class="flex gap-2 w-full items-center ml-3">
        <p class="ori-val text-black/70 line-through leading-[100%]">
            $${originalPrice}
        </p>
        <p class="final-val text-black leading-[100%]">
            $${finalPrice}
        </p>
    </div>
    `;

    return price;
  } else if (typeof finalPrice === "number") {
    price = `<p class="final-val text-black">
                $${finalPrice}
            </p>`;

    return price;
  } else {
    price = `<p class="final-val text-black leading-[100%]">
                ${finalPrice}
            </p>`;

    return price;
  }
};

window.onload = () => {
  priceWrapper.innerHTML = priceFunc(
    gameInfo.salePercentage,
    gameInfo.originalPrice,
    gameInfo.finalPrice,
  );

  logo.setAttribute("src", gameInfo.logo);
  mainImg.setAttribute("src", gameInfo.url);

  releaseDate.innerHTML = gameInfo.releaseDate;
  platform.innerHTML = gameInfo.platform;
  publisher.innerHTML = gameInfo.publisher;
  developer.innerHTML = gameInfo.developer;
  gameTitle.innerHTML = gameInfo.name;
  smallDesc.innerHTML = gameInfo.smallDesc;
  genres.innerHTML = gameInfo.genres;
  gameType.innerHTML = gameInfo.type;
};

let addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length === 0) {
    cart.push(gameInfo);

    alertSuccess.style.display = "flex";
    alertScMsg.innerHTML = "Game added to cart!";

    setTimeout(() => {
      alertSuccess.style.display = "none";
      alertScMsg.innerHTML = "";
    }, 3000);
  } else {
    let found = false;
    cart.forEach((game) => {
      if (game.id === gameInfo.id) {
        found = true;
      }
    });
    if (!found) {
      cart.push(gameInfo);

      alertSuccess.style.display = "flex";
      alertScMsg.innerHTML = "Game added to cart!";

      setTimeout(() => {
        alertSuccess.style.display = "none";
        alertScMsg.innerHTML = "";
      }, 3000);
    } else {
      alertError.style.display = "flex";
      alertErMsg.innerHTML = "Game already in cart!";

      setTimeout(() => {
        alertError.style.display = "none";
        alertErMsg.innerHTML = "";
      }, 3000);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

let cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click", addToCart);

let cart = JSON.parse(localStorage.getItem("cart"));
let cartLength = cart ? cart.length : 0;
console.log(cartLength);

let cardCount = document.querySelector("#cart-count");
cardCount.textContent = cartLength;
