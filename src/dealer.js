import { inArray } from "./inArray";

/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */
function dealer() {
  // CODE HERE
  let valeurs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let types = ['d', 'c', 'h', 's'];
  var cards = new Array();
  let hands = new Array();
  //console.log('cards1 :');
  while(hands.length<2){
    cards = new Array();
    while(cards.length<5){
      let valeur = valeurs[Math.floor(Math.random() * valeurs.length)];
      let type = types[Math.floor(Math.random() * types.length)];
      let card = valeur + type;
      // solution 2
      if(!inArray(cards, card)){
        cards[cards.length]=card;
      }
      // first solution
      //cards[cards.length]=card;
      //cards = removeDuplicates(cards);
    }
    hands[hands.length]=cards;
    //console.log(hands);
  }
  return hands;
}

function removeDuplicates(colors) {
  let unique = {};
  colors.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}


export { dealer, removeDuplicates };
//dealer();

/*
let tab = [ '2d', '2h', '2h', '5s', '10s' ];
console.log(tab);
tab = removeDuplicates(tab);
tab = removeDuplicates(cards2);
console.log(tab);
*/