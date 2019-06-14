ajax({
		method: "POST",
		url: "file.php",
		success: function(data){
			console.log(data);
		},
		fail: function(data){
			console.log(data);
		}
	});
