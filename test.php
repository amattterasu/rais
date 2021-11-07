<?php
  require_once 'database/db_connection.php';
  header("Access-Control-Allow-Orgin: *");
  header("Access-Control-Allow-Methods: *");
  header("Content-Type: application/json");

  $db = new Database();

  $db->connect($GLOBALS['sql_dsn'], $GLOBALS['sql_login'], $GLOBALS['sql_password'], $GLOBALS['sql_charset']);
  $products = $db->test();

  echo json_encode($products);

