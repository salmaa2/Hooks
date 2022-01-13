import MovieCard from "./MovieCard"

function MovieList({moviedata ,search , rating}) {
    return (
        <div className="list">
          {moviedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>=rating)).map(el=><MovieCard el={el} key={el}/>)}
          {(moviedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>=rating) ).length<=0) &&   
            <img
            className="Not"
                 src="https://st2.depositphotos.com/4323461/9818/v/600/depositphotos_98187808-stock-illustration-oops-problem-man-business-concept.jpg"
                     alt="First slide"
                    />}
        </div>
    )
    
}
export default MovieList 