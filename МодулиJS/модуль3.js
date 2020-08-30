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