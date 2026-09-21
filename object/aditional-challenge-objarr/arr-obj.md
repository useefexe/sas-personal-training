# Challenges JavaScript --- Objets

## Challenge 1 : Le Produit le Plus Cher

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des produits. Chaque produit possède les propriétés `nom`
et `prix`.

Trouvez et affichez le produit ayant le prix le plus élevé.

**Exemple :**

``` js
[
  { nom: "Clavier", prix: 250 },
  { nom: "Souris", prix: 150 },
  { nom: "Écran", prix: 1200 }
]
```

Le programme doit afficher :

``` text
Écran
```

------------------------------------------------------------------------

## Challenge 2 : Filtrage des Étudiants

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des étudiants. Chaque étudiant possède les propriétés `nom`
et `age`.

Créez un nouveau tableau contenant uniquement les étudiants ayant **18
ans ou plus**.

**Exemple :**

``` js
[
  { nom: "Yassine", age: 17 },
  { nom: "Sara", age: 20 },
  { nom: "Amine", age: 18 },
  { nom: "Aya", age: 16 }
]
```

Le programme doit retourner :

``` js
[
  { nom: "Sara", age: 20 },
  { nom: "Amine", age: 18 }
]
```

------------------------------------------------------------------------

## Challenge 3 : Recherche d'un Objet

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des livres. Chaque livre possède les propriétés `titre`,
`auteur` et `annee`.

Le programme reçoit également un titre et doit rechercher le livre
correspondant.

Si le livre existe, affichez toutes ses informations. Sinon, affichez un
message indiquant que le livre n'existe pas.

**Exemple :**

``` js
[
  { titre: "1984", auteur: "George Orwell", annee: 1949 },
  { titre: "L'Étranger", auteur: "Albert Camus", annee: 1942 },
  { titre: "Dune", auteur: "Frank Herbert", annee: 1965 }
]
```

Recherche :

``` text
"Dune"
```

Le programme doit afficher les informations de `Dune`.

------------------------------------------------------------------------

## Challenge 4 : Modification des Objets

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des produits. Chaque produit possède les propriétés `nom`
et `prix`.

Augmentez de **10%** le prix de chaque produit.

Le tableau doit être modifié directement, puis affiché.

**Exemple :**

``` js
[
  { nom: "Clavier", prix: 200 },
  { nom: "Souris", prix: 100 }
]
```

Après modification :

``` js
[
  { nom: "Clavier", prix: 220 },
  { nom: "Souris", prix: 110 }
]
```

------------------------------------------------------------------------

## Challenge 5 : Suppression des Doublons par Propriété

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des utilisateurs. Chaque utilisateur possède les propriétés
`nom` et `email`.

Supprimez les utilisateurs ayant le même `email` afin de conserver **un
seul utilisateur par email**.

**Exemple :**

``` js
[
  { nom: "Ali", email: "ali@gmail.com" },
  { nom: "Sara", email: "sara@gmail.com" },
  { nom: "Ahmed", email: "ali@gmail.com" },
  { nom: "Yassine", email: "yassine@gmail.com" }
]
```

Le résultat doit contenir un seul objet avec l'email `ali@gmail.com`.

------------------------------------------------------------------------

## Challenge 6 : Calcul et Classement des Étudiants

Écrivez un programme JavaScript qui prend un tableau d'objets
représentant des étudiants. Chaque étudiant possède les propriétés `nom`
et `notes`, où `notes` est un tableau de nombres.

Pour chaque étudiant :

1.  Calculez sa moyenne.
2.  Ajoutez une nouvelle propriété `moyenne` à son objet.
3.  Affichez les étudiants avec leur moyenne.
4.  Triez ensuite les étudiants du meilleur au moins bon selon leur
    moyenne.

**Exemple :**

``` js
[
  { nom: "Sara", notes: [15, 17, 16] },
  { nom: "Ali", notes: [10, 12, 11] },
  { nom: "Yassine", notes: [18, 16, 19] }
]
```

Le programme doit calculer les moyennes puis classer les étudiants selon
leur moyenne.

------------------------------------------------------------------------


### Règle du challenge

Essayez de résoudre les exercices **sans utiliser directement des
méthodes avancées** que vous n'avez pas encore étudiées.

Commencez par réfléchir à :

-   comment accéder à une propriété d'un objet ;
-   comment parcourir un tableau d'objets ;
-   comment modifier une propriété ;
-   comment comparer les valeurs de deux objets ;
-   comment créer un nouveau tableau ;
-   comment imbriquer des tableaux dans des objets.
