var React = require('react')
var MovieRow = require('./MovieRow')

var MovieTable = function (props){

  var movieData = props.movies.map(
      function(movie) {
        return (
          <li>
            <MovieRow movie={movie} />
          </li> )
        // new list item is created for each individual movie and its associated data
      })

// the above is the function for mapping the movies, it is not called until below
  return(
    <div className='movie-table'>
      <ul>
        {movieData}
      </ul>
    </div>
    )
}

// creates a div containinig an unordered list of individually listed movies 

module.exports = MovieTable