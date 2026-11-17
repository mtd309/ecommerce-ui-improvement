$(function(){
 $('.animLoading').hide();
 $('#consume').on('click',function(){
  $('#results').empty().append('<ul></ul>');$('.animLoading').show();
  $.get('data/cities.json')
    .done(function(data){$.each(data,function(i,city){$('<li>').text(city.name).appendTo('#results ul');});})
    .fail(function(xhr,status,error){$('#results').text('failed loading data - status='+status+' error='+error);})
    .always(function(){$('.animLoading').fadeOut('slow');});
 });
 $('#testFailure').on('click',function(){
  $('.animLoading').show();
  $.get('data/not-found.json').fail(function(xhr,status,error){$('#results').text('failed loading data - status='+status+' error='+error);})
     .always(function(){$('.animLoading').fadeOut('slow');});
 });
});
