function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}

function FiltrageChar(str,arr){
    let result=[]
for (let i = 0; i < Calclenght(arr); i++) {
    for (let j = 0; j < Calclenght(arr[i]); j++) {
        if(arr[i][j]===str){
         result.push(arr[i])
         
        }
        
    
    }
    
   
}
 return result
}
let arry= ["chat", "chien", "oiseau", "lion"]
console.log(FiltrageChar('i',arry))