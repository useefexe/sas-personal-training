const arr=["pomme", "banane", "extraordinaire", "kiwi"]
function Include(array,element){
    let inc=false
    for (let i = 0; i < array.length; i++) {
        if (array[i]===element) {
            inc=true
            break
        }
        
    }
    return inc
}
console.log(Include(arr,"pome"))