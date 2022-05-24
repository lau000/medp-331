<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name
    $servername = "localhost:3308";
    $username = "web05";
    $password = "SP2022web05";
    $dbname = "web05db";
    
    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";

//pull form data and store in variables
if (isset($_POST['chip_type'], $_POST['quantity'])) {
    $chip_type = $_POST['chip_type'];
    $quantity = $_POST['quantity'];

} else {
    echo 'You need to input all the details.';
}

//inserting form data into a table in your database
    //student is the name of the table i created and firstname, lastname, class, year are the names of my columns
    $sql = "INSERT INTO quantity (chip_type, quantity)
    VALUES ('$chip_type', '$quantity')";
    
    //return status to user
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

    //close connection
    mysqli_close($conn);
?>
