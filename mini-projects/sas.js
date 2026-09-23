const prompt = require('prompt-sync')()
//============================================appdata============================================================
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets=[
  
]
let anulatedicket=[]

let lasttekietId=0
//============================================================sous functions=======================================================
//calculer length 
function calLenght(obs){
    let lnght=0
    for(i in obs){
       lnght++
    }
    return lnght
}
//chercher le trajet 
function findindex(idin,arr){
    let index=-1
    for (let i = 0; i < calLenght(arr); i++) {
        if(arr[i].id===idin){
            index=i
        }  
    }
    return index
}
// checher le trajet dans les ticket anuller 
function findanulateticket(idin){
    let index=-1
    for (let i = 0; i < calLenght(anulatedicket); i++) {
        if(anulatedicket[i].trajetid===idin){
            index=i
        }  
    }
    return index
}

function findticketbyname(name){
    let rus=[]
    for (let i = 0; i < calLenght(tickets); i++) {
        if(tickets[i].passagename===name)
        rus.push(tickets[i])

    }
    return  rus
}

// function Idexiste(id){
//     let found=false
//     for (let i = 0; i < lasttekietId.length; i++) {
//         if (lasttekietId[i]===id) {
//             found=true 
//             break
//         }
        
//     }
//     return found
// }





//=====================================================program function==============================================================
//afficher tous les trajets
function afficherTrjjet(){
    console.log("==========trajet disponible=========")
    for (let i = 0; i < calLenght(trips);i++) {
        console.log(`# ${trips[i].id}  ${trips[i].departure} → ${trips[i].destination} \n`+
            `.depart : ${trips[i].departureTime}  \n`+
             `.Départ : ${trips[i].arrivalTime}  \n`+
              `.Prix  : ${trips[i].price}  \n`+
               `.depart : ${trips[i].availableSeats}  \n`+
                `==================================\n`


        )
        
    }
}
//========================================================================================================================================
// acheter une ticket 
function acheterTicket(){
       let name=prompt("entrer votre nom : ")
       let trajetId=prompt("entrer identifiants de trajet")
       let index=findindex(Number(trajetId),trips)
       if (index===-1) {
          console.log(`acuun trajet avec se identifiant ${trajetId}`)  
           // check if trajet exist 
       }else{     // check if tajet not full                             
           let trajet=trips[index]
           if (trajet.availableSeats<=0) {
              console.log(` pardont le trajet de ${trips[index].departure} === ${trips[index].destination} commplete  `)
           }else{  // inserer le ticket 
            let ticket={id:null,passagename:name,setnumber:null,price:trips[index].price,
                depart:trips[index].departure, des:trips[index].destination,trajetid:trips[index].id
            }
            
            // check if we have a unilate trips in this trjat 
             let i = findanulateticket(trajet.id) 
             console.log(anulatedicket)
             if(i!==-1){
                ticket.setnumber=anulatedicket[i].setnumber
              let idtrip=lasttekietId+1  // check if id not exist

             ticket.id=idtrip
             trajet.availableSeats-=1
             tickets.push(ticket)
                anulatedicket.splice(i,1)
  lasttekietId++

              }else{
             ticket.setnumber=50-trips[index].availableSeats+1
             let idtrip=lasttekietId+1   // check if id not exist

             ticket.id=idtrip
             trajet.availableSeats-=1
             tickets.push(ticket)
             lasttekietId++
             }
             console.log(`tu as rserver une tikete de traget ${trips[index].departure} a ${trips[index].destination}     `)
             console.log(          `.Départ : ${trips[index].arrivalTime}  \n`+
              `.Prix  : ${trips[index].price}  \n`+
               `.depart : ${ticket.des}  \n`+
                `==================================\n`)
             
           }
       }
       
       
}
//========================================================================================================================================

function afficherTicket(){
    if (calLenght(tickets)===0) {
        console.log("=====================================")
        console.log("acun ticket enrgistre pour le moment ")
        console.log("=====================================")
    }else{
        console.log("=================ticket===============")
        for (let i = 0; i < calLenght(tickets); i++) {
            console.log("========================================")
            console.log(`ticket ${tickets[i].id} \n`+
                `passager : ${tickets[i].passagename}\n`+
                `de ${tickets[i].depart} a ${tickets[i].des} \n`+
                `place : ${tickets[i].setnumber}\n`+
                `prix : ${tickets[i].price}\n`
            )
        }
    }
}

//=============================================================================================================================================

function annulerTicket(){
     let tecketid=Number(prompt(" saiser l identifiant de ticket que tu veux abuller "))
     let index=findindex(tecketid,tickets)
       
     if(index===-1){
          console.log("ticket non trouvable ")
     }else{
        let tik=tickets[index]
        tickets.splice(index,1) 
        let trajetindex=findindex(tik.trajetid,trips)
        trips[trajetindex].availableSeats++
        anulatedicket.push(tik)
         console.log(`ticket avec l identifiant ${tik.id} est suprime`)

     }
}

//==================================================================================================================================================
   
     function rechercheTicket(){
        const name=prompt("enter le nom de passager ")
        const result=findticketbyname(name)
        if (calLenght(result)>0) {
            console.log(`======les tickets assosiet a ${name}=======`)
            for (let i = 0; i < calLenght(result); i++) {
            console.log(`ticket ${result[i].id} \n`+
                `passager : ${result[i].passagename}\n`+
                `de ${result[i].depart} a ${result[i].des} \n`+
                `place : ${result[i].setnumber}\n`+
                `prix : ${result[i].price}\n`
            )
            console.log("==================================")
                
            }
        } else {
            console.log(` passager ${name} non assigner en aucun ticket `)
            
        }
     }   
    
//========================================================================================================================================================

function Filtterparville(){
    const villedep=prompt(" enter le ville de depart pour fillter le trajet")
    let res=[]
    for (let i = 0; i < calLenght(trips); i++) {
       if(trips[i].departure===villedep){
        res.push(trips[i])
       }
        
    }
    if (calLenght(res)>0) {
        console.log("======les trips assosier a se trajet est===== ")
        for (let i = 0; i <calLenght(res); i++) {
            console.log(` ${res[i].departure} to ${res[i].destination}  : prix ${res[i].price}`)
            
        }
    }else{
       console.log(" il ya pas des trajt assosies a cette ville ")
    }
}
//===================================================================================================================================
function trieTrajet(){
    console.log()
    let triptrier=trips
    for (let i = 1; i <= calLenght(triptrier); i++) {
        for (let j = 0; j < calLenght(triptrier)-i; j++) {
           if (triptrier[j].price>triptrier[j+1].price) {
               let swap=triptrier[j+1]
                triptrier[j+1]=triptrier[j]
                triptrier[j]=swap
            }  
        }
        
    }
    for (let x = 0; x <calLenght(triptrier)-1; x++) {
        console.log(` ${triptrier[x].departure} → ${triptrier[x].destination}  :${triptrier[x].price} Dh`)
        
    }
}

//=====================================================Afficher tous les tickets==============================================================

//===============================program principale==============================================================================
let Choix=11
do{
console.log("\n================ MENU ================");
        console.log("1. Afficher tous les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets réservés");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket par nom");
        console.log("6. Filtrer trajets par ville de départ");
        console.log("7. Trier les trajets par prix");
        console.log("0. Quitter");
        console.log("=========================================");

        Choix = prompt("Choisissez une option : ");
   
        switch (Choix) {
            case '1':
                afficherTrjjet();
                break;
            case '2':
                acheterTicket();
                break;
            case '3':
                afficherTicket();
                break;
            case '4':
                annulerTicket();
                break;
            case '5':
                rechercheTicket();
                break;
            case '6':
                Filtterparville();
                break;
            case '7':
                trieTrajet();
                break;
            case '0':
                console.log("Au revoir !");
                break;
            default:
                console.log("Option invalide, veuillez réessayer.");
        }
}while(Choix!=="0")

