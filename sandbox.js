// // Loops

// // for loop

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// // while loop

// let j = 0;

// while(j < 5){
//     console.log(`Current number: ${j}`);
//     j++;
// }

// //if statement

// const age = 18;

// if (age > 21){
//     console.log('Welcome to our page');
// }

// const workers = ['Deniss', 'Alex', 'Ina', 'Maria'];

// if (workers.length > 3){
//     console.log('That is big company');
// }

// // else if 

// const password = 'pssword123121';

// if(password.length > 12 && password.includes('@')){
//     console.log('password is strong');
// } else if(password.length > 8 || password.includes('@')){
//     console.log('Password is too short or not strong');
// } else if(!password.length == 10){
//     console.log('We do not like your password');
// } else {
//     console.log('Password is weak');
// }

// console.log(!true);
// console.log(!false);

// //let ages = [9, 18, 35, 15]
// //Loops through all elemnt (ages) and
// // print if this person can drink alcohol

// let ages = [9, 18, 35, 15];
// let time = 21;
// //If time > 22 - age doesn't matter, no alco
// for (let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         console.log(`You can drink alco, you are ${ages[i]}`);
//     } else {
//         console.log('You too young for alco');
//     }
// }

//asdasdasdasdas

// ()=>{

// }

// const speed = function(name = 'maris') {
//     console.log(`helo ${name}`);
// };
// const calculate = function(r) {
//     let area = 3.14 * r ** 2;
//     return area;
// }

// const arrow = (r) => 3.14 * r ** 2;

// console.log(`area is: ${arrow(12)}`);


// const bill = (product, tax) => {
//     let total = 0;
//     for (let i = 0; i < product.length; i++) return total += product[i] * 2 * tax;
// };

// let people = ['max', 'deniss', 'alex', 'ivan'];

// people.forEach(element => {
//     console.log(element);
// });

//Task


const sortArray = array => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
};

let randArray = (n) => {
let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 100 - 50));
    }
    return array;
}

const showArr = array => array.forEach(element => { 
    console.log(element);
});



// showArr(sortArray(randArray(array)));

let sorted = sortArray(randArray(10));
showArr(sorted);