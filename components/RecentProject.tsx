import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProject = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            Quelques de mes {' '}
            <span className='text-purple'>projets récents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center py-4 gap-x-12 mt-10">
            {projects.map(({id, title, des, img, iconLists,link }) => (
                <div key={id} className='sm:h-[41rem] lg:min-h-[32.rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh]  mb-10">
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[13162d]'>
                                <img src="/bg.png" alt="background image"/>
                            </div>
                            <img 
                                src={img} 
                                alt={title}
                                className="z-10 absolute bottom-0" />
                        </div>
                        <h1 className='font-bold lg-text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text9sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex itmes-center gap-1'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center '
                                    style={{
                                        transform: `translateX(-${index * 2}px)`
                                    }}>
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className="lg:text-xl md:text-xs text-sm text-purple">Voir ce projet</p>
                                <FaLocationArrow className='ms-3' color="#CBACFP"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject