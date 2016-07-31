window.onload=function() {

	document.getElementById('download-button').onclick = function() {
		$('#levels').show('slow')
	};

	document.getElementById('beginer').onclick = function () {
		window.location = "beginer.html";
	};
};
