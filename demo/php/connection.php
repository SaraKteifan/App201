<?php

header("Access-Control-Allow-Origin: *");

// $dbsn = "localhost";
// $dbun = "apptwoz1_user";
// $password = "w1qfIvRGGPa";
// $dbname = "apptwoz1_app201";

// $dsn ="mysql:host=$dbsn;dbname=$dbname";

// $conn = new PDO($dsn,$dbun,$password);

// if($conn)
// {

// echo "connection succeed";

// }else
// {
//     echo "connection failed";
// }
$dbh=mysqli_connect ("localhost", "apptwoz1_user", "w1qfIvRGGPa")
or die ('I cannot connect to the database.');
mysqli_select_db ($dbh,"apptwoz1_app201");
?>
