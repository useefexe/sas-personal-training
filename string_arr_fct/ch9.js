function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function Acronyme(arry){
    let ac=""
    for (let i = 0; i < Calclenght(arry); i++) {
       ac+=arry[i][0]
        
    }
    return ac
}
let arr=["Cascading", "Style", "Sheets"]
console.log(Acronyme(arr))