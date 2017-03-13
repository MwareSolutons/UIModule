/* 
 * MWare IPTV Example Module JS
 */

var roomService = new MWareModule({

	/*
	 * @param name
	 * @required
	 * Defines the module name and main menu label
	 */
	name: 'Room service',
	
	/*
	 * @param content
	 * @required
	 * Defines the path to the module's html content
	 */
	content: 'https://slashwebdesign.studio/mware/module/RoomService/index.html',
	
	/*
	 * @param events
	 * @optional
	 * Defines the module events 
	 */
	events: {
		
		/*
		 * @function code to run on module load 
		 * this is the earliest point when zones 
		 * can be set up and actions defined
		 */
		onLoad: function(){
			console.log('module loaded');
			
			// set up a list of room service items
			var 
				fruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Pineapple', 'Grape'],
				l = fruits.length;
			
			for (var i = 0; i < l; i++)
			{
				$('.rs-fruits').append('<div class="fruit" data-name="' + fruits[i] + '">' + fruits[i] + '</div>');
			}
			
			// create a user-navigable zone of the room service items we just created
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
			
			// create another navigable zone for the order button
			roomService.createZone({
				selector: '.rs-fruits-order',
				width: '100%',
				height: '45px',
				type: 'horizontal',
				selection: 'background',
				item: {
					width: '200px',
					height: '45px'
				}
			});
			
			/* 
			 * assign a callback function to run when the order button is triggered
			 * callback triggers can be assigned to zone items directly rather than
			 * the zone itself, this is useful in case you have a zone with multiple
			 * buttons
			 */
			roomService.addEventListener('.rs-fruits-order .btn-order', 'click', function(item){
				console.log('order button triggered');
			});
			
			// set up other services
			var 
				services = ['Room cleaning', 'Wake up call', 'Order cab', 'Order Uber', 'Special delivery', 'Check out', 'Other service #1', 'Other service #2', 'Other service #3', 'Other service #4', 'Other service #5', 'Other service #6', 'Other service #7', 'Other service #8'],
				l = services.length;
			
			for (var i = 0; i < l; i++)
			{
				$('.other-services').append('<div class="service" data-name="' + services[i] + '">' + services[i] + '</div>');
			}
			
			roomService.createZone({
				selector: '.other-services',
				width: '100%',
				height: '45px',
				type: 'horizontal',
				selection: 'background',
				item: {
					height: '100%'
				}
			});
			
			roomService.addEventListener('.other-services', 'click', function(item){
				console.log(item);
			});
		},
		
		/*
		 * @function code to run on module unload
		 * this is when the module is removed from view,
		 * user is switching to another page
		 */
		onUnload: function(){
			console.log('module unloaded');
		},
		
	}
	
});