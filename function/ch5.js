
function Factorielle(nbr){
    let fct=1
if(nbr>=0){
    for (let i = 1; i <= nbr; i++) {
        fct*=i
        
    }
    console.log(fct)
}else{
    console.log("il faut entrer un nombre positif")
}
}
Factorielle(-1)