function filterNumbers(array, ...args) {
    const get = [];
  
    for (const elemnt of array) {
      if (args.includes(elemnt)) {
        console.log(elemnt);
  
        get.push(elemnt);
      }
    }
  
    return get;
  }
  
  console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 8, 3));
  console.log(filterNumbers([1, 2, 3, 4, 5, 10, 15, 8], 10, 15, 2, 8, 3));
  