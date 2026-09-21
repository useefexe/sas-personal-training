
const arr=["pomme", "banane", "extraordinaire", "kiwi"]

function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function FindLongStringe(arry){
    let longhtchaine=''
    for (let i = 0; i < Calclenght(arry); i++) {
        if(Calclenght(arry[i])>Calclenght(longhtchaine)){
            longhtchaine=arry[i]
        }
        
    }
    return longhtchaine
}
console.log(FindLongStringe(arr))
