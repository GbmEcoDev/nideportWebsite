<?php
/*
// Verifica si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Función para limpiar y validar los datos
    function cleanAndValidate($input) {
        $cleanedInput = trim($input);
        $cleanedInput = stripslashes($cleanedInput);
        $cleanedInput = htmlspecialchars($cleanedInput);
        return $cleanedInput;
    }

    // Obtiene y limpia los datos del formulario
    $nombre = cleanAndValidate($_POST["nombre"] ?? '');
    $empresa = cleanAndValidate($_POST["empresa"] ?? '');
    $telefono = cleanAndValidate($_POST["telefono"] ?? '');
    $email = cleanAndValidate($_POST["email"] ?? '');
    $terminos = isset($_POST["terminos"]) ? $_POST["terminos"] === "true" : false;
    $notificaciones = isset($_POST["notificaciones"]) ? $_POST["notificaciones"] === "true" : false;

    // Validaciones adicionales (puedes agregar más según tus necesidades)
    if (empty($nombre) || empty($empresa) || empty($telefono) || empty($email)) {
        http_response_code(400); // Solicitud incorrecta
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Solicitud incorrecta
        echo json_encode(["error" => "El formato del correo electrónico es inválido"]);
        exit;
    }

    // Puedes realizar validaciones adicionales según tus necesidades

    // Ejemplo de cómo podrías enviar un correo electrónico con los datos (usando la función mail de PHP)
    $to = "tu@email.com";
    $subject = "Nuevo formulario enviado";
    $message = "Nombre: $nombre\nEmpresa: $empresa\nTeléfono: $telefono\nEmail: $email\nTérminos: $terminos\nNotificaciones: $notificaciones";

    mail($to, $subject, $message);

    // Devuelve una respuesta al cliente (puedes personalizar según tus necesidades)
    $response = ["message" => "¡Formulario enviado con éxito!"];
    echo json_encode($response);
} else {
    // Si la solicitud no es de tipo POST, devuelve un error
    http_response_code(405); // Método no permitido
    echo json_encode(["error" => "Método no permitido"]);
}
*/
?>
<?php

// Verifica si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Función para limpiar y validar los datos
    function cleanAndValidate($input) {
        $cleanedInput = trim($input);
        $cleanedInput = stripslashes($cleanedInput);
        $cleanedInput = htmlspecialchars($cleanedInput);
        return $cleanedInput;
    }

    // Obtiene y limpia los datos del formulario
    $nombre = cleanAndValidate($_POST["nombre"] ?? '');
    $empresa = cleanAndValidate($_POST["empresa"] ?? '');
    $telefono = cleanAndValidate($_POST["telefono"] ?? '');
    $email = cleanAndValidate($_POST["email"] ?? '');
    $terminos = isset($_POST["terminos"]) ? $_POST["terminos"] === "true" : false;
    $notificaciones = isset($_POST["notificaciones"]) ? $_POST["notificaciones"] === "true" : false;

    // Validaciones adicionales (puedes agregar más según tus necesidades)
    if (empty($nombre) || empty($empresa) || empty($telefono) || empty($email)) {
        http_response_code(400); // Solicitud incorrecta
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Solicitud incorrecta
        echo json_encode(["error" => "El formato del correo electrónico es inválido"]);
        exit;
    }

    // Simula una respuesta positiva si el parámetro "forceSuccess" está presente
    if (isset($_POST["forceSuccess"]) && $_POST["forceSuccess"] === "true") {
        $response = ["message" => "¡Formulario enviado con éxito! (Respuesta simulada)"];
        echo json_encode($response);
        exit;
    }

    // Ejemplo de cómo podrías enviar un correo electrónico con los datos (usando la función mail de PHP)
    $to = "ariel.robles@gbm.eco";
    $subject = "Nuevo formulario enviado";
    $message = "Nombre: $nombre\nEmpresa: $empresa\nTeléfono: $telefono\nEmail: $email\nTérminos: $terminos\nNotificaciones: $notificaciones";

    mail($to, $subject, $message);

    // Devuelve una respuesta al cliente (puedes personalizar según tus necesidades)
    $response = ["message" => "¡Formulario enviado con éxito!"];
    echo json_encode($response);
} else {
    // Si la solicitud no es de tipo POST, devuelve un error
    http_response_code(405); // Método no permitido
    echo json_encode(["error" => "Método no permitido"]);
}

?>
