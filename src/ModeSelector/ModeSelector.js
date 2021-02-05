import React from 'react'
import classes from './ModeSelector.module.css'

export default function ModeSelector(props) {

    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    return (
        <div className={classes.Mode}>
            <button
                onClick={props.onSelected.bind(null, smallUrl)}
                className="btn btn-primary"
            >Укороченный список
            </button>
            
            <button
                onClick={props.onSelected.bind(null, bigUrl)}
                className="btn btn-success"
            >Полный список
            </button>
        </div>
    )
}