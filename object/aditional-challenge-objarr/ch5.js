let arr=[
  { nom: "Ali", email: "ali@gmail.com" },
  { nom: "Sara", email: "sara@gmail.com" },
  { nom: "Ahmed", email: "ali@gmail.com" },
  { nom: "Yassine", email: "yassine@gmail.com" }
]
function deleteDobleEmail(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
              if(i!==j && arr[j].email===array[i].email){
                array.splice(i,1)
              }
        }
        
    }
    return array

}
console.log(deleteDobleEmail(arr))