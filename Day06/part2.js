const inputLines = require('fs').readFileSync('input.txt', 'UTF-8').split(/\r?\n/)
const inputLines2=['bvwbjplbgvbhsrlpgdmjqwftvncz','']
let markerCharacter=1;
const findUnique=(str)=>{
    const uniqueChars=[...str].reduce((acc, curr)=>{
      return acc.includes(curr) ?  acc  :  acc + curr;
    }, "")
    //console.log("findUnique",uniqueChars,str,uniqueChars===str)
    return uniqueChars===str
  }

inputLines.forEach(currentInputLine => {
    if (currentInputLine===''){
        console.log(markerCharacter)
    }
    else {
        for(let i=0;i<currentInputLine.length;i++){
            if (findUnique(currentInputLine.substring(i,i+14))){
                markerCharacter=i+14
                break;
            }
        }
    }

})