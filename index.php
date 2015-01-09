<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>BigVideo.js - The jQuery Plugin for Big Background Video</title>
	<meta name="description" content="BigVideo.js - The jQuery Plugin for Big Background Video"/>
	<meta name="author" content="John Polacek"/>
	<meta name="viewport" content="width=device-width">
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:900&text=ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	      rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/landing.css">
	<link rel="stylesheet" href="css/font-awesome.css">

</head>
<body>
<div class="scenario">

</div>

<header>
	<div class="content-wrapper">
		<div class="contenuto">
			<div class="logo">
				<h1><i><b>Campo all’Aia</b></i></h1>

				<h2 style="margin-bottom: 10px;"><i>The immersive beutiful Country House</i></h2>

			</div>
			<div class="social">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-google"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a></div>

		</div>
	</div>
</header>


<div class="content">
	<video id="video" style="position:absolute;" class="video-js"
	       width="auto" height="auto">
		<source src="videos/comp_1_hd.mp4" type='video/mp4'/>

		<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that
			<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
	</video>

	<div class="text-intro" onclick="location.href='home.html'">
		<p>Visit The House</p><br>
		< Play >
	</div>


	<div class="min-col" style="float:left">
		<div class="wrapper-box">
			<div class="box">
				<div class="title">
					Autumn<br>
					Temperature
				</div>
			</div>
		</div>
	</div>


	<div class="min-col" style="float:right">
		<div class="wrapper-box">
			<div class="box">

			</div>
		</div>

		<div class="wrapper-box-small">
			<div class="box-orange">
				<a href="home.html">Explore<br>the Villa</a>
			</div>
		</div>


	</div>

	<div class="subcolumn">
		<div class="content-wrapper">
			<div class="contenuto">


				<div class="timeline homepage">

					<div class="month" rel="autumn" number="1">

						<div class="image">

						</div>

						<div class="number">

						</div>
						1
						<div class="triangle">

						</div>


					</div>


					<div class="month" rel="winter" number="2">

						<div class="image">

						</div>

						<div class="number">

						</div>
						1
						<div class="triangle">

						</div>


					</div>


					<div class="month" rel="spring" number="3">

						<div class="image">

						</div>

						<div class="number">

						</div>
						1
						<div class="triangle">

						</div>


					</div>


					<div class="month-selected" rel="summer" number="4">


						<div class="text">
							1<br>
							Summer
						</div>

					</div>

				</div>

			</div>
		</div>
	</div>

</div>

<footer>

</footer>

<script src="bower_components/jquery/dist/jquery.min.js"></script>
<link href="/css/videojs.css" rel="stylesheet">
<script src="/js/videojs.js"></script>
<script language="javascript">
	JQ = jQuery.noConflict();
</script>
<script src="js/campoaia.js"></script>


<!-- Demo -->
<script>


	window.paceOptions = {
		// Disable the 'elements' source
		document: true,
		ajax: true,
		// Only show the progress on regular and ajax-y page navigation,
		// not every request
		restartOnRequestAfter: false
	}
</script>
<script src="/js/pace.js"></script>
<script>
	Pace.on('done', function () {
		JQ('.scenario').delay(800).fadeOut("slow");

	});

	JQ(document).ready(function () {


		videojs("video", {
			autoplay: true,
			controls: false,
			preload: "auto",
			loadingSpinner: true,
			poster: "/img/dummy.png"
		}).ready(function () {
			var myPlayer = this;

			// EXAMPLE: Start playing the video.
			myPlayer.play()
		});

	})
</script>


</body>
</html>