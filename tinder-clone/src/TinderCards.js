import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'; /** must install reac-tinder-card */
import './TinderCards.css'
import axios from './axios'

function TinderCards() {
    /* the below state stores the array of peoples shown at mainbody */
    const [people, setpeople] = useState([]);

    useEffect(() => { //request data from the url below
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setpeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people);

/** What functions should perform when we swipe */
const swiped   = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
}

/* what happens when the name is out of frame */
const  outOfFrame = (name) => {
    console.log(name + "left the screen");

}
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => ( //people array is accessed using the map the function
                    <TinderCard //inbuilt feature of npm
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div /** this div shows the picture with the person name */
                        style={{backgroundImage: `url(${person.imgUrl})`}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>

           
        </div>
    )
}

export default TinderCards
