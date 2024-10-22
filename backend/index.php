<?php
header("Content-Type: application/json");

require_once 'config/db.php'; // Include database configuration

// Include route files
require_once 'routes/cases.php';
require_once 'routes/users.php';

// Example: Handle GET request to fetch cases
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    getCases(); // Call a function to get cases
}

function getCases() {
    global $db; // Assume $db is your database connection
    $query = "SELECT * FROM cases";
    $result = $db->query($query);
    $cases = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($cases); // Return cases as JSON
}
