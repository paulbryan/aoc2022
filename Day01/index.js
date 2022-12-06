//https://adventofcode.com/
//day one

const inputLines = require('fs').readFileSync('input.txt', 'UTF-8').split(/\r?\n/)
const elvesCaloriesArray=[]
let currentElfTotalCalories=0;
inputLines.forEach(currentInputLine => {
  if (currentInputLine===""){
    elvesCaloriesArray.push(currentElfTotalCalories)
    currentElfTotalCalories=0
  }
  else {
    currentElfTotalCalories+=parseInt(currentInputLine)
  }
})


console.log("Answer 1:", Math.max(...elvesCaloriesArray));

console.log("Answer 2:", [...elvesCaloriesArray].sort((a,b)=>b-a).slice(0,3).reduce((acc, curr) => acc + curr, 0));
