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
