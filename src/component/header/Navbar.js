import React, { useContext } from 'react';
import { UserContext } from '../hooks/useContext';
import useUser from '../hooks/useUser';
import CustomizedModal from '../Shared/Modal';
import './header.css'

const Navbar = () => {
    const { handleAdOrEm} = useUser()
    const {type} = useContext(UserContext)

    return (
        <div className='body-box'>
            <CustomizedModal>
                <div className='header-button header-add-user'>ADD USER</div>
            </CustomizedModal>
            <div className='header-flex'>
                <div 
                    onClick={() => handleAdOrEm('admin')} 
                    className={`header-button ${type === 'admin' ? 'h-b-active' : ''}`}
                >ADMIN</div>
                <div 
                    onClick={() => handleAdOrEm('employee')} 
                    className={`header-button ${type === 'employee' ? 'h-b-active' : ''}`}
                >EMPLOYEE</div>
            </div>
        </div>
    );
};

export default Navbar;