import React, { useContext, useState, useEffect } from 'react';
import { LandRegistrationContext } from '../../../context/LandRegistrationContext'; 
import RequestCard from '../../../components/RequestCard';
import NotAuthorized from '../../../components/NotAuthorized';
	
export default  function Approve() {
	const {getAllRequests, requestInfo,isUserVerified,checkUserVerification} = useContext(LandRegistrationContext);
	
    useEffect(()=>{
        async function checkUser(){
            await checkUserVerification();

        }
     checkUser();
     getAllRequests();

  
    },[])
	return (
        <>
        {
            isUserVerified && (
                <div>
                <div>
                    <h1 className='underline decoration-indigo-500'>Avaliable Request of Land</h1>
                    <button
		        className='inline-block rounded-lg bg-orange-500 px-6 pb-2 pt-2.5 font-medium text-white animate-bounce hover:shadow-lg hover:no-underline'
		        onClick={getAllRequests}
		    >
		        Available Requests
		    </button>
                </div>
                <div>
                    {
                        requestInfo.map((request, i) => {
                            // to view unverified data
                            if(!request.requestStatus)
                            {
                                return <RequestCard key={i}{...request}/>
                            }
                        })
                    }
                </div>
            </div>
            )
        }

        {

            !isUserVerified && (
                <NotAuthorized />
            )
        }
        </>

	);
}
