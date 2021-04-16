const fadein = document.getElementById('fade-in');
const fadeout = document.getElementById('fade-out');
let opacity = 0;
let id = 0;
const img = document.getElementById('img');



fadeout.addEventListener('click', click1 = () => {
 id = setInterval(hide = () => {
  
      opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
      if(opacity>0){
        opacity = opacity - 0.1;
      img.style.opacity = opacity;
      }else{    
     clearInterval(id);
      }
  }, 20);

});

fadein.addEventListener('click', click2 = () => {
   id = setInterval(show = () => {
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
       if(opacity<1){
       opacity = opacity + 0.1
       img.style.opacity = opacity;
       }else{
     clearInterval(id);
       }
   }, 20);
});

