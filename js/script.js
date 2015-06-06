$(document).ready(function() {
	// Запрет на кэширование JSON файла,
	// чтобы клиент всегда получал актуальный файл
	var params = {
		cache: false
	};
	
	$("#news").click(function() {
		$.getJSON('http://127.0.0.1:8080/ssau961.com/BD/line_news.json', params, function(data) {
		//console.log(data);

		var output = "<ul class='posts'>";
		$.each(data, function(key, val) {
			//console.log("Проход: " + (key+1));	
			 output += "<li>";
			 output += "<h2>" + val.title + "</h2>";
			 output += "<img src='" + val.imageUrl + "' alt='" + val.title + "' width='80%'>";
			 output += "<p>" + val.snippet + "</p>";
			 output += "<hr>";
			 if (val.file !== "") {
			 	output += "<a href='" + val.file + "'>";
				 output += "<i class='fa fa-file-archive-o'></i>&nbsp;&nbsp;" + val.subject;
				 output += "</a>";
			 } else {
			 	return false;
			 }
			 output += "</li>";
		});
		output += "</ul>";
		$("#update").html(output);
	});
	});
});