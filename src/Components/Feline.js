import React from 'react';
import '../index.css';
import lion from '../Images/lion.jpg';
import tiger from '../Images/tiger.jpg';

const cats = {lion, tiger};

export default function cat () {
return (
<body>
<h1>
    CATS
</h1>

<div className="images">
    <img src={lion}></img>
    <img src={tiger}></img>
</div>

<div className="description">
<ul>
    <li>Nearly all wild lions live in Africa, but one small population lives elsewhere</li>
    <li>They can weight up to 200KG</li>
    <li>Lions can eat up tp 40KG each meal</li>
</ul>
<ol>
<li>Tigers were around about 2 million years ago.</li>
<li>Tigers have soft toe pads which help them walk silently through their habitat.</li>
<li>From 121 tigers eleven years ago, the number has swelled to 235 during the census conducted
     three years ago in Nepal.</li>
</ol>

</div>
</body>
)

}

