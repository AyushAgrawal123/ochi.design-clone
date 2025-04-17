import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Power4 } from 'gsap/all';

const Featured = () => {
    const [isHovering1, setHovering1] = useState(false);
    const [isHovering2, setHovering2] = useState(false);

    const animateText = (text, isHovering) => (
        text.split('').map((char, index) => (
            <motion.span
                key={index}
                initial={{ y: '100%' }}
                animate={isHovering ? { y: '0' } : { y: '100%' }}
                transition={{ ease: Power4.easeInOut, delay: isHovering ? index * 0.06 : 0 }}
                className="inline-block font-semibold"
            >
                {char}
            </motion.span>
        ))
    );

    return (
        <div className='w-full py-20 bg-zinc-100'>
            <div className='w-full border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl ml-10 tracking-tighter text-black opacity-85'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards mt-20 w-full flex gap-20'>
                    <div className='cardcontainer relative w-1/2 h-[80vh]' onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)}>
                        <h1 className='absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] tracking-tighter text-6xl'>
                            {animateText("FYDE", isHovering1)}
                        </h1>
                        <div className='card w-full h-full rounded-xl  overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className='cardcontainer  relative rounded-xl w-1/2 h-[80vh]' onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} >
                        <h1 className='absolute  flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68] tracking-tighter text-6xl'>
                            {animateText("VISE", isHovering2)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
