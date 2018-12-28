var funcCaller = function(func, arg){
	return func(arg);
};

var firstVal = function(arr, func){
	firstVal(arr[0], 0, arr);
};

var firstVal = function(list, func){
	
	if(Array.isArray(list)) {
		return func(arr[0], 0, arr);
	} else {
		for(var k in list){
		return func(list[k], k, list);
		}
	}
}
};

// an exercise from Closures chapter -->

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

/* 
var Microwave = function(){
	
	var metalObject = "Metal";
	var programs = ["Heat", "Bake", "Grill", "Defrost"];
	
	function preventDesruction(dish) {
		if (dish === metalObject) {
		  return alert("Microwave stopped working. Check the dish you put inside");
		}else {
		console.log("Cooking a meal");
		}
	};
    
    return {
		setProgram: function(programs){
	
			HOW TO MAKE THIS WORK????
			
		switch(programs) {
				case programs[0]:
					console.log ("Heating a meal");
					break;
				case programs[1]: 
					console.log("Baking a meal");
					break;
				case programs[2]:
					console.log("Grill a meal");
					break;
				case programs[3]:
					console.log("Defrosting a meal")
					break;
				default:
					console.log("Invalid program");
			};
		},
	 detect: function(dish){preventDesruction(dish);}
      
    };
};

*/