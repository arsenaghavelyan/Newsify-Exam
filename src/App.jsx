import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CategoryCountry from './components/CategoryCountry'
import { API_KEY, NewsAPI_URL } from './lib/data'
import { handleNews, selectNews } from './store/slices/newsSlice'
import { selectCountry } from './store/slices/countrySlice'
import { selectCategory } from './store/slices/categorySlice'
import Home from './components/Home'
import { useEffect, useState } from 'react'

function App() {
  const dispatch = useDispatch()

  const category = useSelector(selectCategory)
  const country = useSelector(selectCountry)

  const news = useSelector(selectNews)
  // console.log(news);

  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch(`${NewsAPI_URL}?country=${country}&category=${category}&pageSize=10&page=${page}&apiKey=${API_KEY}`).then((response) => {
      return response.json()
    }).then((res) => {
      dispatch(handleNews({
        res: res.articles
      }))
    })
  }, [category, country, page])

  function updatePage(pageNumber) {
    setPage(pageNumber)
  }

  function handleNextPage() {
    updatePage(page + 1)
  }

  function handlePrevPage() {
    updatePage(page - 1)
  }
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
        <div className='flex gap-2 justify-center'>
          <div className={`w-[30px] h-[30px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5 ${page === 1 ? 'opacity-50 pointer-events-none' : ''}`} onClick={handlePrevPage}>
            <span>&lt;</span>
          </div>
          <div className={`${page == 1 ? "bg-white" : "bg-transparent"} w-[30px] h-[30px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5`} onClick={() => updatePage(1)}>
            <span>1</span>
          </div>
          <div className={` ${page == 2 ? "bg-white" : "bg-transparent"} w-[30px] h-[30px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 mb-3 mt-5 cursor-pointer`} onClick={() => updatePage(2)}>
            <span>2</span>
          </div>
          <div className={`w-[30px] h-[30px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5 ${news.length === 0 ? 'opacity-50 pointer-events-none' : ''}`} onClick={handleNextPage}>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
