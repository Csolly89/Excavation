import * as React from 'react';
import { photos } from "../Utilities/photos"

const Projects = () => {
  const style = 'bg-[#c79141] rounded-xl p-2 flex flex-col items-center justify-center'
  return (
    <>
          <div className='grid md:grid-cols-4 auto-rows-[300px] gap-10 my-10 mx-24 '> 
            {photos.map((item,i) => (
              <div key={i} className={`${style} 
              ${i === 0 || i === 4 || i === 8  ? 'md:col-span-2' : ''}
              ${i === 5 || i === 10   ? 'md:col-span-3' : ''}
              ${i === 2 || i === 7 ? 'md:row-span-2' : ''}`}>
                <img className='h-full w-full object-cover' src={item.pic} alt={item.alt} />
                <p>{item.disc}</p>
              </div>
            ))}
          </div>
        </>
    );
}

export default Projects;