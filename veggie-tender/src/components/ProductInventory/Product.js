import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ProductStyles = styled.div`
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
        height: 200px;
        max-width: 600px;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 85%;
}
.info_float {
    width: 100%;
    height: 100%;
    display: block;
}
.farmProducts {
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--md-gg);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.eachProduct{
    display: inline-block;
}
.btn {
    float:right;
    margin-top: 1rem;
    margin-right: -.5rem;
    padding: .5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none;
}
.btn:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    color: white;
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .eachProduct{
        display: block;
        max-height: 150px;
        flex-direction: column;
        width: 85%
    }
    .btn {
        float:right;
        margin-top:-1rem;
        padding: .5rem;
        background-color: var(--terra);
        border: 3px solid var(--terra);
        border-radius: 12px;
        text-decoration: none;
    }
}
`;


const Product = (props) => {

    

    let productAvailable = false;
    if (props.farmProduct) {
        productAvailable = true;
    }


    return (
        <ProductStyles>
            {productAvailable ?
                <div className="container">
                    <div className="info_float">
                        <div className="farmProducts">
                            <div classname="eachProduct" key={props.farmProduct.productId}>
                                <Link type="button" className="btn" to={{
                                    pathname: '/users/productUpdate',
                                    state: { 'fProduct': props.farmProduct }
                                }}>Edit Product Info</Link>
                                <h3>{props.farmProduct.productCategory} -- {props.farmProduct.productName}</h3>
                                <h4>{props.farmProduct.productDescription}</h4>
                                <h4>Quantity Available: {props.farmProduct.productQty}</h4>
                                <h4>Unit Price: ${props.farmProduct.productUnitPrice}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </ProductStyles >
    )
}

export default Product;