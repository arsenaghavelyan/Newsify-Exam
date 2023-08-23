import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryCountry from './CategoryCountry';
import { API_KEY, NewsAPI_URL } from '../lib/data';
import { selectCategory } from '../store/slices/categorySlice';
import { handleNews, selectNews } from '../store/slices/newsSlice';
import { selectCountry } from '../store/slices/countrySlice';
import Popup from './Popup';

export default function Home() {


  const dispatch = useDispatch()

  const category = useSelector(selectCategory)
  const country = useSelector(selectCountry)

  const news = useSelector(selectNews)
  // console.log(news);

  useEffect(() => {
    fetch(`${NewsAPI_URL}?country=${country}&category=${category}&apiKey=${API_KEY}`).then((response) => {
      return response.json()
    }).then((res) => {
      dispatch(handleNews({
        res: res.articles
      }))
    })
  }, [category, country])

  const [selectedNews, setSelectedNews] = useState(null)
  return (
    <div className='bg-gray-600'>
      <CategoryCountry />
      <div className='flex flex-wrap gap-[25px] justify-center items-center mt-[50px]  '>
        {
          news.map((el) => {
            return (
                <div key={Math.random()} className='p-[10px] h-[550px] w-[420px]  bg-white shadow-[0_0px_10px_rgba(255,255,255,0.5)] rounded-[4px] mb-3 cursor-pointer' onClick={() => setSelectedNews(el)} >
                  <div>
                    <img src={el.urlToImage === null ? "no-image.jpg" : el.urlToImage} className='w-[470px] h-[300px] object-cover' alt='no image' />
                  </div>
                  <div className='flex flex-col justify-around items-end'>
                    <div className='font-extrabold'>
                      <h1>{el.title}</h1>
                    </div>
                    <hr />
                    <div className='mt-2 text-[14px]'>
                      <h2>{el.description}</h2>
                    </div>
                    <div>
                      <a href={el.url} target='black' className='text-blue-700 border-b border-blue-100 hover:border-blue-600 ' >Go to website</a>
                    </div>
                  </div>
                  <div className='flex items-center justify-end mt-[4px] '>
                    <span className='border-b hover:border-black'>Save & Share - </span>
                    <img src="save-icon.png" className='h-[30px]' />
                    <img src="share-icon.png" className='h-[35px]' />
                  </div>
                </div>
            )
          })
        }
      </div>
      {selectedNews && (
        <Popup news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </div>
  )
}
