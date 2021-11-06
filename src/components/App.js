import React from 'react';
import './bot';
import Navigation from './Navigation';
import Chatbox from './Chatbox';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';

//when using state in React, need to set up constructor
class App extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
            data: null
        };
    }

    componentDidMount() {
    // Call fetch function when component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.message }))
            .catch(err => console.log(err));
    }
    // Fetch GET route from the Express server
    callBackendAPI = async () => {
        const response = await fetch('/');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };


  render()
  { // render method displays HTML to the UI by returning JSX code to the root element. Can read props and state.
    // Returns JSX code
    //JSX (JavaScript XML) is used to write HTML within the JavaScript code in React, using JavaScript. It is a syntax extension of JavaScript.
    // comments for jsx written within {/*  */}
    return(
      <div> {/* render must be followed with div tag. */}
          <Router>
          {/* switch must be within router. React router used to route and switch between components through nav links in navigation component */}
              <Navigation /> {/* navigation bar component with links to component paths */}
                <Switch> {/* switches paths for components using react router */}
                    <Route exact path="/"> {/* routes to path closest to the indicated path */}
                        <Chatbox />
                    </Route>
                    <Route exact path="/About"> {/* must put exact or else will route to closest path "/" */}
                        <About />
                    </Route>
                </Switch>
          </Router>

      </div>
    );
  }
}

export default App;
