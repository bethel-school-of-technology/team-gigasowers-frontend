import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FarmInfoStyles = styled.div`
font-family: 'MontserratRegular';
* {
    box-sizing: border-box;
}

body {
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    align-items: center;
    min-height: 100vh;

}

.container {
        justify-content: center;
        height: 450px;
        max-width: 800px;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 85%;
}
// .image_float {
//     float: left;
//     width: 35%;
//     display: flex;
//     flex-wrap: wrap;
// }

// .farmImage {
//     margin: 2rem auto;
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     // display: flex;
//     // flex-wrap: wrap;
//     border: 5px dashed var(--terra);
//     background-color: grey; 
// }
.info_float {
    width: 100%;
    height: 90%;
    display: block;
}
.farmEvents {
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--md-gg);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.eachEvent{
    display: inline-block;
}
.buttonSection{
    width: 100%; 
}
.btn {
    float:right;
    margin-top: -2rem;
    padding: .5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none;
}

.btn-1{
    float: left;
    padding: .5rem;
    margin-top: 0.5rem;
    background-color: var(--dk-mustard);
    border: 3px solid var(--dk-mustard);
    border-radius: 12px;
    text-decoration: none; 
}
.btn-2{
    float: right;
    padding: .5rem;
    margin-top: 0.5rem;
    background-color: var(--coral);
    border: 3px solid var(--coral);
    border-radius: 12px;
    text-decoration: none; 
}

@media only screen and (max-width: 768px) {
    .container {
        display: block;
        flex-direction: column;
        height: 475px;
    }
    .image_float {
        width: 100%;
        margin-left: -1rem; 
        flex-direction: column;
    }
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 375px;
        flex-direction: column;
        padding-left: .5rem;
    }
    .buttonSection{
        float: right;
        margin-top: 1rem;
        margin-right: 0rem; 
    }
}
`;


const Product = (props) => {


    return (
        <FarmInfoStyles>
            {/* <div className="container">
                {/* <div className="image_float">
                    <h3 className="">{props.farmEvent.productImage}</h3>
                </div> */}
                {/* <div className="info_float">
                    <div className="farmEvents">  */}
                        <div classname="eachEvents" key={props.farmProduct.productId}>
                                <h3>{props.farmProduct.productName}</h3>
                                <h4>{props.farmProduct.productDescription}</h4>
                                <h4>{props.farmProduct.productCategory}</h4>
                                <h4>{props.farmProduct.productQty}</h4>
                                <h4>{props.farmProduct.productUnitPrice}</h4>
                            <Link type="button" className="btn" fProduct={props.farmProduct}>Edit Product Info</Link>
                        </div>
                    {/* </div>
                </div>
            </div> */}
        </FarmInfoStyles >
    )
}

export default Product;