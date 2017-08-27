function submitAnswers(){
	var total = 5;
	var score =0;
	
	//get user input 
	var q1 = document.forms["quizForm"]["q1"].value; //b
	var q2 = document.forms["quizForm"]["q2"].value; //a  
	var q3 = document.forms["quizForm"]["q3"].value; //c
	var q4 = document.forms["quizForm"]["q4"].value; //a
	var q5 = document.forms["quizForm"]["q5"].value; //d
	
	// Validation
	if(q1 == null || q1 == ''){
		alert('you missed question 1');
		return false;
	}
	
	for(var i = 1; i<= total; i++){
		if( eval('q' + i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}			
	}
	
	// set correct answers
	
	var answers = ["b","a","c","a","d"];
	
	//check the answers
	 for( var j=1; j <= total; j++){
		if(answers[j-1] == eval('q'+j)){
			score++;
		}
	 }
	 
	 // Display results 
	 var results = document.getElementById('results');
	 results.innerHTML = '<h3> You scored <span>' + score + '</span> out of <span> '+total + '</span> </h3>';
	 
	// alert("You scored "+score+" out of "+ total);
	 
	return false;

}