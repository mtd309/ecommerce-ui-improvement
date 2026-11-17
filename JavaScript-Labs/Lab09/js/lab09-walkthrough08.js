window.addEventListener('load',function(){
 document.getElementById('sampleForm').addEventListener('submit',function(e){
  var area=document.getElementById('errors');
  area.className='hidden';area.textContent='';
  var fields=document.querySelectorAll('input[type="text"],input[type="password"]');
  var empty=Array.from(fields).filter(function(field){return !field.value.trim();});
  if(empty.length){
    e.preventDefault();
    area.textContent="The following fields can't be empty: "+empty.map(function(f){return f.id;}).join(', ');
    area.className='visible';
  }
 });
});
