import React, { useContext } from 'react';
import { UserContext } from '../hooks/useContext';
import useUser from '../hooks/useUser';
import './pagination.css'

const Pagination = (props) => {
    const {pageHandler} = useUser()
    const {page,user}= useContext(UserContext)

    
    const paginationButton = () =>{
        const p = user?.length ? user.length : 0
        const pagnum = Array(Math.ceil(p / 5)).fill(null)
        const element = (
            <>
                {pagnum.map((v,i)=>(
                    <button 
                    key={i} 
                    onClick={() => pageHandler(i + 1)} 
                    className={`p-button ${page=== i + 1 && 'p-active-button'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </>
        )
        return element
    }

    return (
        <div className='body-box '>
            <div className='pagination-center'>
                <button disabled className='p-button'>{'<'}</button>
                {paginationButton()}
                <button disabled className='p-button'>{'>'}</button>
            </div>
        </div>
    );
};

export default Pagination;