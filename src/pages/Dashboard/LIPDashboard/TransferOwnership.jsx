import React, { useState, useContext, useEffect } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
// import VerifiedRequestCard from '../Components/VerifiedRequestCard';
import VerifiedRequestCard from '../../../components/VerifiedRequestCard';

export default function TransferOwnership() {
	const {getApprovedRequests,requestInfo} = useContext(LandRegistrationContext);
	
	return (
		<div>
			<div>
				<h1 className='underline decoration-indigo-500'>Available Request To Transfer Land Ownership</h1>
				<button
				    className='inline-block rounded-lg bg-orange-500 px-6 pb-2 pt-2.5 font-medium text-white animate-bounce hover:shadow-lg hover:no-underline'
			            onClick={getApprovedRequests}>Approved Requests</button>
			</div>
			<div>
			{
	            requestInfo.map((request, i) => {
	                // user.name
	                // to view unverified data
	                if(!request.isTransfered)
	                {
	                    return <VerifiedRequestCard key={i}{...request}/>
	                }
	            })
	        }
			</div>
		</div>
	)
}
