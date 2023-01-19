<?php
    include './connection.php';
    
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $phone=$_REQUEST['phone'];
    $address=$_REQUEST['address'];
    $notes=$_REQUEST['notes'];
    $age=$_REQUEST['age'];
    $sex=$_REQUEST['sex'];
    $nationality=$_REQUEST['nationality'];
    $socialStatus=$_REQUEST['socialStatus'];
    $designLevel=$_REQUEST['designLevel'];
    $marketingLevel=$_REQUEST['marketingLevel'];
    $link1=$_REQUEST['link1'];
    $link2=$_REQUEST['link2'];
    $link3=$_REQUEST['link3'];
    $CV=$_REQUEST['CV'];

    try {
        $sql="INSERT INTO applicants (name,email,phone,address,notes,age,sex,nationality,socialStatus,designLevel,marketingLevel,link1,link2,link3,CV) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

        $result  = $conn->prepare($sql);
        $result->execute([$name,$email,$phone,$address,$notes,$age,$sex,$nationality,$socialStatus,$designLevel,$marketingLevel,$link1,$link2,$link3,$CV]);
        echo 'inserted to database succefully';
        
    } catch (\Throwable $th) {
        echo 'Failed to insert to database';
        throw $th;
    }

?>