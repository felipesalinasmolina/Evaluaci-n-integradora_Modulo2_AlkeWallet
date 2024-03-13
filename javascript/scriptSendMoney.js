

const contactList = document.querySelector('#contactList')
const showContactList = document.querySelector('#watchContactButton')
const hideContactList = document.querySelector('#hideContactButton')
const sendMoney=document.querySelector('#sendMoneyButton')
const transferCashbtn= document.querySelector('#transferCashButton')


let initialCash = 100000
document.querySelector('#transferCash').innerHTML=initialCash


function showContact() {
    contactList.style.display = 'block'
    hideContactList.style.display = 'block'
}

function hideContact() {
    contactList.style.display = 'none'
    hideContactList.style.display = 'none'
}
 function doTransfers(){
    let exampleTransfers= parseInt(document.querySelector('#transferCashInput').value)
    let result
    result = initialCash-exampleTransfers
    console.log(result);
    document.querySelector('#transferCash').innerHTML=result
    initialCash = result
 }


showContactList.addEventListener("click", showContact)
hideContactList.addEventListener('click', hideContact)
transferCashbtn.addEventListener('click',doTransfers)