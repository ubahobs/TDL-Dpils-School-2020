
// let randArray = (n) => {
//     let array = [];
//         for (let i = 0; i < n; i++) {
//             array.push(Math.floor(Math.random() * 100 - 50));
//         }
//         return array;
//     }

// const showArray = (array) => array.forEach(element => console.log(element));

// showArray(randArray(10));

//Global objects

// setTimeout(() => {
//     console.log('Stoped');
//     // clearInterval(intverval);
// }, 5000)
// // const intverval = setInterval(() => {
// //     showArray(randArray(10));
// //     console.log('')
// // }, 3000);
// console.log('i am out of sync')
// console.log(__dirname)
// console.log(__filename)

// const { people, ages, length } = require('./people');

// console.log(ages, people, length)   
// const os = require('os')

// console.log(os)


//reading files
// const fs = require('fs')

// fs.readFile('./blog1.txt', (error, data) => {
//     if (error) console.log(error) 
//     else console.log(data.toString())
// });

// //writing files

// fs.writeFile('./blog1.txt', 'hello there!', () => {
//     console.log('file written!')
// })

// fs.writeFile('./blog2.txt', 'hello there!!!', () => {
//     console.log('file written!')
// })

// directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('folder created')
//         }
//     })
// } else {
//     console.log('There already exist this file')
//     fs.rmdir('./assets', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Folder removed')
//         }

//     })
// }

//delete files

// if (fs.existsSync('./deleteme.txt')) {
//     fs.unlink('./deleteme.txt', 'some pass', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('file deleted!')
//         }
//     })
// } else console.log('No file')


//

// fs.writeFile('./blog2.txt', 'password', () => {
//         console.log('file written!')
//     })

// if (!fs.existsSync('./folder')) {
//     fs.mkdir('./folder', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('folder created')
//         }
//     })
// } else {
//     fs.rmdir('./folder', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('file deleted!')
//         }
//     })
// }



// if (!fs.existsSync('./tmppass.txt')) {
//     fs.writeFile('./tmppass.txt', 'password', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('file created')
//         }
//     })
// } else {
//     fs.unlink('./tmppass.txt', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('file deleted!')
//         }
//     })
// }


//streams and buffers
const fs = require('fs');

const readStream = fs.createReadStream('./folder/blog3.txt', {encoding: 'utf8'});
const writerStream = fs.createWriteStream('./folder/blog4.txt');

readStream.on('data', (buffer) => {
    // console.log('------------------- new chunk --------------------');
    writerStream.write('\n------------------- new chunk --------------------\n')
    writerStream.write(buffer)
});




