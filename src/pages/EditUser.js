import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../component/hooks/useContext';
import SignupForm from '../component/Shared/Form';
// import Basic from '../component/Shared/Form';

const EditUser = () => {
    const { user } = useContext(UserContext)
    let { id } =  useParams();
    let tUser = user.find((v, i) => v.id === id)

    return (
        <div className='body body-box'>
            <div style={{ borderBottom: '2px solid white', padding: '10px 0' }}>
                <Link to='/' style={{ color: '#FF014F', textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />{' '}
                    Go Back
                </Link>
            </div>
            <SignupForm user={tUser} from={'Edit User'}/>
        </div>
    );
};

export default EditUser;