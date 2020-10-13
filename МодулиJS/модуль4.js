// Функция высшего порядка — функция, принимающая в качестве параметров
// другие функции или возвращающая функцию как результат.

// Функция обратного вызова(callback) — это функция, которая передается
// другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

///////////////////////////2. Абстрагирование повторения

// Абстракция — скрытие деталей реализации.
// Позволяет думать о задачах на более высоком(абстрактном)
// уровне.

// Функции это хороший способ построения абстракций.
// Допустим скрипт выполняет какое - то действие
// определенное количество раз.Для этого можно написать
// цикл for.

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// Можем ли мы абстрагировать «делать что - то N раз» как функцию ? - да,
//     напишем функцию, которая вызывает console.log() N раз.

// const repeatlog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatlog(5);

// Но что, если мы хотим сделать что - то кроме логирования чисел ?
// Поскольку «делать что - то» можно представить как функцию,
// а функции - это просто значения, мы можем передать действие как аргумент.

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию\
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);

// Часто callback - функции анонимны и объявляются как стрелочные функции прямо во время передачи.

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`label ${value + 1}`);
// });

// console.log(labels);

//////////////////////////////////////////////3. Фильтрация массива

// Напишем функцию фильтрации элементов массива.
// Первый параметр array это массив, будем перебирать его используя цикл for...of.

// const filter = function (array) {
//   for (const element of array) {
//   }
// };

// Второй параметр test это callback - функция,
// которую будет необходимо выполнить для каждого элемента массива.

// const filter = function (array, test) {
//   for (const element of array) {
//     test(element);
//   }
// };

// Функция filter создает новый массив, в который будет добавляться
// результат выполнения callback - функции test над каждым элементом
// массива array.Результатом работы функции будет массив отфильтрованных элементов.

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     test(element);
//   }

//   return filteredElements;
// };

// Если элемент массива проходит тест,
// то есть callback - функия возвращает true,
// он добавлятся в отфильтрованный массив.

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of arrary) {
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// При таком подходе мы можем выполнять фильтрацию
// массива по критерию используя всего
// одну функцию для перебора, а операции над каждым
// элементом будут зависеть от callback - функции.

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);
//     console.log(test(element));
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

/////////////////////////////// 1. Замыкания

// Замыкание(closure) — это связь между функцией и ее цепочкой областей видимости.

// Рассмотрим пример функции - счетчика с недоступной из вне переменной.

const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
