import { React, useState, useEffect } from 'react'
import { Form } from './Form'
import { Chart } from './Chart'


import './style.css';

export const Bp = () => {





    const [bpReading, setBpReading] = useState([])
    useEffect(() => {
        getLocalBpReading()
    }, [])
    useEffect(() => {
        setLocalBpReading()
    }, [bpReading])


    const setLocalBpReading = () => {
        localStorage.setItem("bpReading", JSON.stringify(bpReading))
    }
    const getLocalBpReading = () => {
        if (localStorage.getItem("bpReading") === null) {
            localStorage.setItem("bpReading", JSON.stringify([]))
        } else {
            const localBpReading = JSON.parse(localStorage.getItem("bpReading"))
            setBpReading(localBpReading)
        }
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <Form setBpReading={setBpReading} bpReading={bpReading} />
            <Chart bpData={bpReading} />
        </div>
    )
}

