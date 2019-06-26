let user_score = 0;
let comp_score = 0;

const user_score_span = document.getElementById("user-score");
const comp_score_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const choices = ['r','s','p'];

function conv(temp) {
	if (temp == 'r') return "Rock";
	if (temp == 'p') return "Paper";
	return "Scissors"	
}
function result(res,user_temp,comp_temp) {
	const small_U = "user".fontsize(3).sub();
	const small_C = "comp".fontsize(3).sub();
	switch (res) {
		case "yes": 
			user_score++;
			user_score_span.innerHTML = user_score;
			result_div.innerHTML = conv(user_temp)+small_U+" beats "+conv(comp_temp)+small_C+". You win! 🔥"
			document.getElementById(user_temp).classList.add('green-glow');
			setTimeout(() => { 
				document.getElementById(user_temp).classList.remove('green-glow') 
				}, 500);
			break;
		case "no":
			comp_score++;
			comp_score_span.innerHTML = comp_score;	
			result_div.innerHTML = conv(comp_temp)+small_U+" beats "+ conv(user_temp)+small_C+". You lost! 💩"		
			document.getElementById(user_temp).classList.add('red-glow');
			setTimeout(() => { 
				document.getElementById(user_temp).classList.remove('red-glow') 
				}, 500);
			break;
		case "draw":
			result_div.innerHTML = " DRAW! 🙆"
			document.getElementById(user_temp).classList.add('grey-glow');
			setTimeout(() => { 
				document.getElementById(user_temp).classList.remove('grey-glow') 
				}, 500);
			break;
	}
}

function isWinner(user_choice) {
	comp_choice = choices[Math.floor(Math.random()*choices.length)];
	switch (user_choice+comp_choice) {
		case "rs":
		case "pr":
		case "sp":
			result("yes",user_choice,comp_choice);
			break;
		case "rp":
		case "ps":
		case "sr":
			result("no",user_choice,comp_choice);
			break;
		case "rr":
		case "pp":
		case "ss":
			result("draw",user_choice,comp_choice);
			break;
	}

}


function main() {
rock_div.addEventListener('click',() => {
	isWinner('r');
})

paper_div.addEventListener('click',() => {
	isWinner('p');
})

scissors_div.addEventListener('click',() => {
	isWinner('s');
})
}

main();