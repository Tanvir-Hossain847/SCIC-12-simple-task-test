// first problem 1





// second problem 2

const letter = "minimum"
let counter = 0

for (let i = 0; i < letter.length; i++){
    let words = letter[i]

    if(words === "a" || words === "e" || words === "i" || words === "o" || words === "u"){
        counter += 1
    }
}

console.log(counter);



// third problem 3

const string = "madam"
let palindrome = ""

for (let i = string.length - 1; i >= 0; i--){
    palindrome += string[i]
}

if(string === palindrome){
    console.log(true);

}else{
    console.log(false);
    
}



// fourth problem 4

const numbers = [2,5,6,9,11]
let max = numbers[0]

for (let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i]
    }
}

console.log(max);



// fifth problem 5 

const num = [1,2,3,4,55,66,8,8,5,55,4,55,4,4,5,8,2,0]
let duplicates = []

for ( let i = 0; i < num.length; i++){
    let similerNum = num[i]

    if(duplicates.indexOf(similerNum) === -1 ){
        duplicates.push(similerNum)
    }
}

console.log(duplicates);



// sixth problem 6

const number = [1,2,3,4,5,6]
let sum = 0

for (let i = 0; i < number.length; i++){
    sum += number[i]
} 

console.log(sum);



// seventh problem 7

const number = [5,2,4,6,5,4,8,9,1,3,15,16,13]


