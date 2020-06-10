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
import { occurences } from "../src/occurences";
//import { orderCards } from "../src/orderCards";
import { isAFlush } from "../src/isAFlush";
import { isAPair } from "../src/isAPair";




function compareCombos(cards1, cards2) {
	return [cards1, cards2].sort(compare)[0];
}

function compare(cards1, cards2) {

  console.log('cards1 value: ', getHandValue(cards1));
  console.log('cards2 value ', getHandValue(cards2));
	if (getHandValue(cards1) > getHandValue(cards2)) return -1
	else if (getHandValue(cards1) < getHandValue(cards2)) return 1
	else {
		if (getHandValue(cards1) > getHandValue(cards2)) return -1
		else return 1
	}
}

function getCardsValue(cards) {
	let cardsValue = [];
	let value = "";
	cards.forEach(
		card => {
			value = card.charAt(0)
			if (value == "1") value = value + "0"
			cardsValue.push(value);
		}
	)
	return cardsValue;
}

function getCardsType(cards) {
	let cardsType = [];
	let type = "";
	cards.forEach(
		card => {
			type = card.charAt(card.length-1)
			cardsType.push(type);
		}
	)
	return cardsType;
}


function isAFull(cards){
	let occur = occurences(cards)
	let isAThree = false;
	let isATwo = false;
	for (let [key, value] of Object.entries(occur)) {
		if (value == 3 && isAThree == false) {
			isAThree = true;
		}
	}
	for (let [key, value] of Object.entries(occur)) {
		if (value == 2 && isATwo == false) {
			isATwo = true;
		}
	}
	if (isAThree && isATwo) {
		return true;
	}
}


function getHandValue(cards) {

	// cards = orderCards(cards)
	let cardsValue = getCardsValue(cards);
	let cardsType = getCardsType(cards);
	
	
	if (isAFull(cards)) {
		return 4;
	}

	if (isAFlush(cards)) {
		let types = ["d", "c", "h", "s"];
		types.forEach(
			type => {
				let nbOcc = nbOccurences(cardsType, type)
				if (nbOcc > 4) {
					return
				}
			}
		)
		return 3;
	}

	if (isAPair(cards)) {
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		values.forEach(
			value => {
				let nbOcc = nbOccurences(cardsValue, value)
				if (nbOcc == 2) {
					return
				}
			}
		)
		return 2;
	}
	return 1;
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
	if (allIndexOf(arr, value) != false) return indexes.length;
	else return false;
}

//export { compareCombos };

let cards1 = ["8s", "8h", "Ad", "7h", "5d"];
let cards2 = ["8h", "7h", "5h", "3h", "2h"];

console.log("winner: ", compareCombos(cards1, cards2));
