import React from 'react'
const pStyle = { margin: '5px', fontSize: 'xx-small', textAlign: 'left' }

export const ListComponent = ({ d, setBpReading, data }) => {
    const deleteOne = () => {
        setBpReading(data.filter((el) => (el.id !== d.id)))

    }
    // const editHandler = (e) => {
    //     data.map((item) => {
    //         if (item.id === d.id) {
    //             setEditMessage(true)
    //             setInputText(item.text)
    //             setCurrentId(item.id)
    //             console.log('single:', item.id)
    //             console.log(item.id, d.id)
    //         }
    //         return item
    //     })
    // }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <div>
                    <p style={pStyle}>Date: {d.date}</p>
                    <p style={pStyle}>Diastolic: {d.diastolic}</p>
                    <p style={pStyle}>Systolic: {d.systolic}</p>
                    <p style={pStyle}>Heart Rate: {d.heartRate}</p>
                </div>
            </div>
            <div>
                <button onClick={deleteOne} style={{ color: 'black' }}>Delete</button>
                {/* <button onClick={editHandler} style={{ color: 'black' }}>Edit</button> */}
            </div>
        </>
    )
}
