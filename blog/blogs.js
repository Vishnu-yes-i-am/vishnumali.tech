document.querySelector('.menubutton').addEventListener('click',()=>{
    var m=document.querySelector('.optionmenu2');
    if(m.hasAttribute('style')){
    m.removeAttribute('style');
    }
    else{
   m.setAttribute('style','visibility:visible;');}
})
function scrollup(){
    window.scrollTo(0,0);
}