/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
  // CODE HERE
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    sum += arr2[j];
  }
  return sum;
}

export { plusArray };
//console.log([1, 2, 3], [1, -2, 3]);
//console.log(plusArray([1, 2, 3], [1, -2, 3]));