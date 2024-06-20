import { FaGlobeAfrica} from "react-icons/fa";


function NewsItem({item}){
    const websiteUrl = item.url
    const date = item.publishedAt
    const formatDate = date.replace('T', ' ')
    const formatTime = formatDate.replace('Z', '')
return(
    <div className="article">
<div className="artcle-image">

    <img src={item.urlToImage} alt={item.title} className="image-of-news"/>
</div>
<div className="article-content">
    <div className="article-source">
      <a href={websiteUrl} className="globe-icon"><FaGlobeAfrica/> <span>{item.source.name}</span></a>
    </div>
    <div className="article-title">
        <h2>{item.title}</h2>
    </div>
    <div>
{/* when you click on the view more text It navigate to the detail view of the article */}
   <p>
        <span>{item.description}</span>....
        <a href={websiteUrl} className='discription-detail'>View More</a>
    </p> 
    </div>
        <div className="article-details">
            <small><b>Published At :</b>{formatTime}</small>
        </div>
    </div>
</div>
)

}

export default NewsItem