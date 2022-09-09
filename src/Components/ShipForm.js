import React, { useState } from 'react';

const ShipForm = (props) => {

    const { getInfo } = props;

    // const starShips = [];
    // const [shipInfo, setShipInfo] = useState(starShips);
    const [selectVal, setSelectVal] = useState('2');

    const handleSelect = (e) => {
        setSelectVal(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getInfo(selectVal);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='selecShipID'>Select Ship ID: </label>
                <select id='selecShipID' onChange={handleSelect}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
                <br />
                <button type='submit'>Get Starship!</button>
            </form>
        </div >
    )
}

export default ShipForm;