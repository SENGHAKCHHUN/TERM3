<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <form action="from.php" method="post">
        <label>USERNAME</label><br>
        <input type="text" name="username"><br>
        <label>PASSWORD</label><br>
        <input type="password" name="password">
        <br>
        <input type="submit" value="log in"><br><hr>
    </form> -->
    <form action="from.php" method="post">
        <p>Quanlity</p>
        <input type="number" name="quanlity">
        <br>
        <input type="submit" value="pag now"> 
    </form>
</body>

</html>
<?php
    // echo "USERNAME IS : {$_POST["username"]} <br>";
    // echo "PASSWORD IS : {$_POST["password"]}";
    $price = 5.50;
    $quanlity = $_POST["quanlity"];
    $total =  $price * $quanlity;
    echo "Total Money : $total"
?>