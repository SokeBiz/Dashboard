import { Outlet } from 'react-router-dom';
import Dashboardlayout from './components/Dashboardlayout';
import React, { useState, useEffect } from 'react';


function Dashboard() {
    
    // const search = useSearchParams();

    return(
        <>
            <Dashboardlayout>
                <div className='p-3'>
                    <h2 className='text-start'>Hello, SokeBiz</h2>
                    <p>Welcome Back</p> 
                    <div id='dashDefault' className='w-100 bg-info rounded d-flex justify-content-around p-3'>
                        <Outlet />
                    </div>
                </div>
            </Dashboardlayout>
        </>
    )
}

export default Dashboard;