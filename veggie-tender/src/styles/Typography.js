import { createGlobalStyle } from 'styled-components';
import NunitoRegular from '../assets/fonts/NunitoRegular.ttf';
import NunitoBold from '../assets/fonts/NunitoBold.ttf';
import MontserratRegular from '../assets/fonts/MontserratRegular.ttf';
import MontserratThin from '../assets/fonts/MontserratThin.ttf';


const Typography = createGlobalStyle`
@font-face {
    font-family: 'NunitoRegular';
    src: url(${NunitoRegular});
    font-style: normal;
}
@font-face {
    font-family: 'NunitoBold';
    src: url(${NunitoBold});
    font-style: normal;
}
@font-face {
    font-family: 'MontserratRegular';
    src: url(${MontserratRegular});
    font-style: normal;
}
@font-face {
    font-family: 'MontserratThin';
    src: url(${MontserratThin});
    font-style: normal;
}
`;
export default Typography;