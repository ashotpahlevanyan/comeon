$(document).ready(function(){

	$.ajax({
		url: '/login',
		type : 'POST',
		data: {
			username: 'rebecka',
			password: 'secret'
		}
	});
	// , function(response) {
	// 	data = response;
	// 	console.log(response);
	// }
	// $.ajax({
	// 	url: '/logout',
	// 	type : 'POST',
	// 	data: {
	// 		username: 'rebecka'
	// 	}
	// });
	$.getJSON("/login", function(response) {
	  if ( response.status == "success") {
	    $("#fortune").html( "Your fortune is: " + response.fortune );
	  } else {
	    $("#fortune").html( "Things do not look good, no fortune was told" );
	  }
	});
});