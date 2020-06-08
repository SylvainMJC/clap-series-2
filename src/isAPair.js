/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple : 
 * cards = ["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"] isPaired(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isPaired(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */

function isAPair(cards) {
  // CODE HERE
  for(let i = 0; i<cards.length - 1; i++){
    for(let j = 0; j<cards.length - 1; j++){
      if(i!=j){
        if(cards[i].charAt(cards[i].length - 2)==cards[j].charAt(cards[j].length - 2)){
          return true;
        }

      }
    }
  }
  return false;
}

export { isAPair };

//console.log(isAPair(["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"]));