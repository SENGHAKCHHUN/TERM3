<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="name">Name</label>
        <input type="text" name="username" placeholder="Full name">
        <br>
        <br>
        <label for="name">Name</label>
        <input type="password" name="password" placeholder="Password">
        <br><br>
        <input type="submit" value="log in">
    </form>
</body>
</html>

<?php
    echo "<h1> Name" . $_POST["username"] . "</h1>";
    echo "<h1> Password" . $_POST["password"] . "</h1>"
?>