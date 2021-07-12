import { React, useState } from 'react'
import { CustomInput } from './CustomInput'
import { List } from './List'

// const data = [
//     { id: "1", Systolic: "99", Diastolic: "130", HeartRate: "89bpm" },
//     { id: "2", Systolic: "87", Diastolic: "100", HeartRate: "73bpm" },
//     { id: "3", Systolic: "82", Diastolic: "80", HeartRate: "100bpm" },
// ]

export const Form = ({ setBpReading, data }) => {
    const [recordedDaily, setRecordedDaily] = useState({ date: '', systolic: '', diastolic: '', heartRate: '' })


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(recordedDaily)
    };

    return (
        <div style={{ width: '30vw' }}>

            <form onSubmit={handleSubmit} style={{ backgroundColor: ' #D3D3D3', color: 'black', display: 'flex', flexDirection: 'column' }} action="">
                <h2>Enter todays blood pressure and heart rate data</h2>
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, date: e.target.value })} value={recordedDaily.date} type="date" />
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, systolic: e.target.value })} value={recordedDaily.systolic} placeholder="Systolic" type="text" />
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, diastolic: e.target.value })} value={recordedDaily.diastolic} placeholder="Diastolic" type="text" />
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, heartRate: e.target.value })} value={recordedDaily.heartRate} placeholder="Heart Rate" type="text" />
                {console.log(recordedDaily)}
                <button>Record</button>
            </form>
            <List data={data} />
        </div>
    )
}
