import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import App from './App';


// Action
const increaseAction = {
    type: 'increase'
}

// Reducer
function counter(state = {count: 0}, action) {
    switch(action.type) {
        case 'increase': 
            return {count: count + 1}
        default: 
            return state
    }
} 

class Counter extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


index.propTypes = {
    
};

export default index


const store = createStore(counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root')
);
