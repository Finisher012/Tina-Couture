let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summary = document.getElementById("orderSummary");

const totalElement = document.getElementById("checkoutTotal");

let total = 0;

cart.forEach(item => {

total += item.price * item.quantity;

summary.innerHTML += `

<div class="summary-item">

<p>${item.name}</p>

<p>${item.quantity} × KSh ${item.price.toLocaleString()}</p>

</div>

`;

});

totalElement.innerText = "KSh " + total.toLocaleString();

document.getElementById("checkoutForm")

.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Thank you for shopping with Tinah Couture!\n\nYour order has been received.");

localStorage.removeItem("cart");

window.location.href = "index.html";

});