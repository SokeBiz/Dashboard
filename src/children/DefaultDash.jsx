import React, { useState, useEffect } from 'react';

function DefaultDash(params) {
    

    return(
        <>
                        <div>
                            <p className='m-0 p-0'>Views</p>
                            <p className='m-0 p-0 h2'>500</p>
                            <p className='m-0 p-0'>per day</p>
                        </div>
                        <div>
                            <p className='m-0 p-0'>Visit</p>
                            <p className='m-0 p-0 h2'>2000</p>
                            <p className='m-0 p-0'>per minutes</p>
                        </div>
                        <div>
                            <p className='m-0 p-0'>Orders</p>
                            <p className='m-0 p-0 h2'>5100</p>
                            <p className='m-0 p-0'>per day</p>
                        </div>
        </>
    )
}

export default DefaultDash;