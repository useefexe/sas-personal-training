let ar=[
  { titre: "1984", auteur: "George Orwell", annee: 1949 },
  { titre: "L'Étranger", auteur: "Albert Camus", annee: 1942 },
  { titre: "Dune", auteur: "Frank Herbert", annee: 1965 }
]
function findBook(srch){
    let res=[]
    for (let i = 0; i < ar.length; i++) {
        if(ar[i].titre===srch){
            res.push(ar[i])
        }
        
    }
    if(res.length!==0){
        let obj=res[0]
        
        return ` titre : ${obj.titre}  auteur: ${obj.auteur}  anne: ${obj.annee}`
    }else{
        return `book not found `
    }
}
console.log(findBook('Dune'))