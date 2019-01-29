let fullStack = Array.from(document.querySelectorAll(".block"));
let red = fullStack[0];
let blue = fullStack[1];
let green = fullStack[2];
let pink = fullStack[3];
let gray = fullStack[4];

console.log(fullStack);


fullStack.forEach(function(elem){

    elem.addEventListener("click", function(){
        elem.remove();
    })

})