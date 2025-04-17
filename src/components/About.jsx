import React from 'react'

function ABout() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[4vw] leading-[4vw] tracking-tighter opacity-85'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=' flex gap-5 w-full border-t-[1px] mt-20 pt-10 border-[#adad7f]'>
        <div className='w-1/2 '>
          <h1 className='text-[4vw] opacity-85' >Our approach:</h1>
          <button className='flex items-center gap-5 px-9 py-4 mt-4 bg-zinc-900 rounded-full uppercase text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>

        </div>
        <div className='w-1/2 h-[65vh] bg-[#d3f073] rounded-3xl overflow-hidden'>
          <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ABout
