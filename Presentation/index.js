/* 
 * MWare IPTV Example Module JS
 */

/*
 * Set up a new module
 */
var showcase = new MWareModule({

	/*
	 * @option name module name and main menu label
	 */
	name: 'Hotel Presentation',
	
	/*
	 * @option player set to true if the module is a video player
	 * a video player module does not have a content option
	 */
	player: true,
	
	/*
	 * @option events
	 */
	events: {
		
		/*
		 * @function onLoad executed on module load
		 */
		onLoad: moduleIsReady
	}
});

function moduleIsReady(){
	
	/*
	 * create the player object
	 */
	var player = showcase.createPlayer({
		
		/*
		 * @option url define the video source
		 * make sure there is no protocol in front of the url
		 */
		url: '//s3.amazonaws.com/x265.org/video/BigBuckBunny_2000h264.mp4',
		
		/*
		 * @option events
		 */
		events: {
			
			/*
			 * @function executed when the player setup finished and it is ready
			 * earliest point when playback can be started
			 */
			onReady: function(){
				console.log('player is ready, start playback');
				player.play();
			},
			
			/*
			 * @function fires when the video playback is started
			 * usually on first frame
			 */
			onPlay: function(){
				console.log('playback started');
			},
			
			/*
			 * @function fires when an error occurs
			 */
			onError: function(e){
				console.log('player encountered an error:');
				console.log(e);
			},
			
			/*
			 * @function fires repeatedly, multiple times a second
			 * provides time related properties of the player such as
			 * duration, remaining time, elapsed time and percentage
			 */
			onTime: function(time){
				console.log('onTime event fired');
				console.log(time);
			},
			
			/*
			 * @function fires when the video source finishes playing
			 */
			onComplete: function(){
				console.log('playback finished');
				
				// go back to previous page
				showcase.open('Room service');
			}
		}
	});
	
};