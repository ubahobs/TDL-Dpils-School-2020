let object =  {
    a: 1,
    b: 2
}
// let toArray = (object) => {
//     let array = [];
//     for (let key in object) {
//         let temp = {};
//         temp[key] = object[key];
//         array.push(temp)
//     }
//     return array;
// }

// let showArray = (array) => array.forEach(element => console.log(element));

// showArray(toArray(object));

let toArray = (object) => {
    let array = [];
    for (let key in object) {
        let temp = [];
        temp[key] = object[key];
        array.push(temp)
    }
    return array;
}

let showArray = (array) => array.forEach(element => console.log(element));

showArray(toArray(object));