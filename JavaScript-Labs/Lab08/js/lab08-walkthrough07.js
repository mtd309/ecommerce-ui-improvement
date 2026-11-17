var daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri"];
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");
document.write('<table border="1" cellpadding="10" cellspacing="0"><tr>');
for (var i=0; i<daysOfWeek.length; i++) {
  var name = daysOfWeek[i];
  document.write('<th>' + (name.length >= 4 ? '<em>'+name+'</em>' : name) + '</th>');
}
document.write('</tr>');
for (var date=1; date<=30; date++) {
 if ((date-1)%7===0) document.write('<tr>');
 document.write('<td>'+date+'</td>');
 if (date%7===0) document.write('</tr>');
}
for (var rest=30%7;rest>0&&rest<7;rest++) document.write('<td></td>');
document.write('</tr></table>');
