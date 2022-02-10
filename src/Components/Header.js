import React from 'react';
// Entered RFCE as a shortcut to create a functional component also with the export code written.
import styled from 'styled-components';
// This import was written in shotcut too. Typed 'styled' to write it.
import lion from '../Images/lion.jpg';
import Gorilla from '../Images/Gorilla.jpg';
import tiger from '../Images/tiger.jpg';
import wolf from '../Images/wolf.jpg'

const animals = {lion,Gorilla,tiger,wolf}

function Header1() {
  return (  
  <HeaderStyled>
<nav className="navigation">
    <div className="nav-wrapper">
        <div className="logo">
            <a href="#">Z<span>OO</span></a>
        </div>
        <ul>
            <li> <a href="#">Primate</a> </li>
            <li> <a href="#">Feline</a> </li>
            <li> <a href="#">Canine</a> </li>
        </ul>
        <a href="#" className="Add-Species">Add new</a>
    </div>
</nav>

<div className="header-content">
  <h1 className="Topic">
  Discover the world’s top Predators
  </h1>
  <p className="main-para">
  A zoo is a facility in which animals are housed within enclosures, cared for, 
  displayed to the public, and in some cases bred for conservation purposes. 
  The term zoological garden refers to zoology, the study of animals

  </p>
</div>

<section>
  <div className="animals">
    
 <div> <img classname="lion1" src={lion} alt="" height="200" width="200"></img> </div>
 <div> <img classname="gorilla" src={Gorilla} alt="" height="200" width="200"></img> </div>
 <div> <img classname="tiger" src={tiger} alt="" height="200" width="200"></img> </div>
 <div> <img classname="wolf" src={wolf} alt="" height="200" width="200"></img> </div>

    </div>

</section>

  </HeaderStyled>
  )
}

const HeaderStyled = styled.header`

.nav-wrapper {
  margin: 0 20rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  min-height: 10vh;
}

.logo {
  margin-left: -13em;
  margin-right: 15em;
  font-size:1.5em;


}

span {
  color: purple;
  
}

.Add-Species{
  background-color: black;
  padding: 1rem 1.2rem 1rem 1.2rem;
  margin-left: 20rem;
  margin-top: 2em; 
  min-height: 10vh;
  border-radius: 10%;
}  

ul{
  display:flex;
  align-items:center;
}


li {
margin:0 3rem;
background: rgb(68, 113, 180);
border-radius: 10%;
padding: 0.6em 1em;
}

.Topic {
margin: 1em 10em 0em 5em;
}

.main-para{
margin: 1em 10em 0em 10em;
}

.animals {
  margin: 5em 15em 1em 15em ;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

  
      

`;
export default Header1;
































// the button is for some reason not being created. background colour, border radius- not working.
// Animal class is not responding to any changes made. e.g height, width. It does respond to margin.