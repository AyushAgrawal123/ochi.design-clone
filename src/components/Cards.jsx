import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 '>
            <div className='cardcontainer w-1/2 h-[50vh]'>
                <div className='card relative rounded-xl h-full w-full flex justify-center items-center bg-[#004d43]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi" />
                    <button className='absolute left-10 bottom-10 text-[#CDEA68] border-[1px] rounded-full px-2 py-1 border-[#CDEA68]'>@2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
                <div className=' relative flex justify-center items-center card rounded-xl h-full w-1/2 bg-[#192826]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="ochi" />
                    <button className='absolute left-10 bottom-10 text-[#CDEA68] border-[1px] rounded-full px-2 py-1 border-[#CDEA68] uppercase'>rating 5.0 on clutch </button>
                </div>
                <div className=' relative flex justify-center items-center  card rounded-xl h-full w-1/2 bg-[#192826]'>
                    <img className='h-1/4 w-1/3' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="ochi" />
                    <button className='absolute left-5 bottom-10 text-[#CDEA68] border-[1px] rounded-full px-2 py-1 border-[#CDEA68] tracking-tighter uppercase'>business bootcamp alumni </button>
                </div>
            </div>
        </div>
    )
}

export default Cards