import React, { useState } from 'react';
import ShipDisplayList from './ShipDisplayList';
const axios = require('axios').default;

const FetchAPI = () => {
    const starShips = [];
    const [shipInfo, setShipInfo] = useState(starShips);
    const [selectVal, setSelectVal] = useState(2);

    const getInfo = async (num) => {
        try {
            const data = await axios.get(`https://swapi.dev/api/starships/${num}/`);
            const { data: shipData } = data;
            // console.log(shipData.name)
            setShipInfo(prevState => {
                return [...prevState, shipData];
            });
        } catch (e) {
            console.log('ERROR!', e);
        }
    }

    const handleSelect = (e) => {
        setSelectVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getInfo(selectVal);
    }

    console.log(selectVal);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='selecShipID'>Select Ship ID: </label>
                <select id='selecShipID' onChange={handleSelect}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                </select>
                <br />
                <button type='submit'>Get Starship!</button>
            </form>
            {/* {starShips.map(ship => {
                <ShipDisplay />
            })} */}
            <ShipDisplayList shipArr={shipInfo} />
        </div >
    )
}

export default FetchAPI;