import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20  bg-[#004d43] overflow-hidden rounded-tl-3xl rounded-tr-3xl'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10  whitespace-nowrap '>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[24vw] font-semibold tracking-tighter leading-none -mt-6 uppercase'>we are ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[24vw] font-semibold tracking-tighter leading-none -mt-6 uppercase'>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee