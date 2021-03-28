let flags = [false, false, false, false]

const changeFormValid = () => {
    let formValid = true
    flags.forEach(flag => {
        formValid = formValid && flag
    })

    if(formValid) {
        document.getElementById('log-in').disabled = false
    } else {
        document.getElementById('log-in').disabled = true
    }
}

if(document.getElementById('user_password')) {
    document.getElementById('user_password').addEventListener('keyup', () => {
        let reg1 = /[a-zA-zа-яА-я]/
        let reg2 = /[0-9]/
        let input = document.getElementById('user_password') 
        let pass = input.value
    
        let list = document.getElementById('pass-vaid').querySelectorAll('li')
    
        if(pass.length >= 6) {
            list[0].classList.remove('incorrect')
            list[0].classList.add('correct')
        } else {
            list[0].classList.add('incorrect')
            list[0].classList.remove('correct')
        }
    
        if(reg1.test(pass)) {
            list[1].classList.remove('incorrect')
            list[1].classList.add('correct')
        } else {
            list[1].classList.add('incorrect')
            list[1].classList.remove('correct')
        }
    
        if(reg2.test(pass)) {
            list[2].classList.remove('incorrect')
            list[2].classList.add('correct')
        } else {
            list[2].classList.add('incorrect')
            list[2].classList.remove('correct')
        }
    
        if(pass.length >= 6 && reg1.test(pass) && reg2.test(pass)) {
            input.classList.remove('invalid')
            flags[3] = true
        } else {
            input.classList.add('invalid')
            flags[3] = false
        }
        changeFormValid()
    })
}

if(document.getElementById('user_phone')) {
    document.getElementById('user_phone').addEventListener('keyup', () => {
        let input = document.getElementById('user_phone')
        let value = input.value 
        if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)) {
            input.classList.remove('invalid')
            flags[0] = true 
        } else {
            input.classList.add('invalid')
            flags[0] = false
        }
        changeFormValid()
    })
}

if(document.getElementById('user_last_name')) {
    document.getElementById('user_last_name').addEventListener('keyup', () => {
        let input = document.getElementById('user_last_name')
        let value = input.value 
        if(value) {
            input.classList.remove('invalid')
            flags[1] = true 
        } else {
            input.classList.add('invalid')
            flags[1] = false
        }
        changeFormValid()
    })
}

if(document.getElementById('user_first_name')) {
    document.getElementById('user_first_name').addEventListener('keyup', () => {
        let input = document.getElementById('user_first_name')
        let value = input.value 
        if(value) {
            input.classList.remove('invalid')
            flags[2] = true 
        } else {
            input.classList.add('invalid')
            flags[2] = false
        }
        changeFormValid()
    })
}