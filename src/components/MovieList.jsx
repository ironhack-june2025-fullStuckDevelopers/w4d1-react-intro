import moviesArr from "../data/movies.json"

function MovieList(){
    return (
        <section id="movie-list">

            <h3>List of movies:</h3>

            {moviesArr.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="box">
                        <p>{movieObj.title}</p>
                        <p>{movieObj.year}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default MovieList;