import React from 'react'

const LOGIN_URL = ''

const Signup = () => {
    return (
        <>
            <main className='login-signup'>
                <h1>
                    Sign up with:
                </h1>
                <div className='login-methods'>
                    <button className='method'>
                        <img src='/static/images/logoMain.svg' alt='logo'/>
                    </button>
                    <button className='method'>
                        <img src='/static/images/logoMain.svg' alt='logo'/>
                    </button>
                    <button className='method'>
                        <img src='/static/images/logoMain.svg' alt='logo'/>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Signup 