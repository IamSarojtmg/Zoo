import React from 'react';
import styled from 'styled-components';
import Gorilla from '../Images/Gorilla.jpg';


const primates = Gorilla;
// So here the function component Monkey is being exported down at the bottom.
function Monkey() {
    return(
<PrimateStyled>
<h1>
    Testing
</h1>
</PrimateStyled>
    )
}
// Here the function component monkey is being styled. Which will allow us to write CSS in JS.
const PrimateStyled = styled.Primate`

h1{
    margin:1em;
}
`;

export default Monkey;