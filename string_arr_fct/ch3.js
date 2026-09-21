function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}

function Incluude(chaine,souchaine){
let found=false
for (let i = 0; i < Calclenght(chaine); i++) {
    if(chaine[i]===souchaine[0]){
        let match=true
      for(let j =0;j<Calclenght(souchaine);j++){
        if (chaine[i+j]!==souchaine[j]){
             match=false
        }
      }
      if(match){
        found=true

      }
    }

}return found
}
function FindSouchineArry(arry,search){
    let result=[]
    for (let i = 0; i < Calclenght(arry); i++) {
        if(Incluude(arry[i],search)){
            result.unshift(arry[i])
           
        }
        
    }
    return result
}
let ar=["programmation", "gramme", "code", "diagramme"]
let char='gram'
    console.log(FindSouchineArry(ar,char))