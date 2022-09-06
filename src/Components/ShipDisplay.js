import React from 'react';

const ShipDisplay = (props) => {
    return (
        <div>
            <div>
                <h3>Name: {props.shipName}</h3>
            </div>
            <div>
                <p><em>Class: {props.shipClass}</em></p>
            </div>
            <div>
                <p>Cost: {props.shipCost} Credits</p>
            </div>
        </div>
    )
}

export default ShipDisplay;