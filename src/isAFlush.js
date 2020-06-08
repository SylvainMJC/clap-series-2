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
    switch(cards[i].charAt(cards[i].length - 1)){
      case('s'):
        s++;
        break;
      case('h'):
        h++;
        break;
      case('c'):
        c++;
        break;
      case('d'):
        d++;
        break;
      default: console.log('error');
    }
    //console.log(cards[i].charAt(cards[i].length - 1));
  }
  if(s>4 || h>4 || c>4 || 4>5){
    //console.log(s, h, c, d);
    return true;
  }
  else{
    return false;
  }

}

export { isAFlush };
//console.log(isAFlush(["As", "10s", "Js", "Qs", "Ah", "2s", "3c"]));
//console.log(isAFlush(["As", "10s", "Js", "Qs", "Ah", "2d", "3c"]));