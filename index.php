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
  <link rel="stylesheet" href="assets/css/loader.css">
  <link rel="stylesheet" href="assets/css/quantity.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="wrapper">
  <?php include("app/components/header.php") ?>
  <main class="container main">
    <nav class="navbar navbar-expand bg-light sticky-top p-2 mb-3 text-center justify-content-between">
      <ul id="categories-out" class="navbar-nav"></ul>
      <button id="cart" type="button" class="btn btn-primary align-self-end">Корзина</button>
    </nav>
    <div  id="container-data">
      <div class="animate-bottom">
        <h1>Рекомендуем!</h1>
        <div id="cards-container" class="row row-cols-1 row-cols-2 row-cols-md-4 row-cols-xl-5 g-4">
        </div>
      </div>
    </div>
  </main>
  <?php include("app/components/footer.php") ?>
</div>

<?php include("app/components/loader.php") ?>

<?php include("app/components/scrollup.php") ?>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous">
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="module" src="assets/js/main.js"></script>
</body>
</html>