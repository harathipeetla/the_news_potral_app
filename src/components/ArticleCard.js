import { useEffect, useState } from 'react'
// import {TailSpin} from 'react-loader-spinner'

import NewsItem from './NewsItem'
import Pagination from './Pagination'
import Search from './Search'

function ArticleCard({items}){

    //start 
    const [currentPage, setCurrentPage]  = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    // const [loading, setLoading] = useState(true)
    // const [favorites, setFavorites] =  useState([])

    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         setLoading(true)

    //         await new Promise (resolve => setTimeout(resolve, 1000))
    //         setLoading(false)
    //     }

    //     fetchData();
    // }, [items])


    //getting favourites 

    // useEffect(()=>{
    //     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) ||[]
    //     setFavorites(storedFavorites)
    // }, [])


    //setting favourires 

    // useEffect(()=>{
    //     localStorage.setItem('favorites', JSON.stringify(favorites))
    // }, [favorites])

    //toggling the favourits 

    // const toggleFavorite = (article)=>{
    //     if(favorites.some(fav => fav.title === article.title)){
    //         setFavorites(favorites.filter(fav => fav.title !== article.title))
    //     }else{
    //         setFavorites([...favorites, article])
    //     }
    // };

    const filteredArticles = items.filter(article => 
        article.source.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) || 
        article.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    )

    const articlesPerpage = 6 
    const totalPages = Math.ceil(items.length/articlesPerpage)
    const indexOfLastArticle = currentPage * articlesPerpage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerpage
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // const inlineStyle ={
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     margin:'4em'
    // }

    return(
        <div className='news-articles-container'>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} className="search-bar"/>
                <div className='news-article'>
            {currentArticles.length > 0 ? (
                currentArticles.map((item, i)=>(
                    <NewsItem key = {i} item = {item}                 
                    />
                ))
            ):(<center>
                <img src='https://res.cloudinary.com/dzvtpzf6b/image/upload/c_thumb,w_200,g_face/v1718857800/not-found-image_sebuw1.png' alt='not-found'/>
                <h1>No Articles Found</h1>
            </center>)}
        </div>
         
        {currentArticles.length > 0 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange}/>
        )} 
    </div>
    )

}

export default ArticleCard
