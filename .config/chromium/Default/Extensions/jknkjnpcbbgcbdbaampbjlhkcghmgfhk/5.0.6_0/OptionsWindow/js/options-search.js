$("#search").click(function(){
	
	//Show the form
	$(".search-item").toggle();
	$(".search-item-input").focus();
	
	$(".search-item-confirm").click(function(){
		
		$(".search-item-input").val("").keyup();
		$(".search-item").hide();
		
		updateCounter();
		
	});
	
});

$(".search-item-input").keyup(function(){
	
	var value = $(this).val().toLowerCase();
	
	$(".list > li").each(function(){
		
		if ( $(this).find(".key").text().toLowerCase().search(value) > -1 ) {
			
			$(this).show();
			
		} else {
			
			$(this).hide();
			
		}
		
	});
	
	updateCounter("search");
	
});