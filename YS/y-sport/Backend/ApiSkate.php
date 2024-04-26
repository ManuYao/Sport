<?php
/*  -FR-  Cette ligne permet d'autoriser toutes les origines à accéder à la ressource. 
        (n'importe quelle origine) est autorisé à faire des requêtes au YCulturelles PHP.
    
    -EN- This line allows you to authorize all origins to access the resource.
         (any origin) is authorized to make requests to YCulturelles PHP.
*/
header("Access-Control-Allow-Origin: *");

/*  -FR- Cette ligne spécifie le type de contenu que le serveur envoie en réponse.
     Dans ce cas, elle indique que le contenu est au format JSON (`application/json`) 
     et utilise l'encodage de caractères UTF-8 (`charset=UTF-8`).
    
    -EN- This line specifies the type of content that the server sends in response.
      In this case, it indicates that the content is in JSON format (`application/json`)
      and uses UTF-8 character encoding (`charset=UTF-8`).
*/

/*
header("Content-Type: application/json; charset=UTF-8");

//requête à l'API OpenAgenda
$data = file_get_contents('https://data.smartidf.services/api/explore/v2.1/catalog/datasets/osm-fr-sport/records?limit=100&refine=sport%3A%22fitness%22'); 
$data = json_decode($data, true);

echo json_encode($data['results']);

*/

header('Content-Type: application/json');

$data = file_get_contents('./APISportSkate.json');

echo $data;

?>