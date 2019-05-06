import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
};

export default withClass;

//WrappedCompenent must capital first cuz it's a reference to a component