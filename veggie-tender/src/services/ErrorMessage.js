import React from 'react'
import './ErrorMessage.css';

const ErrorMessage = (props) => {

    switch (props.errorCode) {
        case '403':
            return <div className="errMsg">User account deleted or forbidden; please talk to your administrator</div>
        case '404':
            return <div className="errMsg">Invalid User Name or Password</div>
        case '423':
            return <div className="errMsg">User Name Required</div>
        case '424':
            return <div className="errMsg">Password Required</div>
        default:
            return <div className="errMsg">Error, please try again.</div>
    }

}

export default ErrorMessage;