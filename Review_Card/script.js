const photo =["1","2","3"];
const name = ["John Boston","Carl Addams","Jena Patel"];
const designation = ["CEO, HellDown org","HR, Carmle Org", "Manager, Jena&sons"];
const review = ["The work that the team did is phenominal and i just love their work and would also say to get the work done from them.",
                "The team's work is exceptional and truly remarkable. I highly recommend them for any future collaborations.",
                "The team's work is truly outstanding and deserves high praise. I wholeheartedly endorse them for future projects."];
let count = 0;
const photocontainer = document.querySelector(".photo img");
const namecontainer = document.querySelector(".data h3");
const designationcontainer = document.querySelector(".data h4");
const reviewcontainer = document.querySelector(".data p");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const surprice = document.querySelector(".surprice");

next.addEventListener("click",(e)=>{
    e.preventDefault();
    count+=1;
    if(count>2){
        count=0;
    }
    let temp =photocontainer.getAttribute("src")
    temp=`./${photo[count]}.png`;
    photocontainer.setAttribute("src",temp);
    namecontainer.textContent=name[count];
    designationcontainer.textContent=designation[count];
    reviewcontainer.textContent=review[count];
});
previous.addEventListener("click",(e)=>{
    e.preventDefault();
    count+=-1;
    if(count<0){
        count=2;
    }
    let temp =photocontainer.getAttribute("src")
    temp=`./${photo[count]}.png`;
    photocontainer.setAttribute("src",temp);
    namecontainer.textContent=name[count];
    designationcontainer.textContent=designation[count];
    reviewcontainer.textContent=review[count];
});
surprice.addEventListener("click",(e)=>{
    e.preventDefault();
    random= Math.floor(Math.random()*3);
    let temp =photocontainer.getAttribute("src")
    temp=`./${photo[random]}.png`;
    photocontainer.setAttribute("src",temp);
    namecontainer.textContent=name[random];
    designationcontainer.textContent=designation[random];
    reviewcontainer.textContent=review[random];
});