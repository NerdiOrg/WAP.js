ajax({
	method: "GET",
	url: "destination.php",
	data: {
		key1: 'hi',
		key2: 5
	},
	success: function(data){
		console.log(data);
	},
	fail: function(data){
		alert(data);
	}
});
