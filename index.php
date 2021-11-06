<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="assets/favicon.png">
  <title>Гордость Льва</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<?php
  require_once 'database/db_connection.php';
  $db = new DB();
  $db->connect($GLOBALS['sql_dsn'], $GLOBALS['sql_login'], $GLOBALS['sql_password'], $GLOBALS['sql_charset']);
  $data = $db->fetchAllProducts();
?>

<div class="wrapper">
  <main class="container main">
    <header class="header">
      <div class="bg-light mb-3 shadow-sm p-2">
        <div class="col-4 logo">
          <a class="navbar-brand" href="http://7371-rev.isib.tusur.ru">
            <img src="assets/img/logo.svg" alt="logo">
            <h5 class="d-inline-block mx-3">
              Гордость льва
              <span class="d-block text-muted">Сеть №2 в России</span>
            </h5>
          </a>
        </div>
      </div>
      <nav class="navbar navbar-expand bg-light sticky-top p-2 mb-3 text-center justify-content-between">
        <ul id="categories-out" class="navbar-nav"></ul>
        <button type="button" class="btn btn-primary align-self-end">Корзина</button>
      </nav>
    </header>
    <div class="row row-cols-1 row-cols-2 row-cols-md-4 row-cols-xl-5 g-4">
      <?php foreach ($data as $key => $value) { ?>
        <div class="col">
          <div class="card h-100">
            <img class="card-img-top"
                 src="data:image/jpg;charset=utf8;base64,<?php echo base64_encode($value['image']); ?>"
                 alt="Image"/>
            <div class="card-body">
              <h5 class="card-title"><?php echo $value['name']; ?></h5>
              <small class="card-text text-secondary"><?php echo $value['description']; ?></small>
            </div>
            <div class="card-footer">
              <p class="card-text"><small class="text-muted">
                  <?php echo $value['weight'] . ' грамм' ?></small></p>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text m-0">от
                  <?php echo $value['price'] ?>₽
                </p>
                <button class="btn btn-danger">I/D</button>
              </div>
            </div>
          </div>
        </div>
      <?php } ?>
    </div>
  </main>
  <footer class="footer text-center text-white mt-3 bg-footer-top">
    <div class="container p-4 pb-0">
      <section id="media-out" class="mb-4 text-center"></section>
    </div>
    <div class="text-center p-3 bg-footer-bottom">
      <span class="text-uppercase">Гордость льва</span>
      <span>© 2021 Copyright</span>
    </div>
  </footer>
</div>

<div id="scrollup">
  <i class="fa fa-chevron-up"></i>
</div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous">
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="main.js"></script>
</body>
</html>