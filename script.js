

// let button = document.querySelector('#button')

// button.addEventListener('click', function (){
//     const listArr = []
//     let item = document.querySelector('#shop').value
//         while (item !== 'Fine'){
//         listArr.push(item)
//         item = document.querySelector('#shop').value
//     }
//     console.log(listArr)
// })

// const button = document.querySelector('#button')

// button.addEventListener('click', function(){
//     let i = 0 
//     let item = document.querySelector('#shop').value
//     while (i < 100){
//     let item = document.querySelector('#shop').value
//     document.querySelector('.result').innerHTML += `<span>${item}</span>`
//     i++
// }})




let button = document.querySelector('#button')

button.addEventListener('click', function(){
    const listArr = []
let item = document.querySelector('#shop').value
let result = document.querySelector('.result')

let i = 0
while (item !== 'cazzo'){
    item = document.querySelector('#shop').value
    result.innerHTML += listArr[item]
    i++
}

})