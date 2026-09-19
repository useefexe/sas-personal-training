const prompt = require('prompt-sync')();

const texte = prompt("enter la chaine ")
let counter=0
for (chr in texte) {
   counter++ 
    
}
console.log(`la longeur de chaine et ${counter}`)
