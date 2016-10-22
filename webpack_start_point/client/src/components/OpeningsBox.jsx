var React = require('react')
var Header = require('./Header')
var MovieTable = require('./MovieTable')
var MoreLink = require('./MoreLink')
var ShowTimesButton = require('./ShowTimesButton')

var OpeningsBox = React.createClass({

    handleClick: function(){
      console.log("handling click");
    },

    render: function(){
      return(
        <div className='openings-box'>
          <Header title="UK Openings This Week" />
          <MovieTable movies={this.props.movies} />
          <MoreLink />
          <ShowTimesButton handleClick={this.handleClick}/>
          </div>
        )
    }
})

// creating the class with all it's components, doesn't need detail because the detail is defined in each components JSX file. defining the properties like title and the movie input here allows more dynamism? attributes set here can be changed, unlike those set in the parent?

module.exports = OpeningsBox