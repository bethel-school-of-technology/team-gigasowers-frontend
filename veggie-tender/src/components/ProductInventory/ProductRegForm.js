
import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';
//import CheckAuth from '../../services/CheckAuth';


const LoginFormStyles = styled.div`
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

const ProductRegForm = () => {

    // let validToken = CheckAuth();
    // if (!validToken) {
    //     console.log("validToken returned null or undefined");
    //    // history.push('/users/login');
    // } else {
    //     console.log(validToken);
    // }

    //let history = useHistory();  //Used to track page route history



    const [isSubmitComplete, setIsSubmitComplete] = useState(false);
    let tempArr = [];   
    const [productArr, setProductArr] = useState([]);  //state for farmInventory array
    const [calcProductId, setCalcProductId] = useState('');  //load this separately by incrementing on array length
    //set state for entered credentials
    const [enteredProductName, setProductName] = useState('');
    const [enteredProductCategory, setProductCategory] = useState('');
    const [enteredProductDescription, setProductDescription] = useState('');
    const [enteredProductQty, setProductQty] = useState();
    const [enteredProductUnitPrice, setProductUnitPrice] = useState();
    //const [enteredProductImage, setProductImage] = useState('');


    //handlers for each input field on the form
    const productNameChangeHandler = (event) => {
        setProductName(event.target.value);
    };
    const productCategoryChangeHandler = (event) => {
        setProductCategory(event.target.value);
    };
    const productDescriptionChangeHandler = (event) => {
        setProductDescription(event.target.value);
    };
    const productQtyChangeHandler = (event) => {
        setProductQty(event.target.value);
    };
    const productPriceChangeHandler = (event) => {
        setProductUnitPrice(event.target.value);
    };
    // const productImageChangeHandler = (event) => {
    //     setProductImage(event.target.value);
    // };

    useEffect(() => {

        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };
        //get events for user profile
        axios.get('http://localhost:5000/api/users/profile',
            { 'headers': myHeaders })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 401) {
                    console.log("No token or must be logged in");
                }
                if (response.status === 200) {
                    //console.log(response);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this profile is not a farmer");
                    }

                    setProductArr(prevArr => {
                        const newArr = [...prevArr, ...response.data.userFarms.farmInventory];
                        return newArr;
                    });

                    setCalcProductId(parseInt(response.data.userFarms.farmInventory.length)+1); //sets productId for form entry
                }
                else {
                    console.log(`Unable to get farm event info; error status: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log("catch error: " + error);
            });

    }, []);


    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        console.log("calcId: " + calcProductId);
        console.log(productArr);
        console.log(productArr.length);

        tempArr = [{
            'productId': calcProductId.toString(),
            'productName': enteredProductName,
            'productCategory': enteredProductCategory,
            'productDescription': enteredProductDescription,
            'productQty': enteredProductQty,
            'productUnitPrice': enteredProductUnitPrice,
            'productImage': ""
        }];
        setProductArr(prevArr => {
            const enteredArr = [...prevArr, ...tempArr];
            console.log(enteredArr);
            return enteredArr;
        });
        setIsSubmitComplete(true);
    };


    useEffect(() => {
        if (isSubmitComplete) {
            console.log(productArr);
            //set JWT token into header for server side authentication
            let myHeaders = {
                'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
            };
            //post to login in API to auth user and get token
            axios.put('http://localhost:5000/api/users/update', {'farmInventory': productArr }, { 'headers': myHeaders })
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                    } else {
                        console.log(`Product update error response received: ${response.status} `);
                    }
                })
                .catch(function (error) {
                    console.log(`Product update catch error: ${error} `);
                });

            setCalcProductId('');
            setProductName('');
            setProductCategory('');
            setProductDescription('');
            setProductQty('');
            setProductUnitPrice('');
            //setProductImage('');
  

        }
    }, [isSubmitComplete, productArr]);



    return (
        <LoginFormStyles>
            <div className='login-form-content'>
                <form onSubmit={submitHandler}>
                    <div className='login-shell'>
                        <div >
                            <h1 className='title'>Add A Farm Product</h1>
                            <div className='login__controls'>
                                <div className='login__control'>
                                    <label>Product Name</label>
                                    <input type='text' value={enteredProductName} onChange={productNameChangeHandler}/>
                                </div>
                                <div className='login__control'>
                                    <label>Product Category</label>
                                    <input type='text' value={enteredProductCategory} onChange={productCategoryChangeHandler}/>
                                </div>
                                <div className='login__control'>
                                    <label>Product Description</label>
                                    <input type='text' value={enteredProductDescription} onChange={productDescriptionChangeHandler}/>
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
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </LoginFormStyles>
    )
};

export default ProductRegForm;