//https://adventofcode.com/
//day three
//https://adventofcode.com/
//day three
const scores=[]
const commonItems=[]
let currentCommonItems=new Set()
const getItemPriority=(item)=>{
  let code=item.charCodeAt(0);
  if (code>=97){ return code-96}
  return code-38
}

const inputLines = require('fs').readFileSync('input.txt', 'UTF-8').split(/\r?\n/)

let start=0;
while (start<inputLines.length){
  const pack1=inputLines[start]
  const pack2=inputLines[start+1]
  const pack3=inputLines[start+2]
  currentCommonItems=new Set()
  if (pack1!==undefined && pack2!==undefined && pack3!==undefined){
    for (let i=0;i<pack1.length;i++){
    const pack1Char=pack1.substring(i,i+1)
    for (let j=0;j<pack2.length;j++){
      const pack2Char=pack2.substring(j,j+1)
      for (let k=0;k<pack3.length;k++){
        const pack3Char=pack3.substring(k,k+1)
        //console.log(pack1Char,pack2Char,pack3Char)
        if (pack1Char===pack2Char && pack1Char===pack3Char){
          currentCommonItems.add(pack1Char)      
        }
      }
    }
  }
  commonItems.push(...currentCommonItems)
  }
  
  start+=3;
}
console.log(commonItems.map(item=>getItemPriority(item)).reduce((acc, curr) => acc + curr, 0))

// inputLines.forEach(currentInputLine => {
//   if (currentInputLine===""){
//     console.log(commonItems.map(item=>getItemPriority(item)).reduce((acc, curr) => acc + curr, 0))
//   }else{
//     const lineLength=currentInputLine.length
//     const packLength=lineLength/2
//     const pack1=currentInputLine.substring(0,packLength)
//     const pack2=currentInputLine.substring(packLength,lineLength)
//     console.log(pack1,pack2,pack1.length,pack2.length,currentInputLine.length)
//     currentCommonItems=new Set()
//     for (let i=0;i<pack1.length;i++){
        
//       const pack1Char=pack1.substring(i,i+1)
//       for (let j=0;j<pack2.length;j++){
        
//         const pack2Char=pack2.substring(j,j+1)
//         if (pack1Char===pack2Char){
//           currentCommonItems.add(pack1Char)      
//         }
//       }
//     }
//     commonItems.push(...currentCommonItems)
//   }
// })

// const inputLines=[
//   'vJrwpWtwJgWrhcsFMMfFFhFp',
// 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
// 'PmmdzqPrVvPwwTWBwg',
// 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
// 'ttgJtRGJQctTZtZT',
// 'CrZsJsPPZsGzwwsLwLmpwMDw',''
// ]
// inputLines.forEach(currentInputLine => {
//   if (currentInputLine===""){
//     console.log(commonItems)
//   }else{
//     const lineLength=currentInputLine.length
//     const packLength=lineLength/2
//     const pack1=currentInputLine.substring(0,packLength)
//     const pack2=currentInputLine.substring(packLength,lineLength)
//     console.log(pack1,pack2,pack1.length,pack2.length,currentInputLine.length)
//     currentCommonItems=new Set()
//     for (let i=0;i<pack1.length;i++){
        
//       const pack1Char=pack1.substring(i,i+1)
//       for (let j=0;j<pack2.length;j++){
        
//         const pack2Char=pack2.substring(j,j+1)
//         if (pack1Char===pack2Char){
//           currentCommonItems.add(pack1Char)      
//         }
//       }
//     }
//     commonItems.push(...currentCommonItems)
//   }
// })