import { createGlobalStyle } from 'styled-components';
import NunitoRegular from '../assets/fonts/NunitoRegular.ttf';
import NunitoBold from '../assets/fonts/NunitoBold.ttf';
import MontserratRegular from '../assets/fonts/MontserratRegular.ttf';
import MontserratThin from '../assets/fonts/MontserratThin.ttf';
import MontserratMedium from '../assets/fonts/MontserratMedium.ttf';
import MontserratBold from '../assets/fonts/MontserratBold.ttf';
import OldGrowth from '../assets/fonts/OldGrowth.otf';


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
@font-face {
    font-family: 'MontserratMedium';
    src: url(${MontserratMedium});
    font-style: normal;
}
@font-face {
    font-family: 'MontserratBold';
    src: url(${MontserratBold});
    font-style: normal;
}
@font-face {
    font-family: 'OldGrowth';
    src: url(${OldGrowth});
    font-style: normal;
}
`;
export default Typography;