import React, { Component } from 'react';


import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import withClass from '../ hoc/withClass';
import Aux from '../ hoc/Aux';
import AuthContext from '../context/auth-context';


//Example for class-based component state manipulating
class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id : '100', name: 'Max', age: 28 },
      { id : '101', name: 'Manu', age: 29 },
      { id : '102', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson : false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; 
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount'); 
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  changeAgeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.age = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true});
  }

  render() {
    console.log('[App.js] render');
    
    //OUTSOURCING METHOD
    let persons = null;
    

    if (this.state.showPerson) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changedName={this.changeNameHandler}
            changedAge={this.changeAgeHandler}
            isAuthenticated={this.state.authenticated} />;

      //this is for dynamic color for button when click
      //agar warna background-color pada button tdk saling menimpa
     
    }

    

    return (
        <Aux>
        <button 
        onClick={ () => {
          this.setState({ showCockpit: false});
        }}
        >
        Remove Cockpit
        </button>
        <AuthContext.Provider 
        value={{
          authenticated: this.state.authenticated,
          login:this.loginHandler
          }}
        >
          {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>

        //   //INSOURCING METHOD
        //      //its usual if expression is not work for jsx, so use this, it similar with if
        //      //but only work for with this condition .
        //     //if state false run null. but if state true react will render Person*/}
        //  {this.state.showPerson === true ? 
        // <div>
        //   <Person
        //     name={this.state.persons[0].name}
        //     age={this.state.persons[0].age}
        // />
        //   <Person
        //     name={this.state.persons[1].name}
        //     age={this.state.persons[1].age}
        //     click={this.switchNameHandler}
        //     changed={this.changeNameHandler}
        //   >
        //      My Hobbies: Racing
        //   </Person>
        //   <Person
        //     name={this.state.persons[2].name}
        //     age={this.state.persons[2].age}
        //   />
        // </div> : null
        // } 
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
