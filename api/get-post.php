<?php
header('Content-Type: application/json');

if (!isset($_GET['filename'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No filename specified']);
    exit;
}

$filename = basename($_GET['filename']); // защита от path traversal
$filepath = __DIR__ . '/../blog_posts/' . $filename;

if (!file_exists($filepath)) {
    http_response_code(404);
    echo json_encode(['error' => 'File not found']);
    exit;
}

$content = file_get_contents($filepath);
echo json_encode([
    'filename' => $filename,
    'content' => $content
]);
