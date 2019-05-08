import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
// import { clearTimeout } from 'timers';

const cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);

    useEffect ( () => {
      console.log('[Cockpit.js] useEffect');
      //Http request...
      // setTimeout( () => {
      //   alert('Saved data to cloud!');
      // }, 1000 );
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);
    // if passing empty array in useEffect 2nd argument, it will only run the alert
    // only in first time, and not when we change the data of array.
    // useEffect can use many time not only one time.

    useEffect ( () => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPerson){
        btnClass = classes.Red
    }
  
    if(props.personsLength <=2){
      assignedClasses.push( classes.red ); //add classes = ['red']
    }
    if(props.personsLength <=1){
      assignedClasses.push( classes.bold ); //add classes = ['red','bold']
    }


    return(
        
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>Toggle Person</button>
    </div>
    );
};

export default React.memo(cockpit);

//IMPORTANT
//useEffect basically runs after every render cycle. so the function you pass to useEffect does not run imediatly.