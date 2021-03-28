const mess = () => {
    console.log('hello')
    chrome.runtime.sendMessage(chrome.runtime.id, {from: 'popup', action: 'help'})
}

document.getElementById('enter-me').addEventListener('click', mess)