import React from 'react'
import { ListComponent } from './ListComponent'

export const List = ({ data, setBpReading }) => {
    const clearAll = () => {
        setBpReading([])
    }

    return (
        <>
            {!data.length ? "" :
                <div>
                    <h2>History</h2>
                    <button style={{ color: 'black' }} onClick={clearAll}>Clear All</button>
                    {data.map((d) => (<ListComponent d={d} key={d.id} setBpReading={setBpReading} data={data} />))}

                </div>
            }
        </>
    )
}
