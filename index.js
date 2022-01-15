w=window.innerWidth;
h=window.innerHeight;
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        console.log("loaded");
        document.getElementById('loading').setAttribute('style','display:None;');
        clearInterval(interval);
    } 
    else{
        console.log("not loaded");
    }   
}, 100);
if(w<500){
    document.getElementById('vsrc').setAttribute('src','robo.mp4');
    document.getElementById('video').load();
}
var opened=false; 
document.getElementById('openmenu').addEventListener('click',()=>{
    if(!opened){
    document.getElementById('btn1').setAttribute('style','animation-name: mbtn;transform:translateX(0%);');
    setTimeout(()=>{
        document.getElementById('btn2').setAttribute('style','animation-name: mbtn;transform:translateX(0%);');
    setTimeout(()=>{
        document.getElementById('btn3').setAttribute('style','animation-name: mbtn;transform:translateX(0%);');
    setTimeout(()=>{
        document.getElementById('btn4').setAttribute('style','animation-name: mbtn;transform:translateX(0%);');
    setTimeout(()=>{
        document.getElementById('btn5').setAttribute('style','animation-name: mbtn;transform:translateX(0%);');
    },100);
    },100);
    },100);
    },100);  
    opened=true;
}
    else{
        document.getElementById('btn1').setAttribute('style','animation-name: cmbtn;transform:translateX(-150%);');
        setTimeout(()=>{
            document.getElementById('btn2').setAttribute('style','animation-name: cmbtn;transform:translateX(-150%);');
        setTimeout(()=>{
            document.getElementById('btn3').setAttribute('style','animation-name: cmbtn;transform:translateX(-150%);');
        setTimeout(()=>{
            document.getElementById('btn4').setAttribute('style','animation-name: cmbtn;transform:translateX(-150%);');
        setTimeout(()=>{
            document.getElementById('btn5').setAttribute('style','animation-name: cmbtn;transform:translateX(-150%);');
        },100);
        },100);
        },100);
        },100)
        opened=false;
    }
});
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom <= (window.innerHeight + 200) 
    );
}
document.addEventListener('scroll', function () {
    var box = document.querySelector('#container');
    if(isInViewport(box)){
        document.querySelector('#card').classList.add('move');
        
    }
    // else{
    //     document.querySelector('#card').classList.remove('move');
       
    // }
        
}, {
    passive: true
});

