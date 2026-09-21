const arr=["pomme", "banane", "extraordinaire", "kiwi"]
function unshiftEl(array,newele){
 array=[newele,...array]
 return array
}
console.log(unshiftEl(arr,"sam"))