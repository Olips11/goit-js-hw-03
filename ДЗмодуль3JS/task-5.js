// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.



function getAllPropValues (array, prop) {
    'use strict';
    let result = [];
    // Write code under this line 
    for (const keys of array){ 
      if (prop in keys){
    
            result.push(keys[prop]);
            }
          }
    return result;
  };
    // const key =Object.keys(userArray);
    // console.log(key)
    // for (const key of keys) {
     
    //   if ( prop in key){
    //     result.push(key[prop])
    //   }

    // const key =Object.keys(userArray.name);
    // console.log(key);
    // }

    // const key =Object.keys(array);
    // console.log(key);
//     if (prop === 'name') {
//         product.push(userArray.name)
//     } else if (prop === 'quantity') {
//             product.push(userArray.quantity) 
//  } else { product.push(userArray.category) }
           
// }
// return product;
 
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
 console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
console.log(getAllPropValues(products, 'category'));
  //  []
  