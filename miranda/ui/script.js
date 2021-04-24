$(function(){
	window.onload = function(e){
		window.addEventListener('message', function(event){

			var item = event.data;
			if (item !== undefined && item.type === "miranda") {

				if (item.display === true) {
					$('#miranda').delay(100).fadeIn( 0 );
				} else if (item.display === false) {
					$('#miranda').fadeOut( "slow" );
				}
			}

			if (item !== undefined && item.type === "vcard") {

				if (item.display === true) {
					$('#vcard').delay(100).fadeIn( 0 );
				} else if (item.display === false) {
					$('#vcard').fadeOut( "slow" );
				}
			}
		});
	};
});