import React from 'react';
import './ShipDisplay.css'

const ShipDisplay = (props) => {
    return (
        <div className='ship_display-container'>
            <div className='ship_display-heading'>
                <div>
                    <h2>{props.shipName}</h2>
                </div>
                <div>
                    <p><em>Class: {props.shipClass}</em></p>
                </div>
            </div>
            <div>
                <p>Cost: {props.shipCost} Credits</p>
            </div>
        </div>
    )
}

export default ShipDisplay;