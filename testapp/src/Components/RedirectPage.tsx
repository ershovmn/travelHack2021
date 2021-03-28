import React from 'react'

const RedirectPage = () => {
    const urlParams = new URLSearchParams(window.location.href)
    const token = urlParams.get('token')
    localStorage.setItem('token', token || '')
    window.close()
    return (<></>)
}

export default RedirectPage