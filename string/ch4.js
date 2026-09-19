let chaine="ccc"
let chaineTwo="cbc"
let nonidentique=false
if(chaine.length===chaineTwo.length||nonidentique){
for (let i = 0; i < chaine.length; i++) {
    if(chaine[i]==chaineTwo[i]){
        continue
    }else{
        console.log(" les chine n est pas identique")
        nonidentique=true
    }
    
}
if(!nonidentique){
    console.log(" les chaine  identique")
}
}else{
    console.log(" les chine n est pas identique")
}