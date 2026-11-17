
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

window.addEventListener('load',function(){
 var div=document.getElementById('div1');
 if(div) alert(div.innerHTML);
});