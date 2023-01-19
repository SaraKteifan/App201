<?php
    require "./connection.php";


    $email    =  $_REQUEST['email'];

    try {
    
        $sql = "SELECT email
                   FROM applicants
                   WHERE  email='$email'";
    
        $q = $conn->query($sql);
        $q->setFetchMode(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    } 
    if($q->fetch())
        echo htmlspecialchars(true);
    else
        echo htmlspecialchars(false);
?>
