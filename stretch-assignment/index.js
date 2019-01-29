let fullStack = Array.from(document.querySelectorAll(".block"));
let red = fullStack[0];
let blue = fullStack[1];
let green = fullStack[2];
let pink = fullStack[3];
let gray = fullStack[4];

console.log(fullStack);



let xPost = 1;

fullStack.forEach(function(elem){

    elem.addEventListener("mousedown", function(){
        x = xPost*100
        xPost++;
        TweenMax.to(elem, 0.1, {x:x});
    })

})