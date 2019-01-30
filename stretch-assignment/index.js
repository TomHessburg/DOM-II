let fullStack = Array.from(document.querySelectorAll(".block"));
let page = document.querySelector('.mainContainer');
let winner = document.querySelector('#winner');

// let red = fullStack[0];
// let blue = fullStack[1];
// let green = fullStack[2];
// let pink = fullStack[3];
// let gray = fullStack[4];




let xPost = 1;
let currentX = 0;

fullStack.forEach(function(elem){

    elem.addEventListener("mousedown", function(){
        let mouseXPos = event.clientX;     // Get the horizontal coordinate
        console.log(mouseXPos);
        fullStack.reverse();

        x = xPost++*40;

        if(mouseXPos >= 1000){
            fullStack.forEach(function(elem){
                winner.innerHTML = "You've won! claim your prize by clicking on your box!"
                TweenMax.to(elem, 1, {x:0});
                xPost = 1;
                currentX = 0;
                

                elem.addEventListener("mousedown", function(){
                    alert(`YOU WIN NOTHING!! everyone hate you c:`);
                    TweenMax.to(elem, .4, {scale:elem.style.scale + 100,x:x});
                    setTimeout(function(){
                        location.reload();//reload current element
                    }, 400);
                })
                return;
            }
            )}
        xPost++;
        TweenMax.to(elem, 1, {x:x});
    })

    
})