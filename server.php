<?php

/* recuperare json */
$database = file_get_contents (__DIR__.'/todo-list.json');

/* convertire una stringa in un array associativo */
$todo_list = json_decode ($database, true);

/* elaborazione dati */













/* restitutuire file json */
header ('Content-Type: application/json');

echo json_encode ($todo_list);