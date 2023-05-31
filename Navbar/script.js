const toggle = document.querySelector(".header button");
const links = document.querySelector(".links");

toggle.addEventListener("click",(e)=>{
    e.preventDefault();
    links.classList.toggle("show");
});