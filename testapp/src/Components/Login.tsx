import React from 'react'

const LOGIN_URL = ''

const Login = () => {
    const auth = () => {
        console.log('akjdbewhefd')
        let win = window.open('https://cd53fe9a8c5c.ngrok.io/oauth_sessions/init/1/new?required_fields=1,2,3&optional_fields=4&signature=test', 'test', `,modal=yes,alwaysRaised=yes,width=550,height=800`)
        
        let checkConnect = setInterval(() => {
            if(!win) return
            if(!win.closed) return 
            clearInterval(checkConnect)
            window.location.reload()
        }, 100)
    }
    
    return (
        <>
            <main className='login-signup'>
                <h1>
                    Login with:
                </h1>
                <div className='login-methods'>
                    <button className='method' onClick={auth}>
                        <img src='/static/images/logoMain.svg' alt='logo'/>
                    </button>
                    <button className='method' onClick={auth}>
                        <img src='/static/images/logoMain.svg' alt='logo'/>
                    </button>
                    <button className='method' onClick={auth}>
                        <img src='/static/images/logoMain.svg' alt='logo'/>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Login 