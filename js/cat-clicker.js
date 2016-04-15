var catNames = [];
catNames.push("Stinker", "Chubber");
var picA = $(".picA");
var picB = $(".picB");
picA.prepend("<h2>" + catNames[0] + "</h2>");
picB.prepend("<h2>" + catNames[1] + "</h2>");

$(document).ready(function() {
    $("#kitty").click(function() {
    	$("#stink").html(function(i, val) {
    		return val*1+1;
    	});
    });

    $("#cat").click(function() {
    	$("#chub").html(function(i, val) {
    		return val*1+1;
    	});
    });
});
