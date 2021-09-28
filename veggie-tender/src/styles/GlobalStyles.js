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
    background-color: var(--black);
}
`;
export default GlobalStyles;