<?php require_once 'templates/header.php' ?>
<?php

$colors = ['primary', 'danger', 'info', 'warning', 'success', 'secondary', 'dark'];
// CODE HERE 
$subject = [];
if (isset($_GET["subject"])){
    $subject = $_GET["subject"];
}

?>
    <div class="card">
        
        <div class="card-body">
            <?php
            // CODE HERE
            foreach($subject as $sub){
                $index = rand(0, count($subject));
                echo "<span class='bg-$colors[$index] p-1 m-1'>" . $sub ."</span>";
            }
            ?>
        </div>
    </div>


<?php require_once 'templates/footer.php' ?>