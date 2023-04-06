import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../../App';

const Main = () => {
    return (
        <div>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;