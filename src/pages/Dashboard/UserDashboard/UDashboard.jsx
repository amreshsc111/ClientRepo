import React, { useContext, useEffect } from 'react'
import {LandRegistrationContext} from '../../../context/LandRegistrationContext'

export default function UDashboard() {
	// const {getUserInfo, userData}=  useContext(LandRegistrationContext);
	// const handleUserInfo = (e) => {
	// 	e.preventDefault();
	// 	getUserInfo();
	// }

	 const {getUserInfo, userData,isUserVerified,checkUserVerification}=  useContext(LandRegistrationContext);
	//  to load the address when loading the page
	// remove react strict mode in main jsx or else data would be shown two times
	useEffect(()=>{
		async function getUserInfoFrom(){
			await checkUserVerification();
			await getUserInfo();

		}
		getUserInfoFrom();
	    
	}, []);
  
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			{/* <button onClick={handleUserInfo}>View User Details</button> */}
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Name</th>
							<th>City</th>
							<th>Citizenship No.</th>
							<th>Email</th>
							<th>Verification Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{userData.name}</th>
							<th>{userData.city}</th>
							<th>{userData.citizenShipNumber}</th>
							<th>{userData.email}</th>
							{
								isUserVerified && (
									<th>Verification Done</th>

								)
							}

{
								!isUserVerified && (
									<th>Verification Not Done</th>

								)
							}
							
						</tr>
					</tbody>
            	</table>
			</div>
		</div>
  	)


}