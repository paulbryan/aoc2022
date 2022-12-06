//https://adventofcode.com/
//day five
let commonItems=0

let moving=false;
let stackLength=0
const inputLines = require('fs').readFileSync('input.txt', 'UTF-8').split(/\r?\n/)
 const inputLines2=[
'    [D]    ',
'[N] [C]    ',
'[Z] [M] [P]',
' 1   2   3 ',
'', 
'move 1 from 2 to 1',
'move 3 from 1 to 3',
'move 2 from 2 to 1',
'move 1 from 1 to 2',
 ]
const stackLines=[]
const stacks={}
inputLines.forEach(currentInputLine => {
  if (currentInputLine==="" && moving===false){
    //finish loading inputs
    moving=true;
    //console.log("stackLines",stackLines,stackLength)
    for (let i=0;i<stackLength;i++){
      stacks[i+1]=[];
    }

    for (let i=stackLines.length-2;i>=0;i--){
      //console.log(stackLines[i])
      for (let stackI=0;stackI<stackLength;stackI++){
        const crate=stackLines[i].substring(stackI*4,(stackI*4)+4).replace("[","").replace("]","").trim()
        if (crate.length>0){
          stacks[stackI+1].push(crate)
        }
      }
    }
    console.log(stacks)
  }else{
    if(moving===false){
      //parse the stack
      stackLength=(currentInputLine.length+1)/4
      //console.log(currentInputLine.length)
      stackLines.push(currentInputLine)
    }
    else {
      console.log(currentInputLine.split(" "))
      const commands=currentInputLine.split(" ")
      const cratesToMove=parseInt(commands[1])
      const stackFrom=commands[3]
      const stackTo=commands[5]
      if (currentInputLine==='move 2 from 7 to 2')console.log('move 2 from 7 to 2',stacks)
      for(let i=cratesToMove;i>0;i--){


        const crate=stacks[stackFrom].pop()
        
        if (currentInputLine==='move 2 from 7 to 2')console.log(crate)
        stacks[stackTo].push(crate)
      }
      if (currentInputLine==='move 2 from 7 to 2')console.log('move 2 from 7 to 2',stacks)
    }

  }
})
let answer='';
for (let i=0;i<stackLength;i++){
  const len=stacks[i+1].length;
  answer+=stacks[i+1][len-1]
}
//RFFFWBPNS
console.log(stacks,answer)
