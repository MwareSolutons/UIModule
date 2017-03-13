# MWareIPTVModule
MWare Solutions IPTV User Interface Module

##Intro
A collection of sample code and documentation to create modules for MWare IPTV user interface.

##Dependencies
* none

##Usage
Every module will be executed in the UI scope hence no need to import any libraries or plugins. jQuery is available during runtime.

Creating a new module is very easy

    	var roomService = new MWareModule(options);

Module options

	options = {

	      /*
	       * this is the module identifier and also the main menu label
	       */
	      name: 'Room service',

	      /*
	       * path to the modules HTML content 
	       */
	      content: 'index.html',

	      /*
	       * if set to true this will become a video player module
	       * player module does not need HTML content
	       */
	      player: false

	      /*
	       * module events
	       */
	      events: {

			/*
			 * fires when the module is ready
			 * this is the earliest point when zones can be created
			 * and listeners attached
			 */
			onLoad: function(){},

			/*
			 * fires when the module is unloaded
			 * this happens when a user switches to another page
			 */
			onUnload: function(){}
	      }

Module methods

* createZone
* createPlayer
* addEventListener
* open

### module.createZone

	roomService.createZone({
		/*
		 * @option selector
		 * Defines the class name or ID of the zone container
		 */
		selector: '.rs-fruits',

		/*
		 * @option width
		 * Defines the zone's width in pixels or percentage
		 */
		width: '200px',

		/*
		 * @option height
		 * Defines the zone's height in pixels or percentage
		 */
		height: '200px',

		/*
		 * @option type
		 * Defines the zone's type, horizontal or vertical
		 */
		type: 'vertical',

		/*
		 * @option selection
		 * Defines the item selection type, background or border
		 */
		selection: 'background',

		/*
		 * @option item
		 * Defines the size of items in the zone, pixels or percentage
		 */
		item: {
			width: '100%',
			height: '45px'
		}
	});

### module.createPlayer

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

### module.addEventListener

	/*
	 * assign callback function to run when items are triggered in a zone
	 * @param selector defines the zone container
	 * @param type defines the type of event, click or select
	 * @function callback code to execute on event
	 */
	roomService.addEventListener('.rs-fruits', 'click', function(item){

		console.log('item was triggered');

		/*
		 * single argument will be passed to every assigned callback containing 
		 * every data attribute of the selected item
		 */
		console.log(item);

	});

### module.open
	
	/*
	 * @param name module name to load
	 */
	showcase.open('Room service');
