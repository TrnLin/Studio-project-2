let total = 0.0;
let oriPrice = 0.0;
let totalElement = document.querySelector("#total");
let totalPrice = document.querySelector("#price");
let totalDiscount = document.querySelector("#total-discount");

let cards = document.querySelectorAll(".cart-item");

let cartNum = document.querySelector("#cart-num");

let cardCount = cards.length;

function removeCard(element) {
  let card = element.parentElement.parentElement;
  card.style.opacity = "0";

  setTimeout(() => {
    card.classList.add("hidden");
  }, 200);
  price = parseFloat(card.dataset.price);

  price = parseFloat(card.dataset.price);
  sale = Number(card.dataset.sale);
  let id = card.dataset.id;

  let itemPrice = parseFloat(price - (price * sale) / 100);

  itemPrice = itemPrice.toFixed(2);

  total -= itemPrice;
  oriPrice -= price;
  discount = oriPrice - total;

  cardCount -= 1;

  cartNum.textContent = cardCount;

  updateTotal(total, oriPrice, discount);
}

window.onload = () => {
  cards.forEach((card) => {
    let price = parseFloat(card.dataset.price);
    let sale = Number(card.dataset.sale);
    let finalP = parseFloat(card.dataset.finalP);
    let id = card.dataset.id;

    let saleDes = card.querySelector(".sale-des");
    let oriDes = card.querySelector(".ori-des");
    let finalDes = card.querySelector(".final-des");

    oriPrice += price;

    let itemPrice = price - (price * sale) / 100;

    total += itemPrice;

    itemPrice = itemPrice.toFixed(2);

    if (sale == 0) {
      saleDes.style.display = "none";
      oriDes.style.display = "none";
    }

    saleDes.textContent = sale + "%";
    oriDes.textContent = "$" + price;
    finalDes.textContent = "$" + itemPrice;

    card.setAttribute("data-finalP", itemPrice);
  });
  let discount = oriPrice - total;

  console.log(totalDiscount);

  updateTotal(total, oriPrice, discount);
  cartNum.textContent = cards.length;
};

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
