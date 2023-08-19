<?php
require __DIR__ . '../../../../vendor/autoload.php'; // Make sure to include the autoload file for Firebase



use Google\Cloud\Firestore\FirestoreClient;

// Initialize Firestore
$firestore = new FirestoreClient();

// Reference to the "review" collection
$collectionRef = $firestore->collection('review');

// Retrieve documents from the collection
$query = $collectionRef->documents();
$reviews = [];

foreach ($query as $document) {
    $data = $document->data();
    $reviews[] = $data;
}

// Set the Content-Type header to application/json
header('Content-Type: application/json');

// Send the data as JSON
echo json_encode($reviews);
?>

