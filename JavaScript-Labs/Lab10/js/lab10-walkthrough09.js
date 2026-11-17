$(function(){
 $('#consume').on('click',function(){
  $('#results').html('<p>Loading...</p>');
  $.get('data/cities.json',function(data,status){
   if(status==='success'){
    var ul=$('<ul>');
    $.each(data,function(i,city){$('<li>').text(city.name).appendTo(ul);});
    $('#results').empty().append(ul);
   }
  }).fail(function(){$('#results').text('Unable to load data. Check Console.');});
 });
});
