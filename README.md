<div><img src='https://hjrdave.github.io/get-treble-gsm/static/bd3520df0df3356f8a53c4588b0b285c/f3583/banner-readme.png' /></div>
<p>&nbsp;</p>

> **WARNING**: This library is deprecated. It will receive maintenance updates but it is no longer in active development. I am working on a successor library as of now to replace.  

[![npm version](https://badge.fury.io/js/treble-gsm.svg)](https://badge.fury.io/js/treble-gsm) 
![example workflow](https://github.com/hjrdave/TrebleGSM/actions/workflows/npm-publish.yml/badge.svg)


## Treble Global State Management

Treble is a Hook-based global state management container and library for React.js apps. It is inspired by a [blog post](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) by [Luke Hall](https://medium.com/@luke.hall).  Treble's goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straight forward API.

### Getting Started

Install Treble

```
npm install treble-gsm
```
or
```
yarn add treble-gsm
```

#### Create Treble Store
Create a `Store.js` file in your app.  Example below.

```javascript
import { createStore } from 'treble-gsm';

const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Mewtwo' }
    },
    {
        action: 'updatePokemonGame',
        state: { pokemonGame: 'Pokemon Red' }
    }
],/* optional parameters */);

export default Store;
```


#### Treble Container Component

Import the `Treble` container component and `Store.js` into your App.js or index.js and wrap it around the components you wish to have access to your store. Pass the `Store` into the `Treble` `store` prop. Your app now has global state management!

```javascript
import  React  from  'react';
import  Treble  from  'treble-gsm';
import  Store  from  './_store';

const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}

export  default  App;
```


For more documentation visit the official website, [get-treble-gsm.com](https://hjrdave.github.io/get-treble-gsm).



