const numbers = [2,5,6,9,11]
let max = numbers[0]

for (let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i]
    }
}

console.log(max);
