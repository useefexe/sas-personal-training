let ar=[
  { nom: "Clavier", prix: 250 },
  { nom: "Souris", prix: 150 },
  { nom: "Écran", prix: 1200 }
]
function findPlusCher(array){
    let Pluscher={
        nom:"",
        prix:0
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i].prix>Pluscher.prix){
            Pluscher.prix=array[i].prix
             Pluscher.nom=array[i].nom
        }
        
    }
    console.log(`le plus cher element ${Pluscher.nom}`)
}
findPlusCher(ar)