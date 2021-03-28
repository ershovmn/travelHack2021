console.log(document.body)

const addButton = (data) => {
    let element = document.querySelector(data.placement)
    if(element) {
        let b = document.createElement('button')
        b.textContent = 'Нажми на меня'
        b.addEventListener('click', () => {
            enterData(data)
        })
        element.append(b)
    }
}

const enterData = (data) => {
    console.log('test')
    loadData(data.token, Object.keys(data.fields))
        .then(res => {
            return res.json()
        }) 
        .then(fields => {
            console.log(fields)
            Object.keys(data.fields).forEach(key => {
                let el = document.querySelector(data.fields[key])
                console.log(fields, el)
                if(el) {
                    el.value = fields.values[key].value || fields.values[key]
                }
            })
        })
}

const loadData = (token) => {
    return fetch('https://cd53fe9a8c5c.ngrok.io/api/fields?token=' + token)

    let fields = {
        firstName: 'tehnarenok',
        lastName: 'tehna',
        email: 'tehnarenok@gmail.com',
        confirmEmail: 'tehnarenok@gmail.com',
        pass: 'tehnarenokthebest',
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fields)
        }, 10)
    })
}
