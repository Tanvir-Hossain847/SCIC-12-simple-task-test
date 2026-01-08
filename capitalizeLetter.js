const word = 'korean drama'
const wordSplit = word.split(" ")
let finalWord = [];

for (let i = 0; i < wordSplit.length; i++){
    let letter = wordSplit[i]
    let firstLetter = letter[0].toUpperCase()
    let remainingWord = letter.slice(1)
    finalWord.push(firstLetter + remainingWord)
}


let capitalizedLtter = finalWord.join(" ")
console.log(capitalizedLtter);
