import { useEffect, useState } from 'react'
import {fetchDataFromApi} from "./utils/api.js"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigration } from './store/homeSlice.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";


import Header from "./components/header/Header.jsx"
import Home from './pages/home/Home.jsx'
import Footer from "./components/Footer/Footer.jsx"
import Detail from './pages/details/Detail.jsx'
import SearchReasults from './pages/searchResult/SearchReasults.jsx'
import Explore from './pages/explore/Explore.jsx'
import PageNotFound from './pages/404/PageNotFound.jsx'


function App() {

  const dispatch = useDispatch()
  const {url} = useSelector((state) =>state.home)
  console.log(url);

  useEffect(() => {
    // apiTesting();
    fetchApiConfig();
  }, [])
  // const apiTesting = () => {
  //   fetchDataFromApi('/movie/popular').then((res) => {
  //     console.log(res);
  //     dispatch(getApiConfigration(res))
  //   })
  // }
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      console.log(res);
      const  url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original",
      }
      dispatch(getApiConfigration(url))
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path="/:mediaType/:id" element = {<Detail />} />
        <Route path="/search/:query" element = {<SearchReasults />} />
        <Route path="/explore/:mediaType" element =  {<Detail />} />
        <Route path="*" element =  {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
