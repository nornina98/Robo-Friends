import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ? 
            <h1>SORRY ! THERE IS NO ROBOT IS AVAILABLE FOR RIGHT NOW</h1> :
            (
                <div className="tc">
                    <h1 className='f1'>ROBOTFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots}/>   
                    </Scroll>    
                </div>
            )
        }       
    }

export default App;