const products = [

{
name:"Luxury Black Dress",
price:7500,
category:"Dress",
image:"images/dress1.jpg"
},

{
name:"Golden Evening Dress",
price:9800,
category:"Dress",
image:"images/dress2.jpg"
},

{
name:"Classic Ladies Suit",
price:12000,
category:"Suit",
image:"images/suit1.jpg"
},

{
name:"Premium Leather Bag",
price:6500,
category:"Bag",
image:"images/bag1.jpg"
},

{
name:"Luxury Heels",
price:5800,
category:"Shoes",
image:"images/shoe1.jpg"
},

{
name:"Designer Handbag",
price:8200,
category:"Bag",
image:"images/bag2.jpg"
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