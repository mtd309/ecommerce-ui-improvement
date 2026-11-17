function setBackground(event){
 event.target.style.backgroundColor=(event.type==='focus' ? '#FFE393' : 'white');
}
window.addEventListener('load', function(){
 var fields=document.querySelectorAll('input[type="text"],input[type="password"]');
 fields.forEach(function(field){
  field.addEventListener('focus',setBackground);
  field.addEventListener('blur',setBackground);
 });
});
