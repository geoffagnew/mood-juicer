$(function() {
	var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA', 'https://www.youtube.com/embed/-F5HwiGm7lg','https://www.youtube.com/embed/W6p2onuGlpo'];

 	// Event listener for randomizer
 	$('#boost-btn').on('click', function(e) {
 		e.preventDefault();
 		// var currentVideo = pickVideo();
		var vidContainer = $('#video-output iframe').attr('src', pickVideo());
		var src = pickVideo();
		// setPrevVid(pickVideo());
		// console.log('This is the current video: ' + currentVideo);
		// previousVideo = pickVideo();
		$('#test-block').html(src);
		// 
 	});


 	function randomNumber() {
 		var vidNumber = videos.length;
 		var number = Math.floor(Math.random() * vidNumber);
 		return number;
 	}

 	function pickVideo() {
 		var videoSelect = videos[randomNumber()];
 		return videoSelect;
 	}


});
