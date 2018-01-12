<?php include 'database.php'; ?>
<?php 
	$query = "SELECT * from shout order by id desc";
	$shouts = mysqli_query($con,$query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ShoutBox</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
</head>
<body>
	<div id="container">
		<header>
			<h1>ShoutBox</h1>
		</header>
		<div id="shouts">
			<ul>
				<?php while ($row = mysqli_fetch_assoc($shouts)) : ?>
				<li> <?php echo $row['name']; ?>: <?php echo $row['shout']; ?> [<?php echo $row['date']; ?>]</li>
			<?php endwhile; ?>
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