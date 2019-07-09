import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} votesId={props.votesId} addToFavorites={props.addToFavorites} favoritesId={props.favoritesId} removeFromFavorites={props.removeFromFavorites} movies={props.movies} favorites={props.favorites} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} onStarClick={props.onStarClick} vote={movie.vote_average} image={movie.poster_path} title={movie.title} titleTv={movie.name} date={movie.release_date} dateTv={movie.first_air_date}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList