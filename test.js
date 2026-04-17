const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = 3009;

server.listen(port, () => {
    console.log(`✓ Serveur démarré sur le port ${port}`);
    console.log(`✓ Accédez à http://localhost:${port}`);
    
    // Tester les routes
    setTimeout(() => {
        http.get("http://localhost:3009/", (res) => {
            console.log(`✓ Route "/" est accessible (${res.statusCode})`);
        }).on('error', (e) => {
            console.error(`✗ Erreur route "/": ${e.message}`);
        });
        
        http.get("http://localhost:3009/register", (res) => {
            console.log(`✓ Route "/register" est accessible (${res.statusCode})`);
        }).on('error', (e) => {
            console.error(`✗ Erreur route "/register": ${e.message}`);
        });
        
        // Arrêter après 3 secondes
        setTimeout(() => {
            console.log("\n✓ Tests terminés");
            process.exit(0);
        }, 1000);
    }, 500);
});

setTimeout(() => {
    console.error("✗ Le serveur n'a pas démarré à temps");
    process.exit(1);
}, 5000);
