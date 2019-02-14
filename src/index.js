import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
// import App from './App';


// Action
const increaseAction = {
    type: 'increase'
}

// Reducer
function counter(state = {count: 0}, action) {
    switch(action.type) {
        case 'increase': 
            return {count: state.count + 1}
        default: 
            return state
    }
} 

// Map Dispatch to Props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Map State to Props
function mapStateToProps(state) {
    return {
        currentCountInStore: state.count
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <span>{this.props.currentCountInStore}</span>
                <button onClick={this.props.onIncreaseClick}>Increase</button>
            </div>
        );
    }
}

// Connect
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

const store = createStore(counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root')
);


