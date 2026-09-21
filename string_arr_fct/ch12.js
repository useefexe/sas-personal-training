let arr =["le", "javascript", "est", "super"]
function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function fusionFormatagePhrase(array){
    let rs=''
     for (let i = 0; i < Calclenght(array); i++) {
        rs+=` ${array[i]}`
        
     }
     return rs
}
console.log(fusionFormatagePhrase(arr))