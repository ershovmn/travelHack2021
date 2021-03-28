const API_URL = 'ws://' + window.location.hostname + ':' + window.location.port

console.log(API_URL)

const socket = io();

socket.emit('getQRcode')

socket.on('image', src => {
    console.log(src)
    document.getElementById('img-qr-code').setAttribute('src', src)
})

socket.on('data', data => {
    document.getElementById('img-qr-code').setAttribute('src', '')
    let b = document.createElement('button')
    b.addEventListener('click', () => window.location.reload())
    b.textContent = 'Следующий посетитель'
    let el = document.querySelector('.main-right')
    el.innerHTML = ''
    el.append(document.createTextNode('Данные пользователя'))
    let table = document.createElement('table')
    
    let keys = Object.keys(data.values)
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i]
        let row = document.createElement('tr')
        row.className = 'row'
        row.innerHTML = 
        `
            <td>${data.values[key].name}</td>
            <td>${data.values[key].value}</td>
        `
        table.append(row)
    }
    document.querySelector('.main-right').append(table)
    document.querySelector('.main-right').append(b)
    console.log(data)
})

//     console.log(data)
//     if(data.type === 'image') {
//         document.getElementById('img-qr-code').setAttribute('src', data.img)
//     }
//     if(data.type === 'client_data') {
//         document.getElementById('main-right').textContent = JSON.stringify(data.userData)
//         console.log(data.userData)
//     }
// }