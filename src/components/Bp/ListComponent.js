import React from 'react'
const pStyle = { margin: '5px', fontSize: 'xx-small', textAlign: 'left' }

export const ListComponent = ({ d, setBpReading, data }) => {
    const deleteOne = () => {
        setBpReading(data.filter((el) => (el.id !== d.id)))

    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <div>
                    <p style={pStyle}>Date: {d.date}</p>
                    <p style={pStyle}>Diastolic: {d.diastolic}</p>
                    <p style={pStyle}>Systolic: {d.systolic}</p>
                    <p style={pStyle}>Heart Rate: {d.heartRate}</p>
                </div>
                <div>
                    <button onClick={deleteOne} style={{ color: 'black' }}>Delete</button>
                </div>
            </div>
        </>
    )
}
