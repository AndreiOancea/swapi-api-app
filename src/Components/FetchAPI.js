import React, { useState } from 'react';
import ShipDisplayList from './ShipDisplayList';
const axios = require('axios').default;

const FetchAPI = () => {
    const starShips = [];
    const [shipInfo, setShipInfo] = useState(starShips);
    const [selectVal, setSelectVal] = useState('2');

    const imageArr = [
        { id: '2', imgURL: 'https://i.pinimg.com/originals/43/54/d3/4354d36812bdd8049b6e4a0f1a34e3cc.jpg' },
        { id: '3', imgURL: 'https://compote.slate.com/images/5da25d32-3d3f-4f4d-9874-8ee6ca5a4a75.jpg' },
        { id: '5', imgURL: 'https://i.pinimg.com/736x/3f/b9/4a/3fb94adac2472b5ee47ea84ef6cc4e89.jpg' },
        { id: '9', imgURL: 'https://media.printables.com/media/prints/57266/images/571904_4853c69f-fcbc-4308-92b3-4b77fd510a13/thumbs/cover/1200x630/png/large_display_deathstar_57266.png' },
        { id: '10', imgURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96b9b618-9bd4-45ca-9c3e-500df34978ec/d6ff0vq-231e0d50-55dd-4a94-864b-fef41e244289.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2YjliNjE4LTliZDQtNDVjYS05YzNlLTUwMGRmMzQ5NzhlY1wvZDZmZjB2cS0yMzFlMGQ1MC01NWRkLTRhOTQtODY0Yi1mZWY0MWUyNDQyODkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.igOy9hVz83ppF9bJh78RPAiyyBZ0aI2pzYXrq9JeTqU' },
        { id: '11', imgURL: '' }
    ]

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
            <ShipDisplayList shipArr={shipInfo} />
        </div >
    )
}

export default FetchAPI;