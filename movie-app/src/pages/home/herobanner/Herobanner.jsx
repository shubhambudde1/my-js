import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.scss"
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImg/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';



//hero section
const Herobanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  const {url} = useSelector((state) => state.home)



  const {data, loading} = useFetch("/movie/upcoming");

    useEffect(() => {
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
      setBackground(bg);
        }, [data])

  //get the search query and send it to the server
  
  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className='herobanner'>
    <div className='backdrop-img'>
    <Img src={background} />
    </div>
    

      <div className='wrapper'>
        <div className='heroBanner content'>
          <span className='title'>welcome</span>
          <span className='subTitle'>welcome</span>
          <div className='searchInput'>
            <input
              type='text'
              placeholder='search for movie or tv shows...'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
      hallo, world! what are you doing
    </div>
  );
};

export default Herobanner;
