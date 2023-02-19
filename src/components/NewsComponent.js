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
   
  
  

//  const   async componentDidMount =()=> {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${ page}&pagesize=${props.pageSize}`
//         // this.setState({ loading: true });

//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // this.setState({ articles: parsedData.articles, loading: false })
//         // console.log(totalArticles);
//         this.updatenews();
//     }
   
    // uPdate news by fetchung data
  const   updatenews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${ page}&pagesize=21`
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
    // handling next and previous click button
//    const handlenextclick = async () => {


//         // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${ page + 1}&pagesize=21`
//         // this.setState({ loading: true });
//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // this.setState({ articles: parsedData.articles })

//         // this.setState({
//         //     page:  page + 1
//         //     , loading: false
//         // })
//         setPage(page+1);
        
//         updatenews();
//     }
//     const handleprevclick = async () => {
//         // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${ page - 1}&pagesize=21`
//         // this.setState({ loading: true });

//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // this.setState({ articles: parsedData.articles })

//         // this.setState({
//         //     page:  page - 1
//         //     , loading: false
//         // })
//         setPage(page-1);

//         // this.setState({
//         //     page:  page - 1

//         // })

//         updatenews();


//     }

   

 

        return (
            <div className='container my-3 '>
                <h2 className='text-centre' style={{ marginTop:'100px' , marginLeft: '20px'  }}> NEWS APP's - TOP HEADLINES {props.category}</h2>
                { loading && <Loading />}


                <InfiniteScroll
                    dataLength={ articles.length}
                    next={fetchMoreData}
                    hasMore={ articles.length !==  totalArticles}
                    loader={ <Loading />}
                >
                    { <div className='row my-3  '>
                        {
                             articles.map((item) => {
                                return (
                                    <div className=' col-md-3 col-sm-4  mx-3 ' key={item.url} >
                                        <NewItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} date={item.publishedAt} author={item.author}  />
                                    </div>
                                )
                            })}
                    </div>}
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={ page == 1} type="button" className="btn btn-primary" onClick={this.handleprevclick}> &larr; prev </button>
                    <button disabled={ totalArticles / 21 <  page} type="button" className="btn btn-primary" onClick={this.handlenextclick}>next   &rarr; </button>
                </div> */}
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
