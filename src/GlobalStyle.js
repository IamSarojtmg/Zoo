import { createGlobalStyle } from "styled-components";
// I think using ` in JS will allow you to write CSS.
import background from './Images/background.jpg'
// Only used one dot(.) because GlobalStyle is in SRC folder. Header falls under SRC>Components.

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body{
    background: url(${background}) black;
    font-family: 'Poppins';
    font-size: 1em;
    font-weight:1000;

}
a{
    color:white;
}
`;

export default GlobalStyle;
