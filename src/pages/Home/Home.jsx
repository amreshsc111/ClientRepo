import React from 'react'
import {hero} from '../../data'

const Home = () => {
    // destructure hero data
    const { title, subtitle, image } = hero;
    return (
        <section className='min-h-[900px] py-12'>
	        <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
	            <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
	                {/* text */}
	                <div className='flex-1'>
	                    <h1
	                        className='title mb-2 lg:mb-5'
	                        data-aos='fade-down'
	                        data-aos-delay='500'
	                    >
	                        {title}
	                    </h1>
	                    <p
	                        className='lead mb-5 lg:mb-10'
	                        data-aos='fade-down'
	                        data-aos-delay='600'
	                    >
	                        {subtitle}
	                    </p>
			    <a 
			        className='inline-block rounded-lg bg-orange-500 px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white animate-bounce hover:shadow-lg hover:no-underline'
				href='/user'
				role='button'
			    >
				Get Started
			    </a>
                    </div>
	                {/* image */}
	                <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
	                    <img src={image} alt='' />
	                </div>
	            </div>
	        </div>
	    </section>
            {/* Footer container */}
		<footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
			<div className='bg-neutral-200 p-6 text-center dark:bg-neutral-700'>
				<span>© 2023 Copyright:Land Docket</span>
			</div>
		</footer>
    )
}

export default Home;
