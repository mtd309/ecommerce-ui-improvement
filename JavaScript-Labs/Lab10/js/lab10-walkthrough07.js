$(function(){
 $('figure img').on('mouseover',function(e){
  var src=$(this).attr('src'),caption=$(this).attr('alt');
  var preview=$('<div id="preview"></div>');
  preview.append($('<img>',{src:src.replace('/small/','/medium/'),alt:caption}));
  preview.append($('<p>').text(caption));
  $('body').append(preview);$(this).addClass('gray');
  preview.css({top:(e.pageY-10)+'px',left:(e.pageX+30)+'px'}).fadeIn(150);
 }).on('mousemove',function(e){$('#preview').css({top:(e.pageY-10)+'px',left:(e.pageX+30)+'px'});})
 .on('mouseleave',function(){$(this).removeClass('gray');$('#preview').remove();});
});
