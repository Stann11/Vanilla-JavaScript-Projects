const data = document.querySelector(".container h1");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".inc");
let count = 0;


dec.addEventListener("click",(e)=>{
    e.preventDefault();
    count+=-1;
    data.textContent=count;
    if(count<0){
        data.style.color="red";
    }
    else if(count>0){
        data.style.color="green";
    }
    else{
        data.style.color="black";
    }
});
inc.addEventListener("click",(e)=>{
    e.preventDefault();
    count+=1;
    data.textContent=count;
    if(count<0){
        data.style.color="red";
    }
    else if(count>0){
        data.style.color="green";
    }
    else{
        data.style.color="black";
    }
});
reset.addEventListener("click",(e)=>{
    e.preventDefault();
    count=0;
    data.textContent=count;
    data.style.color="black";
});