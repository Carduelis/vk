//fitText if needed
//jQuery(".phones b").fitText();

$(document).ready(function(){
// Главная страница
/*
var viewportWidth = $('#container').width();
$('#container, #container > ul > li').css('width',viewportWidth);

*/
 slider = $('#container ul').bxSlider({
     adaptiveHeight: true,
    infiniteLoop : false,
    hideControlOnEnd : true,
    
    minSlides: 1,
    maxSlides: 2,
    slideWidth: 700,
    pagerCustom: '#bx-pager',
    /*
    buildPager: function(slideIndex){
    switch(slideIndex){
        case 0:
          return './elements/minimap/0.png';
        case 1:
          return './elements/minimap/1.png';
        case 2:
          return './elements/minimap/2.png';
        case 3:
          return './elements/minimap/3.png';
        case 4:
          return './elements/minimap/4.png';
        case 5:
          return './elements/minimap/5.png';
        case 6:
          return './elements/minimap/6.png';
        case 7:
          return './elements/minimap/7.png';
      }
    }*/
  });

 $('#bx-pager > span').click(function(){
  $(this).parent().toggleClass('enlarge');
 })
$('#container li').each(function(){
  var stackId = $(this).index();
  $(this).attr('id','stack'+stackId);

  $(this).find('section').each(function(){
    var blockId = $(this).index();
    $(this).attr('id','stack'+stackId+'_block'+blockId);

    $(this).children().each(function(){
      var side = $(this).attr('side');
      $(this).attr('id','stack'+stackId+'_block'+blockId+'_'+side);
    });

  });

});

/*
$('section').each(function(){
  var numOfSides = $(this).children().length;
  if (numOfSides != 1) {
    $(this).children().each(function(){
      var side = $(this).attr('side');
      side = "to"+side;
      $(this).before('<span class="'+side+'">').append('<span class="back">').each(function(){
        $('[side] .back').on('click', function(){
          $(this).parent().hide();
          $(this).parents('section').children('div[size="front"]').show();
        })
        $('.toleft, .toright, .toinside').on('click', function(){
          $(this).next().show();
          $(this).parent('section').children('div[size="front"]').hide();
        });
      });

    })

  }
});

*/

$('div[side]:not([side="front"])').each(function(){
  var side = $(this).attr('side');
  var toside = "to"+side;
  $(this).before('<span class="'+toside+'" for="'+side+'">').append('<i class="back">');
});

$('section > span').on('click',function(){
  side = $(this).attr('for');
  $(this).parent().children('span').hide();
  $(this).parent().children('div[side]').hide();
  $(this).parent().children('div[side="'+side+'"]').fadeIn();
});

$('section i').on('click',function(){
  $(this).parent().parent().children('span').fadeIn();
  $(this).parent().hide();
  $(this).parent().parent().children('div[side="front"]').fadeIn();
});
});



// ----------------------------
// Показать верхнее меню
// ----------------------------

$('header .btn a').bind('click',function() {
  var thisLink = $(this);
  var openBlockId = thisLink.parent().attr('id');
  var openBlockId = openBlockId+'Body';
  var openBlock = $('.hidden-block#'+openBlockId);
  openBlock.slideToggle();
  thisLink.toggleClass('active');
  $('.hidden-block').not(openBlock).slideUp();
  $('header .btn a').not(thisLink).removeClass('active');
});



// ----------------------------
// Переключение видов
// ----------------------------
$('.btn-group > .inside > .btn').bind('click',function() {
  var t = $(this);
  var p = t.parents('.multi-view');
  p.find('.btn').removeClass('active');
  p.find('.view').hide();
  t.addClass('active');
  p.find('.view:eq('+ t.index() +')').fadeIn(300);
});
$('.btn-group > .inside > .btn:first-child').addClass('active');
$('.view-group > .view:first-child').show();


