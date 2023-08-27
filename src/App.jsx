import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CategoryCountry from './components/CategoryCountry'
import { API_KEY, NewsAPI_URL } from './lib/data'
import { handleNews, selectNews } from './store/slices/newsSlice'
import { selectCountry } from './store/slices/countrySlice'
import { selectCategory } from './store/slices/categorySlice'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import Popup from './components/Popup'

function App() {
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

  return (
    <>
      <div className='bg-gray-600'>
        <CategoryCountry />
        <div className='flex flex-wrap gap-[25px] justify-center items-center mt-[50px]  '>
          {
            news.map((el) => {
              return (
                <Home info={el} key={Math.random()} />
              )
            })
          }
        </div>
        {/* {selectedNews && (
          <Popup news={selectedNews} onClose={() => setSelectedNews(null)} />
        )} */}
      </div>
    </>
  )
}

export default App
