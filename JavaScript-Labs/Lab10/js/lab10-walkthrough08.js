$(function(){
 $('button').on('click',function(){
  $('#box').stop(true,true).css({left:'0px',top:'0px',height:'200px',opacity:'1'})
  .animate({left:'495px',opacity:'1',height:'50px'})
  .animate({top:'400px',opacity:'0.2'})
  .animate({height:'200px'},2000);
 });
});
