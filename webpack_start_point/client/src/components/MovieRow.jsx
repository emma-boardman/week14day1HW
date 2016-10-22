var React = require('react')

var MovieRow = function(props){
    return(
      <div className='movie-row'>
        <a href={props.movie.url}>{props.movie.name}</a> ---->  
        <a href={props.movie.showTimesURL}>Showtimes</a>
        </div>
        )
}

module.exports = MovieRow