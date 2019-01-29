// Your code goes here
let navBar = document.querySelector(".main-navigation");
let upperImg = document.querySelector(".intro img");
let secondImg = document.querySelector(".img-content img");
let headingTxt = document.querySelector(".intro h2")
let bottomButton = document.querySelectorAll(".btn");
let pickDest = document.querySelector(".content-destination h2");
let topParagraph = document.querySelector(".intro p");

navBar.addEventListener("mouseover", function(){
    TweenMax.to(".main-navigation", 1, {x:20});
})

navBar.addEventListener("mouseleave", function(){
    TweenMax.to(".main-navigation", 1, {x:-20});
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
        //window.scroll(0, scrollY += 20);
        TweenMax.to(".img-content img", 0.2, {rotation:5, scale:1.1});
})


window.addEventListener("keydown",function(e){
    e = e.code.split("")
    headingTxt.textContent = `you clicked ${e[e.length-1]}`;//changed header text to what you click
})

window.addEventListener("keyup",function(e){
    e = e.code.split("")
    headingTxt.textContent = `you released ${e[e.length-1]}`;//changed aboves result 
})


bottomButton.forEach(function(x){
    x.addEventListener("dblclick", function(){//bottom buttons go black when dbl clicked
        x.style.backgroundColor = "white";
        x.style.color = "lightblue";
        //TweenMax.fromTo(x, 0.5, {width:x.style.width, height:x.style.height}, {width:210, height:50});
        TweenLite.to(x, 1, { ease: Bounce.easeOut, y: 20 });
    })
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