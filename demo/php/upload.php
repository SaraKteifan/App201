<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $varr=strval(rand(1000,9999));
    var_dump($varr);
    $DIR = "www/var/home/apptwoz1/public_html/CVs";
    if (isset($_FILES)) {
        $file_name = $varr."___".$_FILES['myFile']['name'];
        $file_tmp = $_FILES['myFile']['tmp_name'];
        // $final=$file_name;
    
        move_uploaded_file($file_tmp,"$DIR/$file_name");
        echo "uploded";
    }else{
    echo "not ok";
    }
     
    // $DIR = "/var/www/react-php-upload/";
    // $httpPost = file_get_contents("php://input");
    // $req = json_decode($httpPost);
       
    // $file_chunks = explode(";base64,", $req->image);
       
    // $fileType = explode("image/", $file_chunks[0]);
    // $image_type = $fileType[1];
    // $base64Img = base64_decode($file_chunks[1]);
    
    // $file = $DIR . uniqid() . '.png';
    // file_put_contents($file, $base64Img); 
?>