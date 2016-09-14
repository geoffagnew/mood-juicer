$(function() {

	var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA?autoplay=1', 'https://www.youtube.com/embed/-F5HwiGm7lg?autoplay=1','https://www.youtube.com/embed/W6p2onuGlpo?autoplay=1'];
	var colours = ['red', 'orange', 'green', 'purple'];
	var vidNumber = videos.length;
	var colourNumber = colours.length;
	var previousVid = '';
	var currentVid = '';
	var $videoWrap = $('#video-output');

	$('#boost-btn').on('click', function(e) {
		e.preventDefault();
		// set the background colour
		setColour();
		if ($videoWrap.hasClass('hide')) {
			$videoWrap.removeClass('hide');
		}
		// call function to compare values
		var vettedNum = compareNumbers(previousVid);
		// get the video url from array
		var src = videos[vettedNum];
		// add the video url to the iframe
		$('#video-output iframe').attr('src', src);

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

	// randomize function for selecting random number from arrays
	function randomize(val) {
		var num = Math.floor(Math.random() * val);
		return num;
	}

	function compareNumbers(previous) {
  		currentVid = randomize(vidNumber);
  		while (previous === currentVid) {
   			currentVid = randomize(vidNumber);
  		}
  		return currentVid;
	}

 	// store the value of previous number in the previousVid variable
 	function storePrevNumber(val) {
 		previousVid = val;
 	}

 	// select and set new background colour
 	function setColour() {
 		var selectColour = randomize(colourNumber);
 		var src = colours[selectColour];
 		var $body = $('body');
 		$body.toggleClass(src);
 		var currentClass = $body.attr('class');
 		if ($body.hasClass(currentClass)) {
 			$body.removeClass(currentClass);
 			$body.addClass(src);
 		} else {
 			$body.addClass(src);
 		}
 	}

});
