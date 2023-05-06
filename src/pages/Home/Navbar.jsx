import React from 'react';
// import data
import { nav } from '../../data';
	
const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
	    <ul className='flex gap-x-10'>
	      {nav.map((item, index) => {
	        // destructure item
	        const { href, name } = item;
	        return (
	          <li key={index}>
	            <a className='text-inherit hover:text-orange-500 hover:shadow-lg hover:no-underline transition' href={href}>
	              {name}
	            </a>
	          </li>
	        );
	      })}
	    </ul> 
	  </nav>
	);
};
	
export default Nav;
