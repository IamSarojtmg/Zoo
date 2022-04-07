import React from "react";
import '../index.css';
import coyote from '../Images/coyote.jpg';
import wolf from '../Images/wolf.jpg';

const animals = {coyote, wolf}

export default function dog () {
    return(
<body>
    <h1>
        CANINE
    </h1>

    <div className="images">
    <img src={coyote}alt ="" height="250" width="350"></img>
    <img src={wolf} width="350" height="250"></img>
</div>
<div className="description">
        <ul>
            <li>Eastern Coyotes Are Part Wolf.</li>
            <li>They have a speed of 35 to 43 mph when pursuing prey or fleeing danger.</li>
            <li>They Make 11 Different Noises</li>
        </ul>
        <ul>
            <li>Wolves typically hunt within territories, ranging from 50 to 1,000 square miles.</li>
            <li>Wolf pups are born blind and deaf, and must be cared for until they mature at around ten months of age.</li>
            <li>Gray wolves will eat 20 to 30 pounds of meat in one meal</li>
        </ul>

    </div>
</body>

    )}

