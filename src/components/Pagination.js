const Pagination =({currentPage, totalPages, onChangePage})=>{


    const handlePrevPage=()=>{
        if(currentPage > 1){
            onChangePage(currentPage - 1)
        }
    }

    const handleNextPage =()=>{
        if(currentPage < totalPages){
            onChangePage(currentPage + 1)
        }
    };

    const active = {
        padding: '6px 12px 6px 12px',
        backgroundColor:'#020227',
        color: 'white',
        fontWeight:'500',
        borderRadius :'10px',
        border:'none'

    }

    return (
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1} style={active}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} style={active}>Next</button>
        </div>
    )


}


export default Pagination