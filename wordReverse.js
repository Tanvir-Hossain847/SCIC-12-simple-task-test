const word = "tanvir"
let wordsBackward = ""

for (let i = word.length - 1; i >= 0; i--){
    wordsBackward += word[i]
}

console.log(wordsBackward);