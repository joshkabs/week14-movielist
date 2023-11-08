import AddComment from './AddComment';
import Stars from './stars';

function MovieReview({ movies, setMovies }) {
  let showMovieReviews = movies.map((movie, i) => {
    let comments;
    if (movie.comments) {
      comments = movie.comments.map((comment, i) => {
        return (
          <p>
            {comment.text}
          </p>
        );
      });
    }
    console.log(setMovies);
    return (
      <div key={i}>
        <h1>{movie.name}</h1>
        <h3>Rating: {movie.rate}</h3>
        <img style={{ width: '150px' }} src={movie.image} />
        <p>{movie.synopsis}</p>
        {movies.comments ? { comments } : null}
        <AddComment thisMovie={movie} setMovies={setMovies} />do you like to
        rate this Movie?
        <Stars />
      </div>
    );
  });

  return (
    <div>
      {showMovieReviews}
    </div>
  );
}
export default MovieReview;
