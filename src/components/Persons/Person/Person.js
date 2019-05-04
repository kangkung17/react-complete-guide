import React, { Component } from 'react';
import classes from './Person.css';



class Person extends Component {
    render () {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person} >
            <p onClick={this.props.click}>my name is {this.props.name} and i am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input 
                type="text" 
                onChange={this.props.changeName} 
                value={this.props.name} 
            />
            <br></br>
            <input 
                type="text" 
                onChange={this.props.changeAge} 
                value={this.props.age} 
            />
            </div>
        )
    }
    
};

export default Person;

// using this cuz, this is based class component
// there is 2 ways to manipulate css pseudo and media query:
// fist, using radium package from npm.
// and second, using css modul like this project(recommended)