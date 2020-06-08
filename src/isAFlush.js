/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */

function isAFlush(cards) {
  // CODE HERE

  let d = 0;
  let c = 0;
  let h = 0;
  let s = 0;
  for(let i=0; i < cards.length; i++){
    switch(cards[i].charAt(cards.length - 1)){
      case('s'): s++;
      case('h'): h++;
      case('c'): c++;
      case('d'): d++;
    }
  }
  if(s>4 || h>4 || c>4 || d>4){
    return true;
  }
  else{
    return false;
  }

}

export { isAFlush };