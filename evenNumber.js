const number = [5,2,4,6,5,4,8,9,1,3,15,16,13]
let evenNumbers = []

for(let i = 0; i < number.length; i++){
    let allNumbers = number[i];

    if(allNumbers % 2 === 0){
        evenNumbers.push(allNumbers)
    }
}

console.log(evenNumbers);
