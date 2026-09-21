const arr=["pomme", "banane", "extraordinaire", "kiwi"]
function find(array,calback){
    let arr=[]
    for (let i = 0; i < array.length; i++) {
        if(calback(array[i])){
            arr.push(array[i])
        }
        
    }
    return arr
}
console.log(find(arr,(el)=>{
    return el.length>4
}))