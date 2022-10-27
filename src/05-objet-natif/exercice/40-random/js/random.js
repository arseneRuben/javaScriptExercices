/**
 * Exercice - random
 *
 * Consignes:
 *  Créer le fichier js/random.js à partir du code suivant.
 *  Compléter le code manquant pour affiché sur la console le Array resultat contenant les valeurs du Array initial dans un ordre aléatoire.
 */
'use strict'

const initial = [1, 2, 3, 4, 5, 6]
const resultat = []

// Compléter le code pour remplir le Array resultat dans un ordre aléatoire
// Premier trie aleatoire du tableau initial
const temp = initial.sort(() => Math.random() - 0.5)
temp.forEach((element, index) => {
    // Construction des element du tableau resultant a partir du tableau trier aleatoirement
    resultat[index] = element
})
console.log('Résultat', resultat)
