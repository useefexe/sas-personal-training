const prompt = require('prompt-sync')()
//===============================================native methode=======================================================================
//nqtive function for calcule length
function calLengh(itm){
    let counter=0
    for(el in itm){
        counter++
    }
    return counter
}


//function for find index of appernant object 
function findindex(name,arry){
    let index=-1
    for (let i = 0; i < calLengh(arry); i++) {
        if(arry[i].nom===name){
            index=i
        }  
    }
    return index
}

// function for filter 
function filterappernant(apparry,clalback){
    let newarr=[]
    for (let i = 0; i < calLengh(apparry); i++) {
        if (clalback(apparry[i])) {
            newarr.push(apparry[i])
        }
        
    }
    return newarr
}


//===========================================================================================================================
//function for add appernant 
function AjouterAppernant(apparry){
  let name="" 
if(calLengh(apparry)>0){
       function existeApp(apparry,appnom){  //function for check if appernant is already exist 
       
        let double=true
        for (let i = 0; i < calLengh(apparry); i++) {  
            if (appnom===apparry[i].nom) {
                double=false
            }
            
        }return double
    }
    
    
    while(!existeApp(apparry,name)||name===""){
          name=prompt("entre un nom qui n existe pas dans la base de donne ")
    }
}else{
    while(name===""){
          name=prompt("entre un nom qui valide")
    }
}
    apparry.push({nom:name,note:[],skills:[]})
    let notecount=0
    
  // check note count it positif qnd its  number 
    while(notecount<=0 || isNaN(notecount)){
          notecount=Number(prompt(`quelle est le nombre des note qui tu veux qjouter a apprenant ${name}   entrer un nombre entier positif `))

    }
    //check and add point 
      let index=findindex(name,apparry)
       
    for (let i = 1; i <= notecount; i++) {
       let notes =-1
        while (notes<0|| isNaN(notes)) {
            notes=prompt(`entrer la note de module  note doit etre positif ${i} `)
      
        }
        apparry[index].note.push(notes)
       
    }
    //check and add skiils

    let skiilsadd=-1
    while (isNaN(skiilsadd)||skiilsadd<0) {
        skiilsadd=Number(prompt(`tu veux ajouter des skills si oui cliker sur 1 si non cliquer sur anything`))
    }
    if (skiilsadd===1) {
          let countskiils=""
          while (countskiils<=0|| isNaN(countskiils)) {
            countskiils=Number(prompt("entrer le nombre de skiils fait attention entrer un nombre valid"))
          }
          for (let i = 0; i <countskiils; i++) {
            let prmskiils=prompt(` enterer le skiils  ${i+1}`)
            apparry[index].skills.push(prmskiils)
            
          }
    }

}
// =================================================================================================================================

// afficher tous les appernant 

function afficherAppernant(apparry){
    console.log(" les apprenant engegistre dans le programe")
    for (let i = 0; i < calLengh(apparry); i++) {
        console.log(apparry[i].nom)
        
    }
}
// =================================================================================================================================
function serchApprenant(apparry,name){
    let index=findindex(name,apparry)
    if (index>=0) {
        console.log(` aprenant ${name } exist dans la base de donne  `)
    }else{
        console.log("apprenant not foud ")
    }
}
//==================================================================================================================================
function Modifiernote(apparry,name){
    let index =findindex(name,apparry)
    if (index>=0) {
        for (let i = 0; i < calLengh(apparry[index].note); i++) {
             let notes =-1
        while (notes<0|| isNaN(notes)) {
            notes=Number(prompt(`entrer la nouvelle note de module  note doit etre positif ${i+1} `))
      
        }
        apparry[index].note[i]=notes
        }
    }else{
        console.log("apprenant not foud ")
    }
}
// =====================================================================================================================================

function deleteApernant(apparry,name){
        let index =findindex(name,apparry)
        console.log(index)
    if (index>=0) {
     return filterappernant(apparry,(el)=>{
   return  el.nom!==name
})
           
    }else{
        console.log("apprenant not found ")
        return apparry
    }
    // not forget affectation 
}
//===============================================================================================================================================
 function calculeMoyeneapp(arrynote){
    let somme=0
    for (let i = 0; i < calLengh(arrynote); i++) {
        somme+=arrynote[i]
        
    }
    return somme/calLengh(arrynote)
 }

//===============================================================================================================================================
function calculermoyenneGenerale(apparry){
    let somme=0
    for (let i = 0; i < calLengh(apparry); i++) {
        somme+=calculeMoyeneapp(apparry[i].note)
        
    }
    return somme/calLengh(apparry)
}
// ===============================================================================================================================================
function meilleurmoinsapp(apparry){
    let moinsnote=999
    let moinesapp=""
    for (let i = 0; i <calLengh(apparry); i++) {
        if(calculeMoyeneapp(apparry[i].note)<moinsnote){
            moinsnote=calculeMoyeneapp(apparry[i].note)
            moinesapp=apparry[i].nom
        }
        
    }
    console.log(`le moin moyenne est ${moinsnote}  de ${moinesapp}`)
     let mihheurnote=0
    let miheurapp=""
    for (let i = 0; i <calLengh(apparry); i++) {
        if(calculeMoyeneapp(apparry[i].note)>mihheurnote){
            mihheurnote=calculeMoyeneapp(apparry[i].note)
            miheurapp=apparry[i].nom
        }
        
    }
    console.log(`le miheur moyenne est ${mihheurnote}  de ${miheurapp}`)
}
// ===============================================================================================================================================
function serchApprenantbyCom(apparry,skiils){
    let appernant=""
    for (let i = 0; i< calLengh(apparry); i++) {
        if (calLengh(apparry[i].skiils)>0) {
            for (let j = 0; j < calLengh(apparry[i].skiils); j++) {
                if (apparry[i].skiils[j]===skiils) {
                    appernant+=` ${apparry[i].nom}` 
                }
                
            }
            
        }
        
    }
    if(calLengh(appernant)>0){
        console.log(`les apprinon qui aquise ${skiils} : ${appernant}`)
    }else{
        console.log(`il ya pas des aprenant aui ans aquise ${skiils}`)
    }
}


// main program=================================================================================================================================
let appernant=[]
let chois=null
 do{
    console.log('\n====================================');
    console.log('       MENU DE GESTION APPRENANTS    ');
    console.log('====================================');
    console.log('1. Ajouter un apprenant');
    console.log('2. Afficher tous les apprenants');
    console.log('3. Rechercher un apprenant par prenom');
    console.log('4. Mettre a jour la note d\'un apprenant');
    console.log('5. Supprimer un apprenant');
    console.log('6. Afficher la moyenne de la classe');
    console.log('7. Afficher le meilleur et le moins bon');
    console.log('8. Rechercher des apprenants par competence');
    console.log('0. Quitter');
    console.log('====================================');

    chois=prompt("entrer votre chois ")
    switch (chois) {
        case '1':
            AjouterAppernant(appernant);
            break;
        case '2':
            afficherAppernant(appernant);
            break;
        case '3':
            let name=prompt("entrer le nom que tu as cherche ")
            serchApprenant(appernant,name);
            break;
        case '4':
            let namemodif=prompt("entrer le nom que tu vas modifier son note ")
            Modifiernote(appernant,namemodif);
            break;
        case '5':
             let namedelete=prompt("entrer le nom que tu veux suprimer  ")
            appernant=deleteApernant(appernant,namedelete);
            break;
        case '6':
            calculermoyenneGenerale(appernant);
            break;
        case '7':
            meilleurmoinsapp(appernant);
            break;
        case '8':
             let skls=prompt("entrer le nom de skills que tu as rechrcher  ")
            serchApprenantbyCom(appernant,skls);
            break;
        case '0':
            console.log('\nMerci et au revoir !');
            break;
        default:
            console.log('Choix invalide, veuillez reessayer.');
    }
      
    
}while(chois!=='0')

// let applist=[{nom:"hamid",note:[13,13,13],skiils:[]}, {nom:"salim",note:[13,10,13],skiils:[]},{nom:"khalid",note:[19,13,13],skiils:[]}]
// applist=(calculeMoyeneapp(applist,"salm"))
// console.log(serchApprenantbyCom(applist,"js"))
// console.log(applist)
