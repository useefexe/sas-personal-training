
function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function itsPalindrome(str){
    let plaindome=true
    const cond=(Math.floor(Calclenght(str))/2)
    for(let i=0;i<cond;i++)
    if(str[i]!==str[Calclenght(str)-1-i]){
     plaindome=false
     break
    }
    return plaindome
    
}
function Arrypalindrome(arry){
    let res=[]
    for (let i = 0; i < Calclenght(arry); i++) {
        if(itsPalindrome(arry[i])){
           res.push(arry[i])
        }
        
    }
    return res
}
let ar=["radar", "hello", "level", "world", "kayak"]
console.log(Arrypalindrome(ar))