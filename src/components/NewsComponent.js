import React, {  useEffect, useState } from 'react'
import NewItem from './NewItem'
import Loading from './loading.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export default function NewsComponent(props) {

 const [articles , setArticles]  = useState([]);
 const [loading , setLoading] = useState(true);
 const [page , setPage] = useState(1);
 const [totalArticles , setTotalArticles] = useState(0);
   
  
  


    // uPdate news by fetchung data
  const   updatenews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${page}&pagesize=21`
       setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()



        setArticles(parsedData.articles);
        setLoading (false);
        setTotalArticles(parsedData.totalResults);
       
    }
    useEffect(()=>
    {
      updatenews();
    } , []);
   const  fetchMoreData = async() => {
          setPage(page+1)
        
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${ page}&pagesize=21`
       
        let data = await fetch(url);
        let parsedData = await data.json()
       setArticles(articles.concat(parsedData))
        
    };


        return (
            <div className='container my-3 '>
                <h2 className='text-centre' style={{ marginTop:'100px' , marginLeft: '20px'  }}> NEWS APP's - TOP HEADLINES {props.category}</h2>
                { loading && <Loading />}


                <InfiniteScroll
                    dataLength={articles && articles.length}
                    next={fetchMoreData}
                    hasMore={ articles && articles.length !==  totalArticles}
                    loader={ <Loading />}
                >
                    { <div className='row my-3  '>
                        {
                            articles &&  articles.map((item) => {
                                return (
                                    <div className=' col-md-3 col-sm-4  mx-3 ' key={item.url} >
                                        <NewItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} date={item.publishedAt} author={item.author}  />
                                    </div>
                                )
                            })}
                    </div>}
                </InfiniteScroll>
              
            </div>
        )
    
}
NewsComponent.defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'general'
}
NewsComponent.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string


}
