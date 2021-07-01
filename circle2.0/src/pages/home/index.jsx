import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeDemo } from './store/actionCreators'
import { Header } from './style'

const Home = () => {
  const demo = useSelector((state) => state.home.demo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDemo([9, 9, 9, 9]))
  }, [])

  return (
    <div>
      <Header>
        <div className="btn"></div>
        <div className="search-wrap">
          <input
            type="text"
            placeholder="搜索点什么..."
            className="search-input"
          />
        </div>
        <div className="btn"></div>
      </Header>
    </div>
  )
}

export default Home
