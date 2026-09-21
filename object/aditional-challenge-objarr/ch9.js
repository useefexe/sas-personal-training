let ar=[
  { nom: "T-shirt", prixUnitaire: 150, quantite: 2 },
  { nom: "Pantalon", prixUnitaire: 300, quantite: 1 },
  { nom: "Casquette", prixUnitaire: 80, quantite: 3 }
]
function CalculValeurTotalePanier(array){
    let total=0
    for (let i = 0; i < array.length; i++) {
       total += array[i].prixUnitaire*array[i].quantite
        
    }
    return `la somme total de pagnier est ${total}`
}
console.log(CalculValeurTotalePanier(ar))