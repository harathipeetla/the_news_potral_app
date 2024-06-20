const Search = ({searchQuery, setSearchQuery}) =>{
    const handleSearchQuery =(event)=>{
        setSearchQuery(event.target.value)
    }

    const inputStyles ={
        padding: '10px 40px 10px 40px',
        border:'none',
        outline:'none',
        color:'white',
        fontWeight:'500',
        backgroundColor:'#061528',
        borderRadius:'10px',
        margin:'1em 0 0 0'
    }

    return (
        <div className="search-bar">
            <center>
            <input 
                type ="Search" 
                placeholder="Search Articles Here..." 
                value = {searchQuery} 
                onChange={handleSearchQuery}
                style={inputStyles}
            />
        </center>


        </div>
    )
}

export default Search