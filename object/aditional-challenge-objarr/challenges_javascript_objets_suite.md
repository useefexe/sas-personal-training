------------------------------------------------------------------------

## Challenge 7 : Mise à Jour du Stock

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des articles en magasin. Chaque article possède les propriétés
`nom`, `quantite` et `seuilMinimum`.

Parcourez le tableau et, pour chaque article dont la `quantite` est
strictement inférieure au `seuilMinimum`, ajoutez une propriété
`aCommander` définie à `true`. Pour les autres, définissez cette
propriété à `false`.

**Exemple :**

``` js
[
  { nom: "Cahier", quantite: 3, seuilMinimum: 5 },
  { nom: "Stylo", quantite: 12, seuilMinimum: 10 },
  { nom: "Règle", quantite: 1, seuilMinimum: 2 }
]
```

Le programme doit modifier et afficher le tableau :

``` js
[
  { nom: "Cahier", quantite: 3, seuilMinimum: 5, aCommander: true },
  { nom: "Stylo", quantite: 12, seuilMinimum: 10, aCommander: false },
  { nom: "Règle", quantite: 1, seuilMinimum: 2, aCommander: true }
]
```

------------------------------------------------------------------------

## Challenge 8 : Regroupement d'Objets par Catégorie

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des employés. Chaque employé possède les propriétés `nom`
et `departement`.

Créez un objet dont les clés sont les noms des départements et les valeurs
sont des tableaux contenant les noms des employés appartenant à ce
département.

**Exemple :**

``` js
[
  { nom: "Karim", departement: "IT" },
  { nom: "Nadia", departement: "RH" },
  { nom: "Omar", departement: "IT" },
  { nom: "Salma", departement: "Finance" }
]
```

Le programme doit afficher :

``` js
{
  IT: ["Karim", "Omar"],
  RH: ["Nadia"],
  Finance: ["Salma"]
}
```

------------------------------------------------------------------------

## Challenge 9 : Calcul de la Valeur Totale d'un Panier

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des articles dans un panier d'achat. Chaque article possède
les propriétés `nom`, `prixUnitaire` et `quantite`.

Calculez la valeur totale du panier en multipliant le `prixUnitaire` par la
`quantite` pour chaque article, puis affichez le résultat.

**Exemple :**

``` js
[
  { nom: "T-shirt", prixUnitaire: 150, quantite: 2 },
  { nom: "Pantalon", prixUnitaire: 300, quantite: 1 },
  { nom: "Casquette", prixUnitaire: 80, quantite: 3 }
]
```

Le programme doit afficher :

``` text
840
```------------------------------------------------------------------------

## Challenge 10 : Fusion des Commandes par Client

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des commandes effectuées par des clients. Chaque commande
possède les propriétés `client` et `montant`.

Regroupez les commandes par client pour calculer le **montant total
dépensé par chaque client**, puis affichez le résultat sous forme d'un objet.

**Exemple :**

``` js
[
  { client: "Oumar", montant: 200 },
  { client: "Lina", montant: 150 },
  { client: "Oumar", montant: 300 },
  { client: "Mehdi", montant: 100 }
]