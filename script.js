let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk ditambahkan ke keranjang");
}

function loadCart() {
  let items = document.getElementById("cartItems");
  let total = 0;

  items.innerHTML = "";

  cart.forEach(item => {
    items.innerHTML += `<p>${item.name} - Rp ${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: Rp " + total;
}

if (document.getElementById("cartItems")) {
  loadCart();
}
