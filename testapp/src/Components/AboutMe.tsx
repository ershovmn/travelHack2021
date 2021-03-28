//@ts-nocheck

import React, { useEffect, useState } from 'react'

const AboutMe = () => {
    const token = localStorage.getItem('token')

    let [data, setData] = useState({values: {}})

    useEffect(() => {
        fetch('https://cd53fe9a8c5c.ngrok.io/api/fields?token=' + token)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])

    if(!token || !data || !data.values) {
        return (
            <div>
                Пожалуйста авторизуйтесь
            </div>
        )
    }

    console.log(data)

    return (
        <>
            <h1>Мои данные</h1>
            <div>
                {Object.keys(data.values).map(key => {
                    return <div className='row'>
                        <span className='name'>{data.values[key].name || key}</span>
                        <span className='value'>{data.values[key].value || data.values[key]}</span>
                    </div>
                })}
            </div>
        </>
    )
}

export default AboutMe