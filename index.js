// написати скрипт (можна функцію можна без),
//який виводить індекс максимального елемента в масиві.\
//Якщо максимальних елементів декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];

function getLastIndexMaxElement(value) {
  let max = 0;
  for (let i = 0; i < value.length; i++)
    if (value[i] > max) {
      max = value[i];
    }
  let indexMaxNum = value.lastIndexOf(max);
  return indexMaxNum;
}

getLastIndexMaxElement(arrNums);

// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

function getAmountMaxElement(value) {
  let max = 0;
  for (let i = 0; i < value.length; i++)
    if (value[i] > max) {
      max = value[i];
    }
  let howMuchMaxElement = 0;
  for (let u = 0; u < value.length; u++) {
    if (max === value[u]) {
      howMuchMaxElement++;
    }
  }
  return howMuchMaxElement;
}

getAmountMaxElement(arrNums);
