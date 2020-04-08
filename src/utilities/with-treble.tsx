/*
  withTreble.jsx
  This is a higher order function that wraps a class component 
  so the component can get access to the treble Store.
*/

import React from 'react';
import useTreble from '../hooks/treble-hook';

export default function withTreble(Component: any) {
  return function ClassComponent(props: any) {
    const store = useTreble()[0];
    const dispatch = useTreble()[1];
    const getTreble = [
      store,
      dispatch
    ]
    return <Component {...props} getTreble={getTreble}/>;
  }
}