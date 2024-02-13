import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){
    return(
        <div className="card mx-2">
            <div className="card-body">
                <h1>{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.num}</h1>
            </div>
        </div>
    )
}