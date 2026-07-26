const products = [

{
name:"Luxury Black Dress",
price:7500,
category:"Dress",
image:"https://images.unsplash.com/photo-1779763320651-9b0cd0985543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEx1eHVyeSUyMEJsYWNrJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D"
},

{
name:"Golden Evening Dress",
price:9800,
category:"Dress",
image:"https://media.istockphoto.com/id/659270754/photo/beautiful-woman-in-a-ball-gown.jpg?s=2048x2048&w=is&k=20&c=IWSOxpfquaoehSjMJ4zJo1qGh7czJ2ung7GRwrR7syU="
},

{
name:"Classic Ladies Suit",
price:12000,
category:"Suit",
image:"https://plus.unsplash.com/premium_photo-1681484101396-efc86fa953b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xhc3NpYyUyMExhZGllcyUyMFN1aXR8ZW58MHx8MHx8fDA%3D"
},

{
name:"Premium Leather Bag",
price:6500,
category:"Bag",
image:"https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJlbWl1bSUyMExlYXRoZXIlMjBCYWd8ZW58MHx8MHx8fDA%3D"
},

{
name:"Luxury Heels",
price:5800,
category:"Shoes",
image:"https://images.unsplash.com/photo-1524553879936-2ff074ae5816?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8THV4dXJ5JTIwSGVlbHN8ZW58MHx8MHx8fDA%3D"
},

{
name:"Designer Handbag",
price:8200,
category:"Bag",
image:"https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVzaWduZXIlMjBIYW5kYmFnfGVufDB8fDB8fHww"
}

];

const container=document.getElementById("products");

function displayProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>KSh ${product.price.toLocaleString()}</p>

<button onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
Add to Cart
</button>

</div>

`;

});

}

displayProducts(products);

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

displayProducts(

products.filter(product=>

product.name.toLowerCase().includes(value)

)

);

});

document.getElementById("categoryFilter")

.addEventListener("change",(e)=>{

if(e.target.value==="all"){

displayProducts(products);

}else{

displayProducts(

products.filter(product=>

product.category===e.target.value)

);

}

});
function addToCart(product){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === product.name);

    if(existing){

        existing.quantity++;

    }else{

        product.quantity = 1;

        cart.push(product);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");

}