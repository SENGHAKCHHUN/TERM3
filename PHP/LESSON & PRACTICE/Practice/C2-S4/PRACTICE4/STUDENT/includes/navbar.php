<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Practice 4</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <?php
      //  YOUR CODE HERE
      if(isset($_GET['page'])){
        if($_GET['page']=="home"){
           $home='active bg-danger';
        }
        else{
           $about='active bg-danger';
        }
      }
      else{
        $home = 'active bg-danger';
      }
    ?>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <a class="nav-link <?= $home ?>" aria-current="page" href="?page=home">Home</a>
          <a class="nav-link <?= $about ?>" href="?page=about">About</a>
      </div>
    </div>
  </div>
</nav>