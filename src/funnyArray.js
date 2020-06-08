/*
 * /!\ À faire seul !
 * 
 * L'objectif est le suivant :
 *
 * - Si le nombre d'éléments dans le tableau est impair, je retourne l'élément du milieu, exemple :
 * ary = ['un', 'petit', 'tableau'] alors midArray(ary) retournera 'petit'
 * - Si le nombre d'éléments dans le tableau est pair, je retourne une concaténation des éléments exemple :
 * ary = [1,2,3,4] alors funnyArray(ary) retournera 2 + 3 soit 5
 * ary = ['un', 'plus', 'grand', 'tableau'] alors midArray(ary) retournera 'plusgrand'
 * - Si le tableau est vide, je retourne le mot 'rien'
 */
function funnyArray(ary) {
  // CODE HERE
  if(ary.length==0){
    return 'rien';
  }
  else if(ary.length%2==0){
    return ary[ary.length/2 - 1] + ary[ary.length/2];
  }
  else{
    return ary[(ary.length-1)/2];
  }

}

export { funnyArray };