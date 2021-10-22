import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
}
:root{
    --black: black;

    --turq: #91E9D5;
    --md-turq: #53E9CD;
    --dk-turq: #4ACFB6;

    --terra: #EAC891;
    --dk-terra: #E8B469;

    --cream: #FFF7E2;
    --lt-tan: #DACAAA;
    --greybrwn: #928064;

    --emerald: #82E0AA;
    --dk-emerald: #239B56;
    --light-gray: #F2F3F4;
  
    --mustard: #F8CF68;
    --dk-mustard:#FFC42F;
    --coral: #F37956;
    --dk-coral: #E6704E;
    --gray-green: #B0DAD2;
    --md-gg: #A2CFC6;
    --blue-green: #279088;
    --dk-green: #18695A;
    --lt-navy: #325CA5;
    --navy: #183C7B;

    /* error colors */

    --error-color: #dc3545;
    --success-color: #28a745;
    --warning-color: #ffc107;
}
html{
    font-family: 'MontserratRegular';
    font-color: var(--black);
}

.App {
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

.App-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
}

`;
export default GlobalStyles;