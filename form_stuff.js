//Import JQuery , launchair.js  and launchair "indexed db adapter" ...

//Listening form submissions with JQuery
$().ready(function(){
	
 $( "form" ).submit(function( event ) {
	event.preventDefault();
	var JSONObject = $("form").serializeArray();	//Serialize form to JSON (http://api.jquery.com/serializeArray/)
	var db = Lawnchair({name : 'food', adapter:'indexed-db'}, function(food) {
	   var formDetails = JSONObject;				
	   food.save({value:formDetails}); //"INSERT"
	   });				
 });
	
});
