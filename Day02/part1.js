//https://adventofcode.com/
//day two
const DRAW_SCORE=3
const WIN_SCORE=6
const LOST_SCORE=0
const ROCK_SCORE=1
const PAPER_SCORE=2
const SCISSORS_SCORE=3
const ROCK_SHAPES=['A','X']
const PAPER_SHAPES=['B','Y']
const SCISSORS_SHAPES=['C','Z']
const inputLines = require('fs').readFileSync('input.txt', 'UTF-8').split(/\r?\n/)
const scores=[]
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. 
// If both players choose the same shape, the round instead ends in a draw.
//A for Rock, B for Paper, and C for Scissors
//X for Rock, Y for Paper, and Z for Scissors
//score
//1 for Rock, 2 for Paper, and 3 for Scissors
//outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won
const getShapeScore=(shape)=>{

    if (ROCK_SHAPES.includes(shape) ){return ROCK_SCORE;}
    if (PAPER_SHAPES.includes(shape) ){return PAPER_SCORE;}    
    if (SCISSORS_SHAPES.includes(shape) ){return SCISSORS_SCORE;}
    return 0;
}
const getShapeMapping=(shape)=>{

  if (ROCK_SHAPES.includes(shape) ){return 'ROCK';}
  if (PAPER_SHAPES.includes(shape) ){return 'PAPER';}    
  if (SCISSORS_SHAPES.includes(shape) ){return 'SCISSORS';}
  return 0;
}
const getRoundScore=(shape1,shape2)=>{
  if (getShapeMapping(shape1)===getShapeMapping(shape2)){
    return DRAW_SCORE;
  }
  else{
    if (ROCK_SHAPES.includes(shape1) ){
      if (SCISSORS_SHAPES.includes(shape2)){
        return LOST_SCORE
      }
      else{
        return WIN_SCORE
      }
    }
    if (PAPER_SHAPES.includes(shape1) ){
      if (ROCK_SHAPES.includes(shape2)){
        return LOST_SCORE
      }
      else{
        return WIN_SCORE
      }
    }
    if (SCISSORS_SHAPES.includes(shape1) ){
      if (PAPER_SHAPES.includes(shape2)){
        return LOST_SCORE
      }
      else{
        return WIN_SCORE
      }
    }
  }
}
let i=0
console.log((inputLines.length-1)/3)
inputLines.forEach(currentInputLine => {
  //console.log("currentInputLine",currentInputLine.split(" "))
 
  if (currentInputLine===""){
   //end
   console.log(scores.reduce((acc, curr) => acc + curr, 0))
  }
  else {
    const round=currentInputLine.split(" ")
    const player1=round[0]
    const player2=round[1]    
    if (player1==='C' && player2==='Z')     console.log(getShapeMapping(player1),getShapeMapping(player2),player1,player2,getShapeScore(player2),getRoundScore(player1,player2))
    scores.push(getShapeScore(player2)+getRoundScore(player1,player2))    
  }
})
