
var AnimalMaker = function (name) {
	return {
		speak: function (){
			console.log("My name is ", name);                           
		},
		name: name,
		owner: "Olena"
	};
};

var animalNames = ["Luna", "Messy", "Cookie", "Mike"];

var farm = [];


var farm = _.map(animalNames, function(name){
	return AnimalMaker(name);
});
// or we can short it to var farm = _.map(animalNames, AnimalMaker);

/* transit _.each to _.map 

_.each(animalNames, function(name) {
	farm.push(AnimalMaker(name));
});	*/

/* changing for loop to _each. method
for (var i = 0; i < animalNames.length; i++) { 
	farm.push(AnimalMaker(animalNames[i]));
};*/

//1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?

var sweets = ["Snickers", "Twix", "Bounty", "KitKat"];

_.each(sweets, function(value, index, list){
	console.log("[" + index + "]" + ": " + value);
})

var person = { 
	firstName: "Mike",
	lastName: "Ronan",
	fullName: function(){
		fullName = this.firstName + " " + this.lastName;
	}
};


_.each(person, function(value, key, list){
	console.log("'" + key + "'" + ": " + value);
})

// 2-3. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.
var checkValue = function(arr, value){
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === value){return true;}
	}
		return false;
};

var helloArr = ['bonjour', 'hello', 'hola'];
checkValue(helloArr, "hello");

var checkValue = function(arr, value){
	result = false;
	_.each(arr, function(v){
		if (v === value) {result = true;}	
	})
	return result;
};

// 4. Write a loop that pushes all the values in an object to an array.

var temporaryObj = {
	 input: {two: 2, four: 4, three: 3, twelve: 12}
};
var tempObjArray = [];

for(var key in temporaryObj.input){
	tempObjArray.push(temporaryObj.input[key]);
}

// 5. Use _.map to mimic the previous behavior.


var myOutput = _.map(temporaryObj.input, function(value){
	return value;
})


// 6. Use _.filter to return all the even numbers in an array.
var evens = _.filter([9,8,7,6,5,2], function(num){ return num % 2 === 0; });











