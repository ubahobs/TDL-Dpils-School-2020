let object =  {
    a: 1,
    b: 2
}

let showArray = (array) => array.forEach(element => console.log(element));

// let toArray = (object) => {
//     let array = [];
//     for (let key in object) {
//         let temp = {};
//         temp[key] = object[key];
//         array.push(temp)
//     }
//     return array;
// }
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

showArray(toArray(object));z