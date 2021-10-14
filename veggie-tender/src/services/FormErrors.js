

// // const FormValidation = () => {

//     // const usernameVal = document.querySelector('#username');
//     // const emailVal = document.querySelector('#email');
//     // const farmNameVal = document.querySelector('#farmName');
//     // const farmDetailsVal = document.querySelector('#farmDetails');
//     // const farmAddressVal = document.querySelector('#farmAddress');
//     // const farmCityVal = document.querySelector('#farmCity');
//     // const farmStateVal = document.querySelector('#farmState');
//     // const farmZipVal = document.querySelector('#farmZip');
//     // const farmWebsiteVal = document.querySelector('#farmWebsite');
//     // const farmEmailVal = document.querySelector('#farmEmail');


//     const userRegForm = document.querySelector('#userReg');
//     const farmRegForm = document.querySelector('#farmReg');

//     const isRequired = value => value === '' ? false : true;
//     const isAtLeast = (length, min) => length < min ? false : true;

//     export function checkField (inputVal, min, errorField){
//         let valid = false;

//         if (!isRequired(inputVal)) {
//             showError(inputVal, errorField);
//         } else if (!isAtLeast(inputVal.length, min)) {
//             showError(inputVal, errorField)
//         } else {
//             showSuccess(inputVal);
//             valid = true;
//         }
//         return valid;
//     };

//     export function checkEmail(inputVal, errorField) {
//         let valid = false;

//         if (!isRequired(inputVal)) {
//             showError(inputVal, errorField);
//         } else if (!isEmailValid(inputVal)) {
//             showError(inputVal, errorField)
//         } else {
//             showSuccess(inputVal);
//             valid = true;
//         }
//         return valid;
//     };

//     export function checkAddress(inputVal, errorField) {
//         let valid = false;

//         if (!isRequired(inputVal)) {
//             showError(inputVal, errorField);
//         } else if (!isAddressValid(inputVal)) {
//             showError(inputVal, errorField)
//         } else {
//             showSuccess(inputVal);
//             valid = true;
//         }
//         return valid;
//     };

//     export function checkState(inputVal, errorField) {
//         let valid = false;
//         if (!isRequired(inputVal)) {
//             showError(inputVal, errorField);
//         } else if (!isStateValid(inputVal)) {
//             showError(inputVal, errorField)
//         } else {
//             showSuccess(inputVal);
//             valid = true;
//         }
//         return valid;
//     };

//     export function checkZip(inputVal, errorField) {
//         let valid = false;
//         if (!isRequired(inputVal)) {
//             showError(inputVal, errorField);
//         } else if (!isZipValid(inputVal)) {
//             showError(inputVal, errorField)
//         } else {
//             showSuccess(inputVal);
//             valid = true;
//         }
//         return valid;
//     };

//     export function checkWebsite(inputVal, errorField) {
//         let valid = false;
//         if (!isRequired(inputVal)) {
//             showError(inputVal, errorField);
//         } else if (!isWebsiteValid(inputVal)) {
//             showError(inputVal, errorField)
//         } else {
//             showSuccess(inputVal);
//             valid = true;
//         }
//         return valid;
//         };

//         let isEmailValid = (email) => {
//             const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return re.test(email);
//         }
//         let isAddressValid = (address) => {
//             const re = /^[a-zA-Z0-9\s,.'-]{3,}$/;
//             return re.test(address);
//         }
//         let isStateValid = (state) => {
//             const re = /[^,]*[A-Z]{2}/;
//             return re.test(state);
//         }
//         let isZipValid = (farmZip) => {
//             const re = /[^,]*[A-Z]{2}/;
//             return re.test(farmZip);
//         }
//         let isWebsiteValid = (url) => {
//             const re = (/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
//             return re.test(url);
//         }


//         const showError = (input, message) => {
//             // get the form-field element
//             const formField = input.parentElement;
//             // add the error class
//             formField.classList.remove('success');
//             formField.classList.add('error');

//             // show the error message
//             const error = formField.querySelector('small');
//             error.textContent = message;
//         };

//         const showSuccess = (input) => {
//             // get the form-field element
//             const formField = input.parentElement;

//             // remove the error class
//             formField.classList.remove('error');
//             formField.classList.add('success');

//             // hide the error message
//             const error = formField.querySelector('small');
//             error.textContent = '';
//         };


//         userRegForm.addEventListener('submit', function (e) {
//             // prevent the form from submitting
//             e.preventDefault();

//             // validate fields
//             let isUsernameValid = checkField(),
//                 isEmailValid = checkEmail(),
//                 isPasswordValid = checkField(),
//                 isFirstNameValid = checkField(),
//                 isLastNameValid = checkField();

//             let isFormValid = isUsernameValid &&
//                 isEmailValid &&
//                 isPasswordValid &&
//                 isFirstNameValid &&
//                 isLastNameValid;

//             // submit to the server if the form is valid
//             if (isFormValid) {

//             }
//         });

//         farmRegForm.addEventListener('submit', function (e) {
//             // prevent the form from submitting
//             e.preventDefault();

//             // validate fields
//             let isFarmNameValid = checkField(),
//                 isFarmDetailsValid = checkField(),
//                 isFarmAddressValid = checkAddress(),
//                 isFarmCityValid = checkField(),
//                 isFarmStateValid = checkState();
//                 isFarmZipValid = checkZip();
//                 isFarmWebsiteValid = checkFarmWebsite();
//                 isFarmEmailValid = checkEmail();

//             let isFormValid = isFarmNameValid &&
//                 isFarmDetailsValid &&
//                 isFarmAddressValid &&
//                 isFarmCityValid &&
//                 isFarmStateValid &&
//                 isFarmZipValid &&
//                 isFarmWebsiteValid &&
//                 isFarmEmailValid;

//             // submit to the server if the form is valid
//             if (isFormValid) {

//             }
//         });

//     // }


// // export default FormValidation;