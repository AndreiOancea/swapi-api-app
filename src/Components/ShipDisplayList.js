import React from 'react';
import ShipDisplay from './ShipDisplay';
import './ShipDisplayList.css'

const ShipDisplayList = (props) => {
    return (
        <div>
            <p>Ships:</p>
            {props.shipArr.map((ship, index) => {
                console.log(ship.name);
                return (
                    <div className='ship-list-container'>
                        <ShipDisplay
                            key={index}
                            shipName={ship.name}
                            shipCost={ship.cost_in_credits}
                            shipClass={ship.starship_class}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ShipDisplayList;