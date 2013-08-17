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


//List persisted objects on indexed-db
$().ready(function(){
	
//List persisted objects on indexed-db
 function listData() {
	Lawnchair({name : 'food', adapter:'indexed-db'}, function() {			//Note this "namespace" "food" is the same that when we save
	  this.get("ad3bceba-3718-eb9a-f17e-53d76ef8bd30", function(config) {	//The long string is one I extracted from the browser´s indexedDB
	    console.log(config);
	  })
	})
 }
});
});
