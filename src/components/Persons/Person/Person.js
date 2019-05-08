import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../ hoc/Aux';
import classes from './Person.css';
import withClass from '../../../ hoc/withClass';



class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render () {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>my name is {this.props.name} and i am {this.props.age} years old</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changeName} 
                    value={this.props.name} 
                />
                {/* <br></br>
                <input 
                key="i4"
                ref={(inputEl) => {this.inputElement = inputEl}}
                type="number"
                onChange={this.props.changeAge} 
                value={this.props.age} 
                /> */}
            </Aux>
        );
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// using this cuz, this is based class component
// there is 2 ways to manipulate css pseudo and media query:
// fist, using radium package from npm.
// and second, using css modul like this project(recommended)