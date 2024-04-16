const cors_proxy = require( 'cors-anywhere');
var host =  '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = 3003;


cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});