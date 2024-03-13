//const totalCash=document.querySelector('#totalCash').value

const formDeposit = document.querySelector('#formDeposit')
formDeposit.addEventListener('submit', function (event) {
    event.preventDefault()
})

const deposit = document.querySelector('#depositButtonId')



let initialCash = 100000
document.querySelector('#totalCash').innerHTML = initialCash

function doDeposit() {
    let exampleDeposit = parseInt(document.querySelector('#exampleInputdeposit').value)

    let result
    result = initialCash + exampleDeposit
    console.log(result);
    document.querySelector('#totalCash').innerHTML = result
    alert("Deposito hecho con exito")
    initialCash = result
    formDeposit.reset()

}

deposit.addEventListener('click', doDeposit)

$(function () {

    




})