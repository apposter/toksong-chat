var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/', function( req, res )
{
	res.render( 'index', { title: 'toksong-chat', err: req.param( 'err' ) } );
} );

module.exports = router;