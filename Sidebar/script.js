const btn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    sidebar.classList.toggle("show-sidebar");
});
close.addEventListener("click",(e)=>{
    e.preventDefault();
    sidebar.classList.remove("show-sidebar");
});