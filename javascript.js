///////////////////
//Variables
///////////////////

const dataset1 = document.querySelector("#dataset1");

///////////////////
//Generic Functions
///////////////////

// const elementClick = (element, event, callback) => element.addEventListener(`${event}`, callback);

///////////////////
//Functions
///////////////////

// const createDatasetItem = (dataset, text, counter) => {
// 	$(dataset).append(`
// 			<li>
// 				<p class="datasetText">${text}</p>
// 				<button class="testMoveUp">Up</button>
// 				<button class="testMoveDown">Down</button>
// 				<p class="datasetCounter">${counter}</p>
// 			</li>
// 		`)};

// createDatasetItem(dataset1, "hello", 2);

//Move it up 
$(".testMoveUp").on("click", function(event){
	// select the counter, increase it
	const counter = $(event.target).siblings(".datasetCounter");
	let counterNew = +$(counter).text()+1; 
	$(counter).text(counterNew);
	//select this and previous counters
	var thisCounter = $(event.target).siblings(".datasetCounter").text();
	var prevCounter = $(event.target).parent().prev().children(".datasetCounter").text();
	console.log(thisCounter);
	console.log(prevCounter);
	//move if appropriate
	if ( +thisCounter > +prevCounter) {
		var parent = $(event.target).parent();
		var prevParent = $(event.target).parent().prev();
		$(parent).insertBefore(prevParent);
	}
});

//Move it down
$(".testMoveDown").on("click", function(event){
	// select the counter, increase it
	const counter = $(event.target).siblings(".datasetCounter");
	let counterNew = $(counter).text()-1; 
	$(counter).text(counterNew);
	//select this and previous counters
	var thisCounter = $(event.target).siblings(".datasetCounter").text();
	var nextCounter = $(event.target).parent().next().children(".datasetCounter").text();
	console.log(thisCounter);
	console.log(nextCounter);
	//move if appropriate
	if ( +thisCounter < +nextCounter) {
		var parent = $(event.target).parent();
		var nextParent = $(event.target).parent().next();
		$(parent).insertAfter(nextParent);
	}
});

