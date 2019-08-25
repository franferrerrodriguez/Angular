<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once 'Requests-1.7.0/library/Requests.php';

Requests::register_autoloader();

$url = 'https://accounts.spotify.com/api/token';

// HEAD - application/x-www-form-urlencoded
$headers = array('Content-Type' => 'application/x-www-form-urlencoded');

// BODY - application/x-www-form-urlencoded
$body = array(
    'grant_type' => 'client_credentials',
    'client_id' => '33ec975c6b0748b2b81aed183627a7cc',
    'client_secret' => '6d25dc4c83944191825a84ac13db5d4d'
);

$response = Requests::post($url, $headers, $body);

echo $response->body;

?>