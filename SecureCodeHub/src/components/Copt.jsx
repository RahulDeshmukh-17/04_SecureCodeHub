import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket ,faHeart,faCircleHalfStroke, faLock} from '@fortawesome/free-solid-svg-icons'
export default function Copt() {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1'>
    <div className="min-w-60 h-auto flex-row gap-4 p-4  overflow-hidden shadow-lg bg-purple-950 text-white">
    <div className='p-8'>
    <FontAwesomeIcon icon={faRocket} size="2xl" className='text-white w-8'></FontAwesomeIcon>    
    </div>
    <span className='font-bold text-2xl '>Ethical Hacking</span>
    <p className='w-48 text-base pt-3'>
    Learn to protect systems and data from malicious attacks through ethical hacking techniques and principles.
    </p>
    </div>

    <div className="min-w-60 h-auto flex-row gap-4 p-4  overflow-hidden shadow-lg bg-purple-950 text-white">
    <div className='p-8'>
    <FontAwesomeIcon icon={faHeart} size="2xl" className='text-white w-8'></FontAwesomeIcon>    
    </div>
    <span className='font-bold text-2xl '>Penetration Testing</span>
    <p className='w-48 text-base pt-3'>
    Master advanced testing methods to identify and exploit vulnerabilities in networks and applications.    </p>
    </div>


    <div className="min-w-60 h-auto flex-row gap-4 p-4  overflow-hidden shadow-lg bg-purple-950 text-white">
    <div className='p-8'>
    <FontAwesomeIcon icon={faCircleHalfStroke} size="2xl" className='text-white w-8'></FontAwesomeIcon>    
    </div>
    <span className='font-bold text-2xl '>Data Privacy</span>
    <p className='w-48 text-base pt-3'>
    Gain expertise in safeguarding sensitive information and ensuring compliance with privacy regulations.    </p>
    </div>


    <div className="min-w-60 h-auto flex-row gap-4 p-4  overflow-hidden shadow-lg bg-purple-950 text-white">
    <div className='p-8'>
    <FontAwesomeIcon icon={faLock} size="2xl" className='text-white w-8'></FontAwesomeIcon>    
    </div>
    <span className='font-bold text-2xl '>Network Security</span>
    <p className='w-48 text-base pt-3'>
    Understand and fortify network infrastructures against cyber threats to maintain robust security measures.    </p>
    </div>

    </div>
    </>
  )
}
