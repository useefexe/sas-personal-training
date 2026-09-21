function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function trieParLongeur(array){
    for (let i = 0; i < Calclenght(array); i++) {
        for (let j = 0; j< Calclenght(array)-i; j++) {
            if(array[j]>array[j+1]){
                let swap=array[j]
                array[j]=array[j+1]
                array[j+1]=swap
            }
            
        }
        
    }
    return array
}
let arr=["éléphant", "chat", "chien", "singe"]
console.log(trieParLongeur(arr))