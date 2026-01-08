const number = [1,5,6,5,4,5,6,8,15,3,8,4]
let result = []

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        result.push("PingPong")
    }else if(i % 3 === 0){
        result.push("Ping")
    }else if(i % 5 === 0){
        result.push("Pong")
    }else{
        result.push(i)
    }
}

console.log(result.join(", "));
