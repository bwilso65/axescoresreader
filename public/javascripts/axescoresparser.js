$(function(){
	if($(".error").html().length > 0){return}
	parseHtml();
	window.setTimeout(function(){reloadSchedule()}, 45000);
});

function reloadSchedule(){
	// $.ajax({
		// url: "/fetchSchedule",
		// data:{},
		// beforeSend: function(){
			// $(".datacontainer").html('');
			// var $container = $(".container-fluid");
			// var $row = $container.find(".row");
			// $row.html('<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>');
		// },
		// success: function(data){
			// $(".datacontainer").html(data.tables);
		// }
	// });
	window.location.reload();
}

function parseHtml(){
	var html = $(".datacontainer").html();
	var $container = $(".container-fluid");
	var $row = $container.find(".row");
	$row.html('');
	$row.append("<div class='col-sm-6'></div>");
	$row.append("<div class='col-sm-6'></div>");
	
	$(html).each(function(index, ele){
		var side = "";
		if(index === 0){side = "Left"}
		else if(index === 1){side = "Right"}
		$("<h2 style='text-align:center;'>" + side +"</h2>").appendTo($row.children('.col-sm-6')[index]);
		
		$(this).addClass("table");
		$(this).appendTo($row.children('.col-sm-6')[index]);
	});
	
	// Fix links
	$("a").each(function(){
		var href = $(this).attr('href');
		$(this).attr('href', "https://axescores.com"+href);
		$(this).attr('target', '__blank');
	});
}