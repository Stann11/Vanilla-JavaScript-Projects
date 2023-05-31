const btn = document.querySelector(".modal-btn");
const close = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.add("open-modal");
});
close.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.remove("open-modal");
});