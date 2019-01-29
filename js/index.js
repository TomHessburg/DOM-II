// Your code goes here
let navBar = document.querySelector(".main-navigation");
let upperImg = document.querySelector(".intro img");
let secondImg = document.querySelector(".img-content img");
let headingTxt = document.querySelector(".intro h2")
let bottomButton = document.querySelector(".btn");
let pickDest = document.querySelector(".content-destination h2");
let topParagraph = document.querySelector(".intro p");

navBar.addEventListener("mouseover", function(){
    navBar.style.backgroundColor = "black";
    navBar.style.color = "white";
})

navBar.addEventListener("mouseleave", function(){
    navBar.style.backgroundColor = "lightgray";
    navBar.style.color = "green";
})

upperImg.addEventListener("drag",function(){ //remove top img from page
    upperImg.style.display = "none";
})


window.addEventListener("scroll",() => {//scrolls screen down 7px per 350ms up to 400ms
    if(scrollY < 400){
        window.scroll(0, scrollY += 7);
    }
})

secondImg.style.cursor = "pointer";
secondImg.addEventListener("click", () => {//click on second pic 
    
        window.scroll(0, scrollY += 200);
  
})


window.addEventListener("keydown",function(e){
    e = e.code.split("")
    headingTxt.textContent = `you clicked ${e[e.length-1]}`;//changed header text to what you click
})

window.addEventListener("keyup",function(e){
    e = e.code.split("")
    headingTxt.textContent = `you released ${e[e.length-1]}`;//changed aboves result 
})


bottomButton.addEventListener("dblclick", function(){//bottom left button goes black when dbl clicked
    bottomButton.style.backgroundColor = "black";
})

window.addEventListener("wheel", (e) => {//when wheel is move, text gets bigger and turns red...
    pickDest.style.fontSize = "50px";
    pickDest.style.color = "red";
})



topParagraph.addEventListener("mousemove", function(e){
    topParagraph.style.marginLeft = "50px";
})




//propogation/stop nav items section

const navItems = document.querySelectorAll(".nav a")

navItems.forEach(function(indic){

    indic.addEventListener("click", function(e){
        console.log("a nav item was clicked");
        e.preventDefault();
    })
})




const bigBtn = document.querySelector(".bigBtn");
bigBtn.addEventListener('click', e => {
  console.log(`This is my target: ${e.target}`);
  console.log(`This is my target: ${e.currentTarget}`);
});


const smallBtn = document.querySelector(".smallBtn");
smallBtn.addEventListener('click', e => {
  console.log(`Small btn has been clicked!`);
  e.stopPropagation();
});

bigBtn.style.cursor = "pointer";
smallBtn.style.cursor = "pointer";