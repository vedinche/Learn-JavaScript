//!1
/**
 *Ф-ция убирает дефисы из строки, все буквы после дефисов становятся заглавными
 * @param {string} строка в виде 'border-left-width'.
 * @return {string} строка в виде 'borderLeftWidth'.
 */

// function camelize(str) {
//   let strToArr = str.split('-');
//   let result = '';

//   for (let i = 1; i < strToArr.length; i++) {
//     strToArr[i] = strToArr[i].slice(0, 1).toUpperCase() + strToArr[i].slice(1);
//     result = strToArr.join('');
//   }

//   return result;
// }

// console.log(camelize(testStr));

function test(str) {
  return str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

//!2
/**
 *Ф-ция ищет эл-ты массива между a и b
 *@param {} принимает массив и два значения
 *@return {} ф-ция должна возвращать новый массив не изменяя исходный. Например: let filtered = filterRange(arr, 1, 4); // 3,1
 */
// function filterRange(arr, a, b) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let filtered = filterRange(arr, 1, 4);

//!3
/**
 * Ф-ция преобразует массив удаляя элементы между a и b
 * @param {} принимает массив и два хначения
 * @return {} изменяет исходный массив
 */
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i <= arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

//!4
/**
 * Ф-ция сортирует массив чисел в порядке по убыванию
 */
function arrSort(arr) {
  return arr.sort((prev, next) => next - prev);
}

//!5
/**
 * Ф-ция копирует и сортирует копию массива
 */
function copySortedArr(arr) {
  let copyArr = arr.slice().sort();
  return copyArr;
}

//!7
/**
 * Ф-ция преобразует массив объектов в массив имён
 */
function userName(arr) {
  let names = arr.map((item) => item.name);
  console.log(names);
}

//!8
/**
 * Ф-ция преобразует массив объектов с именем фамилией и id пользователя (name, surname, id) в массив объектов с параметрами id и fullName, где fullName состоит из name и surname
 */

function getFullName(arr) {
  let newArr = arr.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  }));
  return newArr;
}

//!9 ???? разобраться!
/**
 * Ф-ция перемешивает случайным образом элементы массива.
 */
function shuffle(arr) {}

//!10
/**
 * Ф-ция принимает массив объектов пользователей и сортирует их по возрасту
 */

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

//!11
/**
 * Ф-ция принимает массив объектов со свойством age и возвращает средний возраст
 */
function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}
