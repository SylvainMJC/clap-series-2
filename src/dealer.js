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
  var cards1 = new Array();
  var cards2 = new Array();
  //console.log('cards1 :');
  while(cards1.length<5){
    let valeur1 = valeurs[Math.floor(Math.random() * valeurs.length)];
    let type1 = types[Math.floor(Math.random() * types.length)];
    let card1 = valeur1 + type1;
    cards1[cards1.length]=card1;
    cards1 = removeDuplicates(cards1);
    //console.log(cards1);
  }
  //console.log(cards1);
  //console.log('cards2 :');

  while(cards2.length<5){
    let valeur2 = valeurs[Math.floor(Math.random() * valeurs.length)];
    let type2 = types[Math.floor(Math.random() * types.length)];
    let card2=valeur2+type2;
    cards2[cards2.length]=card2;
    cards2 = removeDuplicates(cards2);


    //console.log(cards2);

  }
  
  //console.log(cards2);
  let hands = [ cards1, cards2 ];
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