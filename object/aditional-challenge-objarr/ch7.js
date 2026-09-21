let arr=[
  { nom: "Cahier", quantite: 3, seuilMinimum: 5 },
  { nom: "Stylo", quantite: 12, seuilMinimum: 10 },
  { nom: "Règle", quantite: 1, seuilMinimum: 2 }
]
function setDisponible(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i].quantite>array[i].seuilMinimum) {
            array[i].disponible=true
        }else{
            array[i].disponible=false 
        }
        
    }
    return array

}
console.log(setDisponible(arr))