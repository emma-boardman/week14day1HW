var React = require('react')

var ShowTimesButton = function(props){

  return(
    <div className='show-times'>
      <button className='show-times-button'
              on click={props.handleClick}>
      Get Showtimes 
      </button>
      </div>
      )
}

module.exports = ShowTimesButton