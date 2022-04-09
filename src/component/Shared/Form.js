import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { division,validate,submit } from '../hooks/useFormValidation';
import Select from './Select';
import './Shared.css'
import useUser from '../hooks/useUser';


const initial = {
    first_name: '',
    last_name:'',
    id: ''
}
const SignupForm = (props) => {
    const {updateUser,addUser} = useUser()
    const [user,setUser] = useState({})
    useEffect(()=>{setUser(props.user)},[props.user])
    console.log(user?.user_type);

    return (
        <div >
            <h1 style={{ marginTop: 0, color: "#FF014F" }}>{props?.from}</h1>
            <Formik
                enableReinitialize
                initialValues={user || initial}
                validate={values => validate(values)}
                onSubmit={(values) => submit(values, props.from, updateUser, addUser, setUser, props.setIsOpen)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='form-box'>
                            <label htmlFor="first_name">First Name</label>
                            <div>
                                <input
                                    className='form-input'
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.first_name}
                                />
                                {errors.first_name ? <div style={{ color: 'red' }}>{errors.first_name}</div> : null}
                            </div>
                        </div>
                        <div className='form-box'>
                            <label htmlFor="last_name">Last Name</label>
                            <div>
                                <input
                                    className='form-input'
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.last_name}
                                />
                                {errors.last_name ? <div style={{ color: 'red' }}>{errors.last_name}</div> : null}
                            </div>
                        </div>
                        <Select
                            type={'user_type'}
                            display={'User Type'}
                            error={errors.user_type}
                            options={['Admin', 'Employee']}
                            handleChange={handleChange}
                        />
                        <Select
                            disAble={values?.user_type === 'Admin' ? true : false}
                            type={'division'}
                            display={'Division'}
                            error={errors.division}
                            options={Object.keys(division)}
                            handleChange={handleChange}
                        />
                        <Select
                            disAble={values?.user_type === 'Admin' ? true : false}
                            type={'district'}
                            display={'District'}
                            error={errors.district}
                            options={division[values?.division]}
                            handleChange={handleChange}
                        />
                        <button style={{ outline: 'none', border: 'none', margin: '0px' }} className='header-button' type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            
        </div>
    );
};
export default SignupForm