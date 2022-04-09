import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../component/hooks/useContext';

const Details = () => {
    const { user } = useContext(UserContext)
    let { id } = useParams();
    let tUser = user.find((v, i) => v.id === id)
    const tUserKey = tUser && Object.keys(tUser);
    const tUserValue = tUser && Object.values(tUser);

    return (
        <div className='body body-box'>
            <div style={{ borderBottom: '2px solid white', padding: '10px 0' }}>
                <Link to='/' style={{ color: '#FF014F', textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />{' '}
                    Go Back
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tUserKey?.map((v, i) => {
                            if (i < 5) {
                                return (
                                    <tr key={i}>
                                        <td>{tUserKey[i]}</td>
                                        <td>{tUserValue[i]}</td>
                                    </tr>
                                )
                            }
                        })
                    }

                    <tr>
                        <td style={{ background: 'orange', cursor: 'pointer' }}>
                            <Link to={`/Edit/${id}`}>Edit</Link>
                        </td>
                        <td style={{ background: 'red', cursor: 'pointer' }}>Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Details;