import QRCode from 'qrcode'
import { useEffect, useRef } from 'react'

const NewGuest = () => {
    let canvasRef = useRef(null)

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, 
            `https://cd53fe9a8c5c.ngrok.io/oauth_sessions/init/1/new?required_fields=1,2,3&optional_fields=4&signature=test&payload=${JSON.stringify({id: '123454'})}`,
            { version: 10 })
    }, [])
    
    return (
        <main>
            <div className='main-left'>
                <div>
                    Powered by 
                    <img src='/logo.svg' />
                </div>
            </div>
            <div className='main-right'>
                <div>
                    <h1>Добро пожаловать в отель "Академическая Гребля"</h1>
                    <p>Для улучшения качества обслуживания клиентов, мы предлагаем вам быстрее зарегистрироваться в нашем отеле.</p>
                    <h2>Что для этого нужно?</h2>
                    <ul>
                        <li>
                            <span>Учетная запись <i>RUSSPASSID</i></span>
                        </li>
                        <li>
                            <span>Телефон с камерой</span>
                        </li>
                        <li>
                            <span>Отсканировать <i>QR</i>-код на экране</span>
                        </li>
                        <li>
                            <span>Подтвердить авторизация</span>
                        </li>
                    </ul>
                    <h2>Какие данные нам нужны</h2>
                    <ul>
                        <li>
                            <span>Номер мобильного телефона</span>
                        </li>
                        <li>
                            <span>Твоё ФИО</span>
                        </li>
                        <li>
                            <span>Данные паспорта</span>
                        </li>
                    </ul>
                </div>
                <canvas ref={canvasRef}/>
            </div>
        </main>
    )
}

export default NewGuest