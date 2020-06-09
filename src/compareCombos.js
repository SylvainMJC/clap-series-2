/*
 * /!\ À faire à la fin, seul ou en groupe !
 * Les tableaux cards1 et cards2 contiennent 5 cartes. L'objectif est de retourner le tableau contenant le 
 * meilleur combos :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 */
function compareCombos(cards1, cards2) {
  // CODE HERE

  //for affecte une valeur à cards 1 et cards 2 qui dépendent de leur combo:

  var combo1, combo2='none';

  if(isAFlush(cards1)){
    combo1 = 5;//Flush

    console.log('combo1 : Flush');
  }
  else {
    if(isAPair(cards1)){
      combo1 = 4;//Pair
      console.log('combo1 : Pair');
      }
    else{
    combo1=3;//Hauteur
    console.log('combo1 : Hauteur');
    }
  }
  if(isAFlush(cards2)){
    combo2=5;//Flush
    console.log('combo2 : Flush');

  }
  else{
    if(isAPair(cards2)){
      combo2=4; //Pair
      console.log('combo2 : Pair');
    }
    else{
      combo2=3; //Hauteur
      console.log('combo2 : Hauteur');
    }
  }

  if(combo1>combo2){
    return cards1;
  }
  else if(combo2>combo1){
    return cards2;
  }

  if(combo1===combo2){
    if(combo1=='hauteur' || 'flush'){
      cards1 = orderCards(cards1);
      cards2 = orderCards(cards2);
      bestcards = [cards1[0], cards2[0]];
      o = orderCards(cards2);
      if(o==bestcards){
        return cards1;
      }
      else{
        return cards2;
      }

    }
    else if(combo1=='pair'){
      console.log('égalité paires non gérée');
    }
    


  }
}

//export { compareCombos };

let cards1 = ["8s", "8h", "Ad", "7h", "5d"];
let cards2 = ["8h", "7h", "5h", "3h", "2h"];

console.log("winner: ", compareCombos(cards1, cards2));