/* 
 * MWare IPTV Example Module JS
 */

var showcase = new MWareModule({
	name: 'Hotel Presentation',
	player: true,
	events: {
		onLoad: moduleIsLoaded
	}
});

function moduleIsLoaded(){
	
	var player = showcase.createPlayer({
		url: '//s3.amazonaws.com/x265.org/video/BigBuckBunny_2000h264.mp4',
		events: {
			onReady: function(){
				console.log('player is ready, start playback');
				player.play();
			},
			onPlay: function(){
				console.log('playback started');
			},
			onError: function(e){
				console.log('player encountered an error:');
				console.log(e);
			},
			onTime: function(time){
				// try not to do much here as this is executed multiple times a second
				console.log('onTime event fired');
				console.log(time);
			},
			onComplete: function(){
				console.log('playback finished');
				
				// go back to previous page
				showcase.open('Room service');
			}
		}
	});
	
};