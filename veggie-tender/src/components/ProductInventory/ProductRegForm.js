
import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';



const ProductRegStyles = styled.div`
padding-top: 5rem;
font-size: 1.1rem;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.product-form-content {
    margin-left: 25rem;
        justify-content: center;
        background-color: var(--cream);
        padding: 2rem;
        margin: 2rem auto;
        margin-top: -3rem;
        // border: solid 2px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 26rem;
}


.form-title {
    font-family: 'MontserratRegular';
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;

}

.form-field {
    margin-bottom: 5px;

}

.form-field label {
    font-family: 'MontserratRegular';
    display: block;
    color: black;
    text-align: left;
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 5px;
}

.form-field input {
    font-family: 'MontserratRegular';
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    display: block;
    width: 100%;
}

.form-field input:focus {
    outline: none;
}

.form-field.error input {
    border-color: var(--error-color);
}

.form-field.success input {
    border-color: var(--success-color);
}


.form-field small {
    font-family: 'MontserratThin'
    color: var(--error-color);
}


/* button */
.btn-field {
    padding-top: 1rem;
}
.btn {
    width: 100%;
    padding: 3%;
    background: var(--terra);
    border-bottom: 2px solid var(--terra);
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'MontserratRegular';
    font-size: 16px;
}

.btn:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    cursor: pointer;
}

.btn:focus {
    outline: none;
}
`;

const ProductRegForm = () => {


    let history = useHistory();  //Used to track page route history

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
                if (!response.status === 200) {
                    console.log(response.status);
                    console.log("No token or must be logged in");
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log(response.status);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this user is not a farmer");
                        history.push('/users/profile');
                    }

                    setProductArr(prevArr => {
                        const newArr = [...prevArr, ...response.data.userFarms.farmInventory];
                        return newArr;
                    });

    
                    if (response.data.userFarms.farmInventory.length){
                        //console.log("incrementing productId:");
                        let incId = parseInt(response.data.userFarms.farmInventory.length)
                        setCalcProductId(++incId);
                    }else{
                        //console.log("Else setting productId to length to 1");
                        setCalcProductId(1); 
                        
                    }
                    
                }
                else {
                    console.log(`Unable to get farm event info; error status: ${response.status} `);
                    history.push('/users/login');
                }
            })
            .catch(function (error) {
                console.log("catch error: " + error);
                history.push('/users/login');
            });

    }, []);


    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit


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
            //console.log(enteredArr);
            return enteredArr;
        });
        setIsSubmitComplete(true);
    };


    useEffect(() => {
        if (isSubmitComplete) {
            //console.log(productArr);
            //set JWT token into header for server side authentication
            let myHeaders = {
                'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
            };
            //post to login in API to auth user and get token
            axios.put('http://localhost:5000/api/users/update', {'farmInventory': productArr }, { 'headers': myHeaders })
                .then(function (response) {
                    //console.log(response);
                    if (response.status === 200) {
                        console.log(response.status);
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
           

            history.goBack();
  

        }
    }, [isSubmitComplete, productArr]);



    return (
        <ProductRegStyles>
            <div className='product-form-content'>
                <form className='form' onSubmit={submitHandler}>
                        <h2 className='form-title'>Add A Farm Product</h2>
                                <div className='form-field'>
                                    <label className="form-label">Product Name</label>
                                    <input type='text' value={enteredProductName} onChange={productNameChangeHandler}/>
                                </div>
                                <div className='form-field'>
                                    <label className="form-label">Product Category</label>
                                    <input type='text' value={enteredProductCategory} onChange={productCategoryChangeHandler}/>
                                </div>
                                <div className='form-field'>
                                    <label className="form-label">Product Description</label>
                                    <input type='text' value={enteredProductDescription} onChange={productDescriptionChangeHandler}/>
                                </div>
                                <div className='form-field'>
                                    <label className="form-label">Product Qty</label>
                                    <input type='text' value={enteredProductQty} onChange={productQtyChangeHandler} />
                                </div>
                                <div className='form-field'>
                                    <label className="form-label">Product Unit Price</label>
                                    <input type='text' value={enteredProductUnitPrice} onChange={productPriceChangeHandler} />
                                </div>
                                {/* <div className='login__control'>
                                    <label>Product Image</label>
                                    <input type='text' value={enteredProductImage} onChange={productImageChangeHandler} />
                                </div> */}
                        <div className="btn-field">
                            <button className='btn' type='submit'>Submit</button>
                        </div>
                </form>
            </div>
        </ProductRegStyles>
    )
};

export default ProductRegForm;