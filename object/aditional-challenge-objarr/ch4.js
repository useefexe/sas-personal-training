let arr=[
  { nom: "Clavier", prix: 200 },
  { nom: "Souris", prix: 100 }
]
function AddTva(array){
    for (let i = 0; i < array.length; i++) {
        array[i].prix*=1.1                            // add 10% of prix
        
    }
    return array
}
console.log(AddTva(arr))