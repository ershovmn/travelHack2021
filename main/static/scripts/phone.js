document.getElementById('phone').addEventListener('keyup', () => {
    let phone = document.getElementById('phone').value.replace(/\D/g,'');
    document.getElementById('phone').value = '+' + 
        phone.substring(0,1).padEnd(1, '_') + '-' + 
        phone.substring(1,4).padEnd(3, '_') + '-' + 
        phone.substring(4,7).padEnd(3, '_') + '-' + 
        phone.substring(7,9).padEnd(2, '_') + '-' + 
        phone.substring(9,11).padEnd(2, '_')
})