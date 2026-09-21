let arr=[
  { client: "Oumar", montant: 200 },
  { client: "Lina", montant: 150 },
  { client: "Oumar", montant: 300 },
  { client: "Mehdi", montant: 100 }
]
function showTotalcleint(array){
    let result={}
       for (let i = 0; i < array.length; i++) {
        if (result[array[i].client]===undefined){
            result[array[i].client]=array[i].montant
        }else{
            result[array[i].client]=result[array[i].client]+array[i].montant
        }
        
       }
       return result
}
console.log(showTotalcleint(arr))