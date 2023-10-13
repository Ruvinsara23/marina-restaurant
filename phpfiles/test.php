
<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $value = $data['value'];
    $name = $data['name'];
    $review = $data['review'];

  
    $response = array(
        "message" => "Review submitted successfully!",
        "value" => $value,
        "name" => $name,
        "review" => $review
    );




$host = "localhost";
$user = "root";
$password = "";
$database = "project";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully<br>";




$sql = "INSERT INTO feedback_table (review, name, value) VALUES ('$review', '$name', $value)";

if ($conn->query($sql) === TRUE) {
    echo "Test data inserted successfully<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
 }
?>