let list = document.getElementsByClassName('section-hide')
for(let i = 0; i < isFinite.length; i++) {
    let item = list[i]
    item.addEventListener('click', () => {
        if(item.parentElement.parentElement.className === 'collapsed') {
            item.parentElement.parentElement.classList.remove('collapsed')
        } else {
            item.parentElement.parentElement.classList.add('collapsed')
        }
    })
}

document.getElementById('menu-button').addEventListener('click', () => {
    console.log('enbwayua')
    let menu = document.querySelector('.menu')
    console.log(menu.className)
    if(menu.className.indexOf('on') !== -1) {
        menu.classList.remove('on')
    } else {
        menu.classList.add('on')
    }
})