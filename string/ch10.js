let chaine="can you give me your laptop"
let souchaine="cann"
let found=false

for (let i = 0; i < chaine.length; i++) {
    if(chaine[i]===souchaine[0]){
        let match=true
      for(let j =0;j<souchaine.length;j++){
        if (chaine[i+j]!==souchaine[j]){
             match=false
        }
      }
      if(match){
        found=true

      }
      

    }
   

    
} found?console.log("founded"):console.log("not founded")