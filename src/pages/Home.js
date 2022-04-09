import React from 'react';
import Navbar from '../component/header/Navbar';
import UserHeader from '../component/header/UserHeader';
import Pagination from '../component/pagination/Pagination';
import UserLayout from '../component/Shared/UserLayout';

const Home = () => {
    return (
        <div className='body'>
            <Navbar />
            <UserHeader />
            <UserLayout />
            <Pagination />
        </div>
    );
};

export default Home;