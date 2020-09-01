/////////////////////////////////  2. Создание объекта

// const hotel = {};

//ключ:значение (key:value)

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// }

/////////////////////////////  3. Доступ к свойствам

// Доступ к свойству объекта, для того чтобы получить
// или присвоить ему значение, может быть записан двумя
// способами:

// object.key — через точку.
// object["key"] — через квадратные скобки с
// именем ключа в кавычках.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel

// hotel.name = 'Coastline Resort';
// console.log(hotel.name);  // Coastline Resort
// console.log(hotel['name']);  // Coastline Resort

// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name); // Stardust Hotel
// console.log(hotel['name']); // Stardust Hotel

//Если при записи значения по ключу,
//такого ключа в объекте нет, он будет создан.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// hotel.address = '1 Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel.address); // 1, Beach ave.
// console.log(hotel.manager); // Chuck Norris

//////////////////////////// 4. Удаление свойств

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// delete hotel.name;
// console.log(hotel);  // {stars: 5, capacity: 100}

// delete hotel['stars'];
// console.log(hotel); // {capacity: 100}

////////////////////////// 5. Отсутствующие свойства

//Отсутствующее свойство, при обращении к нему по ключу,
//возвращает undefined.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     guests: ['mango', 'poly', 'ajax'],
// };

// console.log(hotel.stars); // 5
// console.log(hotel.pool); // undefined

//////////////////////// 6. Короткие свойства

// let name = 'Resort Hotel';
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotel = {
//     name: name,
//     stars: stars,
//     capacity: 100,
// };

/*
 * ES6 Shorthand properties
 * Имя ключа будет аналогично имени переменной
 * Значение свойства будет равно значению переменной
 */
// const es6hotel = {
//     name,
//     stars,
//     capacity: 100,
// }

// console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}

///////////////////////// 7. Вычисляемые свойства

// const key = 'person';
// const object ={};

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

///

// const key = 'person';
// const getKey = function() {
//     return 'age';
// }

// // Computed properties
// const object = {
//     [key]: 'Mango',
//     [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

/////////////////////////// 8. Методы объекта

// Объекты хранят не только данные,
// но и функции для работы с этими данными.
// Если значение свойства это функция,
//  то оно называется методом объекта.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     // Так метод объявлялся в ES5
//     greetInES5: function() {
//         console.log('Welcome!');
//     },
//     // Так метод объявляется в ES6
//     greetInES6() {
//         console.log('Welcome!');
//     },
// };

// hotel.greetInES5(); // Welcome!
// hotel.greetInES6(); // Welcome!

// Так как методы это обычные свойства,
// значение которых это функция, их можно
// добвлять или удалять в любой момент.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// hotel.greet = function() {
//     console.log('Welcome!');
// };

// hotel.greet(); // Welcome!

//////////////////////////// 8.1. Доступ к объекту через this

// Методы используются для работы со свойствами объекта,
// их изменения. Для доступа к текущему объекту,
// в методе используется не имя объекта, а ключевое слово
// this - контекст. Значением this является объект
// перед 'точкой', в контексте которого вызван метод.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     showName() {
//         console.log(this.name);
//     },
//     changeCapacity(value) {
//         this.capacity = value;
//     },
// }

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

//////////////////////////// Перебор объекта

// По умолчанию объект не является итерируемым,
// то есть по нему нельзя пройти циклом for или for...of
// как по массиву или строке. Для того чтобы перебрать
// объект существует несколько специальных конструкций,
// некоторые необходимо знать так как это часть языка,
// а некоторые используются в повседневной работе.

/////////////////////////// 2. Цикл for...in

// for (key in object) {
//     // statements
// }

// Перебирает ключи объекта
// Можно удалять свойства во время перебора
// Нельзя использовать для перебора массивов

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel){
//     console.log('Key: ', key)
// }

// /*
//  * Key: name
//  * Key: stars
//  * Key: capacity
//  */

// Для того чтобы получить значение свойства с таким
//  во время итерации, используется синтаксис квадратных
//   скобок, так как ключ всегда строка,.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
// }
// /*
//  * Value: "Resort Hotel"
//  * Value: 5
//  * Value: 100
//  */

// //////////////////////// 3. Object.keys(), Object.values(), Object.entries()

// Object.keys(obj) - вернет массив, с ключами объекта
// obj в виде строк.
// Object.values(obj) - вернет массив, со значениями
// свойств объекта obj .
// Object.entries(obj) - вернет массив записей, каждым
// элементом которого будет еще один массив из 2-х элементов,
// ключа и значения этого ключа из объекта obj.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

// Скомбинировав результат Object.keys() и цикл for...of
// мы можем перебрать объект. На самом деле мы перебираем
// массив ключей, а потом просто обращаемся к свойству
// объекта с таким ключом.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// const key = Object.keys(hotel); // ["name", "stars", "capacity"]

// for (const key of keys) {
//     console.log('Value: ', hotel[key]);
// }
/*
 * Value: Resort Hotel
 * Value: 5
 * Value: 100
 */

//А можно использовать результат Object.entries()
//  который вернет массив записей с ключами и значениями
//  свойств объекта.

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */

//  const entries = Object.entries(hotel);

//  /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */

//  for (const entry of entries) {
//      const key = entry[0];
//      const value = entry[1];

//      console.log(`${key}: ${value}`);
//  }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

// Допустим перед нами стоит задача посчитать общее
// количество продуктов в объекте формата имя-продукта:
// количество. Тогда подойдет метод Object.values() для
// того чтобы получить массив всех значений и потом удобно
// их сложить.

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values = Object.values(goods);  // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//     total += value;
// }

// console.log(total);

///////////////////////////// Операции spread и rest

// В современном JavaScript появилась новая операция для
// работы с итерируемыми объектами, такими как строка,
// массив или объект. Ее функционал и название, в отличии
// отсинтаксиса, зависит от места применения.

/////////////////////////// 2. Операция spread

////////////////////////// 2.1. Распыление аргументов

// Представим ситуацию когда у нас есть массив температур
// за какой-то период, и необходимо программно найти самую
// маленькую температуру в массиве используя метод Math.min(),
//  который ожидает несколько аргументов, а не массив.

// Если передать просто массив, получим NaN, потому что
// Math.min() не умеет работать с массивом.

// const c = [18, 14, 12, 21, 17, 29];

// const min = Math.min(temperatures); // NaN

// В данном случае нам поможет операция распыления,
// чтобы передать элементы массива отдельными аргументами
// при вызове функции.

// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures); // 12

// То есть запись Math.min(...[18, 14, 12, 21, 17, 29])
// аналогична Math.min(18, 14, 12, 21, 17, 29), операция
// spread распылила массив элементов в аргументы функции.

////////////////////////////////////// 2.2. Распыление массивов



//const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
//const copyOfHouses = [...houses];

//console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
//console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
//console.log(houses === copyOfHouses); // false - разные ссылки

// То же самое можно было сделать используя метод slice(), 
// операция spread просто позволяет записывать это более
//  кратко, особенно когда распылений несколько.

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const slicedCopyHouses = houses.slice();

// console.log(houses);
// console.log(slicedCopyHouses);

//При этом можно добавлять и удалять элементы при 
// создании нового массива.

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];

// console.log(houses);
// console.log(completeHouses);

// Можно очень удобно соединять несколько массивов
//  в один новый. Порядок распыления исходных массивов 
//  влияет на порядок элементов в результирующем массиве.

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const houses = [...firstBatch, ...secondBatch];

//console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']


// Можно использовать классические методы массива
//  вроде slice() в комбинации с операцией spread. 
//  Все кто смотрел сериал Game of Thrones знают, 
//  что никто кроме дома Ланистеров не платит по долгам. 
//  Сделаем массив содержащий все дома кроме Ланистеров.

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

console.log(housesInDebt) // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

