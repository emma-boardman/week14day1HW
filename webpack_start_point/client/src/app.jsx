var React = require('react');
var ReactDOM = require('react-dom');
var OpeningsBox = require('./components/OpeningsBox')

var movies = [
  { name: "Sausage Party",
    url: "http://",
    showTimesURL: "http://"  }, 
  { name: "Cafe Society",
    url: "http://",
    showTimesURL: "http://"  }, 
  { name: "Morgan",
    url: "http://",
    showTimesURL: "http://"  }, 
  { name: "Louis Drax",
    url: "http://",
    showTimesURL: "http://"  }, 
  { name: "Naam Hai Akira",
    url: "http://",
    showTimesURL: "http://"  } 
]



window.onload = function(){
  ReactDOM.render(
    <OpeningsBox movies={movies}/>,
    document.getElementById('app')
    );
 
}

// sets properties of the opening box, and defines where on the DOM it should be rendered
