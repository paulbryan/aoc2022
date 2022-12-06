//https://adventofcode.com/
//day four
let commonItems=0


const inputLines = require('fs').readFileSync('input.txt', 'UTF-8').split(/\r?\n/)
// const inputLines=[
//   '2-4,6-8',
// '2-3,4-5',
// '5-7,7-9',
// '2-8,3-7',
// '6-6,4-6',
// '2-6,4-8'
// ]
inputLines.forEach(currentInputLine => {
  if (currentInputLine===""){
    console.log(commonItems)
  }else{
   const elf1=currentInputLine.split(',')[0]
   const elf2=currentInputLine.split(',')[1]
   const elf1Min=parseInt(elf1.split('-')[0])
   const elf1Max=parseInt(elf1.split('-')[1])
   const elf2Min=parseInt(elf2.split('-')[0])
   const elf2Max=parseInt(elf2.split('-')[1])

   if (elf1Min>=elf2Min && elf1Max<=elf2Max || elf2Min>=elf1Min && elf2Max<=elf1Max){
    commonItems+=1
    console.log(elf1,elf2,elf1Min,elf1Max,elf2Min,elf2Max)
   }
  }
})
console.log(commonItems)
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