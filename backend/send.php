<?php
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    echo json_encode([
        'echo' => 'Вы ввели: ' . $data['country'] . ' и ' . $data['city']
    ]);