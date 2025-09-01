import React, { useState, type FC } from 'react'
import clasess from './AddPost.module.scss'
import { apiConfig } from '../../api/api'
import type { Props } from '../../types/types'

export const AddList: FC<Props> = ({ setPosts }) => {
    const [inputValue, setInputValue] = useState('')

    const { addData } = apiConfig

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const addItemList = () => {
        addData({
            title: inputValue,
            body: inputValue,
            userId: Math.floor(Math.random() * 100)
        })
            .then((res) => {
                setPosts((prev) => ([
                    ...prev,
                    res.data
                ]))
                setInputValue('')
                console.log('Данные отправлены: ', res.data) 
            })
            .catch((error) => {
                console.log('Ошибка: ', error.messege)
            })
    }

    return (
        <div className={clasess.containerForm}>
            <form onSubmit={(event) => event.preventDefault()}>
                <input type="text" value={inputValue} onChange={(e) => changeInput(e)} />
                <button onClick={() => addItemList()}>Добавить</button>
            </form>
        </div>
    )
}