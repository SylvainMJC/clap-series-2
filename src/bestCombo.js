/*
 * /!\ À faire à la fin, seul ou en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le 
 * meilleur combo possible :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur 
 * prime sur le type !
 * 
 */

function bestCombo(cards) {
  // CODE HERE

  /* On check si c'est un full
    si oui on retourne les 5 cartes en question
  */
  
  /* snon on check si c'est un flush
    
  */
  if(isAFlush(cards)){
    //si oui on identifie les 5 cartes en question
    
  }
  /* si non on check si c'est une paire
    si oui on retourne les 5 cartes en question
  */
  else if(isAPair(cards)){

  }
  /* sinon on retourne la hauteur (5 meilleures cartes)
  */
  else{

  }

  //
}

export { bestCombo };