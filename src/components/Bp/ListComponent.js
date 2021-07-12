import React from 'react'

export const ListComponent = ({ d }) => {
    return (
        <div>
            <h4>Diastolic: {d.Diastolic}</h4>
            <h4>Systolic: {d.Systolic}</h4>
            <h4>Heart Rate: {d.HeartRate}</h4>
        </div>
    )
}
