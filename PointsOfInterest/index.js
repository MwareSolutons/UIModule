/* 
 * MWare IPTV Example Module JS
 */

var poi = new MWareModule({
	name: 'Points of Interest',
	content: 'https://slashwebdesign.studio/mware/module/PointsOfInterest/index.html',
	events: {
		onLoad: moduleIsReady
	}
});

function moduleIsReady(){
	
	$.ajax({
		url: 'https://slashwebdesign.studio/mware/module/PointsOfInterest/data.php',
		dataType: 'json',
		success: function(data){

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
			
			poi.addEventListener('.poi', 'select', function(item){
				
				$('.poi-detail h3').html(item.name);
				$('.poi-detail p').html(item.address);
				$('.poi-detail div').html(item.description);
				
			});

		}
	});

};