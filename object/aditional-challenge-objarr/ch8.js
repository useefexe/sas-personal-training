let arr=[
  { nom: "Karim", departement: "IT" },
  { nom: "Nadia", departement: "RH" },
  { nom: "Omar", departement: "IT" },
  { nom: "Salma", departement: "Finance" }
]
function regrepmentParcategorie(array){
    let result={}
    for (let i = 0; i < array.length; i++) {
        let dep=array[i].departement
        if(result[dep]===undefined){
        
          result[dep]=[array[i].nom]
        }else{
            result[dep].push(array[i].nom)
            console.log(array[i].nom)
        }
    }
    return result

}
console.log(regrepmentParcategorie(arr))   // si tu veux utiliser un key mais avec vqriqble le nom de key il faut utiliser [] car js lire le variable comme chine ou key 







// let arr=[
//   { nom: "Karim", departement: "IT" },
//   { nom: "Nadia", departement: "RH" },
//   { nom: "Omar", departement: "IT" },
//   { nom: "Salma", departement: "Finance" }
// ]
// function regrepmentParcategorie(array){
//     let result={}
//     for (let i = 0; i < array.length; i++) {
//         let dep=array[i].departement
      
//         console.log(dep)
//           result[dep]=[array[i].nom]
      
//     }
//     return result

// }
// console.log(arr)

