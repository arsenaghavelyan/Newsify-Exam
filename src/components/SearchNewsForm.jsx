import React from 'react'

export default function SearchNewsForm({ info }) {
    return (
        <div className='flex flex-wrap  gap-[25px] justify-center items-center mt-[40px] '>
            <div className='p-[10px] h-[560px] w-[420px]  bg-white shadow-[0_0px_10px_rgba(255,255,255,0.5)] rounded-[4px] mb-3 cursor-pointer'  >
                <div>
                    <img src={info.urlToImage === null ? "no-image.jpg" : info.urlToImage} className='w-[470px] h-[300px] object-cover' alt='no image' />
                </div>
                <div className='flex flex-col justify-around items-end'>
                    <div className='font-extrabold'>
                        <h1>{info.title}</h1>
                    </div>
                    <hr />
                    <div className='mt-2 text-[14px]'>
                        <h2>{info.description}</h2>
                    </div>
                    <div>
                        <a href={info.url} target='black' className='text-blue-700 border-b border-blue-100 hover:border-blue-600 ' >Go to website</a>
                    </div>
                </div>
                <div className='flex items-center justify-end mt-[4px] '>
                    <span className='border-b hover:border-black'>Save & Share - </span>
                    <img src="save-icon.png" className='h-[30px]' />
                    <img src="share-icon.png" className='h-[35px]' />
                </div>
            </div>
        </div>
    )
}
