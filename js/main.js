$(function() {

	var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA', 'https://www.youtube.com/embed/-F5HwiGm7lg','https://www.youtube.com/embed/W6p2onuGlpo'];
	var vidNumber = videos.length;
	var previousVid = '';
	var currentVid = '';

	$('#boost-btn').on('click', function(e) {
		e.preventDefault();
		// call function to compare values
		var vettedNum = compareNumbers(previousVid);
		// get the video url from array
		var src = videos[vettedNum];
		// add the video url to the iframe
		var vidContainer = $('#video-output iframe').attr('src', src);
		console.log(src);

		// ------------------------------------------------
		// for testing purposes print the video to the page
		// $('#test-block').html('This is the current url: ' + src);
		// // print the previous number selected
		// $('#test-block-previous').html('This is the previous number: ' + previousVid);
		// // print the current number
		// $('#test-block-current').html('This is the current number selected: ' + vettedNum);
		// -------------------------------------------------

		// finally store the current number for future use in storePrevNumber
		storePrevNumber(currentVid);
	});

	function compareNumbers(previous) {
  		currentVid = Math.floor(Math.random() * vidNumber);
  		while (previous === currentVid) {
   			currentVid = Math.floor(Math.random() * vidNumber);
  		}
  		return currentVid;
	}

 	// pick a video from the array after ensuring no two videos will be shown consecutively
 	function pickVideo(pos) {
		var videoSelect = videos[pos];
		return videoSelect;
 	}

 	// store the value of previous number in the previousVid variable
 	function storePrevNumber(val) {
 		previousVid = val;
 	}

});
