function NewsList({active, setActive, setCategory}){
const categories =[
    {id:1, name:"General", value : "general"},
    {id:2, name:"Business", value : "business"},
    {id:3, name:"Entertainment", value : "entertainment"},
    {id:4, name:"Health", value : "health"},
    {id:5, name:"Science", value : "science"},
    {id:6, name:"Sports", value : "sports"},
    {id:7, name:"Technology", value : "technology"}

]

function onChangeCategory(event){
    const selectredCategory = categories.find(
        category => category.value === event.target.value
    )
    if(selectredCategory){
    setActive(selectredCategory.id)
    setCategory(selectredCategory.value)
    }
}

const inlineStyles ={
    padding:'10px 15px 10px 15px',
    border:'none'
}

return(
    <center>
    <div className="list-news">
        <select onChange={onChangeCategory} style={inlineStyles}>
            {categories.map(category =>(
               <option key={category.id}  
               className={active === category.id ? "active" : "inactive"} value={category.value}>{category.name}</option> 
            ))}
        </select>
    </div>
    </center>
)
}

export  default NewsList