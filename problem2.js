const letter = "minimum"
let counter = 0

for (let i = 0; i < letter.length; i++){
    let words = letter[i]

    if(words === "a" || words === "e" || words === "i" || words === "o" || words === "u"){
        counter += 1
    }
}

console.log(counter);
