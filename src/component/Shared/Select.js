import React from 'react';

const Select = ({ error, options, handleChange, type, display,disAble}) => {

    return (
        <div className='form-box'>
            <label htmlFor={type}>{display}</label>
            <div>
            <select disabled={disAble} className='form-input' required name={type} id={type} onChange={handleChange}>
                <option>{display}</option>
                {
                    options?.map((v,i)=>(
                        <option key={i} value={v}>{v}</option>
                    ))
                }
            </select>
            {error ? <div>{error}</div> : null}
            </div> 
        </div>
    );
};

export default Select;