const num = [1,2,3,4,55,66,8,8,5,55,4,55,4,4,5,8,2,0]
let duplicates = []

for ( let i = 0; i < num.length; i++){
    let similerNum = num[i]

    if(duplicates.indexOf(similerNum) === -1 ){
        duplicates.push(similerNum)
    }
}

console.log(duplicates);
