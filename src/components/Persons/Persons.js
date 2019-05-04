import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  // i comment this cuz, i have already write this cycle in App.js
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //this is only work for older React version under 16 
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if ( 
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;  
  //   } else {
  //     return false;
  //   }
  //   //return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot !'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
   
  return this.props.persons.map( ( person, index ) => {
    return (
      <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}  
        changeName={( event ) => this.props.changedName( event, person.id )}
        changeAge={( event ) => this.props.changedAge( event, person.id )}
      />
    );
  });
  }
  
}

export default Persons;
