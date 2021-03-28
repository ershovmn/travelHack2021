let url = window.location.href.split('?')
url = url[url.length - 1]
let params = url.split('&')

let param = {}

for(let i = 0; i < params.length; i++) {
    let str = params[i].split('=')
    param[str[0]] = str[1]
}

if(param.token) {
    localStorage.setItem('token', param.token)
}