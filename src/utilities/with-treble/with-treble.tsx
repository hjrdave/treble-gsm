/*
  withTreble.jsx
  This is a higher order function that wraps a class component 
  so the component can get access to the treble Store.
*/

import React from 'react';
import useTreble from '../../hooks/treble-hook';
import Treble from '../../treble';
import {IWithTreble} from './interfaces';
import errorHandling from './error-handling';


export const withTreble: IWithTreble = (Component, options) => {
  
  //handle errors
  errorHandling(Component, options);

  //checks to see if passed component is a class component
  if (Component.prototype instanceof React.Component) {
    return function ClassComponent(props: any) {
      const store = useTreble()[0];
      const dispatch = useTreble()[1];
      const Store = useTreble()[2];
      const getTreble = [
        store,
        dispatch,
        Store
      ]
      return(
        <>
          <Component {...props} getTreble={getTreble} />
        </>
      );
    }
  }

  //returns functional by default
  return function FunctionalComponent(props: any) {
    return (
      <>
        {
          (options?.store !== undefined) ?
            <Treble store={options?.store}>
              <Component {...props}/>
            </Treble>
            : null
        }
      </>
    )
  }
}

export default withTreble;