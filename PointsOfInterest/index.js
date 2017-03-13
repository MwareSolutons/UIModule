/* 
 * MWare IPTV Example Module JS
 */

/*
 * Set up a new module
 */
var poi = new MWareModule({
	
	/*
	 * @option name module name and main menu label
	 */
	name: 'Points of Interest',
	
	/*
	 * @option content path to module html content
	 */
	content: 'https://slashwebdesign.studio/mware/module/PointsOfInterest/index.html',
	
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
	 * request data to use for points of interest
	 */
	$.ajax({
		url: 'https://slashwebdesign.studio/mware/module/PointsOfInterest/data.php',
		dataType: 'json',
		success: function(data){

			/*
			 * for each poi we create div element, set up some idetifying attributes
			 * and push it to our zone container
			 */
			for (var i = 0; i < data.length; i++)
			{
				var poiItem = $('<div />');
				
				poiItem
					.addClass('place')
					.attr({
						'data-name': data[i].name,
						'data-description': data[i].description,
						'data-address': data[i].address,
					})
					.html('<img src="' + data[i].image + '" />');
				
				$('.poi').append(poiItem);
			}

			/*
			 * turn the container element into a user navigable zone
			 */
			poi.createZone({
				selector: '.poi',
				width: '750px',
				height: '310px',
				type: 'vertical',
				grid: true,
				selection: 'border',
				item: {
					width: '150px',
					height: '150px'
				}
			});
			
			/*
			 * assign a callback function to run every time an element
			 * from the zone is selected
			 */
			poi.addEventListener('.poi', 'select', function(item){
				
				$('.poi-detail h3').html(item.name);
				$('.poi-detail p').html(item.address);
				$('.poi-detail div').html(item.description);
				
			});

		}
	});

};