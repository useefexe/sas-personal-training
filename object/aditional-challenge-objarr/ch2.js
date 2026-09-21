let ar=[
  { nom: "Yassine", age: 17 },
  { nom: "Sara", age: 20 },
  { nom: "Amine", age: 18 },
  { nom: "Aya", age: 16 }
]
function Findmajor(array){
    const res=[]
    for (let i = 0; i < array.length; i++) {
        if(array[i].age>=18){
            res.push(array[i])
        }
        
    }
    return res

}
console.log(Findmajor(ar))