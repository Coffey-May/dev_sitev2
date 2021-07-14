import React from 'react'
import { ListComponent } from './ListComponent'

export const List = ({ data, setBpReading }) => {
    const clearAll = () => {
        setBpReading([])
    }

    return (
        <div>
            <h2>List</h2>
            {data.map((d) => (<ListComponent d={d} key={d.id} setBpReading={setBpReading} data={data} />))}
            <button style={{ color: 'black' }} onClick={clearAll}>Clear All</button>
        </div>
    )
}
