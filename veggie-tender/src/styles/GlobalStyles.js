import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
}
:root{
    --black: black;
    --emerald: #82E0AA;
    --dk-emerald: #239B56;
    --light-gray: #F2F3F4;
}
html{
    font-family: 'NunitoRegular';
    font-color: var(--black);
}

@media only screen and (max-width: 880px){
    .Navbar .leftSide .links a{
      font-size: 20px;
    }

  }
  
  @media only screen and (max-width: 750px){
    .Navbar .leftSide .links a{
      font-size: 15px;
    }
  }
  
  @media only screen and (max-width: 650px){
    .Navbar .leftSide .button{
      display: flex;
    }
  
    .Navbar .leftSide .links{
      display: none;
    }
  
    .Navbar .leftSide .links{
  position: absolute;
  left: 0px;
  top: 80px;
  height: auto;
  max-height: 230px;
  font-size: 25px;
  width: 130%;
  background-color: aliceblue;
  display: flex;
  flex-direction: colomn;
  align-items: center;
  
    }
  }
`;
export default GlobalStyles;