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

//import { getCardsValue, nbOccurences } from "../src/functions";
function getCardsValue(cards) {
	let cardsValue = [];
	let value = "";
	cards.forEach(
		card => {
			value = card.charAt(0)
			if (value == "1"){
				value = value + "0";
			}
			cardsValue.push(value);
		}
	)
	return cardsValue;
}
function allIndexOf(arr, value) {
	if (arr.indexOf(value) >= 0) {
		let res = [];
		for( let i = arr.indexOf(value); i >= 0; i = arr.indexOf(value,i+1) ) {
			res.push(i);
		}
		return res;
	}
	else return false;
}

function nbOccurences(arr, value) {
	let indexes = allIndexOf(arr, value);
	if (indexes != false) return indexes.length;
	else return false;
}

const CARDS = {
	as: "A",
	king: "K",
	queen: "Q",
	jack: "J",
	ten: "10",
	nine: "9",
	eight: "8",
	seven: "7",
	six: "6",
	five: "5",
	four: "4",
	three: "3",
	two: "2"
  }
  
  const  CARDVALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  
  function occurences(cards) {
	  let cardsValue = getCardsValue(cards)
	  let count = new Object()
	  let nbOcc = 0
	  for (let [key, value] of Object.entries(CARDS)) {
		  nbOcc = nbOccurences(cardsValue, value)
		  if (nbOcc > 0) count[key] = nbOcc
	  }
	  return count
  
  }
/*
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

//pour éviter 13 IF : Object.keys[plop].filter(key =>[key] >0); FILTRE TOUTES LES CLÉS QUI SONT SUPÉRIEURES À 0.
*/

export { occurences };
/*
let oc = ["Ad", "7h", "8d", "As", "7s"]
console.log(oc);
oc = occurences(oc);
console.log(oc);
*/