var btn=document.getElementById('testButton');
var img=document.getElementById('mainImage');
btn.addEventListener('click', function(){
 var content=document.getElementById('content');
 if(btn.textContent.trim()==='Hide') {
   btn.textContent='Show'; content.className='makeItDisappear';
   setTimeout(function(){content.style.display='none';},1000);
 } else {
   btn.textContent='Hide';content.style.display='block';
   setTimeout(function(){content.className='makeItNormal';},50);
 }
});
img.addEventListener('mouseover',function(){img.className='makeItGray';});
img.addEventListener('mouseout',function(){img.className='makeItNormal';});
