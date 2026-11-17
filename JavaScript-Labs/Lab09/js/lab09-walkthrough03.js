var first=document.getElementById('first');
var para=document.createElement('p');
para.appendChild(document.createTextNode('this is programmatically created'));
first.appendChild(para);
var icons=document.getElementById('iconList'), target=document.getElementById('deleteThisOne');
if(icons&&target) icons.removeChild(target);
