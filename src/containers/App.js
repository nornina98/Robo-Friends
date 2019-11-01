import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField } from '../actions';
import './App.css' ;
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        searchField: state.searchField // COME FROM REDUCERS.JS
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)) 
}}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: []
        }
      }

    componentDidMount(){    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    render() { 
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ? 
            <h1>SORRY ! THERE IS NO ROBOT IS AVAILABLE FOR RIGHT NOW</h1> :
            (
                <div className="tc">
                    <h1 className='f1'>ROBOTFRIENDS</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots}/>   
                    </Scroll>    
                </div>
            )
        }       
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);