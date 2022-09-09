import React, { useState } from 'react';
import ShipDisplayList from './ShipDisplayList';
import ShipForm from './ShipForm';
import { imageArr } from '../Helpers/startshipImages'
const axios = require('axios').default;

const StarshipApp = () => {
    const starShips = [];
    const [shipInfo, setShipInfo] = useState(starShips);

    const getInfo = async (num) => {
        try {
            const data = await axios.get(`https://swapi.dev/api/starships/${num}/`);
            const { data: shipData } = data;
            let imageURL = imageArr.find(image => image.id === num).imgURL;
            // Image fallback, if there is no ship image or image links are broken.
            if (imageURL.length === 0) {
                imageURL = 'https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png';
            }
            //credit to: https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
            let fullShipData = { ...shipData, imageURL };
            console.log(fullShipData)
            setShipInfo(prevState => {
                return [...prevState, fullShipData];
            });
        } catch (e) {
            console.log('ERROR!', e);
        }
    }

    return (
        <div>
            <ShipForm getInfo={getInfo} />
            <ShipDisplayList shipArr={shipInfo} />
        </div >
    )
}

export default StarshipApp;