function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = item.name + " - " + item.price + " DA";
    container.appendChild(div);

    total += item.price;
  });

  document.getElementById("total").innerText = "Total: " + total + " DA";
}
