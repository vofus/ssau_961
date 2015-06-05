$(document).ready(function() {
	$.getJSON('BD/line_news.json', function(data) {
		console.log(data);

		var output = "<ul class='posts'>";
		$.each(data, function(key, val) {
			 output += "<li>";
			 output += "<h2>" + val.title + "</h2>";
			 output += "<img src='" + val.imageUrl + "' alt='" + val.title + "'>";
			 output += "<p>" + val.snippet + "</p>";
			 output += "<a href='" + val.fail + "'>";
			 output += "<i class='fa fa-file-archive-o'></i> Компьютерная графика";
			 output += "</a>";
			 output += "</li>";
		});
		output += "</ul>";
		$("#update").html(output);
	});
});