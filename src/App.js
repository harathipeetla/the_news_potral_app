import  {useEffect, useState } from "react";

import NewsList from './components/NewsList'
import ArticleCard from './components/ArticleCard'

function App(){
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")


  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bca4ba3fb48b43ce9586ab0092845c91`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return(
    <div className="app-container">

<h1 className="title">The News Network</h1>

<NewsList active={active} setActive={setActive} setCategory={setCategory}/>
<ArticleCard items = {items}/>

    </div>
  )
}
export default App