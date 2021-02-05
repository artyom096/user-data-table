
import React, { useState } from 'react'

export default function Search(props) {

    const [value, setValue] = useState('')

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button onClick={() => props.onSearch(value)} className="btn btn-outline-secondary">Поиск</button>
            </div>
            <input 
            onChange={event => setValue(event.target.value)}
            type="text" 
            className="form-control" 
            value={value}
            aria-describedby="basic-addon1" 
            />
        </div>
    )
}