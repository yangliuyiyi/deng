$(function(){
	  $('#main').fullpage({
	  	resize:true,
	  	 anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7'],
       navigation:true,
      
      navigationPosition:'right',
      navigationTooltips:['accueil','presentation','photos:ambiance','couleurs','photos:studio','caracteristiques','contact'],
      showActiveTooltip:false,
     
     })
      $('.first i').click(function(){
        $.fn.fullpage.moveSectionDown();
    })


})
