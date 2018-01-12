<?php include 'database.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ShoutBox</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/script.js"></script>
	<script
	src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
	crossorigin="anonymous"></script>
</head>
<body>
	<div id="container">
		<header>
			<h1>ShoutBox</h1>
		</header>
		<div id="shouts">
			<ul>
				<li></li>
			</ul>
		</div>
		<footer>
			<form action="">
				<label>Name:</label>
				<input type="text" id="name">
				<label>Shout Text</label>
				<input type="text" id="shout">
				<input type="submit" id="submit" value="SHOUT!">
			</form>
		</footer>
	</div>
	
</body>
</html>