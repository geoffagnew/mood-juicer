$(function() {

	// var testGroup = ['blue', 'green', 'yellow'];
	var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA=ONE', 'https://www.youtube.com/embed/-F5HwiGm7lg=TWO','https://www.youtube.com/embed/W6p2onuGlpo=THREE'];
	var previousVid = 'Empty';
	var rounds = '';

	$('#boost-btn').on('click', function(e) {
		e.preventDefault();
		// print the previous number selected
		$('#test-block-previous').html('This is the previous number: ' + previousVid);
		// get the current number selected
		var currentVid = randomNumber();

		// call function to compare values
		var vettedVid = numberComparison(currentVid, previousVid);

		// ------------------------------------------------
		// for testing purposes print the video to the page
		$('#test-block').html('This is the current url: ' + vettedVid[0]);
		$('#test-block-current').html('This is the current number selected: ' + vettedVid[1]);

		// for testing purposes, print the rounds to the page
		rounds += 'Current url: ' + vettedVid[0] + '<br />' +
					'Previous number: ' + previousVid + '<br />' +
					'Current number: ' + vettedVid[1] + '<br /><br />';
		$('#rounds').html(rounds);
		// -------------------------------------------------

		// finally store the current number for future use in storePrevNumber
		storePrevNumber(currentVid);
	});

	// compare current and previous values 
	function numberComparison(current, previous) {
		// create local variable for current randomized number
		var randomized = current;
		var alertNote = '';
		// check if current value is equal to previous value
		// (if current value is the same as previous value) 
		//	if randomized === previous {
			// (randomize number) 
		// }

		while (randomized === previous) {
		 	alertNote = $('#test-block-alert').html('Oops we have a duplicate. The previous number was: ' + previous + ' and the original randomized number is ' + randomized);
		 	randomized = randomNumber();
		}
		var videoSelect = pickVideo(randomized);
		var combined = [videoSelect,randomized];
		return combined;
		// return pickVideo(randomized);
	}

	// find a random number
	function randomNumber() {
 		var vidNumber = videos.length;
 		var number = Math.floor(Math.random() * vidNumber);
 		return number;
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

 	// FUNCTION FOR TESTING COMPARISON
 	// (function () {
	// 	var randomized = randomNumber();
	// 	var prev = 5;
	// 	var i = 0;

	// 	while (randomized === prev) {
	// 	 	$('#test-block-2').html('Oops we have a duplicate. The previous number was: ' + prev + ' and the original randomized number is ' + randomized);
	// 	 	randomized = randomNumber();
	// 	}
	// 	$('#test-block').html('This is the current number selected: ' + randomized);
	// })();


	// var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA', 'https://www.youtube.com/embed/-F5HwiGm7lg','https://www.youtube.com/embed/W6p2onuGlpo'];

 // 	// Event listener for randomizer
 // 	$('#boost-btn').on('click', function(e) {
 // 		e.preventDefault();
 // 		// var currentVideo = pickVideo();
	// 	var vidContainer = $('#video-output iframe').attr('src', pickVideo());
	// 	var src = pickVideo();
	// 	// setPrevVid(pickVideo());
	// 	// console.log('This is the current video: ' + currentVideo);
	// 	// previousVideo = pickVideo();
	// 	$('#test-block').html(src);
	// 	// 
 // 	});


 // 	function randomNumber() {
 // 		var vidNumber = videos.length;
 // 		var number = Math.floor(Math.random() * vidNumber);
 // 		return number;
 // 	}

 // 	function pickVideo() {
 // 		var videoSelect = videos[randomNumber()];
 // 		return videoSelect;
 // 	}


});
