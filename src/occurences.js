/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors occurences(cards) 
 * retournera { as: 2, seven: 1, eight: 1, queen: 1 }
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */

const CARDS = {
  as: "A",
  king: "K",
  queen: "Q",
  jack: "J",
  ten: "10",
  nine: "9",
  height: "8",
  seven: "7",
  six: "6",
  five: "5",
  four: "4",
  three: "3",
  two: "2"
}

function occurences(cards) {
  // CODE HERE
  var nbas, nbking, nbqueen, nbjack, nbten, nbnine, nbeight, nbseven, nbsix, nbfive, nbfour, nbthree, nbtwo = 0;

  for(var i = 0; i<cards.length;i++){
    switch(cards[i].charAt(0)){
      case(CARDS.as):
        nbas++;
        break;
      case(CARDS.king):
        nbking++;
        break;
      case(CARDS.queen):
        nbqueen++;
        break;
      case(CARDS.jack):
        nbjack++;
        break;
      case(CARDS.ten):
        ten++;
        break;
      case(CARDS.nine):
        nbnine++;
        break;
      case(CARDS.eight):
        nbeight++;
        break;
      case(CARDS.seven):
        nbseven++;
        break;
      case(CARDS.six):
        nbsix++;
        break;
      case(CARDS.five):
        nbfive++;
        break;
      case(CARDS.four):
        nbfour++;
        break;
      case(CARDS.three):
        nbthree++;
        break;
      case(CARDS.two):
        nbtwo++;
        break;
      default:
        console.log('error');
    }
  }
  var CARTES = {};

  if(nbas>1){
    CARTES.as=nbas;
  }
  if(nbking>1){
    CARTES.king=nbking;
  }
  if(nbqueen>1){
    CARTES.queen=nbqueen;
  }
  if(nbjack>1){
    CARTES.jack=nbjack;
  }
  if(nbten>1){
    CARTES.ten=nbten;
  }
  if(nbnine>1){
    CARTES.nine=nbnine;
  }
  if(nbeight>1){
    CARTES.eight=nbeight;
  }
  if(nbseven>1){
    CARTES.seven=nbseven;
  }
  if(nbsix>1){
    CARTES.six=nbsix;
  }
  if(nbfive>1){
    CARTES.five=nbfive;
  }
  if(nbfour>1){
    CARTES.four=nbfour;
  }
  if(nbthree>1){
    CARTES.three=nbthree;
  }
  if(nbtwo>1){
    CARTES.two=nbtwo;
  }
  return CARTES;
}

export { occurences };