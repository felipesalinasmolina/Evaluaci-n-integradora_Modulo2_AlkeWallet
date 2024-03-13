const formLogin = document.querySelector('#formLogin')
formLogin.addEventListener('submit', function (event) {
    event.preventDefault()
})

const checkLogin = document.querySelector('#authenticationButtonId')



function checkCode() {

    const formLogin = document.querySelector('#formLogin')
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault()
    })

    const mail = document.querySelector('#exampleInputEmail').value
    const password = document.querySelector('#exampleInputPassword').value
    
    if (mail == '') {
        alert('El usuario no puede estar vacio')
    }
    if (password == '') {
        alert('El password no puede estar vacio')
    }
    if (mail != '' && password != '') {

        if (mail === 'felipe@mail.com' && password === '123456') {
            document.querySelector('#warningLogin').innerHTML = 'Bienvenido Felipe a tu Wallet Digital'
            document.querySelector('#goToHomeButton').style.display='block'

        } else {
            document.querySelector('#warningLogin').innerHTML = 'Usuario y/o constraseña incorrecta'

        }
    }


}
checkLogin, addEventListener('submit', checkCode)
