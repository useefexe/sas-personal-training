const arr=["pomme", "banane", "extraordinaire", "kiwi","pomme"]
function indexof(array,element){
    let index=-1
     for (let i = 0; i < array.length; i++) {
        if (array[i]===element) {
            index=i
           
        }
        
     }
     return index
}
console.log(indexof(arr,"pomme"))