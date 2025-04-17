import React, { useEffect, useState } from 'react';

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='w-full h-screen overflow-hidden '>
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 '>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 '>
                                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
