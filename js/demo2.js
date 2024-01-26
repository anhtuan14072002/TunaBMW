// // // setTimeout(function(){
// // //     alert("hi chào cậu");
// // // },2000);// delay 2000ms

// var h = document.getElementById("number");
// // h.innerText = "hi chào cậu"
// var t = 10;
// var it = setInterval(function(){
//    // alert("hi chào cậu");
//     // console.log(t);
//     h.innerText = t;
//     t--;
//     if(t<0){
//         clearInterval(it);
//     }
// },1000); // cứ 1s là làm 
// var min = 10;
// var sec = 0;
// var time = setInterval(function(){
//     console.log(`${min}:${sec}`);
//     sec--;
//     if(sec<0){
//         min--;
//         sec=59;
//     }
//     if(min<0){
//         clearInterval(time);
//     }
// },10);
var m = document.getElementById("min");
var s = document.getElementById("sec");
var min = 10;
var sec = 0;
var time = setInterval(function(){
    //console.log(`${min}:${sec}`);
    m.innerText = min;
    s.innerText = sec;
    sec--;
    if(sec<0){
        min--;
        sec=59;
    }
    if(min<0){
        clearInterval(time);
    }
},20);
