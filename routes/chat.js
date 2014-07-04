var express = require( 'express' );
var router = express.Router();

router.post( '/', function( req, res )
{
	res.render( 'chat', { title: 'toksong-chat', room_name: req.params.room_name, nickname: req.params.nickname } );
} );

router.get( '/', function( req, res )
{
	res.send( 'toksong chat!' );
} );

router.get( '/:room_name/:nickname', function( req, res )
{
	var clientsJSON = {};

	activeClients.forEach( function( val, idx )
	{
		clientsJSON[ val.id ] = val.nickname;
	} );

	res.render( 'chat', { title: 'toksong-chat', room_name: req.params.room_name, nickname: req.params.nickname, clients: clientsJSON } );
} );

module.exports = router;