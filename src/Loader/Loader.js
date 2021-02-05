import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className='wrapper'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}