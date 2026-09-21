let ar=[
  { nom: "Sara", notes: [15, 17, 16] },
  { nom: "Ali", notes: [10, 12, 11] },
  { nom: "Yassine", notes: [18, 16, 19] }
]
function  CalculClassementÉtudiants(array){
   for (let i = 0; i < array.length; i++) {
    let moyenne=0
    for(el in array[i].notes){
        moyenne+=array[i].notes[el]
        
    }
    array[i].moyene=Number(moyenne/array[i].notes.length)
    
   }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            console.log(array)
            if(array[j].moyene>array[j+1].moyene){
                let swap=array[j]
                array[j]=array[j+1]
                array[j+1]=swap
            }
            
        }
        
    }
    return array
}
console.log(CalculClassementÉtudiants(ar))

