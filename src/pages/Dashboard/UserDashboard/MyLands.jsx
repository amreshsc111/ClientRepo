import React, { useState, useContext, useEffect } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
import LandCard from '../../../components/LandCard';
import NotAuthorized from '../../../components/NotAuthorized';

export default function MyLands() {
    const { getAllLand, landsInfo,checkUserVerification,isUserVerified} = useContext(LandRegistrationContext);	   
	useEffect(() => {
        async function checkUser(){
            await checkUserVerification();
        }
        checkUser();
        
	    getAllLand();
	},[]);

    return (
        <>
        {isUserVerified && (
                    <div>
                    <div>
                        <h1 className='underline decoration-indigo-500'>View Your Land Information:</h1>
                        <button
	                      className='inline-block rounded-lg bg-orange-500 px-6 pb-2 pt-2.5 font-medium text-white animate-bounce hover:shadow-lg hover:no-underline'
	                      onClick={getAllLand}
	                >
	                    View owned lands 
	                </button>
                    </div>
                    <div>
                        {
                            landsInfo.map((land, i) => (
                                <LandCard key={i}{...land} />
                            ))
                        }
                    </div>
                </div>
        )}

        {
            !isUserVerified && (
                // <div>
                //     <h1>Not authorized</h1>
                // </div>
                <NotAuthorized />
            )
        }
        </>

    )
}
