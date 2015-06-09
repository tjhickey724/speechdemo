Template.speech.events({
	'click #sayhello': function(event){
		var msg = new SpeechSynthesisUtterance('Hello World');
		window.speechSynthesis.speak(msg);
	}
})