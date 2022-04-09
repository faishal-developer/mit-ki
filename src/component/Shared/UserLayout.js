import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../hooks/useContext';
import useUser from '../hooks/useUser';

const UserLayout = () => {
    const {page,user} = useContext(UserContext)
    const {displayArray} = useUser()
    
    return (
        <div className='body-box'>
            {
                displayArray(page,user)?.map((v,i)=>(
                    <div key={i} className='uheader-grid' style={{color:'black'}}>
                        <div>{v?.first_name}</div>
                        <div>{v?.user_type}</div>
                        <div>{v?.division?.area ? 'true' :'false'}</div>
                        <div>
                            <Link to={`/user/${v.id}`}>
                            <button className='layout-button'>Details</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UserLayout;