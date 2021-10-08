import React from 'react';

const Input = ({onChange, onClick, title}) => {
    return(
        <div className="input">
            <input type="text" onChange={onChange}/>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}

export default Input