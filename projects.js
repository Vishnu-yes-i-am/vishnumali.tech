setInterval(() => {
    setTimeout(() => {
    swipe(4);
    setTimeout(() => {
    swipe(1); 
    setTimeout(() => {
    swipe(2);
    setTimeout(() => {
    swipe(3);
    }, 5000);
    }, 4600);
    }, 6600);
    },1600);
}, 20000);
function swipe(ix){
    var x=ix%4;
    let next="dot"+(x+1);
    if(x==0){
        x=4;
    }
    let pre ="dot"+x;
    document.getElementById(pre).style.width=5+'px';
    document.getElementById(pre).style.height=5+'px';
    document.getElementById(next).style.width=10+'px';
    document.getElementById(next).style.height=10+'px';
}
setTimeout(() => {
    swipe(4);
    setTimeout(() => {
    swipe(1); 
    setTimeout(() => {
    swipe(2);
    setTimeout(() => {
    swipe(3);
    }, 5000);
    }, 4600);
    }, 6600);
    },1600);