var express = require( 'express' );
var router = express.Router();

router.route( '/' )
	.get( function( req, res, next )
	{
//		req.params.err = 'please set "room name" and "nickname"!';
//		req.url = '/';

//		next();

		res.redirect( '/?err=' + 'please set "room name" and "nickname"!' );
	} )
	.post( function( req, res )
	{
		res.render( 'chat',
			{
				title    : 'toksong-chat',
				room_name: req.param( 'room_name' ),
				nickname : req.param( 'nickname' ),
				res      : res
			} );
	} );

router.get( '/rooms', function( req, res )
{
	res.json( getRooms() );
} );

router.get( '/:room_name/:nickname', function( req, res )
{
	var data = { "title": "toksong-chat", "room_name": req.params.room_name, "nickname": req.params.nickname, "res": res };

	if( req.xhr )
	{
		res.json( data );
	}
	else
		res.render( 'chat', data );
} );

module.exports = router;