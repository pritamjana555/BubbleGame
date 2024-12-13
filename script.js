var timer = 21;
var score =0;
var val=0;
function makeval(){
    val = Math.floor(Math.random()*10);
    document.querySelector("#pritam").textContent=val;
}
function makeBubble(){
    var chut ="";

for(var i=1; i<=170; i++){
    var run = Math.floor(Math.random()*10);

    chut += `<div class="bubble">${run}</div>`;
}

document.querySelector(".pbottom").innerHTML=chut;
}
function runtimer(){
    var timerInt=setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector(".time").textContent=timer;
        }else{
            clearInterval(timerInt);
            document.querySelector(".pbottom").innerHTML="<h1>Game Over!</h1>";
        }
    }, 1000);
}
function increaseScore(){
    
    score += 10;
    document.querySelector("#scre").textContent=score;
}
function decreaseScore(){
    
    score -= 10;
    document.querySelector("#scre").textContent=score;
}
function matchnum(){
    document.querySelector(".pbottom").addEventListener("click",function(dets){
        var clckdNum = Number(dets.target.textContent)
        if(clckdNum===val){
            increaseScore();
            makeval();
            makeBubble();
        } else{
            decreaseScore();
            makeval();
            makeBubble();
        }
    })
}
runtimer();
makeBubble();
makeval();
matchnum();
















// function makeBubble() {

//     var chut = "";
//     for (var i = 1; i <= 170; i++) {
//         chut += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
//     }
//     document.querySelector(".pbottom").innerHTML = chut;

//     var tm = 60;
//     function runTimer() {
//         var timer = setInterval(() => {
//             if (tm > 0) {
//                 tm--;
//                 document.querySelector(".time").textContent = tm;
//             }
//             else {
//                 clearInterval(timer);
//             }
//         }, 1000);

//     }
//     runTimer();
// }
// makeBubble();
