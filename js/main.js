$(function() {

	var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA', 'https://www.youtube.com/embed/-F5HwiGm7lg','https://www.youtube.com/embed/W6p2onuGlpo', 'https://www.youtube.com/embed/U5aqQvEeMro', 'https://www.youtube.com/embed/dzt7oCFN3ek', 'https://www.youtube.com/embed/ZXnT84Eu-oA', 'https://www.youtube.com/embed/pw5ETGiiBRg'];
	var videosWatched = [];
	var colours = ['red', 'orange', 'green', 'purple'];
	var coloursLength = colours.length;
	var currentColour = '';
	var previousColour = '';
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
		currentColour = compareColours(previousColour, coloursLength);
		applyColour(currentColour[1]);

		// show the video container on click
		if ($videoWrap.hasClass('hide')) {
			$videoWrap.removeClass('hide');
		}
		
		var videoData = getVideo();
		// get the video url from array
		var src = videoData[0];

		// add autoplay parameter to end of video url
		src += '?autoplay=1';
		// add the video url to the iframe
		$('#video-output iframe').attr('src', src);

		// finally store the previous colour index number for future use in storePrevNumber
		storePrevColour(currentColour[0]);
	});

	// move the video urls between the two arrays
	function getVideo() {
		// get the current number of items in videos array
		var vidNumber = videos.length;
		var videoSrc = '';
		var currentVid2 = '';

		if (videos.length <= 1) {
			// get the final video url from the videos array
			videoSrc = videos[0];
			// get the new number of videos in array
			vidNumber = videos.length; 
			// move all items from videosWatched array to videos array
			videos = videosWatched.slice();
			// empty the videosWatched array
			videosWatched = [];
			// push the final video url from videos array to the videosWatched array
			videosWatched.push(videoSrc);

		} else {
			// set the random number to pull from the array
			currentVid2 = randomize(vidNumber);
			// get the video url based on that number
			videoSrc = videos[currentVid2];
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

	// randomize function for selecting random number from arrays
	function randomize(val) {
		var num = Math.floor(Math.random() * val);
		return num;
	}

	// evaluate previous colour to current colour to make sure no back to back duplicates occur
	function compareColours(previous, indexTotal) {
  		var currentItem = randomize(indexTotal);
  		// while previous colour is the same index as the current colour, run the randomization function until we find two indexes that don't match
  		while (previous === currentItem) {
   			currentItem = randomize(indexTotal);
  		}
  		// get the index position
  		var colourPos = currentItem;
  		// get the index value 
  		var src = colours[currentItem];
  		var posSrc = [colourPos, src];
  		return posSrc;
	}

 	// apply the selected colour to the page
 	function applyColour(colour) {
 		var $body = $('body');
 		$body.toggleClass(colour);
 		var currentClass = $body.attr('class');
 		if ($body.hasClass(currentClass)) {
 			$body.removeClass(currentClass);
 			$body.addClass(colour);
 		} else {
 			$body.addClass(colour);
 		}
 	}

 	// store the value of previous number in the previousVid variable
 	function storePrevColour(val) {
 		previousColour = val;
 	}

});
