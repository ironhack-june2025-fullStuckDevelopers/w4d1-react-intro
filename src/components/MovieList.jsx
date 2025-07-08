import moviesArr from "../data/movies.json"

function MovieList(){

    let message = "";
    if(moviesArr.length > 0){
        message = <h3>Number of Movies: {moviesArr.length}</h3>
    } else {
        message = <h3>Sorry, no movies to display</h3>
    }

    return (
        <section id="movie-list">

            {message}

            {moviesArr.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="box">
                        <p>{movieObj.title}</p>
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>

                        { movieObj.imgURL
                            ? <img src={movieObj.imgURL} alt="Movie Porter" /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="Movie Porter" /> 
                        }

                        {movieObj.rating > 7 && <p className="badge">TOP CHOICE</p>}

                    </div>
                )
            })}
        </section>
    )
}

export default MovieList;