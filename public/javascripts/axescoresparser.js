$(function(){
	//$("table").addClass("table");
	//$(".container-fluid").show();
	var html = $(".datacontainer").html();
	var $container = $("<div class='container-fluid'><div class='row'></div></div>");
	var $row = $container.find(".row");
	$row.append("<div class='col-sm-6'></div>");
	$row.append("<div class='col-sm-6'></div>");
	
	$(html).each(function(index, ele){
		console.log($row.children('.col-sm-6')[index]);
		$(this).appendTo($row.children('.col-sm-6')[index]);
	});
	
	$("body").append($container);
});