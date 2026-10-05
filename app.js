// Importer le module http
// Il contient toutes les méthodes necessaires
// pour la création d'un serveur ainsi que des requêtes HTTP
const http = require('http');
//Importer le module url
const url = require('url');
//Importer le module querystring
const querystring = require('querystring');
// Création du serveur
const server = http.createServer(
    // Fonction anonyme qui "récupère" de la méthode http.createServer
    // les paramètres req: REQUEST et res: RESPONSE
    function (req, res) {
        const page = url.parse(req.url).pathname;
        console.log("​Page : " + page);
        // Création des Headers de la réponse
        // Status Code: 200
        // Content-Type: text/plain
        const params = querystring.parse(url.parse(req.url).query);
        const age = querystring.parse(url.parse(req.url).query)

        // Établir les identifiants pour l'authentification
        const username = "admin";
        const password = "1234";

        // Récupération de l'authentification de la requête
        const auth = req.headers['authorization'];
        const expetedAuth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

        const token = "123456789";

        // Contenu de la réponse
        //Réponse mission 3
        // if("name" in params && "age" in params) {
        //     res.end("Bonjour " + params.name + ", vous avez " + params.age + " ans !");
        // }else {
        //     res.end("Bonjour inconnu");
        // }
        // // Si le paramètre est étape 1 alors affiche ce message
        if (page === "/etape1") {
            //Permet de lire les headers
            //Si le header x-api-key est égal à "Joshualegoat" alors affiche ce message
            if (req.headers['x-api-key'] == "Joshualegoat") {
                //Si le header authorization est égal à "Basic YWRtaW46MTIzNA==" ou au token alors affiche ce message
                if (auth == expetedAuth || auth == token) {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("URL existante et autorisee");
                } else {
                    res.writeHead(401, { "Content-Type": "text/plain" });
                    res.end("Unauthorized");
                }
            }
            //Erreur 401 si le header x-api-key est différent de "Joshualegoat"
            else {
                res.writeHead(401, { "Content-Type": "text/plain" });
                res.end("Unauthorized");
            }
        }
        //Erreur 404 si l'URL n'existe pas
        else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("URL inexistante");
        }
    });
// Démarrage du serveur sur le port 8085
server.listen(8085);