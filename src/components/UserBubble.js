import React from 'react';
import '../styles/TextBubble.css';
import { FaRegUserCircle } from 'react-icons/fa';

//component for user response textbubble

// css for replies style tag
const replystyle = {
  width: 400,
  padding: 10
};

class UserBubble extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
                    };
    }

   render() {
    return (
        <div>
            <div id="user">      
                <div className="d-flex float-end grow">   
                    {/* user text bubble */}
                    <div className="bubble m-3">
                        <p style={replystyle}>{this.props.children}</p>
                    </div>
                    {/* user icon from react-icons */}
                    <div className="p-2" style={{color:"#00e2ff"}}><FaRegUserCircle size={24} /></div>
                </div>
            </div>
        </div>
    );
    }
}

export default UserBubble;
