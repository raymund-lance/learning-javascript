function getEven(even) {
    return even % 2 === 0;
}

const arrayEven = [1,2,3,4,5,6,7,8,9,10];
//filter

let filterEven = arrayEven.filter(getEven);
console.log(arrayEven);
console.log(filterEven);

let mapEven = filterEven.map((multiply) => multiply * 3);
console.log(mapEven);

let reduceEven = mapEven.reduce((total, arrayItem) => {
    return total += arrayItem;
}, 0);
console.log(reduceEven);