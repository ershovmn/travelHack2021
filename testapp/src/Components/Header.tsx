import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='left'>
                <a href='/'>
                    <img src='/static/images/СпортивнаяГребля.png' alt='logo'/>
                </a>
            </div>
            <div className='right'>
                <a href='/aboutme'>
                    <span>About me</span>
                </a>
                <a href='/login'>
                    <span>Login</span>
                </a>
            </div>
        </header>
    )
}

export default Header