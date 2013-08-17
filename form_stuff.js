//Import JQuery , launchair.js  and launchair "indexed db adapter" ...

//Listening form submissions with

		$().ready(function(){
			
			$( "form" ).submit(function( event ) {
				event.preventDefault();
				var JSONObject = $("form").serializeArray();	//Serializa el form a JSON
				var db = Lawnchair({name : 'food', adapter:'indexed-db'}, function(food) {
					var formDetails = JSONObject;				
					food.save({value:formDetails}); //INSERT (Si se pasa el id como atributo "key", hace un update)
				});				
			});
			
		});
