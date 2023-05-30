const selection = document.querySelectorAll(".navigation a");
const submit = document.querySelector(".submit");
const spantext = document.querySelector(".colour");
const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const logocolour = document.querySelector(".logo");

submit.addEventListener("click",(f)=>{
    f.preventDefault();
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgbcolour = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor=rgbcolour;
    logocolour.style.color=rgbcolour;
    spantext.textContent=rgbcolour;
});
selection[0].addEventListener("click",(g)=>{
    g.preventDefault();
    submit.addEventListener("click",(f)=>{
        f.preventDefault();
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const rgbcolour = `rgb(${red},${green},${blue})`;
        document.body.style.backgroundColor=rgbcolour;
        logocolour.style.color=rgbcolour;
        spantext.textContent=rgbcolour;
    });
});
selection[1].addEventListener("click",(e)=>{
    e.preventDefault();
    submit.addEventListener("click",(f)=>{
        f.preventDefault();
        let hex1="#";
        for(let i=1;i<=6;i++){
            hex1+=hex[Math.floor(Math.random()*hex.length)];
        }
        document.body.style.backgroundColor=hex1;
        logocolour.style.color=hex1;
        spantext.textContent=hex1;
    });
});