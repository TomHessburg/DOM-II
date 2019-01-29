// Your code goes here
let navBar = document.querySelector(".main-navigation");
let upperImg = document.querySelector(".intro img");
let secondImg = document.querySelector(".img-content img");


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

secondImg.addEventListener("click", () => {
    secondImg.style.cursor = "pointer";
    if(scrollY > 400){
        window.scroll(0, scrollY += 200);
    }
})