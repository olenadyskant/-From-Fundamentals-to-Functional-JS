/* var nonsense function(string) {
	 var blab = function(){
	   alert(string);
	 };
}
nonsense("blah blah blah");

var nonsense = function(string) {
	
	 var blab = function(){
	   alert(string);
	 };
	 setTimeout(blab, 2000);
}
nonsense("blah blah");
*/

var nonsense = function(string) {
	
	 var blab = function(){
	   alert(string); 
	 };
	 return blab;
	};
	

var blabLater = nonsense("Hello, everyone!");
var blabAgainLater = nonsense("My name is Kiwi");
 //--------------------------------
 
 //2nd part
 
 var fullNamer = function(firstName){
	 
	 var lastNamer = function(lastName){
		 console.log(firstName + " " + lastName);
	 }; 
	 
	 return lastNamer;
 };
 
 var fullNameReproduce = fullNamer("Phill");
 
fullNameReproduce("Messy"); 
//------------------


//3rd part

var storyWriter = function() {
	var story = "";
	return {
		addWords: function(string){ 
		story += string + " "; 
		return story.trim()},
		erase: function() {return story = ""; }
	}
};


var farmLoveStory = storyWriter();

farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'


var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
//--------------------

//4th part

var Microwave = function(){
	
	var metalObject = "Metal";
	
	function preventDesruction(dish) {
		if (dish === metalObject) {
		  return alert("Microwave stopped working. Check the dish you put inside");
		}else {
		console.log("Cooking a meal");
		}
	};
    
    return {
		setProgram: function(cookingProgram){
			switch(cookingProgram) {
				case "Heat":
					console.log ("Heating a meal");
					break;
				case "Bake": 
					console.log("Baking a meal");
					break;
				case "Grill":
					console.log("Grill a meal");
					break;
				case "Defrost":
					console.log("Defrosting a meal")
					break;
				default:
					console.log("Invalid program");
			};
		},
	 detect: function(dish){preventDesruction(dish);}
      
    };
};


var chickenForDinner = Microwave()



 