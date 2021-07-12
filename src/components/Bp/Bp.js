import { React, useState } from 'react'
import { Form } from './Form'
import { Chart } from './Chart'

import './style.css';

const data = [
    { id: "1", Systolic: "99", Diastolic: "130", HeartRate: "89bpm" },
    { id: "2", Systolic: "87", Diastolic: "100", HeartRate: "73bpm" },
    { id: "3", Systolic: "82", Diastolic: "80", HeartRate: "100bpm" },
]

export const Bp = () => {
    const [bpReading, setBpReading] = useState([])
    console.log(bpReading)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <Form setBpReading={setBpReading} data={data} />
            <Chart bpData={data} />
        </div>
    )
}

