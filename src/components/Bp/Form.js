import { React, useState } from 'react'
import { List } from './List'

export const Form = ({ bpReading, setBpReading, data }) => {
    const [recordedDaily, setRecordedDaily] = useState({ date: '', systolic: '', diastolic: '', heartRate: '' })

    const { systolic, diastolic, heartRate, date } = recordedDaily
    const selectedDate = new Date(date);
    let today = new Date();

    const dateInPast = function (selectedD, TodayD) {
        const yesterday = new Date(TodayD)
        let t = yesterday.setDate(yesterday.getDate() - 2)
        if (selectedD <= t) {

            // alert("date is in past")
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dateInPast(selectedDate, today)) {
            return
        }
        if (systolic >= 301 || diastolic >= 301 || heartRate >= 151) { alert("Please choose a number within range...") }
        if (systolic === "" || diastolic === "" || heartRate === "") { alert("Please enter a valid number  ...") }
        if (!date) { alert("enter valid date") }
        else {
            recordedDaily.id = Math.random() * 1000
            setBpReading([...bpReading, recordedDaily])
            setRecordedDaily({ date: '', systolic: '', diastolic: '', heartRate: '' })
        }
    };

    return (
        <div style={{ width: '30vw', fontSize: '300' }}>

            <form onSubmit={handleSubmit} style={{ backgroundColor: ' #D3D3D3', color: 'black', display: 'flex', flexDirection: 'column' }} action="">
                <h3>Enter todays blood pressure and heart rate data</h3>
                {dateInPast(selectedDate, today) ? <p style={{ color: 'red' }}>Date cannot be in the past.</p> : ""}
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, date: e.target.value })} value={recordedDaily.date} type="date" />
                <label>Diastolic</label>
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, systolic: e.target.value })} value={recordedDaily.systolic} placeholder="Systolic: range 0-300" type="number" min={0} max={300} />
                <label>Systolic</label>
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, diastolic: e.target.value })} value={recordedDaily.diastolic} placeholder="Diastolic: range 0-300" type="number" min={0} max={300} />
                <label>Heart Rate</label>
                <input onChange={(e) => setRecordedDaily({ ...recordedDaily, heartRate: e.target.value })} value={recordedDaily.heartRate} placeholder="Heart Rate : range 0-150" type="number" min={0} max={150} />
                <button className="btn-primary">Record</button>
            </form>
            <List data={bpReading} setBpReading={setBpReading} />
        </div>
    )
}
