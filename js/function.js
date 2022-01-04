$(function(){

const $gnb = $('header>nav > .gnb > li');
const $lnb=$gnb.find('.lnb');
const $bg_lnb=$('header>nav > .bg_lnb');
const $indicator=$('#slides>.slides-pagination>li>a')
const $slides=$('#slides>.slides-container>li');

let nowIdx=0;
let oldIdx=nowIdx;


$gnb.on('mouseover',function() {
  $bg_lnb.stop().slideDown(300);
  $lnb.stop().slideDown(300); 
$('nav').css({borderBottom:'none'});
$('.gnb_text').fadeIn().css({display:'block',marginTop:'-45px'});
});

  $gnb.on('mouseout',function(){
    $lnb.stop().slideUp(300);
    $bg_lnb.stop().slideUp(300);
    $('nav').css({borderBottom:'2px solid rgb(139, 43, 43)'});
    
});
$gnb.on('mouseleave',function(){
  $('.gnb_text').hide();
});


function fadeFn(){

  $slides.eq(oldIdx).stop().fadeOut(1000);
  $slides.eq(nowIdx).stop().fadeIn(1000);
  

  $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

}



$indicator.on('click', function(evt){

  oldIdx = nowIdx;
  nowIdx = $indicator.index(this);


  fadeFn();
  evt.preventDefault();

});

setInterval(function(){

  oldIdx = nowIdx;
  
  if(nowIdx<4){
     nowIdx++;
  }else{
     nowIdx=0;
  }
  

  
  fadeFn()

},2000);
    
    

});