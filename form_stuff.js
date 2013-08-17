//Import JQuery , launchair.js  and launchair "indexed db adapter" ...

//Listening form submissions with JQuery
$().ready(function(){
	
 $( "form" ).submit(function( event ) {
	event.preventDefault();
	//Serialize form to JSON (http://api.jquery.com/serializeArray/)
	var JSONObject = $("form").serializeArray();
	var db = Lawnchair({name : 'food', adapter:'indexed-db'}, function(food) {
	   var formDetails = JSONObject;				
	   food.save({value:formDetails}); //"INSERT"
	   });				
 });
});



//List persisted objects on indexed-db
$().ready(function(){

 function listData() {
 	//Note this "namespace" "food" is the same that when we save
	Lawnchair({name : 'food', adapter:'indexed-db'}, function() {
	  //The long string is one I extracted from the browser´s indexedDB
	  this.get("ad3bceba-3718-eb9a-f17e-53d76ef8bd30", function(config) {
	    console.log(config);
	  })
	})
 }
});
