//Needs a server to serve my static files in my client folder.

var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
//When our app loads in the browser, the express app instance will load our client static file
//and will automatically look for and load the index.html file for us. (that's how express is built internally)
app.use( express.static( path.join( root, 'client' )));

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
