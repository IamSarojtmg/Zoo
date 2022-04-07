import React from 'react';
// Entered RFCE as a shortcut to create a functional component also with the export code written.
// import styled from 'styled-components';
// This import was written in shotcut too. Typed 'styled' to write it.
import lion from '../Images/lion.jpg';
import Gorilla from '../Images/Gorilla.jpg';
import tiger from '../Images/tiger.jpg';
import wolf from '../Images/wolf.jpg'
import "../index.css"


const animals = {lion,Gorilla,tiger,wolf}

function Header1() {
  return (  
 <body>
  <h1 className="Topic">
    <u>
  Discover the world’s top Predators
    </u>
  </h1>
  <p className="main-para">
  A zoo is a facility in which animals are housed within enclosures, cared for, 
  displayed to the public, and in some cases bred for conservation purposes. 
  The term zoological garden refers to zoology, the study of animals
  </p>

<section>
  <div className="images">
    
 <div> <img classname="lion1" src={lion} alt="" height="200" width="200"></img> </div>
 <div> <img classname="gorilla" src={Gorilla} alt="" height="200" width="200"></img> </div>
 <div> <img classname="tiger" src={tiger} alt="" height="200" width="200"></img> </div>
 <div> <img classname="wolf" src={wolf} alt="" height="200" width="200"></img> </div>
    </div>
</section>

  </body>
  )
}

export default Header1;
































// the button is for some reason not being created. background colour, border radius- not working.
// Animal class is not responding to any changes made. e.g height, width. It does respond to margin.