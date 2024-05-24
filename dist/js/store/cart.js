// const cartItem = [
//   {
//     poster: "../../img/store/slider/ac.png",
//     name: "Game 0",
//     type: "Adventure",
//     originalPrice: 19.99,
//     salePercentage: 0,
//     finalPrice: 19.99,
//     url: "https://example.com/game5",
//   },
//   {
//     poster: "../../img/store/slider/game1.png",
//     name: "Game 1",
//     type: "Action",
//     originalPrice: 29.99,
//     salePercentage: 10,
//     finalPrice: 26.99,
//     url: "https://example.com/game1",
//   },
//   {
//     poster: "../../img/store/slider/game2.png",
//     name: "Game 2",
//     type: "RPG",
//     originalPrice: 39.99,
//     salePercentage: 20,
//     finalPrice: 31.99,
//     url: "https://example.com/game2",
//   },
//   {
//     poster: "../../img/store/slider/game3.png",
//     name: "Game 3",
//     type: "Strategy",
//     originalPrice: 24.99,
//     salePercentage: 15,
//     finalPrice: 21.24,
//     url: "https://example.com/game3",
//   },
//   {
//     poster: "../../img/store/slider/game4.png",
//     name: "Game 4",
//     type: "Puzzle",
//     originalPrice: 14.99,
//     salePercentage: 5,
//     finalPrice: 14.24,
//     url: "https://example.com/game4",
//   },
// ];

// Add cartItem to local storage

// Retrieve cartItem from local storage
const storedCart = localStorage.getItem("cart");
const cartItem = storedCart ? JSON.parse(storedCart) : [];

let cartList = document.querySelector(".cart-list");
let total = 0.0;
let oriPrice = 0.0;
let totalElement = document.querySelector("#total");
let totalPrice = document.querySelector("#price");
let totalDiscount = document.querySelector("#total-discount");

let priceFunc = (salePer, originalPrice, finalPrice) => {
  let price = "";
  if (salePer > 0) {
    price = `<p class="sale-val w-fit rounded-sm bg-black p-1 text-xs text-white h-fit">
                -${salePer}%
              </p>
              <div class="flex  justify-end gap-2 w-full items-center ">
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
    price = `<p class="final-val text-black">
                ${finalPrice}
              </p>`;

    return price;
  }
};

cartItem.forEach((item) => {
  let cartItemContent = `
  <div class="cart-item flex flex-row p-5 rounded-lg ring-inset ring-2 ring-black/70 opacity-100 transition-all duration-200" data-id="${item.id}">
    <div class="h-full w-full flex flex-row gap-5">
      <div class="aspect-3/4 max-h-[150px] h-full sm:min-w-[112.5px]">
        <img src="../../img/store/slider/gtav.png" class="w-auto h-full" alt="">
      </div>
      <div class="w-1/2 sm:w-full sm:flex sm:justify-between sm:flex-col">
        <p class="text-xs p-1 bg-black text-white w-fit mb-1 rounded uppercase">
          ${item.type}
        </p>
        <a href="" class="text-black text-2xl hover:underline sm:text-lg">
          ${item.name}
        </a>
        <div class="hidden flex-row gap-3 sm:flex">
          ${priceFunc(item.salePercentage, item.originalPrice, item.finalPrice)}
        </div>
      </div>
    </div>
    <div class="flex flex-col items-end justify-between ">
      <div class="flex flex-row gap-3 items-center sm:hidden">
        ${priceFunc(item.salePercentage, item.originalPrice, item.finalPrice)}
      </div>
      <p class="underline text-black cursor-pointer hover:no-underline hover:text-black/70" onclick="javascript:removeCard(this)">
        Remove
      </p>
    </div>
  </div>
  `;

  total += item.finalPrice;
  oriPrice += item.originalPrice;

  cartList.innerHTML += cartItemContent;
});

let discount = oriPrice - total;
updateTotal(total, oriPrice, discount);

let cards = document.querySelectorAll(".cart-item");
let cartNum = document.querySelector("#cart-num");
let cardCount = cards.length;
cartNum.textContent = cards.length;

function removeCard(element) {
  let card = element.parentElement.parentElement;
  let id = parseInt(card.getAttribute("data-id"));
  cardItem = cartItem.find((item) => item.id === id);
  cartItem.splice(cartItem.indexOf(cardItem), 1);
  localStorage.setItem("cart", JSON.stringify(cartItem));

  card.style.opacity = "0";

  setTimeout(() => {
    card.classList.add("hidden");
  }, 200);

  let price =
    element.parentElement.children[0].querySelector(".final-val").textContent;
  price = parseFloat(price.replace("$", ""));

  if (element.parentElement.children[0].querySelector(".ori-val") !== null) {
    let ori =
      element.parentElement.children[0].querySelector(".ori-val").textContent;
    ori = parseFloat(ori.replace("$", ""));
    oriPrice -= ori;
  } else {
    let ori = price;
    oriPrice -= ori;
    discount = oriPrice - 0;
  }

  total -= price;
  discount = oriPrice - total;

  if (total < 0) {
    total = 0;
  }
  if (discount < 0) {
    discount = 0;
  }
  if (oriPrice < 0) {
    oriPrice = 0;
  }

  updateTotal(total, oriPrice, discount);
  cardCount -= 1;

  if (cardCount < 0) {
    cardCount = 0;
  }

  cartNum.textContent = cardCount;
}

function updateTotal(total, oriPrice, discount) {
  total = total.toFixed(2);
  oriPrice = oriPrice.toFixed(2);
  discount = discount.toFixed(2);

  if (total < 0 || oriPrice < 0 || discount < 0) {
    total = 0.0;
    oriPrice = 0.0;
    discount = 0.0;
  }
  totalElement.textContent = "$" + total;
  totalPrice.textContent = "$" + oriPrice;
  totalDiscount.textContent = "-$" + discount;
}
