<?php
require __DIR__ . '../../../../vendor/autoload.php'; // Make sure to include the autoload file for Firebase



use Google\Cloud\Firestore\FirestoreClient;


$firebase = new FirestoreClient([
    'projectId' => 'marina-restaurant',
]);

$reviewsCollection = $firebase->collection('reviews');
$reviews = $reviewsCollection->documents();

$reviewData = [];
foreach ($reviews as $review) {
    $reviewData[] = $review->data();
}

echo json_encode($reviewData);
?>

?