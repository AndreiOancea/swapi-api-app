import React from 'react';
import ShipDisplay from './ShipDisplay';

const ShipDisplayList = (props) => {

    // let randId = Math.random();

    // if (props.ship.length === 0) {
    //     return (<h1>Select an ID from the list and click <strong>"Get Starship!"</strong></h1 >)
    // }

    return (
        <div>
            <p>Ships:</p>
            {props.shipArr.map((ship, index) => {
                console.log(ship.name);
                return (
                    <ShipDisplay
                        key={index}
                        shipName={ship.name}
                        shipCost={ship.cost_in_credits}
                        shipClass={ship.starship_class}
                    />
                )
            })}
        </div>
    )
}

export default ShipDisplayList;