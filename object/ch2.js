
let etudiant = {
    nom: "Martin",
    prenom: "Sophie",
    notes: [14, 16, 12, 18, 15] 
};

console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);


console.log("Liste des notes : " + etudiant.notes.join("  "));
let some=0 
for(note  of etudiant.notes ){
    some+=note
}
console.log(`votre moyenne est ${some/etudiant.notes.length}`)