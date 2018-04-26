
// ----- Preloader -------
$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

});

// ------ Modal ---	---

var modal = document.getElementById('myModal')
	,	btn = document.getElementById('btn')
	, span = document.getElementsByClassName("close")[0]

	btn.onclick = function() {
		modal.style.display = "block"
	}

	span.onclick = function() {
		modal.style.display = "none"
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none"
		}
	}
