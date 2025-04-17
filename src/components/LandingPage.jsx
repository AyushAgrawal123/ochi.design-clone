import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["we create", "eye opening", "Presentations"].map((item, index) => (
                    <div key={index} className='Masker'>
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-5 w-[8vw] h-[5.6vw] rounded-md bg-red-600 top-[.3vw]'>
                                    <img className='' src="ochi.png" alt="" />
                                </motion.div>
                            )}
                            <h1 className='uppercase leading-[6vw] tracking-tighter font-medium text-[7vw]'>
                                {item}
                            </h1>
                        </div>

                    </div>
                ))}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map(
                    (item, index) => (
                        <p key={index} className='text-md font-light tracking-tighter leading-none'>
                            {item}
                        </p>
                    )
                )}
                <div className='start flex'>

                    <div className='px-5 py-2 border-[1px] font-light text-md uppercase border-zinc-500 rounded-full'>
                        Start the project
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center border-[1px] ml-[6px] border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaLongArrowAltUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
