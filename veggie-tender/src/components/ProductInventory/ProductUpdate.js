import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const ProductUpdateStyles = styled.div`
font-family: 'MontserratMedium';

.title{
    text-transform: uppercase;
    font-size: 1.75rem;
}

.login-form-content {
    min-height: 100vh;
}


.login-shell {
    background-color: var(--cream);
    padding: 1rem;
    margin: 2rem auto;
    width: 28rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
.login__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    margin-top: 2rem;
    text-align: left;
}
.login__control label {
    font-family: 'MontserratRegular';
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    display: block;
} 
.login__control input {
    font-family: 'MontserratRegular';
    padding: .5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    text-align: left;
    margin-left: 0.3rem;
}
.login__actions {
    text-align: center;
}

.login-shell button {
    font-family: 'MontserratRegular';
    font-size: 16px;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid var(--terra);
    background-color: var(--terra);
    color: white;
    border-radius: 12px;
    /* margin-right: 1rem; */
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.login-shell button:hover,
.login-shell button:active {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
}
.login-shell button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
}

.login-shell button.alternative:hover,
.login-shell button.alternative:active {
    background-color: #ddb3f8;
}

`;

const ProductUpdate = () => {


    const location = useLocation();
    const fProduct = location.state?.fProduct;




    let history = useHistory();

    //set state for entered credentials
    const [productId, setProductId] = useState('');
    const [enteredProductName, setProductName] = useState('');
    const [enteredProductCategory, setProductCategory] = useState('');
    const [enteredProductDescription, setProductDescription] = useState('');
    const [enteredProductQty, setProductQty] = useState();
    const [enteredProductUnitPrice, setProductUnitPrice] = useState();


    useEffect(() => {
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };

        axios.get('http://localhost:5000/api/users/profile',
            { 'headers': myHeaders })
            .then(function (response) {

                if (!response.status === 200) {
                    console.log(response.status);
                    console.log("No token or must be logged in");
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log(response.status);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this profile is not a farmer");
                        history.push('/users/profile');
                    }

                    //load state variables with product detail passed via location state
                    if (fProduct) {
                        setProductId(fProduct.productId);
                        setProductName(fProduct.productName);
                        setProductCategory(fProduct.productCategory);
                        setProductDescription(fProduct.productDescription);
                        setProductQty(fProduct.productQty);
                        setProductUnitPrice(fProduct.productUnitPrice);
                    } else {
                        console.log("No product info to update");
                        history.push('/users/profile');
                    }

                }
                else {
                    console.log(`Product Update error status: ${response.status} `);
                    history.push('/users/login');
                }

            })
            .catch(function (error) {
                console.log("catch error: " + error);
                history.push('/users/login');
            });
    }, []);

    //handlers for each input field on the form
    const productNameChangeHandler = (event) => { setProductName(event.target.value); };
    const productCategoryChangeHandler = (event) => { setProductCategory(event.target.value); };
    const productDescriptionChangeHandler = (event) => { setProductDescription(event.target.value); };
    const productQtyChangeHandler = (event) => { setProductQty(event.target.value); };
    const productPriceChangeHandler = (event) => { setProductUnitPrice(event.target.value); };
    // const productImageChangeHandler = (event) => { setProductImage(event.target.value); };

    const submitHandler = (event) => {
        event.preventDefault();

        const product = {
            'productId': productId,
            'productCategory': enteredProductCategory,
            'productName': enteredProductName,
            'productDescription': enteredProductDescription,
            'productQty': enteredProductQty,
            'productUnitPrice': enteredProductUnitPrice
        };


        // set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };
        //post to login in API to auth user and get token
        axios.put('http://localhost:5000/api/users/updateProduct', product, { 'headers': myHeaders })
            .then(function (response) {
                //console.log(response);
                if (response.status === 200) {
                    console.log("Product Update Status: " + response.status);
                } else {
                    console.log(`Product update error response received: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log(`Product update catch error: ${error} `);
            });

        setProductId('');
        setProductName('');
        setProductCategory('');
        setProductDescription('');
        setProductQty('');
        setProductUnitPrice('');
        //setProductImage('');

        history.goBack();

    }

    return (
        <ProductUpdateStyles>
            <div className='login-form-content'>
                <form onSubmit={submitHandler}>
                    <div className='login-shell'>
                        <div >
                            <h1 className='title'>Update Farm Product</h1>
                            <div className='login__controls'>
                                <div className='login__control'>
                                    <label>Product Name</label>
                                    <input type='text' value={enteredProductName} onChange={productNameChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Product Category</label>
                                    <input type='text' value={enteredProductCategory} onChange={productCategoryChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Product Description</label>
                                    <input type='text' value={enteredProductDescription} onChange={productDescriptionChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Product Qty</label>
                                    <input type='text' value={enteredProductQty} onChange={productQtyChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Product Unit Price</label>
                                    <input type='text' value={enteredProductUnitPrice} onChange={productPriceChangeHandler} />
                                </div>
                                {/* <div className='login__control'>
                                <label>Product Image</label>
                                <input type='text' value={enteredProductImage} onChange={productImageChangeHandler} />
                            </div> */}
                            </div>
                        </div>
                        <div className="login__actions">
                            <button type='submit'>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </ProductUpdateStyles>
    )
}

export default ProductUpdate;