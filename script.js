let numClosedDoors=3
let currentPlaying=true
const StartButton=document.getElementById('start')
StartButton.onclick=()=>{
	startRound()
}
const closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
let openDoor1;
let openDoor2;
let openDoor3;
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let currentlyPlaying = true;
let score = 0;
let highScore = 0;

let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;



doorImage1.onclick = () => {
	
	if(currentPlaying && !isClicked(doorImage1)){
		doorImage1.src = openDoor1;
  		playDoor(door1)
	}
  
}
doorImage2.onclick = () => {
	
  if(currentPlaying && !isClicked(doorImage2)){
		doorImage2.src = openDoor2;
  		playDoor(door2)
	}
}
doorImage3.onclick = () => {
	
if(currentPlaying && !isClicked(doorImage3)){
		doorImage3.src = openDoor3;
  		playDoor(door3)
	}
}



const startRound=()=>{
	numClosedDoors=3
	doorImage1.src=closedDoorPath
	doorImage2.src=closedDoorPath
	doorImage3.src=closedDoorPath
	StartButton.innerHTML="Good Luck!"
	currentPlaying=true
	randomChoreDoorGenerator()
}

const gameOver=(status)=>{
	
	if(status==='win')
	{
		StartButton.innerHTML="You win! Play again?";
		getYourScore()
	}
	else{
		StartButton.innerHTML="Game Over";
		score=0;
		currentStreak.innerHTML=score
	}

	currentPlaying=false

}


// const randomChoreDoorGenerator=()=>{
// 	let choreDoor=Math.floor(Math.random()*numClosedDoors);
// 	if(choreDoor===1){
// 		openDoor1=botDoorPath;
// 		openDoor2=beachDoorPath;
// 		openDoor3=spaceDoorPath;
// 	}
// 	else if(choreDoor==2){
// 		openDoor2=botDoorPath;
// 		openDoor1=beachDoorPath;
// 		openDoor3=spaceDoorPath;

// 	}
// 	else{
// 		openDoor3=botDoorPath;
// 		openDoor1=beachDoorPath;
// 		openDoor2=spaceDoorPath;
// 	}

// }

const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * 6);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 2:
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 3:
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 4:
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      break;
    case 5:
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      break;
  }
}




const isBot=(door)=>{
	console.log(door)
	if(door.src===botDoorPath){
		return true
	}
	else{
		return false
	}
}
const isClicked=(door)=>{
	if(door.src===closedDoorPath){
		return false
	}
	else{
		return true
	}

}
const playDoor=(door)=>{

	numClosedDoors--;
	if(numClosedDoors===0){
		gameOver('win');

	}
	else if(isBot(door)){
		gameOver()
	}
}

const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}


startRound()