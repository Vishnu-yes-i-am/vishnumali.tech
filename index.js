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
        // document.querySelector('.menu').setAttribute('style','backdrop-filter: blur(3px);');
    },100);
    },100);
    },100);
    },100);  
    opened=true;
}
    else{
        document.querySelector('.menu').removeAttribute('style');
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
function scrollup(){
    window.scrollTo(0,0);
}

