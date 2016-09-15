$(function() {

	// var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA', 'https://www.youtube.com/embed/-F5HwiGm7lg','https://www.youtube.com/embed/W6p2onuGlpo', 'https://www.youtube.com/embed/U5aqQvEeMro', 'https://www.youtube.com/embed/dzt7oCFN3ek'];
	// var videosWatched = [];
	var videos = ['one', 'two', 'three', 'four', 'five'];
	var videosWatched = [];
	var colours = ['red', 'orange', 'green', 'purple'];
	// var vidNumber = videos.length;
	var colourNumber = colours.length;
	// var previousVid = '';
	// var currentVid = '';
	var $videoWrap = $('#video-output');
	var $btn = $('#boost-btn');

	$btn.on('click', function(e) {
		e.preventDefault();
		// change text in button after first click
		if ($btn.hasClass('first')) {
			$btn.removeClass('first');
			$btn.text('Another video please');
		} 
		// change vertical position of div after first video is launched
		if ($('#text-wrap').hasClass('launch')) {
			$('#text-wrap').removeClass('launch');
		}
		// set the background colour
		setColour();
		// show the video container on click
		if ($videoWrap.hasClass('hide')) {
			$videoWrap.removeClass('hide');
		}
		// call function to compare values
		// var vettedNum = compareNumbers(previousVid);
		// get the video url from array
		// var src = videos[vettedNum];
		
		var videoData = getVideo();
		var src = videoData[0];
		console.log('NEW GROUP --' + '\n' + 'Original videos array: ' + videos);

		console.log('Second videos array: ' + videosWatched);

		console.log('Number of videos left in original array: ' + '------------ ' + videoData[1]);

		console.log('This is the selected url for display: ' + '------------ ' + videoData[0]);

		// src += '?autoplay=1';
		// add the video url to the iframe
		// $('#video-output iframe').attr('src', src);

		// finally store the current number for future use in storePrevNumber
		// storePrevNumber(currentVid);
	});

	// randomize function for selecting random number from arrays
	function randomize(val) {
		var num = Math.floor(Math.random() * val);
		return num;
	}

	function getVideo() {
		if (videos.length <= 1) {
			var vidNumber = videos.length;
			// set the random number to pull from the array
			// var currentVid2 = randomize(vidNumber);
			// get the video url based on that number
			var videoSrc = videos[0];
			// remove that item from the videos array
			// videos.splice(currentVid2, 1);
			// get the new number of videos in array
			vidNumber = videos.length; 

			videos = videosWatched.slice();
			//videos.pop();
			videosWatched = [];
			// push that url into the videosWatched array
			videosWatched.push(videoSrc);

		} else {
			var vidNumber = videos.length;
			// set the random number to pull from the array
			var currentVid2 = randomize(vidNumber);
			// get the video url based on that number
			var videoSrc = videos[currentVid2];
			// remove that item from the videos array
			videos.splice(currentVid2, 1);
			// push that url into the videosWatched array
			videosWatched.push(videoSrc);
			// get the new number of videos in array
			vidNumber = videos.length;
		}
		
		return [videoSrc, vidNumber];
	}

	// function compareNumbers(previous) {
 //  		currentVid = randomize(vidNumber);
 //  		while (previous === currentVid) {
 //   			currentVid = randomize(vidNumber);
 //  		}
 //  		return currentVid;
	// }

 	// store the value of previous number in the previousVid variable
 	// function storePrevNumber(val) {
 	// 	previousVid = val;
 	// }

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
