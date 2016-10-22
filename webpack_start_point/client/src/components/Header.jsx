var React = require('react')
// header doesn't need to require anything more, just needs to be available for use in the structure of the openingsbox

var Header = function(props){
  return(
    <div className='header'>
    {props.title}
    </div>
    )
}

// props. allows acces to the attributes given to the component that cannot change, and are defined in the app.jsx bit

module.exports = Header