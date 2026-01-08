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
