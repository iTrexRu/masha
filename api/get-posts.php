<?php
header('Content-Type: application/json');

$postsDir = __DIR__ . '/../blog_posts';
$posts = [];

foreach (glob($postsDir . '/*.txt') as $file) {
    $filename = basename($file);

    // Имя файла без расширения
    $name = preg_replace('/\.txt$/', '', $filename);

    // Excerpt: имя файла с заменой нижних подчёркиваний на пробелы
    $excerpt = str_replace('_', ' ', $name);

    // Дата модификации файла
    $date = date("Y-m-d H:i:s", filemtime($file)); // или свой формат

    // Image: тот же путь, но с расширением .jpg
    $image = '/blog_posts/' . preg_replace('/\.txt$/', '.jpg', $filename);

    // URL: путь до текстового файла (или как нужно для вашего приложения)
    $url = '/blog_posts/' . $filename;

    $posts[] = [
        'title' => $filename,
        'excerpt' => $excerpt,
        'date' => $date,
        'image' => $image,
        'url' => $url
    ];
}

echo json_encode($posts);
