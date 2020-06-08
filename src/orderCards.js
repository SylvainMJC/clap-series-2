/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */
  const order2 = {
    "A" : 1,
    "K" : 2,
    "Q" : 3,
    "J" : 4,
    "10" : 5,
    "9" : 6,
    "8" : 7,
    "7" : 8,
    "6" : 9,
    "5" : 10,
    "4" : 11,
    "3" : 12,
    "2" : 13,
    default: Infinity
  }
//sHAMELESS
const order = {
  "As" : 1,
  "Ac" : 2,
  "Ah" : 3,
  "Ad" : 4,
  "Ks" : 5,
  "Kc" : 6,
  "Kh" : 7,
  "Kd" : 8,
  "Qs" : 9,
  "Qc" : 10,
  "Qh" : 11,
  "Qd" : 12,
  "Js" : 13,
  "Jc" : 14,
  "Jh" : 15,
  "Jd" : 16,
  "10s" : 17,
  "10c" : 18,
  "10h" : 19,
  "10d" : 20,
  "9s" : 21,
  "9c" : 22,
  "9h" : 23,
  "9d" : 24,
  "8s" : 25,
  "8c" : 26,
  "8h" : 27,
  "8d" : 28,
  "7s" : 29,
  "7c" : 30,
  "7h" : 31,
  "7d" : 32,
  "6s" : 33,
  "6c" : 34,
  "6h" : 35,
  "6d" : 36,
  "5s" : 37,
  "5c" : 38,
  "5h" : 39,
  "5d" : 40,
  "4s" : 41,
  "4c" : 42,
  "4h" : 43,
  "4d" : 44,
  "3s" : 45,
  "3c" : 46,
  "3h" : 47,
  "3d" : 48,
  "2s" : 49,
  "2c" : 50,
  "2h" : 51,
  "2d" : 52,


  default: Infinity
}
function compareList() {

  return (a, b) => (order[a] || order.default) - (order[b] || order.default);
}

//console.log(['A', '7', 'J'].sort(compareList()));
console.log(['Ks', '3d', '10s', '5c', 'Ah'].sort(compareList()));


function orderCards(cards) {
  // CODE HERE
  return cards.sort(compareList());

}

export { orderCards };