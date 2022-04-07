import React from 'react';
import Gorilla from '../Images/Gorilla.jpg';
import monkeytwo from '../Images/monkeytwo.jpg';
import "../index.css";

const primates = {Gorilla,monkeytwo};
// So here the function component Monkey is being exported down at the bottom.
function Monkey() {
    return(
<body>

<h1>
    PRIMATES
</h1>

<div className="images">
    <img src={Gorilla}></img>
    <img src={monkeytwo}></img>
</div>

<div className="description">
    {/* why is the bullet points and numbers not showing? */}
    <ul>
    <li>IN THE WILD, GORILLAS CAN LIVE TO OVER 40 YEARS OLD.</li>
    <li>THEY’RE UNDER THREAT.</li>
    <li>WE SHARE AROUND 98% OF OUR DNA WITH GORILLAS</li>
    </ul>

    <ol>
        <li>THERE ARE 3 SPECIES OF ORANGUTAN.</li>
        <li>ORANGUTANS ARE THE HEAVIEST TREE-DWTHEY'VE GOT LONG ARMS.</li>
        <li>Eats food</li>
    </ol>
</div>




</body>





        
        



    )
}
// Here the function component monkey is being styled. Which will allow us to write CSS in JS.


export default Monkey;