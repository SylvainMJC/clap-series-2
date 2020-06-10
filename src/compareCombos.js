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
import { getHandValue } from "../src/functions";


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


export { compareCombos };
/*
let cards1 = ["8s", "8h", "Ad", "7h", "5d"];
let cards2 = ["8h", "7h", "5h", "3h", "2h"];

console.log("winner: ", compareCombos(cards1, cards2));
*/