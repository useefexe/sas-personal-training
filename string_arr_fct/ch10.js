let ar=["a", "ab", "abc", "abcd"]
function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}

function FiltrageParLongueurMinimale(array,min){
    let res=[]
    for (let i = 0; i < Calclenght(array); i++) {
        if(Calclenght(array[i])>=min){
            res.push(array[i])
        }

        
    }
return res
}
console.log(FiltrageParLongueurMinimale(ar,2))