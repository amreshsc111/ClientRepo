import React, { useState, useContext, useEffect } from 'react'
import { LandRegistrationContext } from '../../../context/LandRegistrationContext';
import UserCard from '../../../components/UserCard';

var userTable=[];
var usersAddresses=[];

export default function Dashboard() {
    const {getUserData,usersInfo} = useContext(LandRegistrationContext);
	//  to load the address when loading the page
	// remove react strict mode in main jsx or else data would be shown two times
	useEffect(()=>{
	    getUserData();
	}, []);

	return (
		<div>
			<div>
				<h1 className='underline decoration-indigo-500'>User Details</h1>
				{/* <button onClick={getUserData}>User Details</button> */}
				{/* <button
      onClick={getUserData}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-100"
	  			>
      UserDetails
    	</button> */}
			</div>
			{/* <div>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint enim, modi consectetur dolorum aut, deserunt corporis optio non odio veritatis possimus! Nisi, optio. Enim sunt, laboriosam harum aut adipisci beatae?
			</div> */}
			<div>
				{
            		usersInfo.map((user,i)=>{
                	// to view unverified data
                		if(!user.isVerified)
                		{
                    		return <UserCard key={i}{...user}/>
                		}
            		})

        		}
			</div>
		</div>
  	)
}
