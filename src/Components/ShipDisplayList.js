import React from 'react';
import ShipDisplay from './ShipDisplay';
import './ShipDisplayList.css'

const ShipDisplayList = (props) => {
    return (
        <div>
            <h1>Your Fleet</h1>
            <div className='ship_list-container'>
                {props.shipArr.map((ship, index) => {
                    console.log(ship.name);
                    return (
                        <ShipDisplay
                            key={index}
                            shipName={ship.name}
                            shipCost={ship.cost_in_credits}
                            shipClass={ship.starship_class}
                            imageURL={ship.imageURL}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ShipDisplayList;