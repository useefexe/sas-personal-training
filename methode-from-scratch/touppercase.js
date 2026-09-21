// char.charCodeAt(0)  65–90	0x41–0x5A	A–Z   97–122	0x61–0x7A	a–z
//32 lower to uper - 32
function Touppercse (chaine){
    let upperchaine=""
    for (let i = 0; i < chaine.length; i++) {
        let asci=chaine[i].charCodeAt(0)
        if(asci>96 && asci<123){
            upperchaine+=String.fromCharCode(asci-32)
        }else{
            upperchaine+=chaine[i]
        }
       
    }
     return upperchaine

}console.log(Touppercse("saLam"))