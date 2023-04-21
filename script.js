
const numArr = []
let list = document.querySelector('.result')

let i = 0
while (i < numArr.length){
    console.log(numArr[i])
    list.innerHTML += `<li>${numArr[i]}</li>`
}

let button = document.querySelector('#button')
const number = document.querySelector('#shop')


button.addEventListener('click', function(){
    const addList = number.value 
    numArr.push(addList)
    console.log(addList)
    console.log(numArr)
    list.innerHTML += `<li>${addList}</li>`
})
