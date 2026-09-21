function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}

function deleteDoublon(array){
    for (let i = 0; i < Calclenght(array); i++) {
        for (let j = 1; j < Calclenght(array); j++) {
           if(i!==j&&array[i]===array[j]){
            array.splice(j,1)
           }
        }
        
    }
    return array
}
let ar=["js", "php", "js", "html", "php"]
console.log(deleteDoublon(ar))