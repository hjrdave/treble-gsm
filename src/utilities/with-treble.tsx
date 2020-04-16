/*
  withTreble.jsx
  This is a higher order function that wraps a class component 
  so the component can get access to the treble Store.
*/

import React from 'react';
import useTreble from '../hooks/treble-hook';
import Treble from '../treble';

interface IWithTreble {
  (Component: any,
    options?: {
      reactClass?: boolean,
      store?:
        {
          data: {
              action: string,
              state: {
                  [key: string]: any
              },
              features?: {
                  persist?: boolean
              }
          }[],
          scope?: React.Context<never[]>
      }
    }): void
}
export const withTreble: IWithTreble = (Component, options) => {

  //returns a class component with getTreble props if reactClass is set to true
  if (options?.reactClass === true) {
    return function ClassComponent(props: any) {
      const store = useTreble()[0];
      const dispatch = useTreble()[1];
      const getTreble = [
        store,
        dispatch
      ]
      return <Component {...props} getTreble={getTreble} />;
    }
  }
  //returns functional component
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