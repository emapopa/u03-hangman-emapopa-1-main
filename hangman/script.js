const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
const words = ["JAVASCRIPT", "PYTON", "PROGRAMMING", "WEB DEVELOPMENT", "CHAS ACADEMY", "VS CODE", "GIT HUB", "WORK AGIL", "WATTERFALL", "SERVER"];
let word = words[Math.floor(Math.random()*words.length)];
let answer = "";
let life = 0;

let gubbe = document.getElementById('hangman').getContext('2d');

function drawgallows() {
  gubbe.lineWidth = 4;
  gubbe.strokeStyle = "white";
  gubbe.beginPath();
  gubbe.moveTo(350, 450);
  gubbe.lineTo(10, 450);
  gubbe.lineTo(70, 450);

  gubbe.lineTo(70, 10);
  gubbe.lineTo(200, 10);
  gubbe.lineTo(200, 75);
  gubbe.stroke();


}

function drawHead() {
  gubbe.lineWidth = 8;
  gubbe.beginPath();
  gubbe.arc(200, 100, 25, 0, Math.PI*2, true);
  gubbe.closePath();
  gubbe.lineWidth = 4;
  gubbe.stroke();
};

function drawBody() {
  gubbe.beginPath();
  gubbe.moveTo(200, 125);
  gubbe.lineTo(200, 200);
 gubbe.stroke();
};

function drawRightHand() {
  gubbe.beginPath();
  gubbe.moveTo(200, 150);
  gubbe.lineTo(150, 170);
  gubbe.stroke();
};

function drawLeftHand() {
  gubbe.beginPath();
  gubbe.moveTo(200, 150);
  gubbe.lineTo(250, 170);
  gubbe.stroke();
};

function drawRightFoot() {
  gubbe.beginPath();
  gubbe.moveTo(200, 200);
  gubbe.lineTo(170, 230);
  gubbe.stroke();
};

function drawLeftFoot() {
  gubbe.beginPath();
  gubbe.moveTo(200, 200);
  gubbe.lineTo(230, 230);
  gubbe.stroke();
};


let steps = [
drawgallows,
drawHead,
drawBody,
drawRightHand,
drawLeftHand,
drawRightFoot,
drawLeftFoot
];

for (let i = 0; i < word.length; i++){
if (word.charAt(i)==" ") answer = answer + " ";
	else answer = answer + "-";
}

function show_word(){
  document.getElementById("answer").innerHTML=answer;
}

window.onload = start;


  function start() {
   let gubbe = document.getElementById('hangman').getContext('2d');
  let letters = "";
  for (let i=0; i<alphabet.length; i++){
  let letter = "letter" + i;
  letters = letters + '<div class="letter" id="'+letter+'" onclick="check('+i+')">'+alphabet[i]+'</div>';
  }
  
  document.getElementById("alphabet").innerHTML = letters;
  show_word();

  }
  


String.prototype.setSign = function(place, sign){
  if (place > this.length - 1) return this.toString();
  else return this.substr(0, place) + sign + this.substr(place + 1);
}

function check(nr) {
  let guessed = false;
 
  for (let i=0; i<word.length; i++){
    if (word.charAt(i) == alphabet[nr])
      {
        answer = answer.setSign(i, alphabet[nr]);
        guessed = true;
      }
  }
  if(guessed == true)
	{
		let letter = "letter" + nr;
		document.getElementById(letter).style.background = "#008a00";
		show_word();
	}
	else
	{
		let letter = "letter" + nr;
		document.getElementById(letter).style.background = "#680018";	
    steps[life]();
    life++;
    
	}  
  
   
	if (word == answer)
	document.getElementById("result").innerHTML  = "No shit Scherlok! You find the dam word: " + word + '<br /><br /><span class="reset" onclick="window.location.reload(true);;">Play again??</span>';
 
	
	if (life>=steps.length)
	document.getElementById("result").innerHTML  = "Looser, You suck!! THE WORD IS: "+ word + '<br /><br /><span class="reset" onclick="window.location.reload(true);">Play again?</span>';
}



