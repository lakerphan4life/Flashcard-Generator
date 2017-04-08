var BasicCard = function(question, answer) {
	this.cards = [];
	this.question = question;
	this.answer = answer;

	// the questions and answers must be saved in
	// basiccards.txt file
	this.createCard = function(question, answer) {
		this.cards.push(new BasicCard(question, answer));


	this.storeCard = function() {
		var newNum = parseFloat(process.argv[3]);

		fs.appendFile("bank.txt", newNum, function(err){
			return console.log(err);

		});
	}
// store card maybe goes into the MAIN JS???

	}
}


module.exports = BasicCard;