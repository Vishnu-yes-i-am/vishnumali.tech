function scrollup() {
    window.scrollTo(0, 0);
}
// setInterval(() => {
//     setTimeout(() => {
//         swipe(4);
//         setTimeout(() => {
//             swipe(1);
//             setTimeout(() => {
//                 swipe(2);
//                 setTimeout(() => {
//                     swipe(3);
//                 }, 5000);
//             }, 4600);
//         }, 6600);
//     }, 1600);
// }, 20000);
// function swipe(ix) {
//     var x = ix % 4;
//     let next = "dot" + (x + 1);
//     if (x == 0) {
//         x = 4;
//     }
//     let pre = "dot" + x;
//     document.getElementById(pre).style.width = 5 + 'px';
//     document.getElementById(pre).style.height = 5 + 'px';
//     document.getElementById(next).style.width = 10 + 'px';
//     document.getElementById(next).style.height = 10 + 'px';
// }
// setTimeout(() => {
//     swipe(4);
//     setTimeout(() => {
//         swipe(1);
//         setTimeout(() => {
//             swipe(2);
//             setTimeout(() => {
//                 swipe(3);
//             }, 5000);
//         }, 4600);
//     }, 6600);
// }, 1600);
var arr = ["../utils/whiteboard.webp", "../utils/card.webp", "../utils/login.webp", "../utils/jamna.png", "../utils/newsavage.png", "https://media.giphy.com/media/iTWomlMFQXIA5DN0VZ/giphy.gif"];
var arr2 = ["A whiteboard which was made by me and my mate in an hackathon as a project. It was the first project from my side and i loved it when it got completed.Have a look on it.", "A game !!! yeah all of us love to play games .what if we play a game made by our own ? That would be a great feeling especially when it is our first game.I made this in my vacations when i was getting bored. Please try it Once.", " We all need to set up login and register system for our e-commerce website to save details of customer and serve them better also for security of our website from anonymous users.So here is my login system project.", "An another javascript Game . You have played many similar games like it atleast once in your life .I have named it as Jamna-the bird because name of bird in the game is Jaamna.Its really an interesting game ,Try it Once", "It's an E-Commerce Website built using React Js.It has almost all the features an Ecommerce website can have like categorized products , userlogin , adding items to cart .", "You will see more projects here when you come back again."];
var arr3 = ["location.href='https://vishnumali.herokuapp.com/projects/whiteboard/board.html'", "location.href='https://vishnumali.herokuapp.com/projects/day10.html'", "location.href='https://vishnumali.herokuapp.com'", "location.href='https://www.jamna-thebird.ml'", "location.href='https://newsavage.herokuapp.com/'", ""]
card1 = document.getElementById("ptext1");
card2 = document.getElementById("ptext2");
document.getElementById("ptext1").innerHTML = arr2[1];
document.getElementById("ptext2").innerHTML = arr2[0];
document.getElementById("pimage1").setAttribute("src", arr[1]);
document.getElementById("pimage2").setAttribute("src", arr[0]);
document.getElementById("pimage1").setAttribute("onclick", arr3[1]);
document.getElementById("pimage2").setAttribute("onclick", arr3[0]);
var i = 2;
var j = i + 1;
setInterval(() => {
    if (i >= arr.length) {
        i = 0;
    }
    document.getElementById("ptext2").innerHTML = arr2[i];
    document.getElementById("pimage2").setAttribute("src", arr[i]);
    document.getElementById("pimage2").setAttribute("onclick", arr3[i]);
    i += 2;

}, 6000);
setTimeout(() => {
    setInterval(() => {
        if (j >= arr.length) {
            j = 1;
        }
        document.getElementById("ptext1").innerHTML = arr2[j];
        document.getElementById("pimage1").setAttribute("src", arr[j]);
        document.getElementById("pimage1").setAttribute("onclick", arr3[j]);


        j += 2;

    }, 6000);
}, 3000);