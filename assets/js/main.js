// ===============================
// Tinah Couture - Main JavaScript
// ===============================

// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.padding = "15px 8%";
        navbar.style.background = "#111";
    } else {
        navbar.style.padding = "20px 8%";
        navbar.style.background = "rgba(17,17,17,.95)";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Fade In Animation
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".8s";

observer.observe(card);

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Loading Screen

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// Image Hover Zoom

const images=document.querySelectorAll(".card img");

images.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.08)";

img.style.transition=".5s";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});
// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Navbar Scroll Effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    } else {
        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";
    }
});