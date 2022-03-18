'use strict';

const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');
const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
  arrBg.push(`url(img/s${i}.jpg) no-repeat 50%/cover`);
  galleryLi[i].style.background=arrBg[i];
}

let i=-1;
function autoGallery(){
  i++;
  const gap=galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
  const goto=(-i*gap)+'px';

  gallery.style.left=goto;
  gallery.style.transition='all 0.5s';

  if(i>=galleryLi.length-1){
    i=-1;
  }

};
setInterval(autoGallery,3000);

(()=>{
  autoGallery();
})();



