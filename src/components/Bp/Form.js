import { React, useState } from 'react'
import { CustomInput } from './CustomInput'
import { List } from './List'


export const Form = ({ bpReading, setBpReading, data }) => {
    const [recordedDaily, setRecordedDaily] = useState({ date: '', systolic: '', diastolic: '', heartRate: '' })


    const handleSubmit = (e) => {
        e.preventDefault();
        const { systolic, diastolic, heartRate } = recordedDaily
        if (systolic > 300 || diastolic > 300 || heartRate > 150) { alert("Please choose a number within range...") }
        else {
            recordedDaily.id = Math.random() * 1000
            setBpReading([...bpReading, recordedDaily])
            setRecordedDaily({ date: '', systolic: '', diastolic: '', heartRate: '' })
        }
    };


    return (
        <div style={{ width: '30vw' }}>

            <form onSubmit={handleSubmit} style={{ backgroundColor: ' #D3D3D3', color: 'black', display: 'flex', flexDirection: 'column' }} action="">
                <h2>Enter todays blood pressure and heart rate data</h2>
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, date: e.target.value })} value={recordedDaily.date} type="date" />
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, systolic: e.target.value })} value={recordedDaily.systolic} placeholder="Systolic" type="number" maxLength="300" />
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, diastolic: e.target.value })} value={recordedDaily.diastolic} placeholder="Diastolic" type="number" max={300} />
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, heartRate: e.target.value })} value={recordedDaily.heartRate} placeholder="Heart Rate" type="number" max={300} />
                <button>Record</button>
            </form>
            <List data={bpReading} setBpReading={setBpReading} />
        </div>
    )
}
