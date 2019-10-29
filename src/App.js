import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css' ;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: '',
        }
      }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>SORRY ! THERE IS NO ROBOT IS AVAILABLE FOR RIGHT NOW</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f1'>ROBOTFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filterRobots}/>
                </div>
            )
        }
        
    }
  }

export default App;