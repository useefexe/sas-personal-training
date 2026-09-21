let arr=["arbre", "banana", "orange", "kiwi"]
function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function ConversionSelectiveMajuscules(array){
    for (let i = 0; i < Calclenght(array); i++) {
        if(i%2===0){
             array[i]=array[i].toUpperCase()
        }
        
       
    } return array
}
console.log(ConversionSelectiveMajuscules(arr))