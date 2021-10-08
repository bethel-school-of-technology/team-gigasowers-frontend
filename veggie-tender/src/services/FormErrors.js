import React from 'react';

export default FormValidation = () => {

    const usernameVal = document.querySelector('#username');
    const passwordVal = document.querySelector('#password');
    const firstNameVal = document.querySelector('#firstName');
    const lastNameVal = document.querySelector('#lastName');
    const emailVal = document.querySelector('#email');
    const farmNameVal = document.querySelector('#farmName');
    const farmDetailsVal = document.querySelector('#farmDetails');
    const farmAddressVal = document.querySelector('#farmAddress');
    const farmCityVal = document.querySelector('#farmCity');
    const farmStateVal = document.querySelector('#farmState');
    const farmZipVal = document.querySelector('#farmZip');
    const farmWebsiteVal = document.querySelector('#farmWebsite');
    const farmEmailVal = document.querySelector('#farmEmail');


    const userRegForm = document.querySelector('#userReg');
    const farmRegForm = document.querySelector('#farmReg');

    const isRequired = value => value === '' ? false : true;
    const isAtLeast= (length, min) => length < min ? false : true;

    const checkUserName = () => {
        let valid = false;
        const min = 3;
        const userName = usernameVal.value.trim();

        if (!isRequired(userName)) {
            showError(usernameVal, 'Username cannot be blank.');
        } else if (!isAtLeast(userName.length, min)) {
            showError(usernameVal, `Username must be at least ${min} characters.`)
        } else {
            showSuccess(usernameVal);
            valid = true;
        }
        return valid;
    };

    const checkPassword = () => {
        let valid = false;
        const min = 8;
        const password = passwordVal.value.trim();

        if (!isRequired(password)) {
            showError(passwordVal, 'Password cannot be blank.');
        } else if (!isAtLeast(password.length, min)) {
            showError(passwordVal, `Password must be at least ${min} characters.`)
        } else {
            showSuccess(passwordVal);
            valid = true;
        }
        return valid;
    };

    const checkFirstName = () => {
        let valid = false;
        const min = 3;
        const firstName = firstNameVal.value.trim();

        if (!isRequired(firstName)) {
            showError(firstNameVal, 'First Name cannot be blank.');
        } else if (!isAtLeast(firstName.length, min)) {
            showError(firstNameVal, `First Name must be at least ${min} characters.`)
        } else {
            showSuccess(firstNameVal);
            valid = true;
        }
        return valid;
    };

    const checkLastName = () => {
        let valid = false;
        const min = 3;
        const lastName = lastNameVal.value.trim();

        if (!isRequired(lastName)) {
            showError(lastNameVal, 'Last Name cannot be blank.');
        } else if (!isAtLeast(lastName.length, min)) {
            showError(lastNameVal, `Last Name must be at least ${min} characters.`)
        } else {
            showSuccess(lastNameVal);
            valid = true;
        }
        return valid;
    };

    const checkEmail = () => {
        let valid = false;
        const email = emailVal.value.trim();
        if (!isRequired(email)) {
            showError(emailVal, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(emailVal, 'Email is not valid.')
        } else {
            showSuccess(emailVal);
            valid = true;
        }
        return valid;
    };

    const checkFarmName = () => {
        let valid = false;
        const min = 3;
        const farmName = farmNameVal.value.trim();

        if (!isRequired(farmName)) {
            showError(farmNameVal, 'Farm name cannot be blank.');
        } else if (!isAtLeast(farmName.length, min)) {
            showError(farmNameVal, `Farm name must be at least ${min} characters.`)
        } else {
            showSuccess(farmNameVal);
            valid = true;
        }
        return valid;
    };

    const checkFarmDetails = () => {
        let valid = false;
        const min = 15;
        const farmDetails = farmDetailsVal.value.trim();

        if (!isRequired(farmDetails)) {
            showError(farmDetailsVal, 'Farm description cannot be blank.');
        } else if (!isAtLeast(farmDetails.length, min)) {
            showError(farmDetailsVal, `Farm description must be at least ${min} characters.`)
        } else {
            showSuccess(farmDetailsVal);
            valid = true;
        }
        return valid;
    };

    const checkFarmAddress = () => {
        let valid = false;
        const address = farmAddressVal.value.trim();
        if (!isRequired(farmAddressVal)) {
            showError(farmAddressVal, 'Address cannot be blank.');
        } else if (!isAddressValid(address)) {
            showError(farmAddressVal, 'Address is not valid.')
        } else {
            showSuccess(farmAddressVal);
            valid = true;
        }
        return valid;
    };
    
    const checkFarmCity = () => {
        let valid = false;
        const min = 3;
        const farmCity = farmCityVal.value.trim();

        if (!isRequired(farmCity)) {
            showError(farmCityVal, 'City cannot be blank.');
        } else if (!isAtLeast(farmCity.length, min)) {
            showError(farmCityVal, `City must be at least ${min} characters.`)
        } else {
            showSuccess(farmCityVal);
            valid = true;
        }
        return valid;
    };

    const checkFarmState = () => {
        let valid = false;
        const state = farmStateVal.value.trim();
        if (!isRequired(farmStateVal)) {
            showError(farmStateVal, 'State cannot be blank.');
        } else if (!isStateValid(state)) {
            showError(farmStateVal, 'State is not valid.')
        } else {
            showSuccess(farmStateVal);
            valid = true;
        }
        return valid;
    };

    const checkFarmZip = () => {
        let valid = false;
        const zip = farmZipVal.value.trim();
        if (!isRequired(farmZipVal)) {
            showError(farmZipVal, 'Zipcode cannot be blank.');
        } else if (!isZipValid(zip)) {
            showError(farmZipVal, 'Zipcode is not valid.')
        } else {
            showSuccess(farmZipVal);
            valid = true;
        }
        return valid;
    };

    const checkFarmWebsite = () => {
        let valid = false;
        const website = farmWebsiteVal.value.trim();
        if (!isRequired(farmWebsiteVal)) {
            showError(farmWebsiteVal, 'Website cannot be blank.');
        } else if (!isWebsiteValid(website)) {
            showError(farmWebsiteVal, 'Website is not valid.')
        } else {
            showSuccess(farmWebsiteVal);
            valid = true;
        }
        return valid;

        const checkFarmEmail = () => {
            let valid = false;
            const email = farmEmailVal.value.trim();
            if (!isRequired(email)) {
                showError(farmEmailVal, 'Email cannot be blank.');
            } else if (!isEmailValid(email)) {
                showError(farmEmailVal, 'Email is not valid.')
            } else {
                showSuccess(farmEmailVal);
                valid = true;
            }
            return valid;
        };
    
    isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    isAddressValid = (address) => {
        const re = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        return re.test(address);
    }
    isStateValid = (state) => {
        const re = /[^,]*[A-Z]{2}/;
        return re.test(state);
    }
    isZipValid = (zip) => {
        const re = /[^,]*[A-Z]{2}/;
        return re.test(zip);
    }
    isWebsiteValid = (url) => {
        const re = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/;
        return re.test(url);
    }


    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');

        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');

        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }


    userRegForm.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate fields
        let isUsernameValid = checkUserName(),
            isEmailValid = checkEmail(),
            isPasswordValid = checkPassword(),
            isFirstNameValid = checkFirstName(),
            isLastNameValid = checkLastName();

        let isFormValid = isUsernameValid &&
            isEmailValid &&
            isPasswordValid &&
            isFirstNameValid &&
            isLastNameValid;

        // submit to the server if the form is valid
        if (isFormValid) {

        }
    });

    farmRegForm.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate fields
        let isFarmNameValid = checkFarmName(),
            isFarmDetailsValid = checkFarmDetails(),
            isFarmAddressValid = checkFarmAddress(),
            isFarmCityValid = checkFarmCity(),
            isFarmStateValid = checkFarmState();
            isFarmZipValid = checkFarmZip();
            isFarmWebsiteValid = checkFarmWebsite();
            isFarmEmailValid = checkFarmEmail();

        let isFormValid = isFarmNameValid &&
        isFarmDetailsValid &&
        isFarmAddressValid &&
        isFarmCityValid &&
        isFarmStateValid &&
        isFarmZipValid &&
        isFarmWebsiteValid &&
        isFarmEmailValid;

        // submit to the server if the form is valid
        if (isFormValid) {

        }
    });

};


// // which one is array and which is flag
// let errorMessages = {};
// let hasErrors = false;

// // Input: let result = (10 > 0) ? true : false;
// // Output: true
// // let result = (10 > 0) ? true : false;

// const FormErrors = (dataObject) => {

//     console.log(dataObject);
//     if (dataObject.userName){
//         hasErrors = (dataObject.userName != (dataObject.length > 5) ? true : false
//         if (hasErrors)
//     }

    

// }

// function formValidation () {
//     if (profileData.Username){
//         if (profileData.userName.length < 5){
//             errors.userName.addError("Please create a longer username")
//         }
//         return errors;    
//     } 

// }