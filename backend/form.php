<?php
    echo json_encode([
        'answer' => 'Вы ввели: ' . $_POST['string']
    ]);

    // file_put_contents('form.txt', $_POST['string']);