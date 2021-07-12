import React from 'react'
import { ListComponent } from './ListComponent'

export const List = ({ data }) => {
    return (
        <div>
            <h1>List</h1>
            {data.map((d) => (<ListComponent d={d} key={d.id} />))}
        </div>
    )
}
